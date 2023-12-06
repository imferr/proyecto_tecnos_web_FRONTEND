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
        <button class="btn evaluate">EVALUAR</button>
        <button class="btn cancel">CANCELAR</button>
      </div>
    </div>
    </div>
</div>

</template>
  
  <script>
 import AppNavbarAdmin from '../components/AppNavbarAdmin.vue';
 import EvaluacionPasantiaAPI from '../services/EvaluacionPasantiaAPI.js';
export default {
  components: {
    AppNavbarAdmin, 
  },
  mixins: [EvaluacionPasantiaAPI],

  data() {
    return {
        form: {
        names: '',
        phone: '',
        address: '',
        applicationDate: '',
        startDate: '',
        performanceNote: '',
        surnames: '',
        id: '',
        birthDate: '',
        program: '',
        endDate: '',
        comment: ''
      }
    };
  },
  methods: {
    //metodos
  },
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