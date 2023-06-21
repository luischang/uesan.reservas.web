<template>
    <h5>Listado de Servicios Adicionales</h5>
    <div class="servicios-list">
        <div class="servicios-grid">
            <div class="servicio-item" v-for="servicio in servicios" :key="servicio.id">
                <ServicioItem :servicio="servicio"></ServicioItem>
            </div>

        </div>
    </div>
</template>

<style>
.product-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px
}
</style>

<script>
import axios from 'axios'
import ServicioItem from 'components/product/ServicioItem.vue'

export default {
    name: "ServicioList",
    components: {
        ServicioItem
    },
    mounted() {
        this.listadoServicios()
    },
    data() {
        return {
            servicios: [],
        }
    },
    methods: {
        listadoServicios() {
            var url = 'http://localhost:5023/api/v1/Servicio'
            axios
                .get(url)
                .then(response => {
                    console.log(JSON.stringify(response.data))
                    this.servicios = response.data
                }).catch(error => {
                    this.$router.push("/dashboard")
                })

        }
    }

}

</script>