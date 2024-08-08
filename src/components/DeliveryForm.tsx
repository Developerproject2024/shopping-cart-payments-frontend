import React, { useState } from 'react'
import useAxios from '../hooks/useAxios'

function DeliveryForm() {
  const [cities, setCities] = useState([])
  const [values, setValues] = useState({
    name: '',
    address_line_1: '',
    address_line_2: '',
    country: 'CO',
    city: 'Bogotá',
    phone_number: '573109999999',
    postal_code: '111111',
    region: ''
  })

  const { data, loading, error } = useAxios(
    'http://3.147.74.104:3000/country-cities'
  )

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  const handleDepartmentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDepartment = e.target.value
    const selectCity = data.countryCities.filter(
      (data) => data.country.countryName == selectedDepartment
    )

    setCities(selectCity || [])
    manejarCambio(e)
  }

  const hash: [] = []
  const country = data.countryCities.filter((o: any) =>
    hash[o.country.countryId] ? false : (hash[o.country.countryId] = true)
  )

  const manejarCambio = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    console.log('name', name, value)
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value
    }))
    console.log('value====', values)
    // manejoEroores()
  }

  return (
    <div className="max-w-4xl  bg-white rounded-lg">
      <h1 className="text-2xl font-semibold mb-6">Delivery Information</h1>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-2">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Nombre Completo
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={values.name}
              onChange={manejarCambio}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="mb-2">
            <label
              htmlFor="phone_number"
              className="block text-sm font-medium text-gray-700"
            >
              Telefono
            </label>
            <input
              type="tel"
              id="phone_number"
              name="phone_number"
              value={values.phone_number}
              onChange={manejarCambio}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="mb-2">
            <label
              htmlFor="address_line_1"
              className="block text-sm font-medium text-gray-700"
            >
              Direccion 1
            </label>
            <input
              type="text"
              id="address_line_1"
              name="address_line_1"
              value={values.address_line_1}
              onChange={manejarCambio}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="mb-2">
            <label
              htmlFor="address_line_2"
              className="block text-sm font-medium text-gray-700"
            >
              Direccion 2
            </label>
            <input
              type="text"
              id="address_line_2"
              name="address_line_2"
              value={values.address_line_2}
              onChange={manejarCambio}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="department"
              className="block text-sm font-medium text-gray-700"
            >
              Departamento
            </label>
            <select
              id="region"
              name="region"
              value={values.region}
              required
              onChange={handleDepartmentChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Select Department</option>
              {country.map(({ country }) => (
                <option key={country.countryId} value={country.countryName}>
                  {country.countryName}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-2">
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-700"
            >
              Ciudad
            </label>
            <select
              id="city"
              name="city"
              value={values.city}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Select City</option>
              {cities.map((city: any) => (
                <option key={city.cityId} value={city.cityId}>
                  {city.cityName}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-2">
            <label
              htmlFor="country"
              className="block text-sm font-medium text-gray-700"
            >
              Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              defaultValue="Colombia"
              disabled
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 sm:text-sm"
            />
          </div>

          <div className="mb-2">
            <label
              htmlFor="postal_code"
              className="block text-sm font-medium text-gray-700"
            >
              Codigo Postal
            </label>
            <input
              type="text"
              id="postal_code"
              name="postal_code"
              value={values.postal_code}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default DeliveryForm
