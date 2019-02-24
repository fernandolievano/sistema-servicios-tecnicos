<template>
  <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
    <v-btn slot="activator" small flat color="success">
      Añadir nuevo equipo <v-icon>add</v-icon>
    </v-btn>
    <v-card>
      <v-toolbar dark color="success" dense>
        <v-btn icon dark @click="closeThis">
          <v-icon>close</v-icon>
        </v-btn>
        <v-toolbar-title>Nuevo equipo</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn dark flat @click.prevent="store">Registrar</v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-form ref="nuevoequipo" v-model="valid" lazy-validation>
        <v-responsive>
          <v-card-title primary-title>
            <v-container grid-list-xs>
              <v-layout row wrap>
                <v-flex xs12>
                  <h2 class="display-3">
                    Nuevo equipo de {{ cliente }} {{ formulario.cliente_id }}
                  </h2>
                </v-flex>
                <v-flex xs12>
                  <v-alert v-model="success" type="success">
                    Equipo registrado con éxito
                  </v-alert>
                </v-flex>
                <v-flex v-if="success" xs12>
                  <v-layout row wrap>
                    <v-flex xs12>
                      <v-btn color="primary" flat block @click="showTicket = !showTicket">
                        Ver ticket
                      </v-btn>
                    </v-flex>
                    <v-flex v-if="showTicket" xs12>
                      <ticket-inicial :ticket="ticket"></ticket-inicial>
                    </v-flex>
                  </v-layout>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-title>
          <v-container v-if="success === false" grid-list-xs>
            <v-layout row wrap>
              <v-flex xs12>
                <v-text-field
                  v-model="formulario.equipo"
                  name="equipo"
                  label="Equipo"
                  required
                  :rules="generales"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  v-model="formulario.modelo"
                  name="modelo"
                  label="Modelo del equipo"
                  required
                  :rules="generales"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  v-model="formulario.descripcion"
                  name="descripcion"
                  label="Breve descripción del equipo"
                  required
                  :rules="generales"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-textarea
                  v-model="formulario.diagnostico"
                  name="diagnostico"
                  label="Diagnóstico del equipo"
                  required
                  :rules="generales"
                ></v-textarea>
              </v-flex>
            </v-layout>
          </v-container>
        </v-responsive>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from 'axios'

export default {
  name: 'NuevoEquipoCliente',
  components: {
    TicketInicial: () => import('./TicketInicial.vue')
  },
  props: {
    idCliente: {
      type: Number,
      required: true,
      default: 0
    },
    cliente: {
      type: String,
      default: 'Cliente'
    }
  },
  data: () => ({
    dialog: false,
    success: false,
    showTicket: false,
    valid: false,
    formulario: {
      equipo: '',
      modelo: '',
      descripcion: '',
      diagnostico: '',
      estado: 'En Reparación',
      cliente_id: ''
    },
    generales: [v => !!v || 'Este campo es requerido'],
    ticket: null
  }),
  methods: {
    closeThis() {
      this.dialog = false
    },
    store() {
      const url = '/api/v1/equipos/store'

      this.formulario.cliente_id = this.idCliente
      const params = Object.assign({}, this.formulario)

      axios.post(url, params).then(response => {
        this.success = true
        this.$refs.nuevoequipo.reset()
        this.$store.dispatch('indexClientes')

        this.ticket = response.data
      })
    }
  }
}
</script>

<style></style>
