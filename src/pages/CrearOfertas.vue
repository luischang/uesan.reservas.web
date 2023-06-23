<template>
    <div class="container">
      <div class="title">Crear Oferta</div>
  
      <q-card class="form-card">
        <q-card-section>
          <q-form @submit="crearOferta">
            <div class="form-group">
              <label for="descripcion" class="form-label">Descripción</label>
              <q-input v-model="descripcion" id="descripcion" required></q-input>
            </div>
            <div class="form-group">
              <label for="descuento" class="form-label">Descuento</label>
              <q-input v-model="descuento" id="descuento" type="number" required></q-input>
            </div>
            <div class="form-group">
              <label for="fechaIni" class="form-label">Fecha de inicio</label>
              <q-input v-model="fechaIni" id="fechaIni" type="datetime-local" required></q-input>
            </div>
            <div class="form-group">
              <label for="fechaFin" class="form-label">Fecha de fin</label>
              <q-input v-model="fechaFin" id="fechaFin" type="datetime-local" required></q-input>
            </div>
            <div class="form-group">
              <q-checkbox v-model="estado" label="Estado"></q-checkbox>
            </div>
            <div class="button-container">
              <q-btn type="submit" label="Crear Oferta" color="orange"></q-btn>
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        descripcion: '',
        descuento: null,
        fechaIni: '',
        fechaFin: '',
        estado: true
      };
    },
    methods: {
      crearOferta() {
        const oferta = {
          descripcion: this.descripcion,
          descuento: this.descuento,
          fechaIni: this.fechaIni,
          fechaFin: this.fechaFin,
          estado: this.estado
        };
  
        axios.post('http://localhost:5023/api/v1/Ofertas', oferta)
          .then(response => {
            this.$q.notify({
              message: 'Oferta creada exitosamente',
              color: 'positive'
            });
            this.descripcion = '';
            this.descuento = null;
            this.fechaIni = '';
            this.fechaFin = '';
            this.estado = true;
          })
          .catch(error => {
            this.$q.notify({
              message: 'Error al crear la oferta',
              color: 'negative'
            });
          });
      }
    }
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Exo:wght@400;700&display=swap');
  
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-image: url('https://png.pngtree.com/thumb_back/fh260/background/20201104/pngtree-great-awesome-orange-background-design-image_459656.jpg'); /* Ruta de la imagen de fondo */
    background-size: cover;
    background-position: center;
  }
  
  .title {
    font-family: 'Exo', sans-serif;
    font-size: 24px;
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
    font-family: 'Exo', sans-serif;
    font-size: 14px;
    font-weight: bold;
  }
  
  .button-container {
    display: flex;
    justify-content: flex-end;
    margin-top: 24px;
  }
  
  .q-input {
    width: 100%;
  }
  
  .q-checkbox {
    margin-top: 16px;
  }
  
  .q-btn {
    font-family: 'Exo', sans-serif;
    font-weight: bold;
    color: #fff;
    background-color: #e06e43;
  }
  </style>
  