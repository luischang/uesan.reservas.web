<template>
  <div class="confirmation-page">
    <div class="confirmation-content">
      <img
        src="data:image/png;base64,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"
        alt="Imagen de Confirmación"
        class="confirmation-image"
      />
      <h1>Confirmación de Pago Exitoso</h1>
      <p>¡Gracias por tu reserva! Tu pago ha sido confirmado exitosamente.</p>
      <p>¡Esperamos que disfrutes tu estadía!</p>
      <q-btn
      color="orange"
        label="Regresar al Inicio"
        @click="regresarInicio"
        class="return-btn"
      />
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Exo:wght@400;700&display=swap");

.confirmation-page {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: "Exo", sans-serif;
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
      const arrayVacio = [];
      localStorage.setItem("habitacionesSeleccionadas", JSON.stringify(arrayVacio));
      localStorage.setItem("IdReservaCreation", JSON.stringify(arrayVacio));
      localStorage.setItem("SalaEventosSeleccionadas", JSON.stringify(arrayVacio));
      localStorage.setItem("servicioSeleccionado", JSON.stringify(arrayVacio));
      setTimeout(function() {
        console.log("Este mensaje se mostrará después de 2 segundos");
      }, 2000);
      this.$router.push("/reservasOrder");
    },
  },
};
</script>
