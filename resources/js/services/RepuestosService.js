import axios from 'axios'

const apiRepuestos = axios.create({
  baseURL: '/api/v1/repuestos',
  timeout: 20000
})

export default {
  index() {
    return apiRepuestos.get('/get')
  },
  show(id) {
    return apiRepuestos.get(`/get${id}`)
  },
  store(repuesto) {
    return apiRepuestos.post('/store', repuesto)
  },
  delete(id) {
    return apiRepuestos.delete(`/${id}`)
  }
}
