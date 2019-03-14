/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */

import TicketsService from '../../services/TicketsService'

export const namespaced = true

export const state = {
  ticketInicial: {},
  ticketFinal: {},
  ticketsFinales: [],
  details: {
    repuestos: [],
    servicios: []
  }
}

export const mutations = {
  ADD_TICKET_FINAL(state, ticket) {
    state.ticketsFinales.push(ticket)
  },
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
  },
  SET_DETAILS(state, details) {
    state.details = details
  }
}
export const actions = {
  fetchInicial({ commit }, id) {
    return TicketsService.ticketInicial(id).then(response => {
      commit('SET_TICKET_INICIAL', response.data)
      return response.data
    })
  },
  fetchFinal({ commit }, id) {
    return TicketsService.ticketFinal(id).then(response => {
      commit('SET_TICKET_FINAL', response.data)
      return response.data
    })
  },
  createFinal({ commit }, ticket) {
    return TicketsService.createTicketFinal(ticket).then(response => {
      commit('SET_TICKET_FINAL', response.data)
    })
  },
  clearInicial({ commit }) {
    commit('CLEAR_TICKET_INICIAL')
  },
  clearFinal({ commit }) {
    commit('CLEAR_TICKET_FINAL')
  },
  sendDetails({ commit }, details) {
    commit('SET_DETAILS', details)
  }
}
