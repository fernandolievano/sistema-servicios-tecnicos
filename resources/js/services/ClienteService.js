import axios from 'axios'

const apiCliente = axios.create({
  baseURL: '/api/v1/clientes',
  timeout: 20000
})

export default {
  index() {
    return apiCliente.get('/get')
  },
  show(id) {
    return apiCliente.get(`/get/${id}`)
  },
  store(cliente) {
    return apiCliente.post('/store', cliente)
  },
  update(id, cliente) {
    return apiCliente.put(`/update/${id}`, cliente)
  },
  delete(id) {
    return apiCliente.delete(`/delete/${id}`)
  }
}
