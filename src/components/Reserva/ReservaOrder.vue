<template>
  <div class="container">
    <h5 class="title_cont">RESERVAS</h5>
    <div class="form-group" @submit="set_reserva()">
      <label for="fechaInicio">Fecha de inicio:</label>
      <input type="date" id="fecha_Inicio" v-model="fecha_Inicio" required />
      <div><h2 class="espacio_cont"></h2></div>
      <label for="fechaFin">Fecha de fin:</label>
      <input type="date" id="fecha_Fin" v-model="fecha_Fin" required />
    </div>

    <div class="form-group">
      <label for="numAdultos">Número de adultos:</label>
      <input type="number" id="num_Adultos" v-model="num_Adultos" required />
      <div><h2 class="espacio_cont"></h2></div>
      <label for="numNinos">Número de niños:</label>
      <input type="number" id="num_Ninos" v-model="num_Ninos" required />
    </div>
    <button @click="set_reserva()" class="btn-reservar" type="submit">
      Reservar
    </button>
  </div>
  <div class="group_selection">
    <div>
      <h5 class="group_text">Seleccionar <br />habitación</h5>
      <bottom @click="openModal">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2636/2636428.png"
          alt="CHECK"
          class="img_button"
        />
      </bottom>
      <modal-component
        v-if="showModal"
        @close-modal="closeModal"
      ></modal-component>
    </div>
    <div>
      <h5 class="group_text">Seleccionar <br />servicios adicionales</h5>
      <bottom>
        <img
          src="https://cdn-icons-png.flaticon.com/512/2636/2636428.png"
          alt="CHECK"
          class="img_button"
        />
      </bottom>
    </div>
    <div>
      <h5 class="group_text">Seleccionar <br />sala de eventos</h5>
      <bottom>
        <img
          src="https://cdn-icons-png.flaticon.com/512/2636/2636428.png"
          alt="CHECK"
          class="img_button"
        />
      </bottom>
    </div>
    <div>
      <h5 class="group_text">Ver oferta <br />agregada</h5>
      <bottom>
        <img
          src="https://cdn-icons-png.flaticon.com/512/2636/2636428.png"
          alt="CHECK"
          class="img_button"
        />
      </bottom>
    </div>
  </div>
</template>

<style>
@import url(https://fonts.googleapis.com/css?family=Exo:100,200,400);
.title_cont {
  position: relative;
  font-family: "Exo";
  background-color: white;
  margin-top: 0;
  margin-bottom: 10px;
}
.container {
  border: 1px solid #ccc;
  padding: 20px;
  width: 700px;
  margin: 0 auto;
  top: 50px;
  position: relative; /* Necesario para posicionar el botón correctamente */
}

.form-group {
  display: flex;
  align-items: center;
  margin-bottom: 7px;
}
.group_selection {
  display: flex;
  flex-direction: row;
  font-family: "Exo";
  top: 60px;
  left: 24%;
  position: relative;
}
.group_text {
  font-family: "Exo";
  font-size: 20px;
  margin-right: 105px;
}
.img_button {
  width: 40px;
  white: 40px;
  border: transparent;
}
label {
  flex: 1;
  margin-right: 25px;
  font-family: "Exo";
}

input {
  position: relative;
  flex: 2;
  padding: 5px;
  box-sizing: border-box;
  font-family: "Exo";
  width: -10px;
}

.btn-reservar {
  background-color: #d48208;
  color: white;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 50px;
  right: -190px;
  width: 120px;
  font-family: "Exo";
  font-size: 25px;
}

.btn-reservar:hover {
  background-color: #d9dd92;
  color: black;
}
.espacio_cont {
  margin-right: 30px;
  position: relative;
}
</style>

<script>
import axios from "axios";
import ModalComponent from "./SelectHabitacion.vue";
export default {
  name: "ReservaOrden",
  components: {
    ModalComponent,
  },
  data() {
    return {
      showModal: false,
      fechaInicio: "",
      fechaFin: "",
      numAdultos: 0,
      numNinos: 0,
      Form_reserva: {
        idUsuario: 0,
        fechaIni: "",
        fechaFin: "",
        idEstadoRes: 0,
        cantPersonas: 0,
        idOfertas: 0,
      },
      randomItem: null,
    };
  },
  methods: {
    set_reserva: function () {
      const storedData = localStorage.getItem("userResult");
      this.userResult = JSON.parse(storedData);

      const fechaInicio = this.fecha_Inicio;
      const fechaFin = this.fecha_Fin;
      if (fechaFin < fechaInicio) {
        this.showNotification(
          "La fecha fin no puede ser antes que la fecha inicio",
          "red",
          "top",
          2000
        );
      } else {
        this.Form_reserva.idUsuario = this.userResult.idUsuario;
        this.Form_reserva.cantPersonas = this.num_Adultos + this.num_Ninos;
        this.Form_reserva.fecha_Inicio = this.fecha_Inicio;
        this.Form_reserva.fecha_Fin = this.fecha_Fin;
        this.Form_reserva.idEstadoRes = 1;
        this.Form_reserva.idOfertas = this.getRandomItem;

        var url = "http://localhost:5023/api/v1/ReservasOrder/Crear";

        axios
          .post(url, this.Form_reserva)
          .then((response) => {
            console.log("Aquí va la respuesta " + JSON.stringify(response));
            this.showNotification("Registro correcto", "green", "top", 1000);
            this.$router.push("/Login");
          })
          .catch((error) => {
            console.log("Ocurrió un error " + error);
            this.showNotification("Ocurrió un error", "red", "top", 2000);
          });
      }
    },
    getRandomItem() {
      if (this.ofertasResult && this.ofertasResult.length > 0) {
        const randomIndex = Math.floor(
          Math.random() * this.ofertasResult.length
        );
        this.randomItem = this.ofertasResult[randomIndex].idOfertas;
      }
    },
    showNotification: function (message, color, position, timeout) {
      var notification = document.createElement("div");
      notification.textContent = message;
      notification.style.backgroundColor = color;
      notification.style.color = "#fff";
      notification.style.padding = "10px";
      notification.style.borderRadius = "4px";
      notification.style.boxShadow = "0 2px 6px rgba(0, 0, 0, 0.15)";
      notification.style.position = "fixed";
      notification.style.bottom = position === "bottom" ? "20px" : "";
      notification.style.top = position === "top" ? "95px" : "";
      notification.style.left = "50%";
      notification.style.transform = "translateX(-50%)";
      notification.style.zIndex = "9999";
      document.body.appendChild(notification);
      setTimeout(function () {
        document.body.removeChild(notification);
      }, timeout);
    },
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
  },
};
</script>
