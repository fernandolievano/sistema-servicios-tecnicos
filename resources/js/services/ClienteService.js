import axios from 'axios'
import NProgress from 'nprogress'

const apiCliente = axios.create({
  baseURL: '/api/v1/clientes',
  timeout: 20000
})

apiCliente.interceptors.request.use(config => {
  NProgress.start()
  return config
})

// before a response is returned stop nprogress
apiCliente.interceptors.response.use(response => {
  NProgress.done()
  return response
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
