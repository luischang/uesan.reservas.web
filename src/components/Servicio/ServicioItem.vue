<template>
    <q-card class="servicio-card">
      <q-card-section>
      </q-card-section>
      <q-card-section>
        <q-card-title>{{ servicio.Descripcion }}</q-card-title>
        <div class="text-h6 font-weigth-bold">{{ servicio.Precio }}</div>
  
        <div class="text-center">
          <q-btn @click="addToCart" color="primary" icon="add_shopping_cart" label="agregar"></q-btn>
        </div>
      </q-card-section>
  
    </q-card>
  </template>
  
  <style>
  .servicio-card {
    width: 300px;
  }
  
  .servicio-card q-card-section {
    height: 100px;
    overflow: hidden;
  }
  </style>
  
  <script>
  
  import { userCartStore } from 'src/stores/cart-store';
  
  
  export default {
    name: "ServicioItem",
    props: {
      product: {
        type: Object,
        required: true
      }
    }, methods: {
      addToCart() {
        const store = userCartStore()
        const cart = store.totalItems
        store.addToCart(this.servicio)
      }
    }
  
  }
  
  </script>