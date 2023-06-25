<template>
  <div class="modal">
    <div class="filters">
      <select v-model="filtro">
        <option value="todos" selected>Todos</option>
        <option value="disponible">Disponible</option>
        <option value="ocupado">Ocupado</option>
      </select>
    </div>
    <!-- <select v-model="filtro">
      <option value="todos">Todos</option>
      <option value="disponible">Disponible</option>
      <option value="ocupado">Ocupado</option>
    </select> -->
    <div
      class="habitacion"
      v-for="habitacion in habitacionesFiltradas"
      :key="habitacion.id"
    >
      <div
        :class="{
          'habitacion-disponible': habitacion.estado,
          'habitacion-ocupada': !habitacion.estado,
        }"
      >
        <h3>{{ habitacion.descripcion }}</h3>
        <p>Capacidad: {{ habitacion.capacidad }}</p>
        <p>Estado: {{ habitacion.estado ? "Disponible" : "Ocupado" }}</p>
        <p>Precio: {{ habitacion.precio }}</p>
        <button
          v-if="habitacion.estado"
          @click="seleccionarHabitacion(habitacion.id_Habitacion)"
          class="style_btn"
        >
          Seleccionar
        </button>
      </div>
    </div>
  </div>
  <div>
    <q-btn class="terminar-btn" @click="closeModal"> TERMINAR </q-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      habitaciones: [],
      filtro: "todos",
    };
  },
  mounted() {
    // Obtener datos de la URL JSON
    fetch("http://localhost:5023/api/Habitacion/GetAll")
      .then((response) => response.json())
      .then((data) => {
        this.habitaciones = data;
      })
      .catch((error) => {
        console.error("Error al obtener las habitaciones:", error);
      });
  },
  computed: {
    habitacionesFiltradas() {
      if (this.filtro === "todos") {
        return this.habitaciones;
      } else if (this.filtro === "disponible") {
        return this.habitaciones.filter((habitacion) => habitacion.estado);
      } else if (this.filtro === "ocupado") {
        return this.habitaciones.filter((habitacion) => !habitacion.estado);
      }
      return this.habitaciones;
    },
  },
  methods: {
    seleccionarHabitacion(id) {
      // Realizar acciones con el ID de la habitación seleccionada
      console.log("Habitación seleccionada:", id);
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
.habitacion {
  display: inline-block;
  width: 20%;
  padding: 10px;
  box-sizing: border-box;
  margin: 10px;
}

.habitacion-disponible {
  background-color: #d48208;
  border-radius: 5px;
  font-family: "Exo";
  text-align: center;
  color: white;
  border: white 1px solid;
}

.habitacion-ocupada {
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
