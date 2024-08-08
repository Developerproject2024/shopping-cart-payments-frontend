import { useEffect } from 'react'
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
  useEffect(() => {
    console.log('entroooooooooo')
    // fetch('https://jsonplaceholder.typicode.com/users/1')
    //   .then((res) => res.json())
    //   .then((data) => dispatch(addItmensNav(data)))
    //   .catch((err) => console.log(err))
  }, [])

  const { data } = useAxios('http://localhost:3000/products')
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
