const validateCardNumberFormat = (cardNumber: string) => {
  cardNumber = cardNumber.replace(/\s+/g, '').replace(/-/g, '')
  const lengthValid = cardNumber.length >= 13 && cardNumber.length <= 19
  const digitsOnly = /^\d+$/.test(cardNumber)
  return lengthValid && digitsOnly
}

export default validateCardNumberFormat

/*
aplicar
function validateCreditCard(cardNumber) {
  return validateCardNumberFormat(cardNumber) && validateCardNumberLuhn(cardNumber);
}

// Ejemplo de uso
const cardNumber = '4111 1111 1111 1111'; // Número de tarjeta de ejemplo

if (validateCreditCard(cardNumber)) {
  console.log('Número de tarjeta válido');
} else {
  console.log('Número de tarjeta inválido');
}

*/
