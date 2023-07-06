<template>
  <div class="container">
    <h1>Reporte de Calificaciones</h1>

    <q-card class="report-card">
      <q-card-section>
        <q-table
          :rows="calificaciones"
          :columns="columns"
          row-key="id"
          :pagination="true"
          :rows-per-page-options="[10, 20, 50]"
          class="table"
        ></q-table>
      </q-card-section>
      <q-card-actions align="around">
        <q-btn
          @click="goToInicio"
          label="Inicio"
          color="orange"
          class="home-btn"
        ></q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      calificaciones: [],
      columns: [
        {
          name: "id",
          required: true,
          label: "ID",
          align: "left",
          field: "id",
          sortable: true,
        },
        {
          name: "recomendacion",
          required: true,
          label: "Recomendacion",
          align: "left",
          field: "recomendacion",
          sortable: true,
        },
        {
          name: "numEstrellas",
          required: true,
          label: "Numero de Estrellas",
          align: "left",
          field: "numEstrellas",
          sortable: true,
        },
      ],
    };
  },
  mounted() {
    this.fetchCalificaciones();
  },
  methods: {
    fetchCalificaciones() {
      axios
        .get("http://localhost:5023/api/v1/Calificacion")
        .then((response) => {
          this.calificaciones = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    goToInicio() {
      this.$router.push("/mostrarCliente");
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Exo:wght@400;700&display=swap");

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background-image: url("https://png.pngtree.com/thumb_back/fh260/background/20201104/pngtree-great-awesome-orange-background-design-image_459656.jpg"); /* Ruta de la imagen de fondo */
  background-size: cover;
  background-position: center;
}

h1 {
  font-family: "Exo", sans-serif;
  font-size: 50px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 24px;
  color: #ffffff; /* Color del texto */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Sombra del texto */
}

.report-card {
  max-width: 800px;
  width: 100%;
  background-color: rgba(
    255,
    255,
    255,
    0.8
  ); /* Color de fondo con transparencia */
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.table {
  background-color: #ffffff; /* Color de fondo de la tabla */
  border-radius: 8px;
}

.q-table th {
  background-color: #e06e43;
  color: #ffffff;
  font-family: "Exo", sans-serif;
  font-size: 14px;
  font-weight: bold;
  text-align: left;
}

.q-table td {
  font-family: "Exo", sans-serif;
  font-size: 14px;
}

.home-btn,
.create-btn {
  font-family: "Exo", sans-serif;
  font-weight: bold;
  color: #fff;
  border-radius: 8px;
  padding: 10px 20px;
  margin-top: 16px;
}

.home-btn {
  background-color: #e06e43;
}

.create-btn {
  background-color: #007bff;
}
</style>
