import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import { addItmensNav } from './redux/slice/itemsNavSlice'
import useAxios from './hooks/useAxios'
import { addItmensProducts } from './redux/slice/productsSlice'

function App() {
  const items = [
    { id: 1, name: 'Productos', href: 'Products' },
    { id: 2, name: 'Resumen', href: '/' },
    { id: 3, name: 'Carrito', href: '' }
  ]
  const dispatch = useDispatch()
  dispatch(addItmensNav(items))

  const { data } = useAxios('http://3.147.74.104:3000/products')
  dispatch(addItmensProducts(data))

  return (
    <Router>
      <div>
        <Home />
        <main className="p-4">
          <Routes>
            <Route path="/products" element={<Products />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
