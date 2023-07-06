<template>
  <div class="container">
    <div class="title">Crear Calificacion</div>

    <q-card class="form-card">
      <q-card-section>
        <q-form @submit="crearCalificacion">
          <div class="form-group">
            <label for="recomendacion" class="form-label">Recomendacion</label>
            <q-input
              v-model="recomendacion"
              id="recomendacion"
              required
            ></q-input>
          </div>
          <div class="form-group">
            <label for="numEstrellas" class="form-label">
              Numero de Estrellas</label
            >
            <q-input
              type="number"
              v-model="numEstrellas"
              id="numEstrellas"
              required
            ></q-input>
          </div>
          <div class="button-container">
            <q-btn
              type="submit"
              label="Crear Calificacion"
              color="orange"
              class="create-btn"
            ></q-btn>
          </div>
        </q-form>
      </q-card-section>
      <q-card-actions align="around">
        <q-btn
          @click="goToRegresar"
          label="Regresar"
          color="orange"
          class="home-btn"
        ></q-btn>
        <q-btn
          @click="goToReporte"
          label="Reporte de Calificacion"
          color="primary"
          class="report-btn"
        ></q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      recomendacion: "",
      numEstrellas: "",
      IdReserva: "",
    };
  },
  methods: {
    crearCalificacion() {
      const storedData = localStorage.getItem("userResult");
      this.userResult = JSON.parse(storedData);

      var calificacion = {
        recomendacion: this.recomendacion,
        numEstrellas: this.numEstrellas,
        IdReserva: this.userResult.idUsuario,
      };

      axios
        .post("http://localhost:5023/api/v1/Calificacion", calificacion)
        .then((response) => {
          this.mostrarMensaje();
          this.recomendacion = "";
          this.numEstrellas = "";
        })
        .catch((error) => {
          this.$q.notify({
            message: "Error al crear la calificacicón",
            color: "negative",
          });
        });
    },
    mostrarMensaje() {
      this.$q.dialog({
        title: "Calificacion creada",
        message: "La calificacion se creó satisfactoriamente",
        ok: "Aceptar",
        color: "positive",
      });
    },
    goToRegresar() {
      this.$router.push("/MostrarCliente2");
    },
    goToReporte() {
      this.$router.push("/ReporteCalificacion");
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Exo:wght@400;700&display=swap");

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url("https://png.pngtree.com/thumb_back/fh260/background/20201104/pngtree-great-awesome-orange-background-design-image_459656.jpg"); /* Ruta de la imagen de fondo */
  background-size: cover;
  background-position: center;
}

.title {
  font-family: "Exo", sans-serif;
  font-weight: bold;
  font-size: 50px;
  text-align: center;
  margin-bottom: 24px;
  color: #fff; /* Color de texto del título */
}

.form-card {
  max-width: 400px;
  width: 100%;
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.form-group {
  margin-bottom: 16px;
}

.form-label {
  font-family: "Exo", sans-serif;
  font-size: 14px;
  font-weight: bold;
}

.button-container {
  display: flex;
  justify-content: center;
  margin-top: 24px;
}

.create-btn,
.report-btn,
.home-btn {
  font-family: "Exo", sans-serif;
  font-weight: bold;
  color: #fff;
  border-radius: 8px;
  padding: 10px 20px;
}

.create-btn {
  background-color: #e06e43;
}

.report-btn {
  background-color: #007bff;
}

.home-btn {
  background-color: #e06e43;
}

.q-input {
  width: 100%;
}

.q-checkbox {
  margin-top: 16px;
}
</style>
