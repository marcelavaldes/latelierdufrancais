import React, { useState, useCallback } from "react"

import Radio from "./radio"
import Slider from "./slider"
import Total from "./total"

const Pricing = () => {
  const [modo, setModo] = useState(1)
  const [personas, setPersonas] = useState(1)
  const [horas, setHoras] = useState(1)
  const [email, setEmail] = useState("")

  const handleModo = useCallback(event => {
    setModo(event.target.value)
  }, [])

  const handlePersonas = useCallback(event => {
    setPersonas(event)
  }, [])

  const handleHoras = useCallback(event => {
    setHoras(event)
  }, [])

  const handleEmail = useCallback(event => {
    setEmail(event.target.value)
  }, [])

  const handleSubmit = async () => {
    try {
      let response = await fetch("/.netlify/functions/flow/create_order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          modo,
          personas,
          horas,
          email,
        }),
      })
      let { redirect } = await response.json()
      if (redirect) {
        window.location.assign(redirect)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <Radio title={"Modalidades"} onChange={handleModo} modo={modo} />
      <Slider
        title={"Personas"}
        description={"Elige la cantidad de personas interesadas:"}
        marks={{
          1: { label: "1 persona", style: {} },
          2: { label: "2 personas", style: {} },
          3: { label: "3 personas", style: {} },
          4: { label: "4 o más personas", style: {} },
        }}
        onChange={handlePersonas}
      />
      <Slider
        title={"Horas"}
        description={"Escoge la cantidad de horas que se requieran:"}
        marks={{
          1: { label: "1 Hora", style: {} },
          2: { label: "5 Horas", style: {} },
          3: { label: "10 Horas", style: {} },
        }}
        onChange={handleHoras}
      />
      <input value={email} onChange={handleEmail} type={"text"} />
      <Total horas={horas} personas={personas} precio={modo} />
      <button onClick={handleSubmit}>:D</button>
    </>
  )
}

export default Pricing
