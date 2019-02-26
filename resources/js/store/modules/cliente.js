/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */

import ClienteService from '../../services/ClienteService'

// eslint-disable-next-line func-names
const removeByAttr = function(arr, attr, value) {
  let i = arr.length
  // eslint-disable-next-line no-plusplus
  while (i--) {
    // eslint-disable-next-line no-prototype-builtins
    if (arr[i] && arr[i].hasOwnProperty(attr) && (arguments.length > 2 && arr[i][attr] === value)) {
      arr.splice(i, 1)
    }
  }
  return arr
}

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
  },
  DELETE_CLIENTE(state, id) {
    removeByAttr(state.clientes, 'id', id)
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
  fetchAll({ commit }) {
    return ClienteService.index()
      .then(response => {
        commit('SET_CLIENTES', response.data)
      })
      .catch(error => {
        console.log(`Hubo un problema: ${error.message}`)
      })
  },
  fetchOne({ commit, getters }, id) {
    const cliente = getters.getClienteById(id)

    if (cliente) {
      commit('SET_CLIENTE', cliente)
      return cliente
    }
    return ClienteService.show(id)
      .then(response => {
        const cliente = response.data
        commit('SET_CLIENTE', cliente)
        return cliente
      })
      .catch(error => {
        console.log(`Hubo un problema: ${error.message}`)
      })
  },
  deleteCliente({ commit }, id) {
    return ClienteService.delete(id)
      .then(() => {
        commit('DELETE_CLIENTE', id)
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
