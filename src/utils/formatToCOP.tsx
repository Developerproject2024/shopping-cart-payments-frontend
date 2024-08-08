const formatToCOP = (amount: number, decimalPlaces = 0) => {
  if (isNaN(amount)) {
    throw new Error('El valor proporcionado no es un número.')
  }

  const formatter = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces
  })

  return formatter.format(amount)
}

export default formatToCOP
