<template>
  <div>
    <v-dialog v-model="dialog" lazy fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-btn slot="activator" color="primary" dark>Generar ticket de pago</v-btn>
      <v-card>
        <v-toolbar dark color="brown darken-4">
          <v-btn icon dark @click="dialog = false">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Retirar equipo</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark flat @click="generarTicket">Listo</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <div v-if="success" class="text-xs-center">
          <h1 class="success--text display-2">
            Creado con éxito
          </h1>
          <v-btn color="primary" block :to="{ name: 'factura', params: { id: ticket.id } }">
            Ver Ticket
          </v-btn>
        </div>
        <v-form v-if="!success" ref="retirarequipo" v-model="valid" lazy-validation>
          <h1 class="display-2">Generar ticket de pago</h1>
          <v-list>
            <v-container>
              <v-layout row wrap>
                <v-flex xs12>
                  <h3>Repuestos utilizados</h3>
                  <v-list-tile
                    v-for="(repuesto, index) in repuesto.repuestos"
                    :key="repuesto.repuesto"
                  >
                    <v-layout row wrap>
                      <v-flex xs12 sm6>
                        <v-list-tile-content>
                          <v-checkbox
                            :key="repuesto.repuesto"
                            v-model="repuestosUsados[index]"
                            :label="repuestoInfo(repuesto.repuesto, repuesto.precio_unitario_venta)"
                            :value="repuesto"
                          ></v-checkbox>
                        </v-list-tile-content>
                      </v-flex>
                      <v-flex xs12 sm6>
                        <v-list-tile-content>
                          <v-text-field
                            :key="repuesto.precio_unitario_venta"
                            v-model="repuestosUsadosCantidad[index]"
                            placeholder="Cantidad"
                          >
                          </v-text-field>
                        </v-list-tile-content>
                      </v-flex>
                    </v-layout>
                  </v-list-tile>
                </v-flex>
                <v-flex xs12>
                  <h3>Servicios requeridos</h3>
                  <v-list-tile
                    v-for="(servicio, index) in servicio.servicios"
                    :key="servicio.servicio"
                  >
                    <v-list-tile-content>
                      <v-checkbox
                        :key="servicio.titulo"
                        v-model="serviciosRequeridos[index]"
                        :label="servicioInfo(servicio.titulo, servicio.valor)"
                        :value="servicio"
                      ></v-checkbox>
                    </v-list-tile-content>
                    <v-list-tile-content>
                      <span class="caption">{{ servicio.descripcion }}</span>
                    </v-list-tile-content>
                  </v-list-tile>
                  <span>{{ serviciosRequeridos }}</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-list>
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import axios from 'axios'

export default {
  props: {
    clienteId: {
      type: Number,
      required: true,
      default: 0
    },
    equipoId: {
      type: Number,
      required: true,
      default: 0
    }
  },
  data() {
    return {
      dialog: false,
      valid: false,
      success: false,
      detail: {
        servicios: [],
        repuestos: []
      },
      serviciosRequeridos: [],
      repuestosUsados: [],
      repuestosUsadosCantidad: [],
      ticket: null
    }
  },
  computed: {
    ...mapState(['repuesto', 'servicio'])
  },
  mounted() {
    this.fetchRepuestos()
    this.fetchServicios()
  },
  methods: {
    ...mapActions({
      fetchRepuestos: 'repuesto/fetchAll',
      fetchServicios: 'servicio/fetchAll',
      createFinal: 'ticket/createFinal',
      setDetails: 'ticket/sendDetails'
    }),
    generarTicket() {
      const self = this
      let pagoTotal = 0

      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < this.repuestosUsados.length; i++) {
        if (this.repuestosUsados !== null && this.repuestosUsados !== undefined) {
          const precio = this.repuestosUsados[i].precio_unitario_venta
          const cantidad = this.repuestosUsadosCantidad[i]
          pagoTotal += precio * cantidad

          // para detalle en la factura
          const repuestoDetail = {
            repuesto: this.repuestosUsados[i].repuesto,
            cantidad: this.repuestosUsadosCantidad[i],
            precio_unitario: this.repuestosUsados[i].precio_unitario_venta
          }

          this.detail.repuestos.push(repuestoDetail)
        }
      }

      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < this.serviciosRequeridos.length; i++) {
        if (this.serviciosRequeridos[i] !== null && this.serviciosRequeridos[i] !== undefined) {
          pagoTotal += this.serviciosRequeridos[i].valor

          const servicioDetail = {
            servicio: this.serviciosRequeridos[i].titulo,
            precio: this.serviciosRequeridos[i].valor
          }

          this.detail.servicios.push(servicioDetail)
        }
      }

      this.setDetails(this.detail)

      const servicios = this.serviciosRequeridos
      const joinedServicios = servicios.map(serv => serv.titulo).join(', ')

      const repuestos = this.repuestosUsados
      const joinedRepuestos = repuestos.map(rep => rep.repuesto).join(', ')

      let message = ''

      if (servicios.length < 1) {
        message = `Ingresos por la venta de los siguientes repuestos: ${joinedRepuestos}.`
      } else if (repuestos.length < 1) {
        message = `Ingresos por servicios técnicos: ${joinedServicios}.`
      } else {
        message = `Ingresos por por la venta de los siguientes repuestos: ${joinedRepuestos} y por servicios técnicos: ${joinedServicios}.`
      }

      const formulario = {
        cliente_id: self.clienteId,
        equipo_id: self.equipoId,
        total: pagoTotal,
        mensaje: message
      }

      const request = Object.assign({}, formulario)
      const url = '/api/v1/tickets/store/final'

      axios.post(url, request).then(response => {
        this.success = true
        this.ticket = response.data
      })
    },
    servicioInfo(titulo, valor) {
      return `${titulo} - ${valor} ARS`
    },
    repuestoInfo(repuesto, precio) {
      return `${repuesto} - ${precio} ARS`
    }
  }
}
</script>

<style></style>
