import { useState, useEffect } from 'react'
import axiosInstance from '../utils/axiosInstance'

const useAxios = (
  url: string,
  method = 'GET',
  requestData = null,
  config = {}
) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      setError(null)

      try {
        const response = await axiosInstance({
          url,
          method,
          data: requestData,
          ...config
        })
        setData(response.data)
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message)
        }
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [url, method, requestData, config])

  return { data, loading, error }
}

export default useAxios
