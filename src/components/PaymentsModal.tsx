import { useState } from 'react'
import CreditCardForm from './CreditCardForm'
import { Button, Modal } from 'flowbite-react'
import DeliveryForm from './DeliveryForm'
import SummaryPaymen from './SummaryPaymen'

const PaymentsMododal = ({ onClose, isOpen }) => {
  const [isSummary, setSummary] = useState(false)
  const closeModal = () => {
    onClose(false)
    setSummary(false)
  }
  const summary = () => setSummary(true)
  return (
    <Modal
      show={isOpen}
      onClose={closeModal}
      className="bg-gray-200 bg-opacity-50"
    >
      <Modal.Header>
        {!isSummary ? 'Informacion de tarjeta de credito' : 'Resumen de Compra'}
      </Modal.Header>
      <Modal.Body className="overflow-y-auto max-h-96 p-4">
        {!isSummary ? (
          <>
            <CreditCardForm />
            <DeliveryForm />
          </>
        ) : (
          <SummaryPaymen />
        )}
      </Modal.Body>
      <Modal.Footer className="flex justify-center">
        <Button onClick={closeModal} className="bg-red-500" color="primary">
          Cancelar
        </Button>
        {!isSummary ? (
          <Button color="primary" className="bg-green-400" onClick={summary}>
            Siguiente
          </Button>
        ) : (
          <Button color="primary" className="bg-green-400">
            Pagar
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  )
}

export default PaymentsMododal
