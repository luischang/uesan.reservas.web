<template>
  <div class="modal"></div>
  <div class="containerOferta">
    <h3 class="text_tittlee">Felicidades la oferta que ganaste es:</h3>
    <div v-if="ofertaGanadora">
      <p>Descripción: {{ ofertaGanadora.descripcion }}</p>
      <p>Precio: {{ ofertaGanadora.descuento }}</p>
      <!-- Agrega aquí más detalles que desees mostrar -->
    </div>
    <div v-else>
      <p>No hay ofertas vigentes.</p>
    </div>
  </div>
  <div>
    <q-btn class="terminar-btnes" @click="closeModal">Terminar</q-btn>
  </div>
</template>

<script>
import axios from "axios";
export default {
  emits: ["close-modal"],
  data() {
    return {
      idOfertas: null,
      ofertas: [],
    };
  },
  mounted() {
    const storeData = localStorage.getItem("ofertasResult");
    this.ofertas = JSON.parse(storeData);

    const idData = localStorage.getItem("IdOFertaGanadora");
    this.idOfertas = JSON.parse(idData);
  },
  methods: {
    closeModal() {
      this.$emit("close-modal");
    },
  },
  computed: {
    ofertaGanadora() {
      return this.ofertas.find(
        (oferta) => oferta.idOfertas === this.idOfertaGanadora
      );
    },
  },
};
</script>

<style>
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
.text_tittlee {
  color: white;
  font-family: "Exo";
}
.containerOferta {
  border: 1px solid #ccc;
  background-color: #d48208;
  padding: 20px;
  width: 700px;
  position: relative; /* Necesario para posicionar el botón correctamente */
  right: 115%;
  bottom: 65%;
}
.terminar-btnes {
  position: relative; /* Necesario para posicionar el botón correctamente */
  right: 75%;
  bottom: 250px;
  font-family: "Exo";
  padding: 10px;
  color: white;
  background-color: #d48208;
  justify-content: center;
  align-items: center;
}
.terminar-btnes:hover {
  color: black;
  background-color: #d9dd92;
}
</style>
