<template>
  <div class="reporte-habitaciones">
    <div class="background-all"></div>
    <h1>Reporte de Habitaciones</h1>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Descripción</th>
          <th>Capacidad</th>
          <th>Estado</th>
          <th>Precio</th>
          <th>Cantidad de Camas</th>
          <th>Tipo de Habitación</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="habitacion in habitaciones" :key="habitacion.id_Habitacion">
          <td>{{ habitacion.id_Habitacion }}</td>
          <td>{{ habitacion.descripcion }}</td>
          <td>{{ habitacion.capacidad }}</td>
          <td>
            <span
              :class="{
                'estado-disponible': habitacion.estado,
                'estado-no-disponible': !habitacion.estado,
              }"
            >
              {{ habitacion.estado ? "Disponible" : "No disponible" }}
            </span>
          </td>
          <td>USD {{ habitacion.precio }}</td>
          <td>{{ habitacion.cant_Camas }}</td>
          <td>{{ habitacion.tipoHabitacion.descripcion }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <q-btn class="botonQ" @click="regresarInicio">Regresar</q-btn>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      habitaciones: [],
    };
  },
  mounted() {
    axios
      .get("http://localhost:5023/api/Habitacion/GetAll")
      .then((response) => {
        this.habitaciones = response.data;
      })
      .catch((error) => {
        console.error(error);
      });
  },
  methods: {
    regresarInicio() {
      this.$router.push("/reportAdmin");
    },
  },
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Exo:100,200,400);

.background-all {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("./src/assets/fondo3.jpeg");
  background-size: cover;
  background-position: center;
  opacity: 0.9;
  z-index: -1;
}
.reporte-habitaciones {
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px;
  font-family: "Exo";
  color: #333;
  position: center;
  background-color: rgba(290, 180, 160, 0.7);
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  margin-top: 80px;
  margin-bottom: 100px;
}
.botonQ {
  position: absolute;
  margin-left: 380px;
  margin-bottom: 220px;
  font-family: "Exo";
  color: white;
  background-color: #d48208;
  left: 20%;
}
.botonQ:hover {
  color: black;
  background-color: #d9dd92;
}
h1 {
  text-align: center;
  font-size: 24px;
  margin-bottom: 10px;
  font-weight: bold;
  text-align: center;
  color: #462c22;
  font-size: 24px;
  margin-bottom: 5px;
}

table {
  position: center;
  width: 100%;
  border-collapse: collapse;
  font-size: 16px;
}

thead th {
  background-color: #f2f2f2;
  color: #333;
  padding: 8px;
  text-align: left;
}

tbody td {
  padding: 8px;
}

.estado-disponible {
  color: green;
}

.estado-no-disponible {
  color: red;
}
</style>
