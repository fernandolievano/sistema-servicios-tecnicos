<template>
  <div>
    <v-btn v-if="estado === 'En Reparación'" color="primary" @click="marcarComo(estado, id)">
      Marcar como Reparado (id: {{ id }})
    </v-btn>
    <v-btn v-else-if="estado === 'Reparado'" color="success" @click="marcarComo(estado, id)">
      Marcar como Retirado (id: {{ id }})
    </v-btn>
    <div v-else>
      Equipo despachado
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'BotonEstado',
  props: {
    estado: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
    }
  },
  methods: {
    // PENDIENTE AHORA ACTUALIZAR EL STATE DE VUEX
    marcarComo(estado, id) {
      const url = `/api/v1/equipos/estado/${id}`

      if (estado === 'En Reparación') {
        const nuevoEstado = {
          estado: 'Reparado'
        }
        const params = Object.assign({}, nuevoEstado)

        axios.put(url, params).then(response => {
          const msg = `${response.data.equipo} ${response.data.modelo} fue reparado`
          this.$swal.fire({
            title: msg,
            type: 'success'
          })
        })
      } else if (estado === 'Reparado') {
        const nuevoEstado = {
          estado: 'Despachado'
        }
        const params = Object.assign({}, nuevoEstado)

        axios.put(url, params).then(response => {
          const msg = `${response.data.equipo} ${response.data.modelo} fue despachado`
          this.$swal.fire({
            title: msg,
            type: 'success'
          })
        })
      }
    }
  }
}
</script>

<style lang="css" scoped></style>
