const discount = (n, p) => {
  return n - n * (p / 100)
}

const getTotal = ({ personas, horas, precio }) => {
  if (personas === 1) {
    if (horas === 1) {
      const descuento = discount(precio, 0)
      const valorTotal = descuento * horas * personas
      return {
        descuento,
        valorTotal,
        horas,
        resumen: `Valor hora: ${descuento} \nTotal: ${valorTotal} por ${horas} hora.`,
      }
    } else if (horas === 2) {
      horas = 5
      const descuento = discount(precio, 30)
      const valorTotal = descuento * horas * personas
      return {
        descuento,
        valorTotal,
        horas,
        resumen: `Valor hora: ${descuento} \nTotal: ${valorTotal} por ${horas} horas.`,
      }
    } else if (horas === 3) {
      horas = 10
      const descuento = discount(precio, 35)
      const valorTotal = descuento * horas * personas
      return {
        descuento,
        valorTotal,
        horas,
        resumen: `Valor hora: ${descuento} \nTotal: ${valorTotal} por ${horas} horas.`,
      }
    }
  } else if (personas === 2) {
    precio = discount(precio, 30)
    if (horas === 1) {
      const descuento = discount(precio, 0)
      const valorTotal = descuento * horas * personas
      return {
        descuento,
        valorTotal,
        horas,
        resumen: `Valor hora: ${descuento} \nTotal: ${valorTotal} por ${horas} hora.`,
      }
    } else if (horas === 2) {
      horas = 5
      const descuento = discount(precio, 30)
      const valorTotal = descuento * horas * personas
      return {
        descuento,
        valorTotal,
        horas,
        resumen: `Valor hora: ${descuento} \nTotal: ${valorTotal} por ${horas} horas.`,
      }
    } else if (horas === 3) {
      horas = 10
      const descuento = discount(precio, 35)
      const valorTotal = descuento * horas * personas
      return {
        descuento,
        valorTotal,
        horas,
        resumen: `Valor hora: ${descuento} \nTotal: ${valorTotal} por ${horas} horas.`,
      }
    }
  } else if (personas === 3) {
    precio = discount(precio, 35)
    if (horas === 1) {
      const descuento = discount(precio, 0)
      const valorTotal = descuento * horas * personas
      return {
        descuento,
        valorTotal,
        horas,
        resumen: `Valor hora: ${descuento} \nTotal: ${valorTotal} por ${horas} hora.`,
      }
    } else if (horas === 2) {
      horas = 5
      const descuento = discount(precio, 30)
      const valorTotal = descuento * horas * personas
      return {
        descuento,
        valorTotal,
        horas,
        resumen: `Valor hora: ${descuento} \nTotal: ${valorTotal} por ${horas} horas.`,
      }
    } else if (horas === 3) {
      horas = 10
      const descuento = discount(precio, 35)
      const valorTotal = descuento * horas * personas
      return {
        descuento,
        valorTotal,
        horas,
        resumen: `Valor hora: ${descuento} \nTotal: ${valorTotal} por ${horas} horas.`,
      }
    }
  } else {
    return "hablemos luego"
  }
}

module.exports = getTotal
