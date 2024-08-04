import React from 'react'
import CreditCardModal from '../components/CreditCardModal'

const Products = () => {
  const products = [
    {
      name: 'Sample Product',
      description: 'This is a brief description of the product.',
      price: '29.99',
      image: 'https://via.placeholder.com/400x300' // Remplacez par l'URL de votre image
    },
    {
      name: 'Sample Product',
      description: 'This is a brief description of the product.',
      price: '29.99',
      image: 'https://via.placeholder.com/400x300' // Remplacez par l'URL de votre image
    },
    {
      name: 'Sample Product',
      description: 'This is a brief description of the product.',
      price: '29.99',
      image: 'https://via.placeholder.com/400x300' // Remplacez par l'URL de votre image
    },
    {
      name: 'Sample Product',
      description: 'This is a brief description of the product.',
      price: '29.99',
      image: 'https://via.placeholder.com/400x300' // Remplacez par l'URL de votre image
    },
    {
      name: 'Sample Product',
      description: 'This is a brief description of the product.',
      price: '29.99',
      image: 'https://via.placeholder.com/400x300' // Remplacez par l'URL de votre image
    },
    {
      name: 'Sample Product',
      description: 'This is a brief description of the product.',
      price: '29.99',
      image: 'https://via.placeholder.com/400x300' // Remplacez par l'URL de votre image
    },
    {
      name: 'Sample Product',
      description: 'This is a brief description of the product.',
      price: '29.99',
      image: 'https://via.placeholder.com/400x300' // Remplacez par l'URL de votre image
    },
    {
      name: 'Sample Product',
      description: 'This is a brief description of the product.',
      price: '29.99',
      image: 'https://via.placeholder.com/400x300' // Remplacez par l'URL de votre image
    },
    {
      name: 'Sample Product',
      description: 'This is a brief description of the product.',
      price: '29.99',
      image: 'https://via.placeholder.com/400x300' // Remplacez par l'URL de votre image
    }
  ]
  return (
    <div className="flex flex-wrap items-end justify-end gap-4 p-4">
      {products.map((product) => (
        <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-sm mx-auto">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800">
              {product.name}
            </h2>
            <p className="text-gray-600 mt-2">{product.description}</p>
            <div className="mt-4 flex flex-col justify-between items-center">
              <span className="text-lg font-bold text-gray-900">
                ${product.price}
              </span>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <CreditCardModal></CreditCardModal>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Products
