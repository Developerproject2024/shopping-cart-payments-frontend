import { Dropdown, Navbar } from 'flowbite-react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export interface Item {
  id: number
  name: string
  href: string
}

export interface Item1 {
  itemsNav: {
    items: Item[]
  }
}

const Navigation = () => {
  const items = useSelector((state: Item1) => state.itemsNav.items)
  return (
    <Navbar fluid rounded className="m-20 md:w-96">
      <Navbar.Brand>
        <span className="text-center self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Joyeria Cali
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
        {items.map((item: Item) => (
          <Navbar.Link key={item.id} as={Link} to={item.href}>
            {item.name}
          </Navbar.Link>
        ))}
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation
