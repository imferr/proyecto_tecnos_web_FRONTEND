<template>
    <div>
        <AppNavbarAdmin/>
    <div class="espacio">
    </div>
        <div class="container">
    <div class="evaluation-form">
      <h2>Evaluación Pasantía</h2>
      <div class="row">
        <div class="column">
          <div class="input-group">
            <label>Nombres:</label>
            <input type="text" v-model="form.names">
          </div>

          <div class="input-group">
            <label>Fecha postulación:</label>
            <input type="date" v-model="form.applicationDate">
          </div>

          <div class="input-group">
            <label>Fecha inicio:</label>
            <input type="date" v-model="form.startDate">
          </div>

          <div class="input-group">
            <label>Nota desempeño:</label>
            <input type="text" v-model="form.performanceNote">
          </div>
        </div>

        <div class="column">
          <div class="input-group">
            <label>Apellidos:</label>
            <input type="text" v-model="form.surnames">
          </div>


          <div class="input-group">
            <label>Programa postulado:</label>
            <input type="text" v-model="form.program">
          </div>

          <div class="input-group">
            <label>Fecha fin:</label>
            <input type="date" v-model="form.endDate">
          </div>

          <div class="input-group">
            <label>Comentario:</label>
            <input type="text" v-model="form.comment">
          </div>
        </div>
      </div>

      <div class="actions">
        <button class="btn evaluate" @click="registrarEvaluacion">EVALUAR</button>
        <button class="btn cancel">CANCELAR</button>
      </div>
    </div>
    </div>
</div>

</template>
  
<script>
import axios from 'axios';
import AppNavbarAdmin from './AppNavbarAdmin'; // Asegúrate de importar correctamente tus componentes
import Swal from 'sweetalert2';

export default {
  components: {
    AppNavbarAdmin
  },
  data() {
    return {
      form: {
        names: '',
        surnames: '',
        applicationDate: '',
        startDate: '',
        endDate: '',
        program: '',
        performanceNote: '',
        comment: ''
      },
      ultimaPracticaId: null
    };
  },
  mounted() {

  },
  methods: {
    registrarEvaluacion() {
      const practicaData = {
        datePracticaRealizadaBegin: this.form.startDate,
        datePracticaRealizadaEnd: this.form.endDate,
        statePracticaRealizada: true 
      };

      axios.post('http://localhost:8080/api/v1/practica/register', practicaData)
        .then(response => {
          console.log('Se creó de manera exitosa la práctica', response);
          return axios.get('http://localhost:8080/api/v1/practica');
        })
        .then(response => {
          const practicas = response.data.practicasRealizadas;
          if (practicas.length > 0) {
            const ultimaPracticaId = practicas[practicas.length - 1].practicaRealizadaId;
            console.log('ID de la última práctica:', ultimaPracticaId);

            return axios.post('http://localhost:8080/api/v1/evaluacion/register', {
              evaluacionDesempenio: parseFloat(this.form.performanceNote),
              comentarioEvaluacion: this.form.comment,
              practicaRealizadaId: ultimaPracticaId,
              evaluadorId: 1
            });
          } else {
            throw new Error('No se encontraron prácticas registradas');
          }
        })
        .then(response => {
          console.log('Se registró la evaluación correctamente', response);
          Swal.fire({
            title: '¡Éxito!',
            text: 'La práctica y la evaluación se han registrado correctamente.',
            icon: 'success',
            confirmButtonText: 'Ok'
          });
        })
        .catch(error => {
          console.error('Error en el proceso', error);
          Swal.fire({
            title: 'Error',
            text: 'Hubo un error en el proceso de registro.',
            icon: 'error',
            confirmButtonText: 'Ok'
          });
        });
    }
  }
};
</script>

  <style>
.espacio{
    margin-top: 100px;
  }
body {
  background-image: url('@/assets/background.jpg');
  background-size: cover; 
  background-repeat: no-repeat; 
  background-attachment: fixed; 
}

.container { 
    font-family: 'Arial', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f2f2f29f;
    border-radius: 25px;
    height: 780px;

}


.evaluation-form {
  font-family: 'Arial', sans-serif;
  width: 90%;
  margin: auto;
  padding: 30px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  background-color: #f9f9f9;
  border-radius: 40px;

}

.row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.column {
  width: 48%;
  display: flex;
  flex-direction: column;
}

.input-group {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.input-group label {
  margin-right: 10px;
  margin-bottom: 0;
}

input {
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #ccc;
    border-radius: 20px;
}

.actions {
  display: flex;
  justify-content: flex-end;
}

.btn {
    width: 15%;
  padding: 5px;
  margin-top: 10px;
  background-color: #4c64b4;
  color: #fff;
  border: none;
  border-radius: 20px;
  cursor: pointer;
}

.evaluate {
  background-color: #4c64b4;
  color: white;
  margin-right:30px;
}

.cancel {
  background-color: #4c64b4;
  color: white;
}
</style>