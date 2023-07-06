<template>
  <h1>Cliente</h1>
  <q-card class="report-card">
    <q-card-section>
      <q-table
        :rows="cliente"
        :columns="columnsCliente"
        row-key="id"
        :pagination="true"
        :rows-per-page-options="[10, 20, 50]"
        class="table"
      ></q-table>
    </q-card-section>
  </q-card>
  <h1>Quejas</h1>
  <q-card class="report-card">
    <q-card-section>
      <q-table
        :rows="quejas"
        :columns="columnsQuejas"
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
      <q-btn
        @click="goToCrearQuejas"
        label="Crear Quejas"
        color="primary"
        class="create-btn"
      ></q-btn>
    </q-card-actions>
  </q-card>
  <h1>Reservas</h1>

  <q-card class="report-card">
    <q-card-section>
      <q-table
        :rows="reservas"
        :columns="columnsReservas"
        row-key="id"
        :pagination="true"
        :rows-per-page-options="[10, 20, 50]"
        class="table"
      ></q-table>
    </q-card-section>
    <q-card-actions align="around">
      <q-btn
        @click="goToInicioReserva"
        label="Inicio"
        color="orange"
        class="home-btn"
      ></q-btn>
      <q-btn
        @click="goToCrearReservas"
        label="Crear Reservas"
        color="primary"
        class="create-btn"
      ></q-btn>
      <q-btn
        @click="goToCrearCalificacion"
        label="Crear Calificacion"
        color="primary"
        class="create-btn"
      ></q-btn>
    </q-card-actions>
  </q-card>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      cliente: [],
      columnsCliente: [
        {
          name: "nombre",
          required: true,
          label: "Nombre",
          align: "left",
          field: "nombre",
          sortable: true,
        },
      ],
      quejas: [],
      columnsQuejas: [
        {
          name: "fecha",
          required: true,
          label: "Fecha",
          align: "left",
          field: "fecha",
          sortable: true,
        },
        {
          name: "descripcion",
          required: true,
          label: "Descripción",
          align: "left",
          field: "descripcion",
          sortable: true,
        },
      ],
      reservas: [],
      columnsReservas: [
        {
          name: "fechaIni",
          required: true,
          label: "Fecha de inicio",
          align: "left",
          field: "fechaIni",
          sortable: true,
        },
        {
          name: "fechaFin",
          required: true,
          label: "Fecha de fin",
          align: "left",
          field: "fechaFin",
          sortable: true,
        },
        {
          name: "cantPersonas",
          required: true,
          label: "Cantidad de Personas",
          align: "left",
          field: "cantPersonas",
          sortable: true,
        },
      ],
      calificaciones: [],
      columnsCalificaciones: [
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
    this.ListaUSuarios();
    this.fetchQuejas();
    this.fetchReservas();
    this.fetchCalificaciones();
  },
  methods: {
    ListaUSuarios() {
      const storedData = localStorage.getItem("userResult");
      this.userResult = JSON.parse(storedData);

      axios
        .get(
          "http://localhost:5023/api/Usuario?IdUsuario=" +
            this.userResult.idUsuario.toString()
        )
        .then((response) => {
          this.cliente = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    fetchQuejas() {
      const storedData = localStorage.getItem("userResult");
      this.userResult = JSON.parse(storedData);

      axios
        .get(
          "http://localhost:5023/api/Quejas/QuejasUsuario?IdUsuario=" +
            this.userResult.idUsuario.toString()
        )
        .then((response) => {
          this.quejas = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    goToInicio() {
      this.$router.push("/");
    },
    goToCrearQuejas() {
      this.$router.push("/CrearQuejas");
    },
    fetchReservas() {
      const storedData = localStorage.getItem("userResult");
      this.userResult = JSON.parse(storedData);

      axios
        .get(
          "http://localhost:5023/api/v1/ReservasOrder/ReservasUsuario?IdUsuario=" +
            this.userResult.idUsuario.toString()
        )
        .then((response) => {
          this.reservas = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    goToInicioReserva() {
      this.$router.push("/");
    },
    goToCrearReservas() {
      this.$router.push("/CrearReservas");
    },
    goToCrearCalificacion() {
      this.$router.push("/CrearCalificacion");
    },
    fetchCalificaciones() {
      const storedData = localStorage.getItem("userResult");
      this.userResult = JSON.parse(storedData);

      axios
        .get(
          "http://localhost:5023/api/v1/Calificacion/CalificacionUsuario?IdUsuario=" +
            this.userResult.idUsuario.toString()
        )
        .then((response) => {
          this.calificaciones = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    goToInicioCalificacion() {
      this.$router.push("/");
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
able {
  border-collapse: collapse;
  font-family: Tahoma, Geneva, sans-serif;
  width: 100%;
}
table td {
  padding: 10px;
}
table thead {
  background-color: #505152;
  color: #ffffff;
  font-weight: bold;
  font-size: 13px;
  border: 1px solid #54585d;
  height: 30px;
}
table tbody {
  color: #636363;
  border: 1px solid #dddfe1;
}
table tbody tr th {
  background-color: #ffffff;
  color: #ffffff;
}
table tbody tr td {
  background-color: #ffffff;
  color: #505152;
}

table tbody tr th:nth-child(odd) {
  background-color: #505152;
}

table tbody tr td:nth-child(odd) {
  background-color: #ffffff;
}
</style>
