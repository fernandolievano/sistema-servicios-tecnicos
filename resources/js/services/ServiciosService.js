import axios from 'axios'

const apiServicios = axios.create({
  baseURL: '/api/v1/servicios',
  timeout: 20000
})

export default {
  index() {
    return apiServicios.get('/get')
  },
  show(id) {
    return apiServicios.get(`/get/${id}`)
  },
  store(servicio) {
    return apiServicios.post('/store', servicio)
  },
  update(id, servicio) {
    return apiServicios.put(`/update/${id}`, servicio)
  },
  delete(id) {
    return apiServicios.delete(`/${id}`)
  }
}
