<template>
  <div class="modal">
    <div class="filters">
      <select v-model="filtro">
        <option value="Todos" selected>Todos</option>
        <option value="Disponible">Disponible</option>
        <option value="Ocupado">Ocupado</option>
      </select>
    </div>

    <div
      class="salaEvento"
      v-for="salaEvento in salaEventoFiltradas"
      :key="salaEvento.id"
    >
      <div
        :class="{
          'salaEvento-Disponible': salaEvento.estado,
          'salaEvento-Ocupado': !salaEvento.estado,
          'SalaEvento-seleccionado': SalaEventosSeleccionadas.includes(
            salaEvento.idSalaEvento
          ),
        }"
      >
        <h3>{{ salaEvento.descripcion }}</h3>
        <p>Estado: {{ salaEvento.estado ? "Disponible" : "Ocupado" }}</p>
        <p>Precio x Uso: {{ salaEvento.precio }}</p>
        <button
          v-if="salaEvento.estado"
          @click="SeleccionarSalaEvento(salaEvento.idSalaEvento)"
          class="style_btn"
        >
          Seleccionar
        </button>
      </div>
    </div>
  </div>
  <div>
    <q-btn class="terminar-btn" @click="closeModal"> TERMINAR </q-btn>
  </div>
</template>

<script>
import axios from "axios";
export default {
  emits: ["close-modal"],
  data() {
    return {
      SalaEventos: [],
      filtro: "Todos",
      SalaEventosSeleccionadas: [],
    };
  },
  mounted() {
    var url = "http://localhost:5023/api/SalaDeEventos/Traer";

    axios
      .get(url)
      .then((response) => {
        this.SalaEventos = response.data;
      })
      .catch((error) => {
        console.error("Error al obtener los Sala Eventos:", error);
      });
    const seleccionGuardada = localStorage.getItem("SalaEventosSeleccionadas");
    if (seleccionGuardada) {
      this.SalaEventosSeleccionadas = JSON.parse(seleccionGuardada);
    }
  },
  computed: {
    salaEventoFiltradas() {
      if (this.filtro === "Todos") {
        return this.SalaEventos;
      } else if (this.filtro === "Disponible") {
        return this.SalaEventos.filter((salaEvento) => salaEvento.estado);
      } else if (this.filtro === "Ocupado") {
        return this.SalaEventos.filter((salaEvento) => !salaEvento.estado);
      }
      return this.SalaEventos;
    },
  },
  methods: {
    closeModal() {
      this.$emit("close-modal");
    },
    SeleccionarSalaEvento(id) {
      const index = this.SalaEventosSeleccionadas.indexOf(id);
      if (index === -1) {
        this.SalaEventosSeleccionadas.push(id);
      } else {
        this.SalaEventosSeleccionadas.splice(index, 1);
      }
      // console.log("Sala Evento seleccionadas:", this.SalaEventosSeleccionadas);
    },
    guardarSeleccionEnLocalStorage() {
      localStorage.setItem(
        "SalaEventosSeleccionadas",
        JSON.stringify(this.SalaEventosSeleccionadas)
      );
    },
  },
  watch: {
    SalaEventosSeleccionadas: {
      handler() {
        this.guardarSeleccionEnLocalStorage();
      },
      deep: true,
    },
  },
};
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Exo:100,200,400);

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.salaEvento {
  display: inline-block;
  width: 20%;
  padding: 10px;
  box-sizing: border-box;
  margin: 10px;
}

.salaEvento-Disponible {
  background-color: #d48208;
  border-radius: 5px;
  font-family: "Exo";
  text-align: center;
  color: white;
  border: white 1px solid;
}
.SalaEvento-seleccionado {
  background-color: rgb(
    75,
    149,
    75
  ); /* Aquí puedes definir el color de fondo que desees */
}
.salaEvento-Ocupado {
  background-color: #d48208;
  border-radius: 5px;
  font-family: "Exo";
  text-align: center;
  color: black;
  border: black 1px solid;
}
.filters {
  margin-top: 20px;
  font-size: large;
  font-family: "Exo";
  max-width: 15%;
  border-color: transparent;
}
.style_btn {
  padding: 8px 14px;
  background-color: #d48208;
  color: white;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 15px;
  font-family: "Exo";
  position: absolute;
  margin-left: -50px;
  margin-top: 20px;
}
.style_btn:hover {
  background-color: #d9dd92;
  color: black;
}
.terminar-btn {
  position: absolute;
  bottom: -150px;
  left: 405px;
  font-family: "Exo";
  color: white;
  background-color: #d48208;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
