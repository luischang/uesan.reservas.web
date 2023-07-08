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
      <input
        type="number"
        id="num_Adultos"
        v-model="num_Adultos"
        required
        @input="validarNumero1"
      />
      <div><h2 class="espacio_cont"></h2></div>
      <label for="numNinos">Número de niños:</label>
      <input
        type="number"
        id="num_Ninos"
        v-model="num_Ninos"
        required
        @input="validarNumero2"
      />
    </div>
    <button @click="set_reserva()" class="btn-reservar" type="submit">
      Reservar
    </button>
  </div>
  <div class="group_selection">
    <div>
      <h5 class="group_text">Seleccionar <br />habitación</h5>
      <bottom @click="openModal1">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2636/2636428.png"
          alt="CHECK"
          class="img_button"
        />
      </bottom>
      <modal-component
        v-if="showModal1"
        @close-modal="closeModal1"
      ></modal-component>
    </div>
    <div>
      <h5 class="group_text">Seleccionar <br />servicios adicionales</h5>
      <bottom @click="openModal2">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2636/2636428.png"
          alt="CHECK"
          class="img_button"
        />
      </bottom>
      <modal-component2
        v-if="showModal2"
        @close-modal="closeModal2"
      ></modal-component2>
    </div>
    <div>
      <h5 class="group_text">Seleccionar <br />sala de eventos</h5>
      <bottom @click="openModal3">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2636/2636428.png"
          alt="CHECK"
          class="img_button"
        />
      </bottom>
      <modal-component3
        v-if="showModal3"
        @close-modal="closeModal3"
      ></modal-component3>
    </div>
    <div>
      <h5 class="group_text">Ver oferta <br />agregada</h5>
      <bottom @click="openModal4">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2636/2636428.png"
          alt="CHECK"
          class="img_button"
        />
      </bottom>
      <modal-component4
        v-if="showModal4"
        @close-modal="closeModal4"
      ></modal-component4>
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
import ModalComponent2 from "./SeleccionarServiciosAdicionales.vue";
import ModalComponent3 from "./SeleccionarSalaEvento.vue";
import ModalComponent4 from "./OfertaSelecionada.vue";

export default {
  name: "ReservaOrden",
  components: {
    ModalComponent,
    ModalComponent2,
    ModalComponent3,
    ModalComponent4,
  },
  data() {
    return {
      showModal1: false,
      showModal2: false,
      showModal3: false,
      showModal4: false,
      fechaInicio: "",
      fechaFin: "",
      num_Adultos: null,
      num_Ninos: null,
      randomItem: null,
      ofertasResult: null,
      esNumeroInvalido: false,
      valid1: null,
    };
  },
  created() {
    const myVariable = localStorage.getItem("habitacionesSeleccionadas");
    this.valid1 = myVariable;
    const ofertaData = localStorage.getItem("ofertasResult");
    this.ofertasResult = JSON.parse(ofertaData);
    this.getRandomItem();
  },
  methods: {
    irAPaginaPago() {
      const idReserva = 123; // Obtén el ID de reserva desde donde lo tengas almacenado

      this.$router.push(`/pago/${idReserva}`);
    },
    set_reserva: function () {
      const storedData = localStorage.getItem("userResult");
      this.userResult = JSON.parse(storedData);

      const fechaInicio = this.fecha_Inicio;
      const fechaFin = this.fecha_Fin;

      if (this.myVariable == []) {
        this.showNotification(
          "Debe seleccionar una habitacion",
          "red",
          "top",
          2000
        );
      }

      if (fechaFin < fechaInicio) {
        this.showNotification(
          "La fecha de inicio no puede ser posterior a la fecha de fin",
          "red",
          "top",
          2000
        );
        return;
      } else {
        var data = {
          idUsuario: this.userResult.idUsuario,
          fechaIni: this.fecha_Inicio,
          fechaFin: this.fecha_Fin,
          idEstadoRes: 1,
          cantPersonas: this.num_Adultos + this.num_Ninos,
          idOfertas: parseInt(this.randomItem),
        };
        var url = "http://localhost:5023/api/v1/ReservasOrder/Crear";

        if (this.fecha_Fin == null || this.fecha_Inicio == null) {
          this.showNotification(
            "Debe seleccionar un rango de fechas",
            "red",
            "top",
            3000
          );
          return;
        }

        if (this.num_Adultos == 0 || this.num_Adultos == null) {
          this.showNotification(
            "Debe haber como minimo una persona adulta",
            "red",
            "top",
            3000
          );
          return;
        }

        if (this.num_Adultos < 0 || this.num_Ninos < 0) {
          this.showNotification("Ingrese valores validos", "red", "top", 3000);
          return;
        }

        axios
          .post(url, data)
          .then((response) => {
            console.log("Aquí va la respuesta " + JSON.stringify(response));
            localStorage.setItem(
              "IdReservaCreation",
              JSON.stringify(response.data)
            );
            this.showNotification("Registro correcto", "green", "top", 1000);

            this.$router.push("/pagoReserva");
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
        localStorage.setItem(
          "IdOFertaGanadora",
          JSON.stringify(this.randomItem)
        );
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
    // validarNumero1() {
    //   if (parseInt(this.num_Adultos) <= 0) {
    //     this.showNotification(
    //       "El numero no puede ser negativo o cero",
    //       "red",
    //       "top",
    //       1000
    //     );
    //   }
    // },
    // validarNumero2() {
    //   if (parseInt(this.num_Ninos) < 0) {
    //     this.showNotification(
    //       "El numero no puede ser negativo",
    //       "red",
    //       "top",
    //       1000
    //     );
    //   }
    // },
    openModal1() {
      this.showModal1 = true;
    },
    closeModal1() {
      this.showModal1 = false;
    },
    openModal2() {
      this.showModal2 = true;
    },
    closeModal2() {
      this.showModal2 = false;
    },
    openModal3() {
      this.showModal3 = true;
    },
    closeModal3() {
      this.showModal3 = false;
    },
    openModal4() {
      this.showModal4 = true;
    },
    closeModal4() {
      this.showModal4 = false;
    },
  },
};
</script>
