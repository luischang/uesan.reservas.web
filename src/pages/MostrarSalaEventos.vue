<template>
  <div class="table-container">
    <div class="background-all"></div>
    <h2>SALA DE EVENTOS</h2>
    <table class="event-table">
      <thead>
        <tr>
          <th>Descripción</th>
          <th>Estado</th>
          <th>Tipo de Evento</th>
          <th>Precio</th>
          <th>Fecha de Inicio</th>
          <th>Fecha de Fin</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="sala in salas" :key="sala.idSalaEvento">
          <td>{{ sala.descripcion }}</td>
          <td :class="sala.estado ? 'disponible' : 'ocupado'">
            {{ sala.estado ? "Disponible" : "Ocupado" }}
          </td>
          <td>{{ getTipoEvento(sala.idTipoEvento) }}</td>
          <td class="precio">{{ sala.precio }}</td>
          <td>{{ formatFecha(sala.fechaInicio) }}</td>
          <td>{{ formatFecha(sala.fechaFin) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      salas: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      const salaEndpoint = "http://localhost:5023/api/SalaDeEventos/Traer";
      const detalleEndpoint =
        "http://localhost:5023/api/DetalleSalaDeEventos/GetAll";

      Promise.all([fetch(salaEndpoint), fetch(detalleEndpoint)])
        .then((responses) => {
          return Promise.all(responses.map((response) => response.json()));
        })
        .then((data) => {
          const salas = data[0];
          const detalles = data[1];

          this.salas = salas.map((sala) => {
            const detalle = detalles.find(
              (detalle) => detalle.idSalaEvento === sala.idSalaEvento
            );

            if (detalle) {
              sala.fechaInicio = detalle.fechaInicio;
              sala.fechaFin = detalle.fechaFin;
            }

            return sala;
          });
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
    getTipoEvento(idTipoEvento) {
      switch (idTipoEvento) {
        case 1:
          return "Conferencia";
        case 2:
          return "Boda";
        case 3:
          return "Reunión";
        default:
          return "Desconocido";
      }
    },
    formatFecha(fecha) {
      if (!fecha) {
        return ""; // Retornar cadena vacía si no hay fecha disponible
      }

      const date = new Date(fecha);
      const dia = date.getDate();
      const mes = date.getMonth() + 1;
      const anio = date.getFullYear();

      return `${dia}-${mes}-${anio}`;
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

.table-container {
  width: 100%;
  padding: 20px;

  max-width: 800px;
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px;
  /* font-family: "Poppins", sans-serif; */
  font-family: "Exo";
  color: #462c22;
  /* background-color: #fdf5f0; */
  background-color: rgba(290, 180, 160, 0.7);
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  margin-top: 50px;
  margin-bottom: 100px;
}

.event-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 18px;
}

.event-table th,
.event-table td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.event-table th {
  background-color: #f2f2f2;
}

.disponible {
  color: green;
  font-weight: bold;
}

.ocupado {
  color: red;
  font-weight: bold;
}

.precio {
  text-align: right;
}
h2 {
  font-weight: bold;
  text-align: center;
  color: #333;
  color: #462c22;
  font-size: 24px;
  margin-bottom: 5px;
}
</style>
