<template>
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
        <v-btn slot="activator" small depressed fab color="warning">
            <v-icon>edit</v-icon>
        </v-btn>
        <v-card>
            <v-toolbar color="warning" dense dark>
                <v-btn icon dark @click="closeThis">
                    <v-icon>close</v-icon>
                </v-btn>
                <v-toolbar-title>
                    Editar información de servicio
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                    <v-btn dark flat @click.prevent="actualizar(id)">Guardar cambios</v-btn>
                </v-toolbar-items>
            </v-toolbar>
            <v-form ref="editservicio" v-model="valid" lazy-validation>
                <v-responsive>
                    <v-alert
                        v-model="success"
                        transition="scale-transition"
                        dismissible
                        type="success"
                    >
                        Datos actualizados exitosamente
                    </v-alert>
                    <v-container grid-list-xs>
                        <v-layout row wrap>
                            <v-flex xs12>
                                <v-text-field
                                    v-model="formulario.titulo"
                                    name="titulo"
                                    label="Título del servicio"
                                    :rules="generales"
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs12>
                                <v-text-field
                                    v-model="formulario.descripcion"
                                    name="descripcion"
                                    label="Descripción del servicio"
                                    :rules="generales"
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs12>
                                <v-text-field
                                    v-model.number="formulario.valor"
                                    name="valor"
                                    label="Valor o Costo del servicio"
                                    :rules="generales"
                                ></v-text-field>
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
    name: 'EditarServicio',
    props: { id: { type: Number, required: true, default: 0 } },
    data: () => ({
        dialog: false,
        valid: false,
        success: false,
        generales: [v => !!v || 'Este campo es requerido']
    }),
    computed: {
        formulario() {
            return this.$store.getters.servicioByID(this.id)
        }
    },
    methods: {
        closeThis() {
            this.dialog = false
        },
        actualizar(id) {
            const url = `/servicios/${id}`

            const params = Object.assign({}, this.formulario)

            axios.put(url, params).then(() => {
                this.success = true
            })
        }
    }
}
</script>

<style></style>
