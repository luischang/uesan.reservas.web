<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="main-toolbar">
        <q-toolbar-title class="Titleclass"> Site Reservas </q-toolbar-title>
        <boton class="custom-btn" @click="inicio">Inicio</boton>
        <boton class="custom-btn" @click="empresa">Empresa</boton>
        <boton class="custom-btn" @click="galeria">Galeria</boton>
        <boton class="custom-btn" @click="SalaEvento">Sala de Eventos </boton>
        <boton class="custom-btn" v-if="!userResult" @click="login"
          >Iniciar sesión</boton
        >
        <boton class="custom-btn" v-if="!userResult" @click="register"
          >Registrarse</boton
        >
        <boton class="custom-btn" v-if="userResult"
          >Bienvenido {{ name }}</boton
        >
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style>
@import url(https://fonts.googleapis.com/css?family=Exo:100,200,400);
.main-toolbar {
  background-color: #e06e43;
  color: #ffffff;
  padding: 20px 20px;
}
.Titleclass {
  font-family: "Exo";
  color: white;
  font-size: 35px;
}
.Text_bienv {
  font-size: 20px;
  font-family: "Exo";
  position: relative;
  top: 6px;
}
.custom-btn {
  position: relative;
  background-color: #e06e43;
  color: #ffffff;
  padding: 8px 20px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 16px;
  font-family: "Exo";
  margin-right: 10px; /* Espacio entre botones */
  outline: none;
  border-color: transparent;
}
.custom-btn:last-child {
  margin-right: 0; /* Elimina el margen del último botón */
}
.custom-btn:hover {
  background-color: #d9dd92;
}

.custom-btn:focus {
  outline: none;
  box-shadow: 0 0 0 3px #e06e43;
}
</style>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {},
  data() {
    return {
      userResult: "",
      usuario: {
        email: "",
        contraseña: "",
        nombre: "",
        apellido: "",
        direccion: "",
        telefono: "",
        estado: "",
        idTipo: "",
        idUsuario: "",
        puntos: "",
      },
      name: "",
    };
  },
  mounted() {
    this.checkUserResult();
    window.addEventListener("beforeunload", this.scheduleRemoval);
    window.addEventListener("beforeunload", this.removeUserResult);
  },
  beforeUnmount() {
    window.removeEventListener("beforeunload", this.removeUserResult);
    window.removeEventListener("beforeunload", this.scheduleRemoval);
  },
  methods: {
    checkUserResult() {
      const storedData = localStorage.getItem("userResult");
      if (storedData && storedData !== "undefined") {
        this.userResult = JSON.parse(storedData);
      }
    },
    scheduleRemoval() {
      const currentTime = new Date().getTime();
      localStorage.setItem("removalTime", String(currentTime + 1 * 60 * 1000)); // Agrega 1 minutos al tiempo actual

      window.setTimeout(() => {
        const removalTime = localStorage.getItem("removalTime");
        if (removalTime) {
          const currentTime = new Date().getTime();
          if (currentTime >= parseInt(removalTime)) {
            localStorage.removeItem("userResult");
            localStorage.removeItem("removalTime");
          }
        }
      }, 10 * 60 * 1000); // 10 minutos (en milisegundos)
    },

    login() {
      this.$router.push("/Login");
    },
    register() {
      this.$router.push("/register");
    },
    empresa() {
      this.$router.push("/empresa");
    },
    removeUserResult() {
      localStorage.removeItem("userResult");
    },
    inicio() {
      this.$router.push("/");
    },
    galeria() {
      this.$router.push("/galeria");
    },
    SalaEvento() {
      this.$router.push("/salaEventos");
    },
  },
});
</script>
