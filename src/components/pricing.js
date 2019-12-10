import React, { useState, useCallback } from "react"

import Slider from "./slider"
import Total from "./total"

const Pricing = () => {
  const [personas, setPersonas] = useState(1)
  const [horas, setHoras] = useState(1)

  const handlePersonas = useCallback(event => {
    setPersonas(event)
  }, [])
  const handleHoras = useCallback(event => {
    setHoras(event)
  }, [])

  const marksPersonas = {
    1: { label: "1 persona", style: {} },
    2: { label: "2 personas", style: {} },
    3: { label: "3 personas", style: {} },
    4: { label: "4 o más personas", style: {} },
  }
  const marksHoras = {
    1: "1 Hora",
    2: "5 Horas",
    3: "10 Horas",
  }

  return (
    <>
      <Slider
        title={"Personas"}
        marks={marksPersonas}
        onChange={handlePersonas}
      />
      <Slider title={"Horas"} marks={marksHoras} onChange={handleHoras} />
      <Total horas={horas} personas={personas} precio={15000} />
    </>
  )
}

export default Pricing
