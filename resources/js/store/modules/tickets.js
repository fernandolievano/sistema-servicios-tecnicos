/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */

import TicketsService from '../../services/TicketsService'

export const namespaced = true

export const state = {
  ticketInicial: {}
}

export const mutations = {
  SET_TICKET_INICIAL(state, ticket) {
    state.ticketInicial = ticket
  },
  CLEAR_TICKET_INICIAL(state) {
    state.ticketInicial = {}
  }
}
export const actions = {
  fetchInicial({ commit }, id) {
    return TicketsService.ticketInicial(id)
      .then(response => {
        commit('SET_TICKET_INICIAL', response.data)
      })
      .catch(error => {
        console.log(`Hubo un problema: ${error.message}`)
      })
  },
  clearInicial({ commit }) {
    commit('CLEAR_TICKET_INICIAL')
  }
}
