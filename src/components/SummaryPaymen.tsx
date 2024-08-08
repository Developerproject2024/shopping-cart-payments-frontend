import { useSelector } from 'react-redux'

import Product from './Product'
import { IProductsStateShopping } from '../interfaces/products.interface'

const SummaryPaymen = () => {
  const items = useSelector(
    (state: IProductsStateShopping) => state.shopping.items
  )
  return <Product data={items} payment={false} />
}

export default SummaryPaymen
