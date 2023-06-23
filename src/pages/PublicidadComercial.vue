<template>
  <div class="ad-container"></div>
</template>

<script>
export default {
  data() {
    return {
      anuncios: [
        {
          id: 1,
          titulo: "Oferta especial de verano",
          descripcion:
            "¡Reserva ahora y obtén un descuento del 20% en nuestras habitaciones de lujo! " +
            "No pierdas la oportunidad de vivir unas vacaciones inolvidables en nuestro hotel durante esta temporada de verano. ¡Reserva ahora y aprovecha nuestra oferta especial de verano antes de que se agoten las plazas!",
          imagen:
            "https://www.turisapps.com/public/www/images/blog-post/41.jpg?v=20150612120526",
          enlace: "https://www.ejemplo.com/oferta-verano",
        },
        {
          id: 2,
          titulo: "Nuevo menú del chef",
          descripcion:
            "Ven y disfruta de nuestras exquisitas creaciones culinarias con ingredientes frescos de temporada." +
            "Reserva tu mesa ahora y sumérgete en una experiencia culinaria inolvidable con nuestro nuevo menú del chef. Te garantizamos una velada llena de sabores extraordinarios y momentos memorables. ¡Te esperamos con los brazos abiertos en nuestro hotel!",
          imagen: "https://i.blogs.es/30cbec/fotojet-3/840_560.jpg",
          enlace: "https://www.ejemplo.com/nuevo-menu",
        },
        {
          id: 3,
          titulo: "Espacio para eventos",
          descripcion:
            "Organiza tus eventos empresariales o sociales en nuestras amplias y modernas salas de conferencias." +
            "Además, nuestro espacio para eventos está convenientemente ubicado en el corazón de la ciudad, lo que facilita el acceso tanto para los asistentes locales como para los visitantes de fuera de la ciudad.",
          imagen:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIQD6L4AymYJXgDPHFzR2b86nH2A4IebA7JA&usqp=CAU",
          enlace: "https://www.ejemplo.com/espacio-eventos",
        },
      ],
    };
  },
  methods: {
    irAlDashboard() {
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Exo:100,200,400);

.ad-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  /* font-family: "Poppins", sans-serif; */
  font-family: "Exo";
  color: #333;
  background-color: #eabe7c;
}

h2 {
  text-align: center;
  font-weight: bold;
  color: #333;
  font-size: 24px;
  margin-bottom: 20px;
}

.ad {
  display: flex;
  margin-bottom: 40px;
}

.ad-image {
  width: 240px;
  height: 200px;
  margin-top: 80px;
  margin-right: 20px;
}

.ad-details {
  color: #333;
}

h3 {
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 10px;
}

p {
  margin-bottom: 10px;
  font-size: 18px;
  text-align: justify;
}

.ad-link {
  color: #007bff;
  text-decoration: none;
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
