<template>
  <div class="modal">
    <div class="filters">
      <select v-model="filtro">
        <option value="todos" selected>Todos</option>
        <option value="disponible">Disponible</option>
        <option value="ocupado">Ocupado</option>
      </select>
    </div>
    <div class="servicio" v-for="servicio in serviciosFiltrados" :key="servicio.id">
      <div
        :class="{
          'servicio-disponible': servicio.estado,
          'servicio-ocupado': !servicio.estado,
          'servicio-seleccionado': servicioSeleccionado === servicio.id,
        }"
      >
        <h3>{{ servicio.descripcion }}</h3>
        <p>Estado: {{ servicio.estado ? "Disponible" : "Ocupado" }}</p>
        <p>Precio: {{ servicio.precio }}</p>
        <button
          v-if="servicio.estado"
          @click="seleccionarServicio(servicio.id)"
          class="style_btn"
        >
          Seleccionar
        </button>
      </div>
    </div>
  </div>
  <div>
    <q-btn class="terminar-btn" @click="closeModal">TERMINAR</q-btn>
  </div>
</template>


<script>
export default {
  emits: ["close-modal"],
  data() {
    return {
      servicios: [],
      filtro: "todos",
      servicioSeleccionado: null,
    };
  },
  mounted() {
    fetch("http://localhost:5023/api/v1/Servicio")
      .then((response) => response.json())
      .then((data) => {
        this.servicios = data;
      })
      .catch((error) => {
        console.error("Error al obtener los servicios:", error);
      });
  },
  computed: {
    serviciosFiltrados() {
      if (this.filtro === "todos") {
        return this.servicios;
      } else if (this.filtro === "disponible") {
        return this.servicios.filter((servicio) => servicio.estado);
      } else if (this.filtro === "ocupado") {
        return this.servicios.filter((servicio) => !servicio.estado);
      }
      return this.servicios;
    },
  },
  methods: {
    seleccionarServicio(id) {
      if (this.servicioSeleccionado === id) {
        // Si el servicio ya está seleccionado, lo deseleccionamos
        this.servicioSeleccionado = null;
      } else {
        // Si se selecciona un nuevo servicio, actualizamos el servicio seleccionado
        this.servicioSeleccionado = id;
      }
    },
    closeModal() {
      this.$emit("close-modal");
    },
  },
};
</script>


<style>
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
}
.servicio {
  display: inline-block;
  width: 20%;
  padding: 10px;
  box-sizing: border-box;
  margin: 10px;
}

.servicio-disponible {
  background-color: #d48208;
  border-radius: 5px;
  font-family: "Exo";
  text-align: center;
  color: white;
  border: white 1px solid;
}
.servicio-seleccionado {
  background-color: rgb(
    75,
    149,
    75
  ); /* Aquí puedes definir el color de fondo que desees */
}
.servicio-ocupado {
  background-color: #d48208;
}
.filters {
  margin-top: 20px;
  font-size: large;
  font-family: "Exo";
  max-width: 15%;
  border-color: transparent;
}
.style_btn {
  padding: 8px 14px;
  background-color: #d48208;
  color: white;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 15px;
  font-family: "Exo";
  position: absolute;
  margin-left: -50px;
  margin-top: 20px;
}
.style_btn:hover {
  background-color: #d9dd92;
  color: black;
}
.terminar-btn {
  position: absolute;
  bottom: -150px;
  left: 405px;
  font-family: "Exo";
  color: white;
  background-color: #d48208;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
