<template>
  <div class="galery-container">
    <div class="centrado">
      <div style="text-align: right">
        <button class="Inicio-button" @click="irAlDashboard">Inicio</button>
      </div>

      <div class="">
        <h2>Cliente</h2>
        <table>
          <thead>
            <tr>
              <th style="width: 15%">Nombre</th>
              <th style="width: 15%">Apellido</th>
              <th style="width: 15%">Email</th>
              <th style="width: 40%">Direccion</th>
              <th style="width: 10%">Telefono</th>
              <th style="width: 5%">Puntos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>John</th>
              <td>Doe</td>
              <td>cliente1@example.com</td>
              <td>Avenida Central 456</td>
              <td>123456789</td>
              <td>100</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Quejas</h2>
      <div>
        <table>
          <thead>
            <tr>
              <th style="width: 15%">Fecha</th>
              <th style="width: 85%">Descripcion</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>2023-05-01</th>
              <td>Mala atención en el restaurante</td>
            </tr>
            <tr>
              <th>2023-05-05</th>
              <td>Problemas con el aire acondicionado</td>
            </tr>
            <tr>
              <th>2024-05-05</th>
              <td>Problemas con la cama</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Calificación</h2>
      <div>
        <table>
          <thead>
            <tr>
              <th style="width: 15%"># Estrellas</th>
              <th style="width: 85%">Recomendacion</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>4</th>
              <td>Excelente servicio, habitaciones cómodas</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.controloculto {
  display: none;
  visibility: hidden;
  visibility: collapse;
}
.centrado {
  text-align: center;
}

table {
  border-collapse: collapse;
  font-family: Tahoma, Geneva, sans-serif;
  width: 100%;
}
table td {
  padding: 10px;
}
table thead {
  background-color: #505152;
  color: #ffffff;
  font-weight: bold;
  font-size: 13px;
  border: 1px solid #54585d;
  height: 30px;
}
table tbody {
  color: #636363;
  border: 1px solid #dddfe1;
}
table tbody tr {
  background-color: #f9fafb;
}
table tbody tr:nth-child(odd) {
  background-color: #ffffff;
}

.Inicio-button {
  position: absolute;
  top: 110px;
  right: 20px;
  background-color: #e06e43;
  color: #fff;
  border: none;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
}

.galery-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px;
  font-family: "Poppins", sans-serif;
  color: #333;
  background-color: #eabe7c;
}
</style>
