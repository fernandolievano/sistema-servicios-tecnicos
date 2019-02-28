<template>
  <v-dialog
    :key="idCliente"
    v-model="dialog"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
  >
    <v-btn slot="activator" color="info" small depressed block @click.prevent="fetch(idCliente)">
      Equipos de {{ cliente }}
      <v-icon>
        devices_other
      </v-icon>
    </v-btn>
    <v-card>
      <v-toolbar dark color="info">
        <v-btn icon dark @click="close">
          <v-icon>close</v-icon>
        </v-btn>
        <v-toolbar-title>Equipos de {{ cliente }} </v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-container grid-list-xs>
        <v-layout v-if="equiposCount < 1">
          <v-flex xs12>
            <v-alert type="warning" :value="true">
              No hay equipos para mostrar
            </v-alert>
          </v-flex>
        </v-layout>
        <v-layout v-for="item in equipo.equiposDeCliente" v-else :key="item.id" row wrap>
          <v-flex>
            <v-card>
              <v-card-title primary-title>
                <div>
                  <h1 class="headline" v-text="item.equipo + ' ' + item.modelo"></h1>
                  <div>
                    <span class="title" v-text="item.estado"></span>
                  </div>
                </div>
              </v-card-title>
              <v-divider></v-divider>
              <v-card-text>
                <v-list two-line subheader>
                  <v-list-tile avatar>
                    <v-list-tile-content>
                      <v-list-tile-title>Descripción del equipo</v-list-tile-title>
                      <v-list-tile-sub-title v-text="item.descripcion"></v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile avatar>
                    <v-list-tile-content>
                      <v-list-tile-title>Diagnóstico</v-list-tile-title>
                      <v-list-tile-sub-title v-text="item.diagnostico"></v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  name: 'EquiposCliente',
  props: {
    cliente: {
      type: String,
      default: 'Cliente'
    },
    idCliente: {
      type: Number,
      default: 0
    }
  },
  data: () => ({
    dialog: false,
    showTicket: false
  }),
  computed: {
    ...mapState(['equipo']),
    ...mapGetters({
      count: 'equipo/equiposDeClienteCount'
    }),
    equiposCount() {
      return this.count
    }
  },
  methods: {
    ...mapActions({
      fetch: 'equipo/fetchByCliente',
      clear: 'equipo/clearEquiposByCliente'
    }),
    close() {
      this.dialog = false
      this.clear()
    }
  }
}
</script>

<style></style>
