import { Dropdown, Navbar } from 'flowbite-react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  const items = [
    { id: 1, name: 'Productos', href: 'Products' },
    { id: 2, name: 'Resumen', href: '/' },
    { id: 3, name: 'Carrito', href: '' }
  ]
  return (
    <Navbar fluid rounded className="m-20 md:w-96">
      <Navbar.Brand>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Productos
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown arrowIcon={false} inline label></Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className="relative ">
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        {items.map((item) => (
          <Navbar.Link key={item.id} as={Link} to={item.href}>
            {item.name}
          </Navbar.Link>
        ))}
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation
