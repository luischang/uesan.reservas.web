<template>
  <div class="container">
    <div class="title">Crear Queja</div>

    <q-card class="form-card">
      <q-card-section>
        <q-form @submit="crearQueja">
          <div class="form-group">
            <label for="descripcion" class="form-label">Descripción</label>
            <q-input v-model="descripcion" id="descripcion" required></q-input>
          </div>
          <div class="button-container">
            <q-btn
              type="submit"
              label="Crear Queja"
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
      </q-card-actions>
    </q-card>
    <q-notification
      v-model="showNotification"
      color="green"
      position="top"
      message="La queja ha sido enviada"
    ></q-notification>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      descripcion: "",
      showNotification: false,
      fecha: new Date().toISOString().slice(0, 10),
      IdUsuario: "",
    };
  },
  methods: {
    mostrarNotificacion() {
      var notification = document.createElement("div");
      notification.textContent = "La queja ha sido enviada";
      notification.style.backgroundColor = "green";
      notification.style.color = "#fff";
      notification.style.padding = "10px";
      notification.style.borderRadius = "4px";
      notification.style.boxShadow = "0 2px 6px rgba(0, 0, 0, 0.15)";
      notification.style.position = "fixed";
      notification.style.bottom = "20px";
      notification.style.left = "50%";
      notification.style.transform = "translateX(-50%)";
      notification.style.zIndex = "9999";
      document.body.appendChild(notification);
    },
    crearQueja() {
      const storedData = localStorage.getItem("userResult");
      this.userResult = JSON.parse(storedData);

      var quejas = {
        descripcion: this.descripcion,
        fecha: new Date().toISOString().slice(0, 10),
        IdUsuario: this.userResult.idUsuario,
      };

      axios
        .post("http://localhost:5023/api/Quejas/Crear", quejas)
        .then((response) => {
          this.mostrarMensaje();
          this.descripcion = "";
          this.showNotification = true;
        })
        .catch((error) => {
          this.$q.notify({
            message: "Error al crear la queja",
            color: "negative",
          });
        });
    },
    mostrarMensaje() {
      this.$q.dialog({
        title: "Queja creada",
        message: "La queja se creó satisfactoriamente",
        ok: "Aceptar",
        color: "positive",
      });
    },
    goToRegresar() {
      this.$router.push("/MostrarCliente");
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
