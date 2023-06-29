<template>
  <div class="modal">
    <div class="servicio-container">
      <h2>Servicios Disponibles</h2>

      <q-btn class="salir_pos" @click="closeModal">Terminar</q-btn>

      <div v-for="servicio in servicios" :key="servicio.id" class="servicio">
        <div class="servicio-details">
          <h3>{{ servicio.nombre }}</h3>
          <p>{{ servicio.descripcion }}</p>
          <p>Precio: {{ servicio.precio }}</p>
          <button @click="agregarAlCarrito(servicio)">Agregar</button>
        </div>
      </div>

      <div class="carrito-icon" @click="mostrarCarrito = !mostrarCarrito">
        <button class="carrito-button">
          <img
            class="carrito-image"
            src="https://images.vexels.com/media/users/3/200097/isolated/preview/942820836246f08c2d6be20a45a84139-icono-de-carrito-de-compras-carrito-de-compras.png"
            alt="Carrito de compras"
          />
          <span class="carrito-count">{{ carrito.length }}</span>
        </button>
      </div>

      <div class="carrito-overlay" v-if="mostrarCarrito">
        <div class="carrito-container">
          <h3>Carrito de compras</h3>
          <button class="cerrar-carrito" @click="mostrarCarrito = false">
            Cerrar
          </button>
          <div v-for="item in carrito" :key="item.id" class="carrito-item">
            <p>{{ item.descripcion }}</p>
            <p>Precio: {{ item.precio }}</p>
          </div>
          <!-- <button class="confirmar-compra" @click="confirmarCompra">
            Confirmar compra
          </button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  emits: ["close-modal"],
  data() {
    return {
      servicios: [],
      carrito: [],
      mostrarCarrito: false,
    };
  },
  methods: {
    agregarAlCarrito(servicio) {
      this.carrito.push(servicio);
      const listaCarrito =
        JSON.parse(localStorage.getItem("ServiciosAdicionales")) || [];

      // Agregar el idServicio a la lista
      listaCarrito.push(servicio.idServicio);

      // Guardar la lista actualizada en el localStorage
      localStorage.setItem(
        "ServiciosAdicionales",
        JSON.stringify(listaCarrito)
      );
    },
    obtenerServicios() {
      const apiUrl = "http://localhost:5023/api/v1/Servicio";

      axios
        .get(apiUrl)
        .then((response) => {
          this.servicios = response.data;
        })
        .catch((error) => {
          console.error("Error al obtener los servicios:", error);
        });
    },
    closeModal() {
      this.$emit("close-modal");
    },
  },
  mounted() {
    this.obtenerServicios();
  },
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Exo:100,200,400);

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
}
.servicio-container {
  max-width: 500px;
  margin: 0 auto;
  font-family: "Exo";
  color: white;
  background-color: #eabe7c;
  margin-top: 8%;
  overflow: auto;
}

.servicio {
  display: flex;
  margin-bottom: 40px;
  align-items: center;
}

.servicio-details {
  color: #fff;
  width: 300px;
  margin-left: 20px;
}

.carrito-container {
  position: absolute;
  width: 300px;
  overflow: auto;
}

h2 {
  font-weight: bold;
  text-align: center;
  color: white;
  font-size: 24px;
  margin-bottom: 20px;
}

h3 {
  font-weight: bold;
  color: white;
  font-size: 20px;
  margin-bottom: 10px;
}

p {
  margin-bottom: 18px;
  color: black;
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
button:hover {
  background-color: #d9dd92;
  color: black;
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
  position: absolute;
  top: 100px;
  left: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;
  overflow: auto;
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
.salir_pos {
  position: relative;
  left: 30%;
}
</style>
