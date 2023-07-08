<template>
  <h4 class="style_tittle">Seccion de reportes y creación</h4>

  <div class="container_underlind">
    <h7 class="style_subtittle">Crear Ofertas</h7>
    <q-btn class="botonQ" @click="CrearOferta">Registrar Oferta</q-btn>
  </div>

  <div class="container_underlind">
    <h7 class="style_subtittle">Reporte de Ofertas</h7>
    <q-btn class="botonQ" @click="ReporOferta">Reportar Oferta</q-btn>
  </div>

  <div class="container_underlind">
    <h7 class="style_subtittle">Crear Habitaciones</h7>
    <q-btn class="botonQ" @click="creaHabit">Registrar Habitacion</q-btn>
  </div>

  <div class="container_underlind">
    <h7 class="style_subtittle">Reporte de Habitaciones</h7>
    <q-btn class="botonQ" @click="ReporHabit">Reportar Habitacion</q-btn>
  </div>

  <div class="container_underlind">
    <h7 class="style_subtittle">Reporte de Quejas</h7>
    <q-btn class="botonQ" @click="ReporQuejas">Reportar Quejas</q-btn>
  </div>
</template>

<script>
export default {
  name: "CreacionesAndReportes",
  data() {
    return {
      data: null,
    };
  },
  methods: {
    CrearOferta() {
      this.$router.push("/crearOfertas");
    },
    ReporOferta() {
      this.$router.push("/reporteOfertas");
    },
    creaHabit() {
      this.$router.push("/crearHabitacion");
    },
    ReporHabit() {
      this.$router.push("/reporteHabitaciones");
    },
    ReporQuejas() {
      this.$router.push("/reporteQuejas");
    },
  },
};
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Exo:100,200,400);
.style_tittle {
  font-family: "Exo";
  font-size: 40px;
  text-align: center;
}
.style_subtittle {
  font-family: "Exo";
  margin-left: 20px;
  font-size: 30px;
}
.botonQ {
  position: absolute;
  margin-left: 380px;
  font-family: "Exo";
  color: white;
  background-color: #d48208;
  left: 250px;
}
.botonQ:hover {
  color: black;
  background-color: #d9dd92;
}
.container_underlind {
  border-bottom: 1px solid black; /* Estilo de la línea */
  width: 50%; /* Ancho de la línea */
  margin-top: 20px;
}
</style>
