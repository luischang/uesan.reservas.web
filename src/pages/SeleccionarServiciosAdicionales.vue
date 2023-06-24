<template>
  <div class="servicio-container">
    <button class="home-button" @click="irAlDashboard">Home</button>
    <h2>Servicios Disponibles</h2>
    <div v-for="servicio in servicios" :key="servicio.id" class="servicio">
      <div class="servicio-image">
        <img :src="servicio.imagen" :alt="servicio.nombre" />
      </div>
      <div class="servicio-details">
        <h3>{{ servicio.nombre }}</h3>
        <p>{{ servicio.descripcion }}</p>
        <p>Precio: {{ servicio.precio }}</p>
        <button @click="agregarAlCarrito(servicio)">Agregar</button>
      </div>
    </div>

    <div class="carrito-icon" @click="mostrarCarrito = !mostrarCarrito">
      <button class="carrito-button">
        <img class="carrito-image" src="https://images.vexels.com/media/users/3/200097/isolated/preview/942820836246f08c2d6be20a45a84139-icono-de-carrito-de-compras-carrito-de-compras.png" alt="Carrito de compras" />
        <span class="carrito-count">{{ carrito.length }}</span>
      </button>
    </div>

    <div class="carrito-overlay" v-if="mostrarCarrito">
      <div class="carrito-container">
        <h3>Carrito de compras</h3>
        <button class="cerrar-carrito" @click="mostrarCarrito = false">Cerrar</button>
        <div v-for="item in carrito" :key="item.id" class="carrito-item">
          <p>{{ item.nombre }}</p>
          <p>Precio: {{ item.precio }}</p>
        </div>
        <button class="confirmar-compra" @click="confirmarCompra">Confirmar compra</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      servicios: [],
      carrito: [],
      mostrarCarrito: false,
    };
  },
  methods: {
    irAlDashboard() {
      this.$router.push("/Login");
    },
    agregarAlCarrito(servicio) {
      this.carrito.push(servicio);
      console.log("Servicio agregado al carrito:", servicio);
    },
    confirmarCompra() {
      console.log("Compra confirmada");
      this.$router.push("/PagoReserva");
    },
    obtenerServicios() {
      const apiUrl = 'http://localhost:5023/api/v1/Servicio';

      axios
        .get(apiUrl)
        .then(response => {
          this.servicios = response.data;
        })
        .catch(error => {
          console.error('Error al obtener los servicios:', error);
        });
    },
  },
  mounted() {
    this.obtenerServicios();
  },
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Exo:100,200,400);
.servicio-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  font-family: "Exo";
  color: #333;
  background-color: #eabe7c;
}

.servicio {
  display: flex;
  margin-bottom: 40px;
  align-items: center;
}

.servicio-image {
  width: 200px;
  margin-right: 20px;
}

.servicio-image img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
}

.servicio-details {
  color: #fff;
  width: 550px;
  margin-left: 20px;
}

.carrito-container {
  margin-top: 40px;
}

h2 {
  font-weight: bold;
  text-align: center;
  color: #333;
  font-size: 24px;
  margin-bottom: 20px;
}

h3 {
  font-weight: bold;
  color: #333;
  font-size: 20px;
  margin-bottom: 10px;
}

p {
  margin-bottom: 18px;
  color: #333;
  line-height: 1.6;
  text-align: justify;
}

button {
  background-color: #e06e43;
  color: #fff;
  border: none;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
}

.home-button {
  position: absolute;
  top: 60px;
  right: 20px;
  background-color: #e06e43;
  color: #fff;
  border: none;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
}

.carrito-item {
  margin-bottom: 10px;
  padding: 10px;
  background-color: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
}

.carrito-icon {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #e06e43;
  color: #fff;
  border: none;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
}

.carrito-button {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
}

.carrito-image {
  width: 250%;
  height: 250%;
  max-width: 30px;
  max-height: 30px;
}

.carrito-count {
  background-color: #fff;
  color: #e06e43;
  border-radius: 50%;
  padding: 4px 8px;
  font-size: 12px;
  position: absolute;
  top: -8px;
  right: -8px;
}

.carrito-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.carrito-container {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  max-width: 400px;
  text-align: center;
}

.cerrar-carrito {
  background-color: #e06e43;
  color: #fff;
  border: none;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 10px;
}

.confirmar-compra {
  background-color: #39b54a;
  color: #fff;
  border: none;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
}
</style>
