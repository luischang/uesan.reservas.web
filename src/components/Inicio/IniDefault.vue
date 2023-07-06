<template>
  <head>
    <title></title>
  </head>
  <div>
    <img
      class="title-image"
      src="https://static.vecteezy.com/system/resources/previews/002/309/754/non_2x/thailand-landmarks-with-tourist-on-elephant-vector.jpg"
    />
    <h2 class="font-title">Reserva tu habitacion ideal ahora mismo</h2>
  </div>
  <body>
    <div class="date-picker-container">
      <div class="dark-overlay"></div>
      <div class="date-picker-content">
        <div class="form-group">
          <label for="fechaInicio" class="fecha_color">Fecha de inicio:</label>
          <input type="date" v-model="fechaInicio" class="form-control" />
        </div>
        <div class="form-group">
          <label for="fechaTermino" class="fecha_color"
            >Fecha de término:</label
          >
          <input type="date" v-model="fechaTermino" class="form-control" />
        </div>
      </div>
      <boton class="for-button" @click="set_login">Buscar</boton>
    </div>
    <div class="parr_container">
      <p class="font-parrafo1">
        ¡Bienvenidos a Site Reservas, el lugar donde tus sueños de viaje se
        hacen realidad! En nuestro sitio web, encontrarás una amplia selección
        de alojamientos de ensueño en los destinos más fascinantes. Desde
        acogedores bed and breakfasts hasta lujosos resorts frente al mar,
        tenemos el lugar perfecto para que disfrutes de unas vacaciones
        inolvidables. Nuestro objetivo es brindarte la mejor experiencia de
        reserva posible, con un proceso rápido, seguro y sin complicaciones.
      </p>
    </div>
    <div>
      <h3 class="font-subtitulo1">Nuestras mejores Areas</h3>
    </div>
    <div class="gallery">
      <button class="buttones" @click="previousImage">&lt;</button>
      <img :src="currentImage" alt="Gallery Image" />
      <button class="buttones" @click="nextImage">&gt;</button>
    </div>
    <h3 class="font-subtitulo2" text-align="center">Testimonios</h3>
    <div class="testimonial-container">
      <div class="testimonial-slide" :style="slideStyles">
        <div
          class="testimonial"
          v-for="testimonial in testimonials"
          :key="testimonial.id"
        >
          <img :src="testimonial.image" :alt="testimonial.name" />
          <p class="testimonial-text">{{ testimonial.quote }}</p>
          <p class="testimonial-name">- {{ testimonial.name }}</p>
        </div>
        <p class="Testimonial_espacio"></p>
      </div>
    </div>

    <div>
      <!-- Botón para abrir la ventana emergente -->
      <!-- Ventana emergente -->
      <Modal v-if="showModal">
        <div
          @click="set_login"
          @mouseover="addHandCursor"
          @mouseleave="removeHandCursor"
        >
          <h3>Ofertas Unicas</h3>
          <ul>
            <li v-for="oferta in ofertas" :key="oferta.id">
              <p>{{ oferta.descripcion }}</p>
              <p>Descuento en soles: {{ oferta.descuento }}</p>
              <p>Empieza: {{ formatDate(oferta.fechaIni) }}</p>
              <p>Termina: {{ formatDate(oferta.fechaFin) }}</p>
            </li>
          </ul>
        </div>
        <button @click="closeModal" class="for-buttonModal">
          Cerrar ventana emergente
        </button>
      </Modal>
    </div>

    <div class="footer-container">
      <div class="footer-content">
        <p>Todos los derechos reservados &copy; 2023 Site Reservas</p>
        <p>
          <a href="http://localhost:9000/?#/politicaPrivacidad"
            >Politica de Empresa</a
          >
          |
        </p>
      </div>
    </div>
  </body>
</template>

