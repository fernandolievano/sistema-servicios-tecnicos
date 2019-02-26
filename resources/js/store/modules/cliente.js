/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */

import ClienteService from '../../services/ClienteService'

export const namespaced = true

export const state = {
  clientes: [],
  cliente: {},
  count: 0
}

export const mutations = {
  SET_CLIENTES(state, clientes) {
    state.clientes = clientes
  },
  SET_CLIENTE(state, cliente) {
    state.cliente = cliente
  },
  SET_CLIENTES_COUNT(state, count) {
    state.count = count
  },
  ADD_CLIENTE(state, cliente) {
    state.clientes.push(cliente)
  }
}

export const actions = {
  createCliente({ commit }, cliente) {
    return ClienteService.store(cliente)
      .then(response => {
        commit('ADD_CLIENTE', response.data)
      })
      .catch(error => console.log(`Hubo un error: ${error.message}`))
  },
  fetchClientes({ commit }) {
    return ClienteService.index()
      .then(response => {
        commit('SET_CLIENTES', response.data)
      })
      .catch(error => {
        console.log(`Hubo un problema: ${error.message}`)
      })
  },
  fetchCliente({ commit, getters }, id) {
    let cliente = getters.getClienteById(id)

    if (cliente) {
      commit('SET_CLIENTE', cliente)
      return cliente
    }
    return ClienteService.show(id)
      .then(response => {
        cliente = response.data
        commit('SET_CLIENTE', cliente)
        return cliente
      })
      .catch(error => {
        console.log(`Hubo un problema: ${error.message}`)
      })
  }
}

export const getters = {
  getClienteById: state => id => {
    return state.clientes.find(cliente => cliente.id === id)
  }
}
