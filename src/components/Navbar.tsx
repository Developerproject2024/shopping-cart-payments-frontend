import { Dropdown, Navbar } from 'flowbite-react'

const Navigation = () => {
  const items = [
    { id: 1, name: 'Productos', href: '' },
    { id: 2, name: 'Resumen', href: '' },
    { id: 3, name: 'Carrito', href: '' }
  ]
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Productos
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown arrowIcon={false} inline label></Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        {items.map((item) => (
          <Navbar.Link key={item.id}>{item.name}</Navbar.Link>
        ))}
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation
