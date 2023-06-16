<template>
  <div class="event-rooms-container">
    <button class="home-button" @click="irAlDashboard">Home</button>
    <h2>Salas de Eventos</h2>
    <div v-for="sala in salas" :key="sala.id" class="event-room">
      <div class="event-room-image">
        <img :src="sala.imagen" :alt="sala.nombre" />
      </div>
      <div class="event-room-details">
        <h3>{{ sala.nombre }}</h3>
        <p>Capacidad: {{ sala.capacidad }}</p>
        <p>Descripción: {{ sala.descripcion }}</p>
        <button @click="reservarSala(sala.id)">Reservar</button>
      </div>
    </div>
  </div>
</template>

<script>
// import Vue from "vue";
// import VueRouter from "vue-router";
// Vue.use(VueRouter);
//import Empresa from "src/pages/Empresa.vue";

export default {
  data() {
    return {
      salas: [
        {
          id: 1,
          nombre: "Salón de Eventos A",
          capacidad: 100,
          descripcion:
            "Amplio salón con capacidad para conferencias y banquetes.",
          imagen:
            "https://media-cdn.tripadvisor.com/media/photo-s/18/5e/5e/74/o-reuniones-don-lolo.jpg",
        },
        {
          id: 2,
          nombre: "Salón de Eventos B",
          capacidad: 50,
          descripcion: "Salón más íntimo ideal para reuniones ejecutivas.",
          imagen:
            "https://nuvosuites.com/sites/default/files/images/paragraphs/halfwidth-image-section/nuvosuites-meetings-events-517x370-conference-rooms-01.jpg",
        },
        {
          id: 3,
          nombre: "Salón de Eventos C",
          capacidad: 200,
          descripcion: "Salón espacioso para grandes eventos y convenciones.",
          imagen:
            "https://cdn0.matrimonio.com.pe/vendor/3379/3_2/960/jpg/espacios-para-bodas_v2.jpeg",
        },
      ],
    };
  },
  methods: {
    irAlDashboard() {
      this.$router.push("/");
    },
    reservarSala(salaId) {
      // Lógica para reservar la sala con el ID proporcionado
      console.log("Reservando sala con ID:", salaId);
    },
  },
};
</script>

<style scoped>
.event-rooms-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  font-family: "Poppins", sans-serif;
  color: #333;
  background-color: #eabe7c;
}

.event-room {
  display: flex;
  margin-bottom: 40px;
  align-items: center;
}

.event-room-image {
  width: 200px;
  margin-right: 20px;
}

.event-room-image img {
  width: 100%;
  height: auto;
}

.event-room-details {
  color: #fff;
}

h2 {
  font-weight: bold;
  text-align: center;
  color: #333;
  font-size: 24px;
  margin-bottom: 20px;
}

h3 {
  font-weight: bold;
  color: #333;
  font-size: 20px;
  margin-bottom: 10px;
}

p {
  margin-bottom: 18px;
  color: #333;
  line-height: 1.6;
}

button {
  background-color: #e06e43;
  color: #fff;
  border: none;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
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
</style>
