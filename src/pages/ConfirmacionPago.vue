<template>
    <div class="confirmation-page">
      <div class="confirmation-content">
        <img src="https://o.remove.bg/downloads/3cfc1605-73a5-4d3a-b8bc-1d0875784534/image-removebg-preview.png" alt="Imagen de Confirmación" class="confirmation-image">
        <h1>Confirmación de Pago Exitoso</h1>
        <p>¡Gracias por tu reserva! Tu pago ha sido confirmado exitosamente.</p>
        <p>¡Esperamos que disfrutes tu estadía!</p>
        <q-btn color="primary" label="Regresar al Inicio" @click="regresarInicio" class="return-btn" />
      </div>
    </div>
  </template>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Exo:wght@400;700&display=swap');
  
  .confirmation-page {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    font-family: 'Exo', sans-serif;
    background-color: #f9f9f9;
  }
  
  .confirmation-content {
    max-width: 600px;
    padding: 40px;
    text-align: center;
    background-color: #f9f9f9;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .confirmation-page h1 {
    font-size: 32px;
    margin-bottom: 20px;
  }
  
  .confirmation-page p {
    font-size: 20px;
    margin-bottom: 20px;
  }
  
  .confirmation-image {
    max-width: 300px;
    margin-bottom: 30px;
  }
  
  .return-btn {
    font-size: 18px;
  }
  </style>
  
  <script>
  export default {
    methods: {
      regresarInicio() {
        this.$router.push('/login');
      }
    }
  };
  </script>
  