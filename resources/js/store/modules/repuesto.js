/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */

import RepuestoService from '../../services/RepuestosService'

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
  repuestos: [],
  repuesto: {},
  count: 0
}

export const mutations = {
  SET_REPUESTOS(state, repuestos) {
    state.repuestos = repuestos
  },
  SET_REPUESTOS_COUNT(state, count) {
    state.count = count
  },
  SET_REPUESTO(state, repuesto) {
    state.repuesto = repuesto
  },
  CLEAR_REPUESTO(state) {
    state.repuesto = {}
  },
  ADD_REPUESTO(state, repuesto) {
    state.repuestos.push(repuesto)
  },
  DELETE_REPUESTO(state, id) {
    removeByAttr(state.repuestos, 'id', id)
  }
}

export const actions = {
  createRepuesto({ commit }, repuesto) {
    return RepuestoService.store(repuesto)
      .then(response => {
        commit('ADD_REPUESTO', response.data)
        return response.data
      })
      .catch(error => console.log(`Hubo un error: ${error.message}`))
  },
  fetchAll({ commit }) {
    return RepuestoService.index()
      .then(response => {
        commit('SET_REPUESTOS', response.data)
      })
      .catch(error => console.log(`Hubo un error: ${error.message}`))
  },
  fetchOne({ commit, getters }, id) {
    const repuesto = getters.getRepuestoById(id)

    if (repuesto) {
      commit('SET_REPUESTO', repuesto)
    } else {
      return RepuestoService.show(id)
        .then(response => {
          commit('SET_REPUESTO', response.data)
        })
        .catch(error => {
          console.log(`Hubo un problema: ${error.message}`)
        })
    }
    return 'ok'
  },
  clearRepuesto({ commit }) {
    commit('CLEAR_REPUESTO')
  },
  deleteRepuesto({ commit }, id) {
    return RepuestoService.delete(id)
      .then(() => {
        commit('DELETE_REPUESTO', id)
      })
      .catch(error => console.log(`Hubo un error: ${error.message}`))
  }
}

export const getters = {
  getRepuestoById: state => id => {
    return state.repuestos.find(repuesto => repuesto.id === id)
  },
  repuestosCount: state => {
    return state.repuestos.length
  }
}
