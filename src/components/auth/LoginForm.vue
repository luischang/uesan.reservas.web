<template>
  <div class="page-container">
    <div class="background-image"></div>
    <boton @click="set_inicio" class="button-corner animated-text"
      >Inicio</boton
    >
    <h1 class="center-text animated-text">
      SITE <span class="underlined animated-text">RESERVAS</span>
    </h1>
    <div class="login-container animated-container">
      <h2 class="login-title">Bienvenido</h2>
      <img
        class="profile-image"
        src="https://us.123rf.com/450wm/tanyastock/tanyastock1608/tanyastock160801788/61152108-icono-de-usuario-s%C3%ADmbolo-de-la-persona-humana-se%C3%B1al-de-entrada-avatar-gris-icono-banda-plana-en.jpg?ver="
        alt="Imagen de perfil"
      />
      <form class="login-form" @submit="login">
        <div class="form-group">
          <label for="email" class="text-input">Usuario:</label>
          <input
            class="form-input"
            type="email"
            id="email"
            v-model="email"
            required
          />
        </div>
        <div class="form-group">
          <label for="password" class="text-input">Contraseña:</label>
          <input
            class="form-input"
            type="password"
            id="password"
            v-model="password"
            required
          />
        </div>
        <button @click="login" class="login-button" type="submit">
          Ingresar
        </button>
        <p class="register-link">
          ¿No tienes una cuenta?
          <a @click="redireccionar">Registrarse</a>
        </p>
        <div id="notification-container" class="notification"></div>
      </form>
    </div>
  </div>
</template>

<style>
@import url(https://fonts.googleapis.com/css?family=Exo:100,200,400);

.page-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("./src/assets/hola-transformed.jpeg");
  background-size: cover;
  background-position: center;
  opacity: 0.87; /* Ajusta el valor de opacidad aquí */
  z-index: -1;
}
.animation-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
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
.login-container {
  max-width: 500px;
  margin-left: 750px;
  padding: 20px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
}

.login-title {
  margin-bottom: 20px;
  color: #e06e43;
  font-style: normal;
  font-family: "Exo";
  font-size: 50px;
}

.text-input {
  margin-bottom: 10px;
  color: #ece4b7;
  font-style: normal;
  font-family: "Exo";
  font-size: 19px;
}

.profile-image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 20px;
}

.login-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: bold;
}

.form-input {
  padding: 7px;
  border: 1px solid white;
  border-radius: 5px;
  width: 350px;
  text-align: left;
  font-family: "Exo";
}

.login-button {
  padding: 8px 16px;
  background-color: #eabe7c;
  color: white;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 25px;
  font-family: "Exo";
}

.login-button:hover {
  background-color: #d9dd92;
}

.register-link {
  margin-top: 10px; /* Añade un espacio entre el botón y el texto */
  color: white;
  font-family: "Exo";
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
  margin-right: 650px;

  position: absolute;
}
.underlined {
  border-bottom: 3px solid #fff;
  color: white;
}

.animated-text {
  display: inline-block;
  opacity: 0;
  animation: textFadeIn 1.1s ease-in-out forwards;
}
.animated-container {
  opacity: 0;
  transform: translateY(20px);
  animation: containerFadeIn 1.1s ease-in-out forwards;
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
.notification-container {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
}

.notification {
  color: #fff;
  font-family: "Exo";
  font-weight: 15px;
  padding: 12px;
  border-radius: 4px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  margin-bottom: 10px;
  font-family: Arial, sans-serif;
}

.notification:last-child {
  margin-bottom: 0;
}
</style>

<script>
import axios from "axios";
export default {
  name: "LoginForm",
  data() {
    return {
      email: "",
      password: "",
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
    login: function () {
      var url = "http://localhost:5023/api/Usuario/SignIn";
      var data = {
        email: this.email,
        contraseña: this.password,
      };
      axios
        .post(url, data)
        .then((response) => {
          console.log("Aquí va la respuesta " + JSON.stringify(response));
          localStorage.setItem("userResult", JSON.stringify(response.data));
          this.showNotification(
            "Inicio de sesión correcta",
            "green",
            "top",
            100
          );
          setTimeout(() => {
            // Verificar si el correo electrónico es "@admin"
            if (response.data.idTipo === 1) {
              this.$router.push("/reportAdmin");
            } else {
              this.$router.push("/reservasOrder");
            }
          }, 170);
        })
        .catch((error) => {
          console.log("Ocurrió un error " + error);
          localStorage.removeItem("userResult");
          this.showNotification("Ocurrió un error", "red", "top", 2000);
        });
    },
    redireccionar() {
      // Redireccionar al usuario a la página de inicio de sesión
      //window.location.href = "http://localhost:9000/?#/register";
      this.$router.push("/register");
    },
  },
};
</script>
