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
        <!-- <button @click="reservarSala(sala.id)">Reservar</button> -->
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
            "Amplio salón con capacidad para conferencias y banquetes." +
            "Este salón de eventos cuenta con un diseño espacioso y versátil, perfecto para albergar una variedad de eventos. Con una capacidad para 100 personas, es adecuado tanto para conferencias y seminarios como para celebraciones y banquetes.",
          imagen:
            "https://media-cdn.tripadvisor.com/media/photo-s/18/5e/5e/74/o-reuniones-don-lolo.jpg",
        },
        {
          id: 2,
          nombre: "Salón de Eventos B",
          capacidad: 50,
          descripcion:
            "Salón más íntimo ideal para reuniones ejecutivas." +
            "Este salón de eventos ofrece un espacio íntimo y exclusivo, perfecto para reuniones ejecutivas y eventos de menor escala. Con una capacidad para 50 personas, brinda un ambiente tranquilo y propicio para discusiones importantes y decisiones estratégicas.",
          imagen:
            "https://nuvosuites.com/sites/default/files/images/paragraphs/halfwidth-image-section/nuvosuites-meetings-events-517x370-conference-rooms-01.jpg",
        },
        {
          id: 3,
          nombre: "Salón de Eventos C",
          capacidad: 200,
          descripcion:
            "Salón espacioso para grandes eventos y convenciones." +
            "Este salón de eventos es perfecto para albergar grandes eventos y convenciones. Con una amplia capacidad para 200 personas, ofrece un espacio espacioso y versátil para acomodar a un gran número de asistentes.",
          imagen:
            "https://cdn0.matrimonio.com.pe/vendor/3379/3_2/960/jpg/espacios-para-bodas_v2.jpeg",
        },
      ],
    };
  },
  methods: {
    irAlDashboard() {
      this.$router.push("/Login");
    },
    reservarSala(salaId) {
      // Lógica para reservar la sala con el ID proporcionado
      console.log("Reservando sala con ID:", salaId);
    },
  },
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Exo:100,200,400);
.event-rooms-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  /* font-family: "Poppins", sans-serif; */
  font-family: "Exo";
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
  margin-right: 5px;
  position: left;
}

.event-room-image img {
  width: 100%;
  height: auto;
  margin-top: 80px;
}

.event-room-details {
  color: #fff;
  width: 550px;
  margin-left: 20px;
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
  position: right;
  text-align: justify;
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
