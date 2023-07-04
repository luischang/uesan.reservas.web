<template>
  <div class="form-main">
    <div class="background-all"></div>
    <h2>Crear Habitación</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="descripcion">Descripción:</label>
        <textarea
          id="descripcion"
          v-model="habitacion.descripcion"
          required
        ></textarea>
      </div>

      <div class="form-group">
        <label for="capacidad">Capacidad:</label>
        <input
          type="number"
          id="capacidad"
          v-model="habitacion.capacidad"
          min="1"
          required
        />
      </div>
      <div class="form-group">
        <label for="precio">Precio:</label>
        <input
          type="number"
          id="precio"
          v-model="habitacion.precio"
          min="1"
          required
        />
      </div>

      <div class="form-group">
        <label for="cant_Camas">Cantidad de Camas:</label>
        <input
          type="number"
          id="cant_Camas"
          v-model="habitacion.cant_Camas"
          min="1"
          required
        />
      </div>

      <div class="form-group">
        <label for="id_TipoHabi">Tipo de Habitación:</label>
        <select
          id="id_TipoHabi"
          v-model="habitacion.tipoHabitacion.id_TipoHabi"
          required
        >
          <option value="1">Simple</option>
          <option value="2">Doble</option>
          <option value="3">Matrimonial</option>
        </select>
      </div>

      <button type="submit">Guardar</button>
    </form>
    <div
      v-if="showAlert"
      class="alert"
      :style="{ backgroundColor: alertColor }"
    >
      {{ alertMessage }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      habitacion: {
        descripcion: "",
        capacidad: 1, // Se cambió el valor inicial a 1
        cant_Camas: 1, // Se cambió el valor inicial a 1
        tipoHabitacion: {
          id_TipoHabi: 0,
          descripcion: "string",
        },
      },
      showAlert: false,
      alertMessage: "",
      alertColor: "#67c23a", // Cambiar a verde: #67c23a
    };
  },
  methods: {
    submitForm() {
      const url = "http://localhost:5023/api/Habitacion/CreateHabitacion";

      // Realizar la solicitud HTTP POST
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.habitacion),
      })
        .then((response) => {
          if (response.ok) {
            console.log("Habitación creada exitosamente");
            // Mostrar mensaje de alerta
            this.alertMessage =
              "La creación de la habitación se realizó correctamente!!!";
            this.showAlert = true;
            // Reiniciar el formulario
            this.habitacion = {
              descripcion: "",
              capacidad: 1, // Se cambió el valor inicial a 1
              precio: 1, // Se cambió el valor inicial a 1
              cant_Camas: 1, // Se cambió el valor inicial a 1
              tipoHabitacion: {
                id_TipoHabi: 0,
                descripcion: "string",
              },
            };
            setTimeout(() => {
              this.showAlert = false;
            }, 3000);
          } else {
            console.error("Error al crear la habitación");
          }
        })
        .catch((error) => {
          console.error("Error en la solicitud:", error);
        });
    },
  },
};
</script>

<style>
/* Estilos de formulario personalizados */
@import url(https://fonts.googleapis.com/css?family=Exo:100,200,400);

.background-all {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("./src/assets/fondo3.jpeg");
  background-size: cover;
  background-position: center;
  opacity: 0.9;
  z-index: -1;
}

.form-main {
  max-width: 600px;
  margin: 0 auto;
  padding: 40px;
  font-family: "Exo";
  color: #333;
  position: center;
  background-color: rgba(290, 180, 160, 0.7);
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  margin-top: 80px;
  margin-bottom: 100px;
}
.form-group {
  margin-bottom: 1rem;
  max-width: 215px;
  font-size: 18px;
}

label {
  display: block;
  font-weight: bold;
}

input[type="text"],
textarea,
select {
  width: 100%;
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
}

button[type="submit"] {
  background-color: #e06e43;
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: #f3b163;
}

h2 {
  margin-bottom: 1rem;
  text-align: center;
}

.alert {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #67c23a; /* Agregar color de fondo verde */
  color: #fff; /* Agregar color de texto blanco */
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 4px;
}
</style>
