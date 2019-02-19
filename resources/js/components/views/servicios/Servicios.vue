<template>
    <div>
        <v-tabs
            v-model="active"
            color="transparent"
            centered
            icons-and-text
            light
            slider-color="yellow darken-2"
        >
            <v-tab>Lista de servicios <v-icon>build</v-icon> </v-tab>
            <v-tab>Nuevo Servicio <v-icon>add</v-icon> </v-tab>
        </v-tabs>
        <v-tabs-items v-model="active">
            <v-tab-item>
                <index-servicios></index-servicios>
            </v-tab-item>
            <v-tab-item>
                <nuevo-servicio></nuevo-servicio>
            </v-tab-item>
        </v-tabs-items>
    </div>
</template>

<script>
export default {
    components: {
        IndexServicios: () => import('./ServiciosIndex.vue'),
        NuevoServicio: () => import('./ServicioNuevo.vue')
    },
    data: () => ({
        active: 0
    })
}
</script>

<style></style>
