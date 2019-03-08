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
            <v-btn dark flat @click="generarTicket">Save</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <div v-if="success" class="success--text">
          Creado con éxito
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
                            :label="repuesto.repuesto"
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
                        :label="servicio.titulo"
                        :value="servicio"
                      ></v-checkbox>
                    </v-list-tile-content>
                  </v-list-tile>
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
      detail: null,
      serviciosRequeridos: [],
      repuestosUsados: [],
      repuestosUsadosCantidad: []
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
      createFinal: 'ticket/createFinal'
    }),
    generarTicket() {
      let pagoTotal = 0

      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < this.repuestosUsados.length; i++) {
        const precio = this.repuestosUsados[i].precio_unitario_venta
        const cantidad = this.repuestosUsadosCantidad[i]
        pagoTotal += precio * cantidad
      }

      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < this.serviciosRequeridos.length; i++) {
        pagoTotal += this.serviciosRequeridos[i].valor
      }

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
        cliente_id: this.clienteId,
        equipo_id: this.equipoId,
        total: pagoTotal,
        mensaje: message
      }

      const params = Object.assign({}, formulario)

      this.createFinal(params).then(() => {
        this.success = true
      })
    }
  }
}
</script>

<style></style>
