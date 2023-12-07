<template>
  <div>
    <AppNavbarAdmin/>
    <div class="componentListaRecepcionSolicitudes">
      <div class="gray-container">
        <div class="title">
          <h2>RECEPCIÓN SOLICITUDES</h2>
        </div>
        <div class="container">
          <table>
            <thead>
              <tr>
                <th>Nro</th>
                <th>Nombre Postulante</th>
                <th>Fecha postulación</th>
                <th>Nombre de Convocatoria</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(formulario, index) in formulariosSolicitud" :key="index" @click="seleccionarFormulario(formulario.requestId)">
                <td>{{ formulario.requestId }}</td>
                <td>{{ formulario.studentId.userId.name }} {{ formulario.studentId.userId.lastName }}</td>
                <td>{{ formatDate(formulario.requestDate) }}</td>
                <td>{{ obtenerNombreConvocatoria() }}</td>
                <td>{{ formulario.requestStatus ? 'Aprobado' : 'Pendiente' }}</td>
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
import AppNavbarAdmin from '../components/AppNavbarAdmin.vue';

export default {
  components: {
    AppNavbarAdmin,
  },
  data() {
    return {
      formulariosSolicitud: [],
      convocatorias: [],
    };
  },
  mounted() {
    axios
      .get('http://localhost:8080/api/v1/formulario-solicitud')
      .then((responseSolicitudes) => {
        this.formulariosSolicitud = responseSolicitudes.data.formulariosSolicitud;

        return axios.get('http://localhost:8080/api/v1/convocatoria');
      })
      .then((responseConvocatorias) => {
        this.convocatorias = responseConvocatorias.data.convocatorias;
      })
      .catch((error) => {
        console.error('Error al cargar las solicitudes o convocatorias:', error);
      });
  },
  methods: {
    formatDate(dateString) {
      if (!dateString) return ''; 
      const date = new Date(dateString);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    },
    obtenerNombreConvocatoria() {
      const convocatoriaIdPredeterminado = 1;
      const convocatoria = this.convocatorias.find(conv => conv.convocatoriaPracticaId === convocatoriaIdPredeterminado);
      return convocatoria ? convocatoria.titleConvocatoria : 'No encontrado';
    },
    seleccionarFormulario(formularioId) {
    // Aquí puedes hacer algo con el formularioId si es necesario
    console.log('Formulario seleccionado:', formularioId);
    
    // Redirigir a la ruta deseada
    this.$router.push({ path: '/solicitudPasantia', query: { formularioId } });
  },
  },
};
</script>



<style>
  .componentListaRecepcionSolicitudes {
  display: flex;
  height: 80%; /* Cambia el valor de 80% o el que desees */
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
  margin-top: 20px; /* Ajusta este valor según sea necesario */
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
    margin-top: 0;
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
  </style>
