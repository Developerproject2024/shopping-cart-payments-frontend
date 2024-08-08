import { useSelector } from 'react-redux'
import SearchForm from '../components/SearchForm '
import { IProduct, IProductsState } from '../interfaces/products.interface'
import Product from '../components/Product'

const Products = () => {
  const items = useSelector((state: IProductsState) => state.products.items)

  return (
    <>
      <SearchForm />
      <div className="flex flex-wrap items-center justify-center gap-4 p-4 ">
        {items.products.map((product: IProduct) => (
          <Product key={product.id} data={product} payment={true} />
        ))}
      </div>
    </>
  )
}

export default Products
