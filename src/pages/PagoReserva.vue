<template>
  <div class="container">
    <h5 class="title_cont">RESERVAS</h5>
    <!-- Resto del código HTML -->

    <div class="payment-container">
      <h5>Detalles de Pago</h5>
      <p>Monto Total: {{ montoTotal }}</p>
      <p>Detalle de la Reserva: {{ reservaDetalle }}</p>
      <q-btn @click="realizarPago" color="primary">Realizar Pago</q-btn>
    </div>
  </div>
</template>

<style>
/* Estilos CSS existentes */

.payment-container {
  margin-top: 20px;
  border: 1px solid #ccc;
  padding: 10px;
}
</style>

<script>
import axios from "axios";

export default {
  // Resto de las propiedades y métodos existentes

  data() {
    return {
      // Resto de las propiedades existentes
      montoTotal: 0,
      reservaDetalle: "",
    };
  },
  methods: {
    // Resto de los métodos existentes

    realizarPago() {
      const url = "http://localhost:5023/api/v1/Pago";

      const data = {
        montoTotal: this.montoTotal,
        reservaDetalle: this.reservaDetalle,
      };

      axios
        .post(url, data)
        .then(response => {
          // Manejar la respuesta del pago exitoso
          console.log("Pago realizado correctamente");
        })
        .catch(error => {
          // Manejar el error del pago
          console.error("Ocurrió un error durante el pago:", error);
        });
    },
  },
};
</script>
