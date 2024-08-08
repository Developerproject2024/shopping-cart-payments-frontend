import { useDispatch } from 'react-redux'
import formatToCOP from '../utils/formatToCOP'
import { Button } from 'flowbite-react'
import PaymentsMododal from './PaymentsModal'
import { addItmensShopping } from '../redux/slice/shoppingSlice'
import { useState } from 'react'
import Quantity from './Quantity'
import { IProduct, IProductShopping } from '../interfaces/products.interface'

const Product: React.FC<IProductShopping> = ({ data, payment }) => {
  const initialQuantity: number = 1
  const [quantity, setQuantity] = useState(initialQuantity)
  const dispatch = useDispatch()

  const handleButtonClick = (product: IProduct) => {
    dispatch(addItmensShopping(product))
    openModal()
  }

  const [isModalOpen, setIsModalOpen] = useState(false)
  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const onQuantity = (number: number) => {
    setQuantity(number)
  }

  return (
    <div className="p-4">
      <div
        className="bg-white shadow-md rounded-lg overflow-hidden max-w-sm mx-auto"
        key={data.id}
      >
        <img
          src={data.image}
          alt={data.name}
          className="w-full h-32 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800">{data.name}</h2>
          <h5 className=" font-semibold text-gray-800">
            {data.stocks[0].quantity} Disponibles
          </h5>

          {!payment && (
            <Quantity stock={data.stocks[0].quantity} OnQuantity={onQuantity} />
          )}
          <div className="mt-4 flex flex-col justify-between items-center">
            <span className="text-lg font-bold text-gray-900">
              {formatToCOP(parseInt(data.price) * quantity, 0)}
            </span>
          </div>

          {payment && (
            <Button
              onClick={() => handleButtonClick(data)}
              className="bg-blue-500 text-white w-full px-4 py-2 rounded-lg hover:bg-blue-700  focus:outline-none focus:ring-2 focus:ring-blue-900 transition-colors duration-300"
            >
              Pagar con tarjeta de crédito
            </Button>
          )}
          <PaymentsMododal
            isOpen={isModalOpen}
            onClose={closeModal}
          ></PaymentsMododal>
        </div>
      </div>
    </div>
  )
}

export default Product
