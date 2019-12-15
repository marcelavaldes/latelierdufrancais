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
  const handleClick = async () => {
    try {
      let response = await fetch("/.netlify/functions/flow/create_order", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          modo: modo,
          personas: personas,
          horas: horas,
          email: email,
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
        description={"<b>Ahorra dinero</b> aprendiendo junto a familiares, amistades o con quien tu prefieras."}
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
        description={"Mientras más horas adquieras, <b>obtienes descuentos</b>."}
        marks={{
          1: { label: "1 Hora", style: {} },
          2: { label: "5 Horas", style: {} },
          3: { label: "10 Horas", style: {} },
        }}
        onChange={handleHoras}
      />
      <input
        value={email}
        onChange={e => setEmail(e.target.value)}
        type={"text"}
      />
      <Total horas={horas} personas={personas} precio={modo} />
      <button onClick={handleClick}>:D</button>
    </>
  )
}

export default Pricing
