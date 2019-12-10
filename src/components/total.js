import React from "react"

const Total = ({ horas, personas, precio }) => {
  const minusPercent = (n, p) => {
    return n - n * (p / 100)
  }
  return (
    <>
      <p>
        {`El valor de ${
          horas === 1 ? "1 hora" : horas * 5 - 5 + " horas"
        } para ${personas === 1 ? "1 persona" : personas + " personas"} es de ${
          personas !== 1 ? minusPercent(precio, 30) : precio
        } por persona.`}
      </p>
      <p>
        {`Total: ${
          personas === 1
            ? precio * horas
            : minusPercent(precio, 30) * personas * horas
        }`}
      </p>
    </>
  )
}

export default Total
