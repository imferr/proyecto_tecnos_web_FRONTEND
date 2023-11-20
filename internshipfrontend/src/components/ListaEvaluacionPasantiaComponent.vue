<template>
    <div>
      <AppNavbar/>
      <div class="componentListaEvaluacionPasantia">
        <div class="gray-container">
          <div class="title">
            <h2>EVALUACIÓN PASANTÍA</h2>  
          </div>
          <div class="container">
            <table>
              <thead>
                <tr>
                  <th>Nro</th>
                  <th>Nombre Postulante</th>
                  <th>Fecha postulación</th>
                  <th>Programa</th>
                  <th>Evaluación</th>
                </tr>
              </thead>
              <tbody>
                <!-- Aca van los datos de la lista a generar -->
              </tbody>
            </table>
          </div>
        </div>
        </div>
      </div>
  </template>
  
  <style>
  .componentListaEvaluacionPasantia{
    display: flex;
    height: 100vh;
    justify-content: center; 
    align-items: center; 
    padding: 10px;
    background-image: url('../assets/fondo_principal.jpeg'); 
    background-size: cover; 
    background-position: center; 
    background-repeat: no-repeat;
  }
  .gray-container {
  width: 60%; 
  background-color: rgba(234, 229, 229, 0.621); 
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-top: 20px; 
  }
  .gray-container > div > h2 {
  margin-bottom: 10px; 
  }
  .evaluation-window .gray-container {
    width: 80%;
    margin: auto;
  }
  
  .evaluation-window .container {
    background-color: transparent;
    box-shadow: none;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }
  
  table thead {
    background-color: #ffffff;
    color: rgb(16, 14, 14);
  }
  
  table th, table td {
    text-align: left;
    padding: 12px;
    border-bottom: 2px solid #bfbbbb;
  }
  
  table tbody tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  
  button {
    padding: 5px 10px;
    background-color: #4c64b4;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: #3a4c8a;
  }
  </style>
  
  <script>
  import AppNavbar from  '../components/AppNavbar.vue';
  
  export default {
    components: {
      AppNavbar,
    }, 
  };
  </script>
  