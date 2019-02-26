import axios from 'axios'

const apiEquipos = axios.create({
  baseURL: '/api/v1/equipos',
  timeout: 20000
})

export default {
  index() {
    return apiEquipos.get('/get')
  },
  show(id) {
    return apiEquipos.get(`/get/${id}`)
  },
  store(equipo) {
    return apiEquipos.post('/store', equipo)
  },
  update(id, equipo) {
    return apiEquipos.put(`/update/${id}`, equipo)
  },
  delete(id) {
    return apiEquipos.delete(`/${id}`)
  }
}
