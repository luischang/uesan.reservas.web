<template>
  <div class="servicio-container">
    <button class="home-button" @click="irAlDashboard">Home</button>
    <h2>Servicios Disponibles</h2>
    <div v-for="servicio in servicios" :key="servicio.id" class="servicio">
      <div class="servicio-image">
        <img :src="servicio.imagen" :alt="servicio.nombre" />
      </div>
      <div class="servicio-details">
        <h3>{{ servicio.nombre }}</h3>
        <p>{{ servicio.descripcion }}</p>
        <p>Precio: {{ servicio.precio }}</p> <!-- Agregado: Mostrar el precio -->
        <button @click="agregarServicio(servicio.id)">Agregar</button> <!-- Agregado: Botón Agregar -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      servicios: [
        {
          id: 1,
          nombre: "Desayuno",
          descripcion: "¡Descubre el delicioso desayuno! Nuestro buffet ofrece una amplia variedad de panes frescos, pasteles, cereales, frutas, jugos naturales y opciones calientes como huevos revueltos, tocino y salchichas. También atendemos dietas especiales. Disfruta de bebidas premium como café recién molido y tés. ¡Comienza tu día con una experiencia culinaria excepcional en un ambiente acogedor y amigable!",
          estado: true,
          precio: "$ 200",
          imagen: "https://i.blogs.es/41884d/desayuno_continental/1366_2000.jpg",
        },
        {
          id: 2,
          nombre: "Servicio de habitación",
          descripcion: "Te ofrecemos un servicio de limpieza de habitaciones excepcional. Nuestro equipo profesional se encarga de mantener tu habitación impecable y ordenada, cambiando sábanas y toallas diariamente. Además, nos preocupamos por tu comodidad y privacidad, adaptándonos a tus preferencias. Si necesitas algo adicional, nuestro personal está siempre dispuesto a ayudarte. ¡Disfruta de una estancia impecable!",
          estado: true,
          precio: "$ 70",
          imagen: "https://images.ecestaticos.com/NOByjyQi2aB6h2wpMlEjHGqDwiM=/0x0:2121x1414/600x450/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fc05%2F0f2%2F607%2Fc050f26072df7955d7d08818f68f9c58.jpg",
        },
        {
          id: 3,
          nombre: "Servicio de bebidas",
          descripcion: "Disfruta de un servicio de bebidas excepcional. Nuestro bar ofrece una amplia variedad de cócteles, vinos finos y bebidas sin alcohol. Nuestro personal estará encantado de ayudarte a elegir la opción perfecta para ti. Relájate y disfruta de momentos refrescantes durante tu estadía en nuestro acogedor ambiente.",
          estado: true,
          precio: "$ 100",
          imagen: "https://laedudigital.files.wordpress.com/2020/10/pexels-photo-605408.jpeg",
        },
      ],
    };
  },
  methods: {
    irAlDashboard() {
      this.$router.push("/Login");
    },
    agregarServicio(servicioId) {
      // Lógica para agregar el servicio al carrito con el ID proporcionado
      console.log("Agregando servicio con ID:", servicioId);
    },
  },
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Exo:100,200,400);
.servicio-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  font-family: "Exo";
  color: #333;
  background-color: #eabe7c;
}

.servicio {
  display: flex;
  margin-bottom: 40px;
  align-items: center;
}

.servicio-image {
  width: 200px;
  margin-right: 20px;
}

.servicio-image img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
}

.servicio-details {
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
