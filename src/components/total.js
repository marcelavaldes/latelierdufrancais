import React from "react"
import getTotal from "./getTotal"

const Total = ({ horas, personas, precio }) => {
  return <pre>{getTotal({ personas, horas, precio })}</pre>
}

export default Total
