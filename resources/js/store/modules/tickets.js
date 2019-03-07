/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */

import TicketsService from '../../services/TicketsService'

export const namespaced = true

export const state = {
  ticketInicial: {},
  ticketFinal: {}
}

export const mutations = {
  SET_TICKET_INICIAL(state, ticket) {
    state.ticketInicial = ticket
  },
  SET_TICKET_FINAL(state, ticket) {
    state.ticketFinal = ticket
  },
  CLEAR_TICKET_INICIAL(state) {
    state.ticketInicial = {}
  },
  CLEAR_TICKET_FINAL(state) {
    state.ticketFinal = {}
  }
}
export const actions = {
  fetchInicial({ commit }, id) {
    return TicketsService.ticketInicial(id).then(response => {
      commit('SET_TICKET_INICIAL', response.data)
    })
    // .catch(error => {
    //   console.log(`Hubo un problema: ${error.message}`)
    // })
  },
  createFinal({ commit }, ticket) {
    return TicketsService.createTicketFinal(ticket).then(response => {
      commit('SET_TICKET_FINAL', response.data)
      console.log(response.data)
    })
  },
  clearInicial({ commit }) {
    commit('CLEAR_TICKET_INICIAL')
  },
  clearFinal({ commit }) {
    commit('CLEAR_TICKET_FINAL')
  }
}
