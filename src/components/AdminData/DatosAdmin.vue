<template>
  <div class="containerData" :class="{ 'fade-in': showContainer }">
    <h4 class="text_tittle">Mis Datos Personales:</h4>
    <h6 class="text_cont">
      Nombre: {{ userResult.nombre }} {{ userResult.apellido }} <br />
      Email: {{ userResult.email }} <br />
      Direccion: {{ userResult.direccion }} <br />
      Telefono: {{ userResult.telefono }} <br />
      TipoUsuario: {{ nameTipo?.descripcion }}
    </h6>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "DatosAdmin",
  data() {
    return {
      userResult: "",
      TipoUsuario: null,
      nameTipo: null,
      prueba: null,
      showContainer: false,
    };
  },
  created() {
    this.getUsuario();
    this.getTipoUsuario();
  },
  methods: {
    showNotification: function (message, color, position, timeout) {
      var notification = document.createElement("div");
      notification.textContent = message;
      notification.style.backgroundColor = color;
      notification.style.color = "#fff";
      notification.style.padding = "10px";
      notification.style.borderRadius = "4px";
      notification.style.boxShadow = "0 2px 6px rgba(0, 0, 0, 0.15)";
      notification.style.position = "fixed";
      notification.style.bottom = position === "bottom" ? "20px" : "";
      notification.style.top = position === "top" ? "95px" : "";
      notification.style.left = "50%";
      notification.style.transform = "translateX(-50%)";
      notification.style.zIndex = "9999";
      document.body.appendChild(notification);
      setTimeout(function () {
        document.body.removeChild(notification);
      }, timeout);
    },
    getUsuario() {
      const storeData = localStorage.getItem("userResult");
      this.userResult = JSON.parse(storeData);
    },
    getTipoUsuario() {
      axios
        .get("http://localhost:5023/api/TipoUsuario/Traer")
        .then((response) => {
          this.prueba = response.data;
          localStorage.setItem("usuarioTipo", JSON.stringify(response.data));
        })
        .catch((error) => {
          console.log("Ocurrió un error " + error);
        });
      this.nameTipo = this.getName();
    },
    getName() {
      const storeData = localStorage.getItem("usuarioTipo");
      this.TipoUsuario = JSON.parse(storeData);
      return this.TipoUsuario.find(
        (TipoUsuario) => TipoUsuario.idTipo === parseInt(this.userResult.idTipo)
      );
    },
  },
  mounted() {
    // Agregar una clase para activar la animación después de un breve retraso
    setTimeout(() => {
      this.showContainer = true;
    }, 200);
  },
};
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Exo:100,200,400);
.text_tittle {
  font-family: "Exo";
  margin-top: 20px;
  margin-left: 20px;
}
.text_cont {
  font-family: "Exo";
  margin-left: 20px;
  padding: 5px 5px;
}
.containerData {
  background-color: burlywood;
  padding: 20px;
  color: black;
  opacity: 0;
  transition: opacity 0.5s;
}
.fade-in {
  opacity: 1;
}
</style>
