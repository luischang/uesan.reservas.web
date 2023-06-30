<template>
  <div class="container">
    <h5 class="title_cont">PAGO DE LA RESERVA</h5>
    <!-- Resto del código HTML -->

    <div class="payment-container">
      <h5>Detalles de Pago</h5>
      <p class="payment-label">Monto Total: {{ montoTotal }}</p>
      <p class="payment-label">Detalle de la Reserva: {{ reservaDetalle }}</p>

      <div class="payment-form">
        <label for="card-number">Número de tarjeta:</label>
        <input type="text" id="card-number" v-model="numeroTarjeta" pattern="[0-9]{16}" maxlength="16" placeholder="Ingrese el número de tarjeta (16 dígitos)" required />

        <label for="card-holder">Titular de la tarjeta:</label>
        <input type="text" id="card-holder" v-model="titularTarjeta" pattern="[A-Za-z\s]+" placeholder="Ingrese el titular de la tarjeta" required />

        <label for="expiration-date">Fecha de vencimiento:</label>
        <input type="text" id="expiration-date" v-model="fechaVencimiento" pattern="(0[1-9]|1[0-2])\/[0-9]{2}" placeholder="MM/YY" required />

        <label for="security-code">Código de seguridad:</label>
        <input type="text" id="security-code" v-model="codigoSeguridad" pattern="[0-9]{3}" maxlength="3" placeholder="Ingrese el código de seguridad (3 dígitos)" required />
      </div>

      <q-btn @click="realizarPago" color="primary">Realizar Pago</q-btn>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  // Resto de las propiedades y métodos de la página Pago.vue

  data() {
    return {
      // Resto de las propiedades existentes
      montoTotal: 0,
      reservaDetalle: "",
      numeroTarjeta: "",
      titularTarjeta: "",
      fechaVencimiento: "",
      codigoSeguridad: "",
    };
  },
  created() {
    const idReserva = this.$route.params.idReserva;
    // Realiza una petición HTTP o cualquier lógica necesaria para obtener los datos de la reserva
    // utilizando el ID de reserva que recibiste en la URL

    // Asigna los valores correspondientes a las propiedades montoTotal y reservaDetalle
    this.montoTotal = 100; // Ejemplo de valor para el monto total
    this.reservaDetalle = "Reserva de habitación"; // Ejemplo de detalle de reserva
  },
  methods: {
    // Resto de los métodos existentes

    realizarPago() {
      const url = "http://localhost:5023/api/v1/Pago";

      const data = {
        montoTotal: this.montoTotal,
        reservaDetalle: this.reservaDetalle,
        numeroTarjeta: this.numeroTarjeta,
        titularTarjeta: this.titularTarjeta,
        fechaVencimiento: this.fechaVencimiento,
        codigoSeguridad: this.codigoSeguridad,
      };

      axios
        .post(url, data)
        .then(response => {
          // Manejar la respuesta del pago exitoso
          console.log("Pago realizado correctamente");
          this.$router.push("/confirmacionPago");
        })
        .catch(error => {
          // Manejar el error del pago
          console.error("Ocurrió un error durante el pago:", error);
        });
    },
  },
};
</script>
<style>
@import url(https://fonts.googleapis.com/css?family=Exo:100,200,400);
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-family: "Exo";
}

.title_cont {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
  font-family: "Exo";
}

.payment-container {
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  font-family: "Exo";
}

.payment-container h5 {
  font-size: 18px;
  margin-bottom: 10px;
  font-family: "Exo";
}

.payment-label {
  margin-bottom: 5px;
}

.payment-form {
  margin-bottom: 20px;
}

.payment-form label {
  display: block;
  margin-bottom: 5px;
}

.payment-form input[type="text"] {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

.q-btn {
  background-color: #2196f3;
  color: #fff;
  padding: 10px 20px;
  border-radius: 3px;
  cursor: pointer;
}

.q-btn:hover {
  background-color: #0d8ae8;
}
</style>