import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'

const useAxios = (
  url: string,
  options = {
    headers: {
      'api-key': '04204dcf-eaae-4437-b189-c5ec3f2b2153'
    }
  }
) => {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Usa useCallback para evitar recrear opciones en cada render
  const memoizedOptions = useCallback(() => options, [options])

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await axios(url, memoizedOptions())
        setData(response.data)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [url, memoizedOptions]) // Usa memoizedOptions en las dependencias

  return { data, loading, error }
}

export default useAxios
