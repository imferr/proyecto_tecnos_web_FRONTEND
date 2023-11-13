<template>
    <div>
      <AppNavbar/>
      <div class="espacio"></div>
      <div class="header">
        <h1>MIS SOLICITUDES</h1>
      </div>
  
      <div class="table-container">
        <table class="solicitudes-table">
          <thead>
            <tr>
              <th>Nro</th>
              <th>Solicitud</th>
              <th>Fecha postulación</th>
              <th>Programa</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            <!-- ejemplos -->
            <tr v-for="(solicitud, index) in solicitudes" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ solicitud.tipo }}</td>
              <td>{{ solicitud.fecha }}</td>
              <td>{{ solicitud.programa }}</td>
              <td>
                <span :class="{'estado': true, 'aceptado': solicitud.estado === 'ACEPTADO', 'rechazado': solicitud.estado === 'RECHAZADO'}">
                  {{ solicitud.estado || '-' }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  
  <script>
  import AppNavbar from '../components/AppNavbar.vue';
  import misSolicitudesAPI from '../services/misSolicitudesAPI.js';
  
  export default {
    components: {
      AppNavbar,
    },
    mixins: [misSolicitudesAPI],
    name: 'CardSection',
    data() {
    return {
      //ejemplos
      solicitudes: [
        { tipo: 'Pasantía Banco', fecha: '01-15-2023', programa: 'Académico', estado: 'RECHAZADO' },
      ]
    };
  }
  };
  </script>
  
  <style scoped>
 .espacio{
    margin-top: 9%;
  
  }

.header {
    font-family: 'Arial', sans-serif;
  background-color: #eff2f5bb;
  border-radius: 25px;
  text-align: center;
  color: #333;
  margin: 20px;
  padding-top: 60px; 
  padding-bottom: 400px; 
  position: relative;
  z-index: 1;
}

.table-container {
    font-family: 'Arial', sans-serif;

  background-color: white;
  border-radius: 8px;
  padding: 20px;
  position:fixed;
  top: 180px; 
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  z-index: 2;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}


.solicitudes-table {
  width: 100%;
  border-collapse: collapse;
}

.solicitudes-table th, .solicitudes-table td {
  text-align: left;
  padding: 8px;
  border-bottom: 10px;
}

.solicitudes-table th {
  background-color: #f2f2f2;
}

.estado {
  border-radius: 15px;
  padding: 5px 10px;
  color: white;
  font-weight: bold;
}

.aceptado {
  background-color: #4CAF50;
}

.rechazado {
  background-color: #F44336;
}
</style>