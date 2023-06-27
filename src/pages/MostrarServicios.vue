<template>
    <div class="event-rooms-container">
      <div class="background-all"></div>
      <!-- <button class="home-button" @click="irAlDashboard">Home</button> -->
      <h2>Servicios Adicionales</h2>
      <div v-for="sala in salas" :key="sala.id" class="event-room">
        <div class="event-room-image">
          <img :src="sala.imagen" :alt="sala.nombre" />
        </div>
        <div class="event-room-details">
          <h3>{{ sala.nombre }}</h3>
          <p>{{ sala.descripcion }}</p>
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
            nombre: "Servicio de Desayuno",
            descripcion:
              "¡Descubre el delicioso desayuno! Nuestro buffet ofrece una amplia variedad de panes frescos, pasteles, cereales, frutas, jugos naturales y opciones calientes como huevos revueltos, tocino y salchichas. También atendemos dietas especiales. Disfruta de bebidas premium como café recién molido y tés. ¡Comienza tu día con una experiencia culinaria excepcional en un ambiente acogedor y amigable!",
            imagen:
              "https://i.blogs.es/41884d/desayuno_continental/450_1000.jpg",
          },
          {
            id: 2,
            nombre: "Servicio de Habitación",
            descripcion:
              "Te ofrecemos un servicio de limpieza de habitaciones excepcional. Nuestro equipo profesional se encarga de mantener tu habitación impecable y ordenada, cambiando sábanas y toallas diariamente. Además, nos preocupamos por tu comodidad y privacidad, adaptándonos a tus preferencias. Si necesitas algo adicional, nuestro personal está siempre dispuesto a ayudarte. ¡Disfruta de una estancia impecable!",
            imagen:
              "https://images.ecestaticos.com/0Ep72t7Ltl74fs-FikzplatHRS8=/0x0:2121x1414/600x315/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fc05%2F0f2%2F607%2Fc050f26072df7955d7d08818f68f9c58.jpg",
          },
          {
            id: 3,
            nombre: "Servicio de bebidas",
            descripcion:
              "Disfruta de un servicio de bebidas excepcional. Nuestro bar ofrece una amplia variedad de cócteles, vinos finos y bebidas sin alcohol. Nuestro personal estará encantado de ayudarte a elegir la opción perfecta para ti. Relájate y disfruta de momentos refrescantes durante tu estadía en nuestro acogedor ambiente.",
            imagen:
              "https://s3.amazonaws.com/a-us.storyblok.com/f/1005231/1b61993d30/royal-caribbean-international_beverage-package_drinks_beer_128836.jpg",
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
        console.log("Reservando servicio con ID:", salaId);
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
  .event-rooms-container {
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
  .event-room {
    display: flex;
    margin-bottom: 20px;
    align-items: center;
  }
  .event-room-image {
    width: 240px;
    margin-right: 5px;
    position: left;
  }
  .event-room-image img {
    height: auto;
    width: 120%;
    height: 150%;
    margin-top: 80px;
    border-radius: 10px;
  }
  .event-room-details {
    color: #fff;
    width: 550px;
    margin-left: 20px;
    width: 700px;
    margin-left: 55px;
  }
  h2 {
    font-weight: bold;
    text-align: center;
    color: #333;
    color: #462c22;
    font-size: 24px;
    margin-bottom: 5px;
  }
  h3 {
    font-weight: bold;
    color: #462c22;
    font-size: 20px;
    margin-bottom: 10px;
  }
  p {
    margin-bottom: 18px;
    /* color: #333; */
    color: #462c22;
    line-height: 1.6;
    position: right;
    text-align: justify;
    font-size: 20px;
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
    top: 120px;
    right: 20px;
    background-color: #e06e43;
    color: #fff;
    border: none;
    padding: 8px 16px;
    font-size: 16px;
    cursor: pointer;
  }
  </style>
  