<template>
  <div class="galery-container">
    <div class="centrado">
      <h2 class="text_gale">Galeria</h2>
      <div class="galery">
        <div
          v-for="galeria in galerias"
          :key="galeria.id"
          class="imagen-container"
        >
          <img :src="galeria.imagen" class="imagen" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GalleryComponent",
  data() {
    return {
      galerias: [
        {
          id: 1,
          imagen:
            "https://cdn.forbes.com.mx/2021/12/hoteles-de-lujo-tres-e1639513889195-640x360.jpg",
        },
        {
          id: 2,
          imagen:
            "https://i.blogs.es/9bfb99/intercontinental-barcelona_salones/1366_2000.jpeg",
        },
        {
          id: 3,
          imagen:
            "https://www.eltiempo.com/files/article_multimedia/uploads/2018/04/06/5ac7ef6428291.jpeg",
        },
        {
          id: 4,
          imagen:
            "https://www.somosperu.org.pe/wp-content/uploads/2017/09/Hotel-Hilton-Lima-Miraflores.jpg",
        },
        {
          id: 5,
          imagen:
            "https://i0.wp.com/tucochinito.com/wp-content/uploads/2019/09/cuarto-lujo-hotel-1.jpg",
        },
        {
          id: 6,
          imagen:
            "https://www.ceupe.com/images/easyblog_articles/2539/b2ap3_large_Caractersticas-de-las-instalaciones-hoteleras.jpg",
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url(https://fonts.googleapis.com/css?family=Exo:100,200,400);
.centrado {
  text-align: center;
}
.text_gale {
  font-family: "Exo";
  color: white;
  font-weight: 520px;
}
.galery {
  display: flex;
  margin-bottom: 40px;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
}

.imagen-container {
  box-sizing: border-box;
  padding: 5px;
  width: 40%;
  height: 100%;
}

.imagen {
  float: left;
  padding-right: 10px;
  width: 80%;
}

.Inicio-button {
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

.galery-container {
  max-width: 1700px;
  margin: 0 auto;
  padding: 40px;
  font-family: "Poppins", sans-serif;
  color: #333;
  background-color: #eabe7c;
}
</style>
