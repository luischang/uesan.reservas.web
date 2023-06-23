<template>
  <div class="galery-container">
    <div class="centrado">
      <div style="text-align: right">
        <button class="Inicio-button" @click="irAlDashboard">Inicio</button>
      </div>
      <h2>Galeria</h2>
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
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIQD6L4AymYJXgDPHFzR2b86nH2A4IebA7JA&usqp=CAU",
        },
        {
          id: 2,
          imagen:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIQD6L4AymYJXgDPHFzR2b86nH2A4IebA7JA&usqp=CAU",
        },
        {
          id: 3,
          imagen:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIQD6L4AymYJXgDPHFzR2b86nH2A4IebA7JA&usqp=CAU",
        },
        {
          id: 4,
          imagen:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIQD6L4AymYJXgDPHFzR2b86nH2A4IebA7JA&usqp=CAU",
        },
        {
          id: 5,
          imagen:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIQD6L4AymYJXgDPHFzR2b86nH2A4IebA7JA&usqp=CAU",
        },
        {
          id: 6,
          imagen:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIQD6L4AymYJXgDPHFzR2b86nH2A4IebA7JA&usqp=CAU",
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.centrado {
  text-align: center;
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
  width: 30%;
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
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  font-family: "Poppins", sans-serif;
  color: #333;
  background-color: #eabe7c;
}
</style>
