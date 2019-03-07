import axios from 'axios'

const apiTickets = axios.create({
  baseURL: '/api/v1/tickets',
  timeout: 20000
})

export default {
  ticketInicial(id) {
    return apiTickets.get(`/get/${id}`)
  },
  createTicketFinal(ticket) {
    return apiTickets.post('/store/final', ticket)
  }
}
