import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://api.example.com'
  // Puedes agregar otros ajustes aquí
})

export default axiosInstance
