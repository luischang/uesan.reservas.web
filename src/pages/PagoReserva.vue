<template>
  <div class="pago-container">
    <h2>Detalles del Pago</h2>
    <div class="pago-details">
      <h3>Resumen de la compra:</h3>
      <div v-for="item in carrito" :key="item.id" class="carrito-item">
        <p>{{ item.nombre }}</p>
        <p>Precio: {{ item.precio }}</p>
      </div>
      <h3>Monto total:</h3>
      <p>{{ montoTotal }}</p>
    </div>
    <div class="pago-form">
      <h3>Ingrese los datos del pago:</h3>
      <form @submit="realizarPago">
        <div class="form-group">
          <label for="nombre">Nombre completo:</label>
          <input type="text" id="nombre" v-model="nombre" required />
        </div>
        <div class="form-group">
          <label for="tarjeta">Número de tarjeta:</label>
          <input type="text" id="tarjeta" v-model="numeroTarjeta" required maxlength="16" />
        </div>
        <div class="form-group">
          <label for="vencimiento">Fecha de vencimiento:</label>
          <input type="date" id="vencimiento" v-model="fechaVencimiento" required />
        </div>
        <div class="form-group">
          <label for="cvv">CVV:</label>
          <input type="text" id="cvv" v-model="cvv" required maxlength="3" />
        </div>
        <button type="submit">Realizar Pago</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carrito: [], // Aquí se deben colocar los datos del carrito de compras
      nombre: "",
      numeroTarjeta: "",
      fechaVencimiento: "",
      cvv: "",
      montoTotal: ""
    };
  },
  created() {
    this.obtenerMontoTotal();
  },
  methods: {
    calcularTotal() {
      let total = 0;
      for (let item of this.carrito) {
        total += parseFloat(item.precio);
      }
      return "$ " + total.toFixed(2);
    },
    obtenerMontoTotal() {
      fetch("http://localhost:5023/api/v1/Pago")
        .then(response => response.json())
        .then(data => {
          this.montoTotal = data.montoTotal;
        })
        .catch(error => {
          console.error("Error al obtener el monto total:", error);
        });
    },
    realizarPago() {
      // Aquí se pueden agregar acciones para procesar el pago,
      // como enviar los datos a un servidor o realizar cálculos adicionales.
      console.log("Pago realizado");
      // Luego de procesar el pago, se puede redirigir a otra página
      this.$router.push("/ConfirmacionPago");
    }
  }
};
</script>

<style scoped>
.pago-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  font-family: "Exo";
  color: #333;
  background-color: #eabe7c;
}

.pago-details {
  margin-bottom: 40px;
}

.carrito-item {
  margin-bottom: 10px;
  padding: 10px;
  background-color: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
}

.pago-form {
  text-align: center;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  padding: 8px;
  font-size: 16px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: #333;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
