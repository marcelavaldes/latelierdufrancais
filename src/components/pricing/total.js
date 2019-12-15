import React from "react"
import getTotal from "./getTotal"

const Total = ({ horas, personas, precio }) => {
  const total = getTotal({ personas, horas, precio })
  return <pre>{total.resumen}</pre>
}

export default Total
