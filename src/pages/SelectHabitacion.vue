<template>
  <div>
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
        >
          Seleccionar
        </button>
      </div>
    </div>
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
  },
};
</script>

<style>
.habitacion {
  display: inline-block;
  width: 20%;
  padding: 10px;
  box-sizing: border-box;
  margin: 10px;
}

.habitacion-disponible {
  background-color: hsl(120, 100%, 50%, 0.4);
}

.habitacion-ocupada {
  background-color: red;
}
.filters {
  margin-top: 20px;
  font-size: medium;
  max-width: 15%;
}
</style>
