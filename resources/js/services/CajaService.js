import axios from 'axios'
import NProgress from 'nprogress'

const apiCaja = axios.create({
  baseURL: '/api/v1/caja',
  timeout: 15000
})

apiCaja.interceptors.request.use(config => {
  NProgress.start()
  return config
})

apiCaja.interceptors.response.use(response => {
  NProgress.done()
  return response
})

export default {
  cajaTotal() {
    return apiCaja.get('/get')
  },
  ingresosRetiros() {
    return apiCaja.get('/ingresos_y_retiros')
  },
  nuevaOperacion(params) {
    return apiCaja.post('/operacion/store', params)
  }
}
