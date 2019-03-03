/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */

import EquiposService from '../../services/EquiposService'

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
  equipos: [],
  equiposDeCliente: [],
  equipo: {}
}

export const mutations = {
  SET_EQUIPOS(state, equipos) {
    state.equipos = equipos
  },
  SET_EQUIPOS_DE_CLIENTE(state, equipos) {
    state.equiposDeCliente = equipos
  },
  SET_EQUIPOS_COUNT(state, count) {
    state.count = count
  },
  ADD_EQUIPO(state, equipo) {
    state.equipos.push(equipo)
  },
  DELETE_EQUIPO(state, id) {
    removeByAttr(state.equipos, 'id', id)
  },
  CLEAR_EQUIPOS_DE_CLIENTE(state) {
    state.equiposDeCliente = []
  }
}

export const actions = {
  fetchAll({ commit }) {
    return EquiposService.index().then(response => {
      commit('SET_EQUIPOS', response.data)
    })
    // .catch(error => {
    //   console.log(`Hubo un problema: ${error.message}`)
    // })
  },
  fetchOne({ commit, getters }, id) {
    const equipo = getters.getEquipoById(id)

    if (equipo) {
      commit('SET_EQUIPO', equipo)
      return equipo
    }
    return EquiposService.show(id).then(response => {
      commit('SET_EQUIPO', response.data)
      return response.data
    })
    // .catch(error => {
    //   console.log(`Hubo un problema: ${error.message}`)
    // })
  },
  fetchByCliente({ commit, getters }, id) {
    const equipos = getters.getEquiposByCliente(id)

    if (equipos) {
      commit('SET_EQUIPOS_DE_CLIENTE', equipos)
      return equipos
    }
    return EquiposService.byCliente(id).then(response => {
      commit('SET_EQUIPOS_DE_CLIENTE', response.data)
      return response.data
    })
    // .catch(error => {
    //   console.log(`Hubo un problema: ${error.message}`)
    // })
  },
  deleteEquipo({ commit }, id) {
    return EquiposService.delete(id).then(() => {
      commit('DELETE_EQUIPO', id)
    })
    // .catch(error => {
    //   console.log(`Hubo un problema: ${error.message}`)
    // })
  },
  clearEquiposByCliente({ commit }) {
    commit('CLEAR_EQUIPOS_DE_CLIENTE')
  }
}

export const getters = {
  getEquiposByCliente: state => id => {
    return state.equipos.find(equipo => equipo.cliente_id === id)
  },
  getEquipoById: state => id => {
    return state.equipos.find(equipo => equipo.id === id)
  },
  equiposCount: state => {
    return state.equipos.length
  },
  equiposDeClienteCount: state => {
    return state.equiposDeCliente.length
  },
  filteredEquipos: state => keyword => {
    return state.equipos.filter(eq => eq.equipo.toLowerCase().indexOf(keyword.toLowerCase()) > -1)
  }
}
