<template>
  <div class="container">
    <h5 class="title_cont">PAGO DE LA RESERVA</h5>
    <div class="payment-container">
      <h5>Detalles de la Reserva:</h5>
      <div class="tablaHabitaciones" v-if="!isLoading">
        <h5>Detalle de Habitaciones</h5>
        <q-table
          :rows="habitaciones"
          :columns="columnasHabitaciones"
          row-key="id"
          :pagination="true"
          :rows-per-page-options="[10, 20, 50]"
          class="table"
        ></q-table>
      </div>
      <div class="tablaServicios" v-if="!isLoading2">
        <h5>Detalle de Servicios</h5>
        <q-table
          :rows="servicios"
          :columns="columnasServicios"
          row-key="id"
          :pagination="true"
          :rows-per-page-options="[10, 20, 50]"
          class="table"
        ></q-table>
      </div>
      <div class="tablaSalas" v-if="!isLoading3">
        <h5>Detalle de Salas de Eventos</h5>
        <q-table
          :rows="salas"
          :columns="columnasSalas"
          row-key="id"
          :pagination="true"
          :rows-per-page-options="[10, 20, 50]"
          class="table"
        ></q-table>
      </div>
      <h5>Monto Total: USD {{ this.montoTotal }}</h5>
      <div class="payment-form">
        <label for="card-number">Número de tarjeta:</label>
        <input
          type="text"
          id="card-number"
          v-model="numeroTarjeta"
          pattern="[0-9]{16}"
          maxlength="16"
          placeholder="Ingrese el número de tarjeta (16 dígitos)"
          required
        />

        <label for="card-holder">Titular de la tarjeta:</label>
        <input
          type="text"
          id="card-holder"
          v-model="titularTarjeta"
          pattern="[A-Za-z\s]+"
          placeholder="Ingrese el titular de la tarjeta"
          required
        />

        <label for="expiration-date">Fecha de vencimiento:</label>
        <input
          type="text"
          id="expiration-date"
          v-model="fechaVencimiento"
          pattern="(0[1-9]|1[0-2])\/[0-9]{2}"
          placeholder="MM/YY"
          required
        />

        <label for="security-code">Código de seguridad:</label>
        <input
          type="text"
          id="security-code"
          v-model="codigoSeguridad"
          pattern="[0-9]{3}"
          maxlength="3"
          placeholder="Ingrese el código de seguridad (3 dígitos)"
          required
        />
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
      isLoading: true,
      isLoading2: true,
      isLoading3: true,
      total: 0,
      reservaDetalle: "",
      numeroTarjeta: "",
      titularTarjeta: "",
      fechaVencimiento: "",
      codigoSeguridad: "",
      habitaciones: [],
      columnasHabitaciones: [
        {
          name: "descripcion",
          required: true,
          label: "Descripción",
          align: "left",
          field: "descripcion",
          sortable: true,
        },
        {
          name: "precio",
          required: true,
          label: "Precio ($)",
          align: "left",
          field: "precio",
          sortable: true,
        },
      ],
      servicios: [],
      columnasServicios: [
        {
          name: "descripcion",
          required: true,
          label: "Descripción",
          align: "left",
          field: "descripcion",
          sortable: true,
        },
        {
          name: "precio",
          required: true,
          label: "Precio ($)",
          align: "left",
          field: "precio",
          sortable: true,
        },
      ],
      salas: [],
      columnasSalas: [
        {
          name: "descripcion",
          required: true,
          label: "Descripción",
          align: "left",
          field: "descripcion",
          sortable: true,
        },
        {
          name: "precio",
          required: true,
          label: "Precio ($)",
          align: "left",
          field: "precio",
          sortable: true,
        },
      ],
      habEstado: [],
    };
  },
  created() {
    const reservaData = localStorage.getItem("IdReservaCreation");
    this.reservaResult = JSON.parse(reservaData);

    const habitacionData = localStorage.getItem("habitacionesSeleccionadas");
    this.habitacionesResult = JSON.parse(habitacionData);

    const servicioData = localStorage.getItem("servicioSeleccionado");
    this.serviciosResult = JSON.parse(servicioData);

    const salaData = localStorage.getItem("SalaEventosSeleccionadas");
    this.salasResult = JSON.parse(salaData);

    const ofertaData = localStorage.getItem("IdOFertaGanadora");
    this.ofertasResult = JSON.parse(ofertaData);
  },

  mounted() {
    this.getHabitacionesByIds();
    console.log("Estas son las habitaciones" + this.habitaciones);
    console.log("Estas son los servicios" + this.serviciosResult);
    console.log("Total:" + this.montoTotal);
    this.getServiciosByIds();
    this.getSalasByIds();

    this.calcularMontoTotal();
  },

  methods: {
    // Resto de los métodos existentes
    getHabitacionesByIds() {
      if (this.habitacionesResult != null) {
        Promise.all(
          this.habitacionesResult.map((id) => this.getHabitacionById(id))
        )
          .then((habitacione) => {
            this.habitaciones = habitacione;
            this.total = this.total + this.habitaciones.precio;
            this.isLoading = false;
            this.calcularMontoTotal();
          })
          .catch((error) => {
            console.error(error);
            this.isLoading = false;
          });
      }
    },
    getHabitacionById(id) {
      return fetch(`http://localhost:5023/api/Habitacion/${id}`).then(
        (response) => response.json()
      );
    },

    getServiciosByIds() {
      if (
        this.serviciosResult != null &&
        (this.habitacionesResult != null || this.salasResult != null)
      ) {
        Promise.all(this.serviciosResult.map((id) => this.getServicioById(id)))
          .then((servici) => {
            this.servicios = servici;
            this.total = this.total + this.servicios.precio;
            this.isLoading2 = false;
            this.calcularMontoTotal();
          })
          .catch((error) => {
            console.error(error);
            this.isLoading2 = false;
          });
      }
    },
    getServicioById(id) {
      return fetch(`http://localhost:5023/api/v1/Servicio/${id}`).then(
        (response) => response.json()
      );
    },

    getSalasByIds() {
      if (this.salasResult != null) {
        Promise.all(this.salasResult.map((id) => this.getSalaById(id)))
          .then((sal) => {
            this.salas = sal;
            this.total = this.total + this.salas.precio;
            this.isLoading3 = false;
            this.calcularMontoTotal();
            console.log("Estas son los ids recibidos" + this.salasResult);
          })
          .catch((error) => {
            console.error(error);
            this.isLoading3 = false;
          });
      }
    },
    getSalaById(id) {
      return fetch(
        `http://localhost:5023/api/SalaDeEventos/TraerId/${id}`
      ).then((response) => response.json());
    },

    detalleHabitacion() {
      for (let index = 0; index < this.habitacionesResult.length; index++) {
        const detallehabitacion = {
          idReserva: this.reservaResult,
          idHabitacion: this.habitacionesResult[index],
        };
        console.log(
          "id de la habitacion numero :" +
            (index + 1) +
            " es :" +
            detallehabitacion.idHabitacion +
            " con la reserva :" +
            detallehabitacion.idReserva
        );
        axios
          .post("http://localhost:5023/api/DetalleReserva", detallehabitacion)
          .then((response) => {
            this.mostrarMensaje();
            this.idReserva = detallehabitacion.idReserva;
            this.idHabitacion = detallehabitacion.idHabitacion;
            console.log("Se creo el detalle habitacion");
          })
          .catch((error) => {
            this.$q.notify({
              message: "Error al crear la habitacion",
              color: "negative",
            });
          });
      }
    },

    detalleServicio() {
      for (let index = 0; index < this.serviciosResult.length; index++) {
        const detalleservicio = {
          idReserva: this.reservaResult,
          idServicio: this.serviciosResult[index],
        };
        console.log(
          "id del servicio numero :" +
            (index + 1) +
            " es  :" +
            detalleservicio.idServicio +
            " con la reserva :" +
            detalleservicio.idReserva
        );
        axios
          .post(
            "http://localhost:5023/api/v1/DetalleServicios",
            detalleservicio
          )
          .then((response) => {
            this.mostrarMensaje();
            this.idReserva = detalleservicio.idReserva;
            this.idServicio = detalleservicio.idServicio;
            console.log("Se creo el detalle servicio");
          })
          .catch((error) => {
            this.$q.notify({
              message: "Error al crear el servicio",
              color: "negative",
            });
          });
      }
    },

    detalleSala() {
      for (let index = 0; index < this.salasResult.length; index++) {
        const detallesala = {
          idReserva: this.reservaResult,
          idSalaEvento: this.salasResult[index],
        };
        console.log(
          "id de la sala numero :" +
            (index + 1) +
            " es :" +
            detallesala.idSala +
            " con la reserva :" +
            detallesala.idReserva
        );
        axios
          .post(
            "http://localhost:5023/api/DetalleSalaDeEventos/Crear",
            detallesala
          )
          .then((response) => {
            this.mostrarMensaje();
            this.idReserva = detallesala.idReserva;
            this.idSalaEvento = detallesala.idSala;
            this.fechaInicio = "";
            this.fechaFin = "";
            console.log("Se creo el detalle sala");
          })
          .catch((error) => {
            this.$q.notify({
              message: "Error al crear la sala",
              color: "negative",
            });
          });
      }
    },

    calcularMontoTotal() {
      let total = 0;
      this.habitaciones.forEach((habitacion) => {
        total += habitacion.precio;
      });

      this.servicios.forEach((servicio) => {
        total += servicio.precio;
      });

      this.salas.forEach((sala) => {
        total += sala.precio;
      });

      this.montoTotal = total;
    },
    realizarPago() {
      if (this.habitacionesResult != null) {
        this.detalleHabitacion();
      }
      if (this.salasResult != null) {
        this.detalleSala();
      }
      if (this.serviciosResult != null) {
        this.detalleServicio();
      }
      const url = "http://localhost:5023/api/v1/Pago";
      const data = {
        idReserva: this.reservaResult,
        montoTotal: this.montoTotal,
      };

      axios
        .post(url, data)
        .then((response) => {
          // Manejar la respuesta del pago exitoso
          console.log("Pago realizado correctamente");
          this.$router.push("/confirmacionPago");
        })
        .catch((error) => {
          // Manejar el error del pago
          console.error("Ocurrió un error durante el pago:", error);
        });
      this.cambiarStatus();
    },
    cambiarStatus() {
      const list = localStorage.getItem("habitacionesSeleccionadas");
      const parsedList = JSON.parse(list);
      parsedList.forEach((item) => {
        this.deleteHabitacion(item);
      });

      const list2 = localStorage.getItem("SalaEventosSeleccionadas");
      const parsedList2 = JSON.parse(list2);
      parsedList2.forEach((item2) => {
        this.deleteSala(item2);
        console.log(item2);
      });
    },
    deleteHabitacion(id) {
      axios
        .delete(`http://localhost:5023/api/Habitacion?id=${id}`)
        .then((response) => {
          console.log("Habitación cambiada");
          // Realiza cualquier acción adicional después de eliminar la habitación
        })
        .catch((error) => {
          console.error("Error al cambiar la habitación:", error);
          // Maneja cualquier error que ocurra durante la eliminación
        });
    },
    deleteSala(id) {
      axios
        .delete(`http://localhost:5023/api/SalaDeEventos/Delete/${id}`)
        .then((response) => {
          console.log("Sala Evento cambiada");
          // Realiza cualquier acción adicional después de eliminar la habitación
        })
        .catch((error) => {
          console.error("Error al cambiar la Sala Evento:", error);
          // Maneja cualquier error que ocurra durante la eliminación
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

.tablaHabitaciones h5,
.tablaServicios h5,
.tablaSalas h5 {
  font-size: 18px;
  margin-bottom: 10px;
  font-family: "Exo";
}
</style>