<style>
@import url(https://fonts.googleapis.com/css?family=Exo:100,200,400);

.parr_container {
  max-width: 650px;
  margin-left: 750px;
  padding: 20px;
  text-align: justify;
  background-color: #d48208;
  border-radius: 4px;
  position: relative;
  bottom: 250px;
}

.font-parrafo1 {
  font-family: "Exo";
  font-size: 18px;
  color: White;
  position: relative;
  /* Agrega aquí cualquier otra propiedad de estilo que desees aplicar */
}
.fecha_color {
  color: white;
  font-family: "Exo";
}
.title-image {
  width: 1550px;
  height: 250px;
  z-index: -1;
  filter: saturate(1.5);
  box-shadow: 0 0 10px 10px rgba(240, 240, 203, 0.5);
}
.font-title {
  font-family: "Exo";
  color: #e15a29;
  font-size: 60px;
  font-weight: bolder;
  margin-left: 50px;
  top: 90px;
  position: absolute;
}
.font-subtitulo1 {
  font-family: "Exo";
  color: #e15a29;
  font-size: 40px;
  font-weight: bolder;
  margin-left: 50px;
  position: relative;
  bottom: 150px;
}
.font-subtitulo2 {
  font-family: "Exo";
  color: #e15a29;
  font-size: 40px;
  font-weight: bolder;
  margin-left: 50px;
  position: relative;
  bottom: 330px;
}
.date-picker-container {
  display: flex;
  justify-content: left;
  align-items: center;
  height: 25vh;
  position: relative;
  left: 70px;
  top: -60px;
}

.dark-overlay {
  position: absolute;
  top: 0;
  left: -20px;
  width: 24%;
  height: 100%;
  background-color: #d48208; /* Ajusta el nivel de opacidad aquí */
  margin-right: 120px;
  border-radius: 4px;
}

.date-picker-content {
  position: relative;
}

.form-group {
  margin-bottom: 1rem;
  font-family: "Exo";
  color: #311e10;
}
.form-control {
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-family: "Exo";
  line-height: 1.5;
  color: rgb(0, 0, 0);
  background-color: #ffffff;
  background-clip: padding-box;
  border: 1px solid #d9dd92;
  border-radius: 3px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.form-control:focus {
  color: #495057;
  background-color: #ffffff;
  border-color: #d9dd92;
  outline: 0;
  box-shadow: 0 0 0 0.2rem d9dd92;
}
.for-button {
  padding: 8px 16px;
  background-color: #d48208;
  color: white;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 25px;
  font-family: "Exo";
  margin-left: 30%;
  position: absolute;
}
.for-button:hover {
  background-color: #d9dd92;
}
.for-buttonModal {
  padding: 8px 16px;
  background-color: #d48208;
  color: white;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 25px;
  font-family: "Exo";
  position: absolute;
}
.for-buttonModal:hover {
  background-color: #d9dd92;
}
.gallery {
  display: flex;
  align-items: center;
  position: relative;
  left: 720px;
  bottom: 320px;
}

.gallery img {
  width: 350px;
  height: 250px;
  object-fit: cover;
  margin-right: 2px;
}

.buttones {
  font-size: 20px;
  font-family: "Exo";
  padding: 15px;
  margin: 10px;
  background-color: #eabe7c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.buttones:hover {
  background-color: #e15a29;
}

.testimonial-container {
  width: 100%;
  overflow: hidden;
  position: relative;
  text-align: center;
  padding: 20px;
  bottom: 320px;
  margin-inline-start: 40px;
}
.Testimonial_espacio {
  position: relative;
  margin-bottom: 40px;
}

.testimonial-slide {
  display: flex;
  transition: transform 0.5s ease-in-out;
}
.hand-cursor {
  cursor: pointer;
}
.testimonial img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
}
.testimonial-text {
  font-size: 18px;
  margin-bottom: 10px;
  font-family: "Exo";
}

.testimonial-name {
  font-size: 16px;
  font-weight: "Exo";
}
.footer-container {
  background-color: #111; /* Color de fondo oscuro */
  color: #fff; /* Color del texto */
  padding: 20px;
}

.footer-content {
  max-width: 1500px;
  margin: 0 auto;
  text-align: center;
}

.footer-content p {
  margin-bottom: 10px;
}

.footer-content a {
  color: #fff; /* Color de los enlaces */
  text-decoration: none;
  margin: 0 5px;
}

.footer-content a:hover {
  text-decoration: underline;
}
</style>

<script>
import Modal from "./OfertaModal.vue";
import axios from "axios";

export default {
  components: {
    Modal,
  },
  data() {
    return {
      showModal: true,
      ofertas: [],
      fechaInicio: null,
      fechaTermino: null,
      images: [
        "https://elcomercio.pe/resizer/IGs9bk4tCK2kPWOhgtXPFurwifk=/980x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/MIS5PX64YFAJ5HODU6NFHA25DU.jpg",
        "data:image/jpeg;base64,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",
        "https://cnnespanol.cnn.com/wp-content/uploads/2022/05/http___cdn.cnn_.com_cnnnext_dam_assets_220509100150-03-tripadvisor-top-hotels-tulemar-bungalows-villas.jpg?quality=100&strip=info",
        "https://www.mexicodesconocido.com.mx/wp-content/uploads/2018/05/Boutique-by-the-Museo_alberca_1200.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ3fHOqpMT773XnhpG9Gx53HRDxwa3_Ve0TCfuC-uSYxcRnfoD42W8HgNg_F8dQVG4xMw&usqp=CAU",
      ],
      currentIndex: 0,
      testimonials: [
        {
          id: 1,
          image:
            "https://mymodernmet.com/wp/wp-content/uploads/2021/01/morphy-me-celebrity-face-mashups-15.jpg",
          name: "francés Benji",
          quote:
            "La experiencia en Site Reservas fue increíble. Los alojamientos son de primera calidad y el servicio al cliente es excepcional. ¡Recomendado!",
        },
        {
          id: 2,
          image:
            "https://mymodernmet.com/wp/wp-content/uploads/2021/01/morphy-me-celebrity-face-mashups-2.jpg",
          name: "Idris Elba",
          quote:
            "No puedo decir lo suficiente sobre Site Reservas. Han superado mis expectativas en cada viaje. Definitivamente seguiré reservando con ellos en el futuro.",
        },
        {
          id: 3,
          image:
            "https://mymodernmet.com/wp/wp-content/uploads/2021/01/morphy-me-celebrity-face-mashups-4.jpg",
          name: "Lady Gaga",
          quote:
            "Site Reservas me ha proporcionado siempre una estancia cómoda y sin complicaciones. ¡El equipo es increíble!",
        },
        {
          id: 4,
          image:
            "https://mymodernmet.com/wp/wp-content/uploads/2021/01/morphy-me-celebrity-face-mashups-10.jpg",
          name: "Emma Watson",
          quote:
            "Mis vacaciones con Site Reservas fueron inolvidables. El alojamiento era espectacular y el entorno simplemente hermoso.",
        },
        {
          id: 5,
          image:
            "https://mymodernmet.com/wp/wp-content/uploads/2021/01/morphy-me-celebrity-face-mashups-12.jpg",
          name: "Leonardo Dicaprio ",
          quote:
            "Siempre recurro a Site Reservas cuando quiero encontrar el lugar perfecto para relajarme. Nunca me decepcionan.",
        },
        {
          id: 6,
          image:
            "https://mymodernmet.com/wp/wp-content/uploads/2021/01/morphy-me-celebrity-face-mashups-5.jpg",
          name: "Natalie Portman",
          quote:
            "Site Reservas ofrece una amplia gama de opciones de alojamiento que se adaptan a cualquier tipo de viaje. ¡Siempre los recomendaré!",
        },
        {
          id: 7,
          image:
            "https://mymodernmet.com/wp/wp-content/uploads/2021/01/morphy-me-celebrity-face-mashups-17.jpg",
          name: "Zendaya",
          quote:
            "¡Qué experiencia maravillosa tuve con Site Reservas! Me ayudaron a planificar mi viaje de principio a fin, y todo salió perfecto.",
        },
        {
          id: 8,
          image:
            "https://mymodernmet.com/wp/wp-content/uploads/2021/01/morphy-me-celebrity-face-mashups-18.jpg",
          name: "Winona Ryder ",
          quote:
            "He viajado por todo el mundo y puedo decir que Site Reservas es una de las mejores plataformas de reservas que he utilizado. ¡No te decepcionará!",
        },
        {
          id: 9,
          image:
            "https://mymodernmet.com/wp/wp-content/uploads/2021/01/morphy-me-celebrity-face-mashups-3.jpg",
          name: "Donald Glover",
          quote:
            "Los alojamientos de Site Reservas son siempre de alta calidad y brindan una experiencia excepcional. ¡No puedo esperar para reservar mi próximo viaje con ellos!",
        },
        {
          id: 10,
          image:
            "https://mymodernmet.com/wp/wp-content/uploads/2021/01/morphy-me-celebrity-face-mashups-1.jpg",
          name: "Sophie Turner",
          quote:
            "Site Reservas se ha convertido en mi opción número uno para reservar alojamientos. Siempre encuentro lugares encantadores a precios competitivos.",
        },
        {
          id: 11,
          image:
            "https://mymodernmet.com/wp/wp-content/uploads/2021/01/morphy-me-celebrity-face-mashups-14.jpg",
          name: "Saoirse Ronan",
          quote:
            "La experiencia en Site Reservas fue increíble. Los alojamientos son de primera calidad y el servicio al cliente es excepcional. ¡Recomendado!",
        },
        {
          id: 12,
          image:
            "https://mymodernmet.com/wp/wp-content/uploads/2021/01/morphy-me-celebrity-face-mashups-7.jpg",
          name: "Jamie Dornan",
          quote:
            "No puedo decir lo suficiente sobre Site Reservas. Han superado mis expectativas en cada viaje. Definitivamente seguiré reservando con ellos en el futuro.",
        },
      ],
      slideIndex: 0,
      slideWidth: 0,
    };
  },
  methods: {
    previousImage() {
      this.currentIndex =
        (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    set_login: function () {
      this.$router.push("/Login");
    },
    openModal() {
      axios
        .get("http://localhost:5023/api/v1/Ofertas")
        .then((response) => {
          this.ofertas = response.data;
          localStorage.setItem("ofertasResult", JSON.stringify(response.data));
          this.showModal = true;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    closeModal() {
      this.showModal = false;
    },
    formatDate(value) {
      const options = { year: "numeric", month: "2-digit", day: "2-digit" };
      return new Date(value).toLocaleDateString("es-ES", options);
    },
    addHandCursor() {
      // Agregar una clase que define el cursor como una mano de hacer clic
      this.$el.classList.add("hand-cursor");
    },
    removeHandCursor() {
      // Remover la clase del cursor cuando el ratón sale del contenedor
      this.$el.classList.remove("hand-cursor");
    },
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex];
    },
  },
  mounted() {
    this.openModal(); // Llama a la función openModal automáticamente al cargar el componente
  },
};
</script>
