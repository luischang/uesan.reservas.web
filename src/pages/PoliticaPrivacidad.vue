<template>
  <div class="politica-container">
    <div class="centrado">
      <div style="text-align: right">
        <button class="Inicio-button" @click="irAlDashboard">Atras</button>
      </div>
      <h2>Politica de Privacidad</h2>
      <div class="politica">
        <h3>
          Teniendo en cuenta que la Compañía tiene operación en varios países, y
          que por esta situación le aplican diferentes legislaciones en relación
          con el tratamiento de datos personales, la presente política será el
          marco general que contempla las directrices para el adecuado
          tratamiento de los datos, respetando los derechos de los titulares de
          la información. Sin perjuicio de ello, se aplicarán las normas locales
          en cada país de acuerdo con las directrices legales y requerimientos
          especiales en cada una de ellas.
        </h3>
      </div>
    </div>
  </div>
</template>

<script></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.centrado {
  text-align: center;
}

.politica h3 {
  font-size: 20px;
}

.Inicio-button {
  position: absolute;
  top: 60px;
  right: 20px;
  background-color: #e06e43;
  color: #fff;
  border: none;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
}

.politica-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  font-family: "Poppins", sans-serif;
  color: #333;
  background-color: #eabe7c;
}
</style>
