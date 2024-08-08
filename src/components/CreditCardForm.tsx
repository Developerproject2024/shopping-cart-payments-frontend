import { useState } from 'react'
import { TextInput, Label } from 'flowbite-react'
import { FaCcVisa, FaCcMastercard, FaQuestion } from 'react-icons/fa'
import { Tooltip } from 'flowbite-react'
interface FormErrors {
  cardNumber?: string
  cardName?: string
  cardExpirationDate?: string
  cardCvv?: string
}

interface FormValues {
  cardNumber: string
  cardName: string
  cardExpirationDate: string
  cardCvv: string
}

const CreditCardForm = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [cardType, setCardType] = useState('')

  const [values, setValues] = useState<FormValues>({
    cardNumber: '',
    cardName: '',
    cardExpirationDate: '',
    cardCvv: ''
  })

  const [errores, setErrores] = useState<FormErrors>({})

  const validateCardType = (number) => {
    number = number.replace(/\s+/g, '').replace(/-/g, '')

    const visaRegex = /^4\d{12,18}$/
    const mastercardRegex =
      /^(?:5[1-5]\d{2}|222[1-9]|22[3-9]\d|2[3-6]\d{2}|27[01]\d|2720)\d{12}$/

    if (visaRegex.test(number)) {
      return 'Visa'
    } else if (mastercardRegex.test(number)) {
      return 'MasterCard'
    } else {
      return 'Invalid'
    }
  }

  const handleChange = (e) => {
    const value = e.target.value
    setCardNumber(value)
    setCardType(validateCardType(value))
    manejarCambio(e)
  }

  const validarNumeroTarjeta = (cardNumber) => {
    return /^\d{16}$/.test(cardNumber) // 16 dígitos
  }

  // Actualizar el estado del formulario al cambiar un campo
  const manejarCambio = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    console.log('name', name, value)
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value
    }))
    console.log('value====', values)
    // manejoEroores()
  }
  const manejoEroores = () => {
    const errores: FormErrors = {}
    if (values.cardName === '') errores.cardName = 'Nombre de tarjeta inválido'
    if (!validarNumeroTarjeta(values.cardNumber))
      errores.cardNumber = 'Número de tarjeta inválido'
    if (!validarFecha(values.cardExpirationDate))
      errores.cardExpirationDate = 'Fecha de expiración inválida'
    if (!/^\d{3,3}$/.test(values.cardCvv))
      errores.cardCvv = 'Código de seguridad inválido'
    console.log('entroo', errores)
  }

  const validarFecha = (fecha: string): boolean => {
    const [mes, anio] = fecha.split('/')

    const mesNumero = parseInt(mes, 10)
    const anioNumero = parseInt(anio, 10)

    const hoy = new Date()

    const fechaTarjeta = new Date(anioNumero, mesNumero - 1)

    console.log(mesNumero >= 1 && mesNumero <= 12, fechaTarjeta >= hoy)
    return mesNumero >= 1 && mesNumero <= 12 && fechaTarjeta >= hoy
  }

  return (
    <div className="space-y-4">
      <form className="space-y-4">
        <div>
          <Label htmlFor="card-number" value="Numero de tarjeta" />
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={cardNumber}
            onChange={handleChange}
            // onChange={handleChange}
            placeholder="1234 5678 9012 3456"
            className={`mt-1 block w-full px-3 py-2 border ${errores.cardNumber ? 'border-red-500' : 'border-gray-300'} border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            pattern="\d*"
            maxLength={16}
          />
          <div className="mt-2 text-sm text-gray-600">
            {cardType === 'Visa' && (
              <FaCcVisa className="text-blue-600 text-3xl" />
            )}
            {cardType === 'MasterCard' && (
              <FaCcMastercard className="text-yellow-400 text-3xl" />
            )}
            {cardType === 'Invalid' && <p>Tipo de tarjeta: Inválida</p>}
          </div>
        </div>
        <div>
          <Label htmlFor="cardName" value="Nombre en la tarjeta" />
          <TextInput
            id="cardName"
            name="cardName"
            value={values.cardName}
            onChange={manejarCambio}
            type="text"
            placeholder="John Doe"
            required
            className={`${errores.cardNumber && cardNumber > '13' ? 'border-red-500' : 'border-gray-300'} `}
          />
        </div>
        <div className="flex gap-4">
          <div className="w-1/2">
            <Label htmlFor="cardExpirationDate" value="Fecha vencimiento" />
            <TextInput
              id="cardExpirationDate"
              name="cardExpirationDate"
              value={values.cardExpirationDate}
              onChange={manejarCambio}
              type="text"
              placeholder="MM/YY"
              required
              maxLength={7}
            />
          </div>
          <div className="w-1/2">
            <div className="flex flex-row gap-4">
              <Label htmlFor="cvv" value="CVV" />
              <Tooltip
                style="light"
                content="Es el número de 3 o 4 dígitos impreso en la parte trasera o delantera de tu tarjeta."
              >
                <FaQuestion className="text-yellow-600 mt-1 h-3" />
              </Tooltip>
            </div>
            <TextInput
              id="cardCvv"
              name="cardCvv"
              value={values.cardCvv}
              onChange={manejarCambio}
              type="text"
              placeholder="123"
              required
              maxLength={3}
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default CreditCardForm
