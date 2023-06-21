<template>
  <div class="confirmation-page">
    <div class="confirmation-content">
      <img src="http://sistemas.opb.gob.mx/epredialopb/img/gracias-pago.jpg" alt="Imagen de Confirmación" class="confirmation-image">
      <h1>Confirmación de Pago Exitoso</h1>
      <p>¡Gracias por tu reserva! Tu pago ha sido confirmado exitosamente.</p>
      <p>¡Esperamos que disfrutes tu estadía!</p>
      <q-btn label="Regresar al Inicio" @click="regresarInicio" class="return-btn" />
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
  background-image: url('https://png.pngtree.com/thumb_back/fh260/background/20201104/pngtree-great-awesome-orange-background-design-image_459656.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  color: #311e10;
}

.confirmation-content {
  max-width: 600px;
  padding: 40px;
  text-align: center;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #311e10;
}

.confirmation-page h1 {
  font-size: 32px;
  margin-bottom: 20px;
  color: #311e10;
}

.confirmation-page p {
  font-size: 20px;
  margin-bottom: 20px;
  color: #311e10;
}

.confirmation-image {
  max-width: 300px;
  margin-bottom: 30px;
}

.return-btn {
  font-size: 18px;
  background-color: #ff5c00;
  color: white;
  font-family: "Exo";
  font-weight: bold;
  cursor: pointer;
}
</style>

<script>
export default {
  methods: {
    regresarInicio() {
      this.$router.push('/dashboard');
    }
  }
};
</script>
