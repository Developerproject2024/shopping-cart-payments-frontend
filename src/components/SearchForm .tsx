import { useState } from 'react'
import { Button, TextInput } from 'flowbite-react'

const SearchForm = () => {
  const [query, setQuery] = useState('')

  // const handleSubmit = (event: ChangeEvent<HTMLInputElement>) => {
  //   event.preventDefault()
  //   // Maneja la búsqueda aquí (por ejemplo, hacer una solicitud a una API)
  //   console.log('Buscando:', query)
  // }

  return (
    <form
      // onSubmit={handleSubmit}
      className="flex space-x-2 justify-end items-center "
    >
      <TextInput
        id="search"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar..."
        className="w-96"
      />
      <Button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white"
      >
        Buscar
      </Button>
    </form>
  )
}

export default SearchForm
