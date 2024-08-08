import { useState } from 'react'

interface QuantityProps {
  stock: number
  onQuantity: (quantity: number) => void
}

const Quantity: React.FC<QuantityProps> = ({ stock, OnQuantity }) => {
  const initialQuantity: number = 1
  const min = 1
  const [max, setMax] = useState(stock)
  const [quantity, setQuantity] = useState(initialQuantity)

  const increase = (number: number) => {
    setMax(number)
    setQuantity((prev: number) => (prev < max ? prev + 1 : max))
    OnQuantity(quantity + 1)
  }

  const decrease = () => {
    setQuantity((prev: number) => (prev > min ? prev - 1 : min))
    OnQuantity(quantity - 1)
  }
  return (
    <div className="flex items-center justify-center space-x-4 p-3">
      <button
        onClick={decrease}
        className="bg-gray-200 text-gray-600 px-4 py-2 rounded-md hover:bg-gray-300"
        disabled={quantity <= min}
      >
        -
      </button>
      <span className="text-lg font-semibold">{quantity}</span>
      <button
        onClick={() => increase(stock)}
        className="bg-gray-200 text-gray-600 px-4 py-2 rounded-md hover:bg-gray-300"
        disabled={quantity >= max}
      >
        +
      </button>
    </div>
  )
}

export default Quantity
