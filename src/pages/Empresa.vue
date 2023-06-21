<template>
  <div class="empresa-de-reservas">
    <div class="background-image"></div>
    <div class="seccion">
      <h2 class="subtitulo subtitulo-mision">Misión</h2>
      <div class="contenido contenido-mision">
        <img class="imagen" src="https://1.bp.blogspot.com/-OtWV__nesfE/WbzAZzOan9I/AAAAAAAAA1g/D5inpZNZP_kHsAQ2BDgGv2ZBx3xRNTEXwCLcBGAs/s1600/buear_phototour21.jpg" alt="Misión de la Empresa">
        <p class="parrafo">Nuestra misión es brindar a nuestros clientes una experiencia de reserva eficiente, conveniente y confiable. Nos esforzamos por simplificar el proceso de reserva, ya sea para viajes, alojamiento, eventos u otras actividades, proporcionando un servicio de alta calidad y una plataforma fácil de usar. Nuestro objetivo es superar las expectativas de nuestros clientes y convertirnos en su opción preferida para todas sus necesidades de reserva.</p>
        <button class="boton-regresar" @click="goToInicio">Regresar al inicio</button>
      </div>
    </div>

    <div class="seccion">
      <h2 class="subtitulo subtitulo-vision">Visión</h2>
      <div class="contenido contenido-vision">
        <img class="imagen" src="https://static1.eskypartners.com/travelguide/Fotolia_34714418_S.jpg" alt="Visión de la Empresa">
        <p class="parrafo">Nuestra visión es ser líderes en la industria de reservas, ofreciendo soluciones innovadoras que mejoren la forma en que las personas planifican y reservan sus actividades. Buscamos constantemente nuevas oportunidades para expandir nuestra oferta y utilizar tecnologías emergentes para ofrecer una experiencia más personalizada y adaptada a las necesidades individuales de cada cliente. Queremos ser reconocidos como la marca de confianza en el sector de reservas, siempre enfocados en la excelencia del servicio al cliente.</p>
      </div>
    </div>

    <div class="seccion">
      <h2 class="subtitulo subtitulo-resena">Reseña</h2>
      <div class="contenido contenido-resena">
        <img class="imagen" src="https://blog.gaya.mx/hubfs/GAYA-Blog_Hoteler%C3%ADa-06032023-cover_blog-v1.jpg" alt="Reseña de la Empresa">
        <p class="parrafo">Nuestra empresa de reservas es una plataforma en línea que permite a los usuarios reservar una amplia gama de servicios, desde vuelos y hoteles hasta entradas para eventos y actividades turísticas. Nuestro enfoque principal es facilitar el proceso de reserva para nuestros clientes, brindándoles acceso rápido y sencillo a una variedad de opciones y garantizando una experiencia sin complicaciones. A través de nuestra plataforma intuitiva y amigable, los usuarios pueden comparar diferentes opciones de reserva, leer reseñas y recomendaciones, y seleccionar la opción que mejor se adapte a sus necesidades. Trabajamos en estrecha colaboración con una extensa red de proveedores y socios para garantizar que nuestros clientes tengan acceso a tarifas competitivas y disponibilidad actualizada. Nuestro compromiso con la excelencia en el servicio al cliente nos distingue.</p>
      </div>
    </div>

    <q-footer class="footer">
      <p class="derechos">Derechos de autor © 2023. Nombre de la Empresa de Reservas. Todos los derechos reservados.</p>
    </q-footer>

    <button class="boton-regresar" @click="goToInicio">Regresar al inicio</button>
  </div>
</template>

<script>
export default {
  name: 'EmpresaDeReservas',
  methods: {
    goToInicio() {
      this.$router.push('/dashboard');
    }
  }
}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Exo:wght@400;700&display=swap');

body {
  margin: 0;
  padding: 0;
}

.empresa-de-reservas {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  font-family: 'Exo', sans-serif;
  color: #333;
  background-color: transparent;
  position: relative;
}

.subtitulo {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 30px;
  text-align: center;
  color: #311e10;
}

.subtitulo-mision {
  background-color: #eabe7c;
}

.subtitulo-vision {
  background-color: #eabe7c;
}

.subtitulo-resena {
  background-color: #eabe7c;
}

.seccion {
  margin-bottom: 60px;
}

.contenido {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.imagen {
  max-width: 45%;
  height: auto;
  margin-right: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.parrafo {
  font-size: 18px;
  line-height: 1.6;
  text-align: justify;
}

.footer {
  text-align: center;
  margin-top: 40px;
}

.derechos {
  font-size: 14px;
  color: #311e10;
}

.background-image {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('https://images.vexels.com/content/126394/preview/flat-travel-luggage-backdrop-57fc02.png');
  background-size: cover;
  background-repeat: no-repeat;
  z-index: -1;
  filter: blur(10px);
}

.contenido-mision {
  background-color: #eabe7c;
  padding: 20px;
  border-radius: 5px;
}

.contenido-vision {
  background-color: #eabe7c;
  padding: 20px;
  border-radius: 5px;
}

.contenido-resena {
  background-color: #eabe7c;
  padding: 20px;
  border-radius: 5px;
}

.boton-regresar {
  position: absolute;
  top: 5px;
  right: -10px;
  padding: 10px;
  background-color: #ff5c00;
  color: white;
  border: none;
  font-family: "Exo";
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
}

</style>
