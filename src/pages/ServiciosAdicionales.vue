<template>
    <div class="servicio-page">
        <div class="servicio-list q-mr-md">
            <ServicioList />
        </div>
    </div>
</template>
<style>
.servicio-page {
    display: flex;
    justify-content: space-between;
}

.servicio-list {
    width: 75%;
}
</style>
  
<script>
import { defineComponent } from 'vue'
import ServicioList from 'src/components/product/ServicioList.vue';

export default defineComponent({
    name: 'ServicioPage',
    components: {
        ServicioList
    }
})
</script>
  