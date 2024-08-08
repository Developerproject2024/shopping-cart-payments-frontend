import { useSelector } from 'react-redux'

import Product from './Product'

const SummaryPaymen = () => {
  const items = useSelector((state: any) => state.shopping.items)
  return <Product data={items} payment={false} />
}

export default SummaryPaymen
