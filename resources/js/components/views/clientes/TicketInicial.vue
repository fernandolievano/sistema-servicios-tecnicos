<template>
  <v-container>
    <v-layout row wrap align-center justify-center>
      <v-flex xs6>
        <v-btn :disabled="!show" color="primary" block @click="imprimir">
          Imprimir ticket
        </v-btn>
      </v-flex>
      <v-flex xs6>
        <v-btn :disabled="show" block flat @click="mostrarTicket">
          Ver ticket
        </v-btn>
      </v-flex>
    </v-layout>
    <v-layout v-if="show" row wrap align-center justify-center>
      <v-flex :id="'ticketInicial' + ticketId" class="ticket" xs6>
        <v-card>
          <v-toolbar flat dense>
            <v-toolbar-title>
              <img src="/images/xg-icon.png" alt="icon" class="icon-ticket" />
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn flat> N° {{ ticketInicial.id }} </v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <v-divider></v-divider>
          <v-card-title primary-title>
            <v-container>
              <v-layout row wrap>
                <v-flex xs4>
                  <div class="display-1 grey--text text--darken--2">Cliente</div>
                </v-flex>
                <v-flex xs8>
                  <v-card-text>
                    <h1 class="title">
                      {{ ticketInicial.cliente.nombre }} {{ ticketInicial.cliente.apellido }}
                    </h1>
                  </v-card-text>
                  <v-card-text>
                    <h4>Dirección</h4>
                    <p>{{ ticketInicial.cliente.direccion }}</p>
                  </v-card-text>
                  <v-card-text>
                    <h4>Teléfono</h4>
                    <p>{{ ticketInicial.cliente.telefono }}</p>
                  </v-card-text>
                </v-flex>
              </v-layout>
              <v-layout row wrap>
                <v-flex xs4>
                  <div class="display-1 grey--text text--darken--2">
                    Equipo
                  </div>
                </v-flex>
                <v-flex xs8>
                  <v-card-text>
                    <h1 class="title">{{ ticketInicial.equipo.equipo }}</h1>
                    <p>{{ ticketInicial.equipo.modelo }}</p>
                  </v-card-text>
                  <v-card-text>
                    <h4>Descripción del equipo al ser entregado</h4>
                    <p>
                      {{ ticketInicial.equipo.descripcion }}
                    </p>
                  </v-card-text>
                  <v-card-text>
                    <h4>Diagnóstico</h4>
                    <p>{{ ticketInicial.equipo.diagnostico }}</p>
                  </v-card-text>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-actions class="pa-3">
            <b>Equipo recibido el {{ ticket.ticketInicial.created_at | date }}</b>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

export default {
  props: {
    ticketId: {
      type: Number,
      required: true,
      default: 0
    }
  },
  data() {
    return {
      show: false
    }
  },
  computed: {
    ...mapState(['ticket']),
    ticketInicial() {
      return this.ticket.ticketInicial
    },
    cliente() {
      return this.ticketInicial.cliente
    },
    equipo() {
      return this.ticketInicial.equipo
    }
  },
  methods: {
    ...mapActions({
      fetch: 'ticket/fetchInicial'
    }),
    imprimir() {
      this.fetch(this.ticketId)

      const filename = `ticket_inicial${this.ticketId}`

      html2canvas(document.querySelector(`#ticketInicial${this.ticketId}`)).then(canvas => {
        // eslint-disable-next-line new-cap
        const pdf = new jsPDF('p', 'mm', 'a4')
        pdf.addImage(canvas.toDataURL('image/png', 1.0), 'PNG', 3, 5, 100, 180)
        pdf.addImage(canvas.toDataURL('image/png', 1.0), 'PNG', 107, 5, 100, 180)
        pdf.save(filename)
      })
    },
    mostrarTicket() {
      this.fetch(this.ticketId).then(() => {
        this.show = true
      })
    }
  }
}
</script>

<style scoped>
.icon-ticket {
  width: 10%;
}
.ticket {
  border: 1px solid gray;
}
</style>
