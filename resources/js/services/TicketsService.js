import axios from 'axios'

const apiTickets = axios.create({
  baseURL: '/api/v1/tickets',
  timeout: 20000
})

export default {
  ticketInicial(id) {
    return apiTickets.get(`/get/${id}`)
  },
  ticketFinal(id) {
    return apiTickets.get(`/get/final/${id}`)
  },
  createTicketFinal(params) {
    return apiTickets.post('/store/final', params)
  }
}
