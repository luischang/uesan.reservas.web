<template>
  <div id="app">
    <div class="background-all"></div>
    <h1>Reporte de Quejas</h1>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Fecha</th>
          <th>ID de Usuario</th>
          <th>Descripción</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="queja in quejas" :key="queja.idQuejas">
          <td>{{ queja.idQuejas }}</td>
          <td>{{ formatDate(queja.fecha) }}</td>
          <td>{{ queja.idUsuario }}</td>
          <td>{{ queja.descripcion }}</td>
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
      quejas: [],
    };
  },
  mounted() {
    this.fetchQuejas();
  },
  methods: {
    fetchQuejas() {
      axios
        .get("http://localhost:5023/api/Quejas/Traer")
        .then((response) => {
          this.quejas = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${day}-${month}-${year}`;
    },
    regresarInicio() {
      this.$router.push("/reportAdmin");
    },
  },
};
</script>

<style>
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

#app {
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

th {
  background-color: #f2f2f2;
  padding: 8px;
  font-weight: bold;
  text-align: left;
}

td {
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #f9f9f9;
}
.botonQ {
  position: absolute;
  margin-left: 380px;
  font-family: "Exo";
  color: white;
  background-color: #d48208;
  left: 20%;
}
.botonQ:hover {
  color: black;
  background-color: #d9dd92;
}
</style>
