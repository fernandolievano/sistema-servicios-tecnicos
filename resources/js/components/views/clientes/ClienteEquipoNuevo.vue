<template>
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
        <v-btn slot="activator" fab small depressed color="success">
            <v-icon>add</v-icon>
        </v-btn>
        <v-card>
            <v-toolbar dark color="success" dense>
                <v-btn icon dark @click="closeThis">
                    <v-icon>close</v-icon>
                </v-btn>
                <v-toolbar-title>Nuevo equipo </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                    <v-btn dark flat>Registrar</v-btn>
                </v-toolbar-items>
            </v-toolbar>
            <v-form v-model="valid" lazy-validation>
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
                                    <v-alert v-model="success" dismissible type="success">
                                        Nuevo equipo registrado exitosamente
                                    </v-alert>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card-title>
                    <v-container grid-list-xs>
                        <v-layout row wrap> </v-layout>
                    </v-container>
                </v-responsive>
            </v-form>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    name: 'NuevoEquipoCliente',
    props: {
        id: {
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
        valid: false,
        formulario: {
            equipo: '',
            modelo: '',
            descripcion: '',
            diagnostico: '',
            estado: 'Reparación',
            cliente_id: this.id
        },
        generales: [v => !!v || 'Este campo es requerido']
    }),
    methods: {
        closeThis() {
            this.dialog = false
        },
        store() {
            //
        }
    }
}
</script>

<style></style>
