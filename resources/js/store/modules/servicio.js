/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */

import ServicioService from '../../services/ServiciosService'

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
  servicios: [],
  servicio: null
}

export const mutations = {
  SET_SERVICIOS(state, servicios) {
    state.servicios = servicios
  },
  SET_SERVICIO(state, servicio) {
    state.servicio = servicio
  },
  CLEAR_SERVICIO(state) {
    state.servicio = {}
  },
  ADD_SERVICIO(state, servicio) {
    state.servicios.push(servicio)
  },
  DELETE_SERVICIO(state, id) {
    removeByAttr(state.servicios, 'id', id)
  }
}

export const actions = {
  createServicio({ commit }, servicio) {
    return ServicioService.store(servicio).then(response => {
      commit('ADD_SERVICIO', response.data)
      return response.data
    })
  },
  fetchAll({ commit }) {
    return ServicioService.index().then(response => {
      commit('SET_SERVICIOS', response.data)
    })
  },
  fetchOne({ commit, getters }, id) {
    try {
      const servicio = getters.getServicioById(id)

      if (servicio) {
        commit('SET_SERVICIO', servicio)
      } else {
        ServicioService.show(id).then(response => {
          commit('SET_SERVICIO', response.data)
        })
      }
    } catch (error) {
      console.error(`Hubo un error: ${error}`)
      commit('SET_SERVICIO', null)
    }
  },
  clearServicio({ commit }) {
    commit('CLEAR_SERVICIO')
  },
  deleteServicio({ commit }, id) {
    return ServicioService.delete(id).then(() => {
      commit('DELETE_SERVICIO', id)
    })
    // .catch(error => console.log(`Hubo un error: ${error.message}`))
  }
}

export const getters = {
  getServicioById: state => id => {
    return state.servicios.find(servicio => servicio.id === id)
  },
  serviciosCount: state => {
    return state.servicios.length
  },
  filteredServicios: state => keyword => {
    return state.servicios.filter(
      serv => serv.titulo.toLowerCase().indexOf(keyword.toLowerCase()) > -1
    )
  }
}
