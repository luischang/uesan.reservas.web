<template>
  <boton @click="set_inicio" class="button-corner animated-text">Inicio</boton>
  <div class="center-container">
    <h1 class="center-text animated-text">
      BIENVENIDO
      <span class="underlined animated-text">Estas a puertas</span>
      <span class="underlined animated-text">de muchas</span>
      <span class="underlined animated-text">aventuras</span>
    </h1>
    <div class="register-container">
      <div class="background-image"></div>
      <h3 class="register-text animated-container">Registro De Usuario</h3>
      <div
        @submit.prevent="submitForm"
        class="register-form animated-container"
      >
        <div class="form-group">
          <label for="email">Email:</label>
          <input
            type="email"
            id="email"
            v-model="form.email"
            required
            @input="isEmailValid"
          />
        </div>
        <div class="form-group">
          <label for="contraseña">Contraseña:</label>
          <input
            type="password"
            id="contraseña"
            v-model="form.contraseña"
            required
          />
        </div>
        <div class="form-group">
          <label for="nombre">Nombre:</label>
          <input type="text" id="nombre" v-model="form.nombre" required />
        </div>
        <div class="form-group">
          <label for="apellido">Apellido:</label>
          <input type="text" id="apellido" v-model="form.apellido" required />
        </div>
        <div class="form-group">
          <label for="direccion">Dirección:</label>
          <input type="text" id="direccion" v-model="form.direccion" required />
        </div>
        <div class="form-group">
          <label for="telefono">Teléfono:</label>
          <input type="tel" id="telefono" v-model="form.telefono" required />
        </div>
        <div class="form-group center-button">
          <button type="submit" @click="submitForm">Registrarse</button>
        </div>
        <p class="register-link">
          ¿Ya tienes una cuenta?
          <a @click="redireccionar">Iniciar sesión</a>
        </p>
      </div>
    </div>
  </div>
</template>

<style>
@import url(https://fonts.googleapis.com/css?family=Exo:100,200,400);
.center-container {
  display: flex;
  justify-content: right;
  align-items: center;
  height: 100vh;
  margin-right: 120px;
}
.register-container {
  max-width: 442px;
  padding: 20px;
  border-radius: 7px;
  background-color: rgba(0, 0, 0, 0.5);
}
.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("./src/assets/fondo.jpg");
  background-size: cover;
  background-position: center;
  opacity: 0.87; /* Ajusta el valor de opacidad aquí */
  z-index: -1;
}
.button-corner {
  position: absolute;
  top: 20px;
  left: 45px;
  padding: 10px;
  background-color: #eabe7c;
  border-radius: 3px;
  font-family: "Exo";
  font-size: 14px;
  color: white;
  cursor: pointer;
}
.button-corner:hover {
  background-color: #d9dd92;
}
.register-text {
  font-family: "Exo";
  text-align: center;
  color: #e06e43;
  font-size: 41px;
}
.register-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  display: flex;
  margin-bottom: 20px;
  justify-content: right;
}

.form-group label {
  margin-bottom: 10px;
  margin-right: 50px;
  color: #ece4b7;
  font-style: normal;
  font-family: "Exo";
  font-size: 19px;
}

.form-group input {
  padding: 7px;
  margin-bottom: 5px;
  border: 1px solid White;
  border-radius: 2px;
  font-family: "Exo";
  width: 250px;
}
.center-button {
  display: flex;
  justify-content: center;
}
.register-form button {
  padding: 10px 20px;
  background-color: #eabe7c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 25px;
  font-family: "Exo";
}

.register-form button:hover {
  background-color: #d9dd92;
}
.register-link {
  margin-top: 10px; /* Añade un espacio entre el botón y el texto */
  color: white;
  font-family: "Exo";
  text-align: center;
}

.register-link a {
  color: #d9dd92; /* Ajusta el color del enlace */
  text-decoration: underline; /* Añade subrayado al enlace */
  font-family: "Exo";
}
.center-text {
  font-size: 100px;
  font-family: "Exo";
  text-align: left;
  color: #e06e43;
  margin-top: 5px;
  margin-right: 600px;
  margin-left: 50px;
  position: fixed;
}
.underlined {
  border-bottom: 3px solid #fff;
  color: white;
}

.animated-text {
  display: inline-block;
  opacity: 0;
  animation: textFadeIn 1s ease-in-out forwards;
}
.animated-container {
  opacity: 0;
  transform: translateY(20px);
  animation: containerFadeIn 1s ease-in-out forwards;
}
@keyframes textFadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes containerFadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

<script>
import axios from "axios";

export default {
  name: "RegisterForm",
  data() {
    return {
      form: {
        email: "",
        contraseña: "",
        nombre: "",
        apellido: "",
        direccion: "",
        telefono: "",
      },
      valid: null,
    };
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
      notification.style.top = position === "top" ? "20px" : "";
      notification.style.left = "50%";
      notification.style.transform = "translateX(-50%)";
      notification.style.zIndex = "9999";
      document.body.appendChild(notification);
      setTimeout(function () {
        document.body.removeChild(notification);
      }, timeout);
    },
    set_inicio: function () {
      this.$router.push("/");
    },
    submitForm() {
      const hasNumber = /\d/.test(this.form.contraseña); // Verificar si hay al menos un número
      const hasUpperCase = /[A-Z]/.test(this.form.contraseña); // Verificar si hay al menos una letra mayúscula

      console.log(hasNumber);
      console.log(hasUpperCase);
      if (this.valid != true) {
        this.showNotification("Ingrese un correo valido", "red", "top", 3000);
        return;
      }

      if (!hasNumber || !hasUpperCase) {
        // Mostrar una notificación de error si no cumple con los requisitos
        this.showNotification(
          "La contraseña debe contener al menos un número y una letra mayúscula",
          "red",
          "top",
          3000
        );
        return; // Detener el proceso de inicio de sesión
      }

      if (this.form.nombre == "") {
        this.showNotification(
          "Verificar nombre, no dejar vacio",
          "red",
          "top",
          2000
        );
        return;
      } else if (this.form.apellido == "") {
        this.showNotification(
          "Verificar apellido, no dejar vacio",
          "red",
          "top",
          2000
        );
        return;
      } else if (this.form.direccion == "") {
        this.showNotification(
          "Verificar direccion, no dejar vacio",
          "red",
          "top",
          2000
        );
        return;
      } else if (this.form.telefono == "") {
        this.showNotification(
          "Verificar telefono, no dejar vacio",
          "red",
          "top",
          2000
        );
        return;
      }
      var url = "http://localhost:5023/api/Usuario/SignUp";

      axios
        .post(url, this.form)
        .then((response) => {
          console.log("Aquí va la respuesta " + JSON.stringify(response));
          this.showNotification("Registro correcto", "green", "top", 1000);
          this.$router.push("/Login");
        })
        .catch((error) => {
          console.log("Ocurrió un error " + error);
          this.showNotification("Ocurrió un error", "red", "top", 2000);
        });
    },
    redireccionar() {
      // Redireccionar al usuario a la página de inicio de sesión
      //window.location.href = "http://localhost:9000/?#/register";
      this.$router.push("/Login");
    },
    isEmailValid() {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/; // Expresión regular para validar el email
      this.valid = emailPattern.test(this.form.email);

      // if (this.valid != true) {
      //   this.showNotification(
      //     "Verificar Correo: ___@__.com",
      //     "red",
      //     "top",
      //     2000
      //   );
      // }
    },
  },
  computed: {},
};
</script>
