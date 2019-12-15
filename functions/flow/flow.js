const express = require("express")
const serverless = require("serverless-http")
const FlowApi = require("@piducancore/flowcl-node-api-client")
const url = require("url")

const getTotal = require("./getTotal")

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const config = {
  apiKey: process.env.FLOW_API_KEY,
  secretKey: process.env.FLOW_SECRET_KEY,
  apiURL: process.env.FLOW_API_URL,
  baseURL: process.env.FLOW_BASE_URL,
  // baseURL: "http://localhost:8888/.netlify/functions/flow",
}

app.post("/.netlify/functions/flow/create_order", async (req, res) => {
  try {
    const { modo, personas, horas, email } = req.body

    const amount = getTotal({ personas, horas, precio: modo })
    const optional = {
      rut: "9999999-9",
      otroDato: "otroDato",
      email: email,
      subject: amount.resumen,
      amount: amount.valorTotal,
    }
    // Prepara el arreglo de datos
    const params = {
      commerceOrder: Math.floor(Math.random() * (2000 - 1100 + 1)) + 1100,
      currency: "CLP",
      paymentMethod: 9,
      urlConfirmation: config.baseURL + "/payment_confirm",
      urlReturn: config.baseURL + "/result",
      ...optional,
    }
    // Define el metodo a usar
    const serviceName = "payment/create"

    // Instancia la clase FlowApi
    const flowApi = new FlowApi(config)
    // Ejecuta el servicio

    let response = await flowApi.send(serviceName, params, "POST")
    console.log(response)

    //Prepara url para redireccionar el browser del pagador
    redirect = response.url + "?token=" + response.token
    res.json({
      redirect,
    })
  } catch (error) {
    res.json({ error: error.message })
  }
})

app.post("/.netlify/functions/flow/payment_confirm", async (req, res) => {
  try {
    console.log(req.body)
    let params = {
      token: req.body.token,
    }
    let serviceName = "payment/getStatus"
    const flowApi = new FlowApi(config)
    let response = await flowApi.send(serviceName, params, "GET")
    //Actualiza los datos en su sistema
    console.log(response)
    res.json(response)
  } catch (error) {
    res.json({ error })
  }
})

app.post("/.netlify/functions/flow/result", async (req, res) => {
  try {
    console.log(req.body)
    let params = {
      token: req.body.token,
    }
    let serviceName = "payment/getStatus"
    const flowApi = new FlowApi(config)
    let response = await flowApi.send(serviceName, params, "GET")
    //Actualiza los datos en su sistema
    res.redirect(
      url.format({
        pathname: "/",
        query: { status: response.status },
      })
    )
    // res.json(response)
  } catch (error) {
    res.json({ error })
  }
})

// app.post("/.netlify/functions/flow/create_email", async (req, res) => {
//   //Prepara los parámetros
//   const params = {
//     commerceOrder: Math.floor(Math.random() * (2000 - 1100 + 1)) + 1100,
//     subject: "pago prueba cobro Email",
//     currency: "CLP",
//     amount: 2000,
//     email: "efuentealba@json.cl",
//     paymentMethod: 9,
//     urlConfirmation: config.baseURL + "/payment_confirm",
//     urlReturn: config.baseURL + "/result",
//     forward_days_after: 1,
//     forward_times: 2,
//   }
//   const serviceName = "payment/createEmail"
//   try {
//     const flowApi = new FlowApi(config)
//
//     let response = await flowApi.send(serviceName, params, "POST")
//
//     res.json({
//       response,
//     })
//   } catch (error) {
//     console.log(error)
//     res.json({ error: error })
//   }
// })

module.exports.handler = serverless(app)
