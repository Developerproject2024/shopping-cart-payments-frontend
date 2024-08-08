import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000'
  // Puedes agregar otros ajustes aquí
})

export default axiosInstance
