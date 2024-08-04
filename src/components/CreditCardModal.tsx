import React, { useState } from 'react'
import { Modal, Button, TextInput, Label } from 'flowbite-react'
import { FaCcVisa, FaCcMastercard, FaQuestion } from 'react-icons/fa'
import { Tooltip } from 'flowbite-react'

const CreditCardModal = () => {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <div>
      <Button onClick={openModal}>Pagar con tarjeta de crédito</Button>
      <Modal show={isOpen} onClose={closeModal}>
        <Modal.Header>Informacion de tarjeta de credito</Modal.Header>
        <Modal.Body>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <FaCcVisa className="text-blue-600 text-3xl" />
              <FaCcMastercard className="text-yellow-600 text-3xl" />
            </div>
            <form className="space-y-4">
              <div>
                <Label htmlFor="card-number" value="Numero de tarjeta" />
                <TextInput
                  id="card-number"
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  required
                />
              </div>
              <div>
                <Label htmlFor="card-name" value="Nombre en la tarjeta" />
                <TextInput
                  id="card-name"
                  type="text"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="flex gap-4">
                <div className="w-1/2">
                  <Label htmlFor="expiry-date" value="Fecha vencimiento" />
                  <TextInput
                    id="expiry-date"
                    type="text"
                    placeholder="MM/YY"
                    required
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
                  <TextInput id="cvv" type="text" placeholder="123" required />
                </div>
              </div>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer className="flex justify-center">
          <Button onClick={closeModal} className="bg-red-500" color="primary">
            Cancelar
          </Button>
          <Button color="primary" className="bg-green-400">
            Pagar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default CreditCardModal
