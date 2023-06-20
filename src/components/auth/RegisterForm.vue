<template>
  <div class="center-container">
    <h1 class="center-text animated-text">
      BIENVENIDO
      <span class="underlined animated-text">Estas a puertas</span>
      <span class="underlined animated-text">de muchas</span>
      <span class="underlined animated-text">aventuras</span>
    </h1>
    <div class="register-container">
      <div class="background-image"></div>
      <h2 class="register-text animated-container">Registro De Usuario</h2>
      <div
        @submit.prevent="submitForm"
        class="register-form animated-container"
      >
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="form.email" required />
        </div>
        <div class="form-group">
          <label for="contrasena">Contraseña:</label>
          <input
            type="text"
            id="contrasena"
            v-model="form.contrasena"
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
          <button type="submit">Registrarse</button>
        </div>
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
  max-width: 470px;
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
.register-text {
  font-family: "Exo";
  text-align: center;
  color: #e06e43;
}
.register-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  margin-bottom: 10px;
  margin-right: 30px;
  color: #ece4b7;
  font-style: normal;
  font-family: "Exo";
  font-size: 19px;
}

.form-group input {
  padding: 7px;
  margin-bottom: 5px;
  border: 1px solid White;
  border-radius: 4px;
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
export default {
  data() {
    return {
      form: {
        email: "",
        contrasena: "",
        nombre: "",
        apellido: "",
        direccion: "",
        telefono: "",
      },
    };
  },
  methods: {
    submitForm() {
      // Aquí puedes realizar la lógica para enviar los datos al servidor
      // o realizar las operaciones necesarias con los datos del formulario
      console.log(this.form); // Ejemplo: imprimir los datos en la consola
    },
  },
};
</script>
