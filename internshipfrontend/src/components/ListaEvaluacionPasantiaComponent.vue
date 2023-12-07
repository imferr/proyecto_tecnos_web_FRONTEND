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
                <th>Nombre de Convocatoria</th>
                <th>Evaluación</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="evaluacion in evaluacionesFiltradas" :key="evaluacion.evaluacionId">
                <td>{{ evaluacion.evaluacionId }}</td>
                <td>{{ evaluacion.evaluador.userId.name }} {{ evaluacion.evaluador.userId.lastName }}</td>
                <td>{{ evaluacion.practicaRealizada.datePracticaRealizadaBegin }}</td>
                <td>{{ obtenerNombreConvocatoria(evaluacion.practicaRealizada.practicaRealizadaId) }}</td>
                <td>{{ evaluacion.notaEvaluacion }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import AppNavbar from  '../components/AppNavbar.vue';

export default {
  components: {
    AppNavbar,
  },
  data() {
    return {
      evaluacionesFiltradas: [],
      convocatorias: [],
      userIdFiltrado: 1 // Este valor puede variar
    };
  },
  mounted() {
    axios.get('http://localhost:8080/api/v1/evaluacion')
      .then(responseEvaluacion => {
        return axios.get('http://localhost:8080/api/v1/convocatoria')
          .then(responseConvocatoria => {
            this.convocatorias = responseConvocatoria.data.convocatorias;
            const evaluaciones = responseEvaluacion.data.evaluacionesPasantia;
            this.evaluacionesFiltradas = evaluaciones.filter(evaluacion => 
              evaluacion.evaluador.userId.userId === this.userIdFiltrado);
          });
      })
      .catch(error => {
        console.error('Error al cargar las evaluaciones o convocatorias:', error);
      });
  },
  methods: {
    obtenerNombreConvocatoria(practicaId) {
      const convocatoria = this.convocatorias.find(conv => conv.convocatoriaPracticaId === practicaId);
      return convocatoria ? convocatoria.titleConvocatoria : 'No encontrado';
    }
  }
};
</script>

  
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
