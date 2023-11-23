<template>
    
  <div>
      <AppNavbar/>
      <div class="container2">
          <h2>Formulario de solicitud de convenio</h2>
          </div>
              <div class="container">
      <div class="form-box">
          <div class="input-group">
              <label for="convenio">Convenio:</label>
              <select id="convenio" placeholder="[seleccione una opcion]">
                  <option value="opcion1">opcion 1</option>
                  <option value="opcion2">opcion 2</option>
                  <option value="opcion3">opcion 3</option>
              </select>
          </div>

          <div class="input-group">
              <label for="cedula">Cédula Identidad:</label>
              <input id="cedula" type="text" placeholder="">
              <input id="nombre" type="text" placeholder="Nombre completo del estudiante">
          </div>

          <h3>Documentación requerida</h3>

          <div class="input-group">
              <label for="carta">Carta de motivación:</label>
              <input id="carta" type="file" @change="handleFileUpload($event, 'carta')">>
      
              <label for="pasaporte">Pasaporte/Visa:</label>
              <input id="pasaporte" type="file" @change="handleFileUpload($event, 'pasaporte')">>
          </div>

          <div class="input-group">
              <label for="seguro">Seguro médico:</label>
              <input id="seguro" type="file" @change="handleFileUpload($event, 'seguro')">>
              
          </div>

          <button class="submit-button" @click.prevent="submitForm">Enviar</button>      </div>
  </div>
  </div>
  
</template>

<script>
import AppNavbar from '../components/AppNavbar.vue'; 
import FormularioSolicitudConvenioAPI from '../services/FormularioSolicitudConvenioAPI.js';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/v1/formulario-solicitud/register'; 
export default {
components: {
  AppNavbar, 
},
mixins: [FormularioSolicitudConvenioAPI],

data() {
  return {
    convenio: '',
    cedula: '',
    nombre: '',
    carta: '', 
    pasaporte: '', 
    seguro: '', 
    studentId: 1, 
    requestStatus: false,

    documentos: {
    carta: { tipo: "Carta de Motivación", descripcion: "Descripción de la carta de motivación" },
    pasaporte: { tipo: "Pasaporte", descripcion: "Descripción del pasaporte" },
    seguro: { tipo: "Seguro Médico", descripcion: "Descripción del seguro médico" },
    },
    
  };
},
methods: {
  handleFileUpload(event, fileVariable) {
    if (event.target.files.length > 0) {
      this[fileVariable] = event.target.files[0].name; // Almacena el nombre del archivo
    }
  },

  getCurrentDateString() {
    const today = new Date();
    return today.toISOString().split('T')[0]; 
  },

async submitForm() {
  const attachedDocuments = [this.carta, this.pasaporte, this.seguro]
    .filter(name => name !== '') 
    .join(', '); 

  const formData = {
    requestDate: this.getCurrentDateString(),
    requestStatus: this.requestStatus,
    attachedDocument: attachedDocuments,
    studentId: this.studentId
  };

try {
  // Primero, enviar el formulario principal
  await axios.post(API_BASE_URL, formData);

  // Registrar cada documento individualmente
  for (const key of Object.keys(this.documentos)) {
    const documentName = this[key];
    if (documentName) {
      const documentData = {
        tipoDocumento: this.documentos[key].tipo,
        nombreDocumento: documentName,
        contenidoDocumento: this.documentos[key].descripcion,
        formularioSolicitudID: 1, // ID del formulario, asumiendo que es necesario
      };
      await axios.post('http://localhost:8080/api/v1/documento-electronico/register', documentData);
    }
  }
  console.log('Formulario y documentos enviados con éxito');
} catch (error) {
  console.error('Error al realizar el formulario y registrar documentos', error);
}
},
},
};
</script>

<style scoped>

body {
background-image: url('@/assets/background.jpg');
background-size: cover; 
background-repeat: no-repeat; 
background-attachment: fixed; 
}
.container2 {
padding-top: 100px;
  font-family: 'Arial', sans-serif;
  display: flex;
  flex-direction: column;  
  align-items: flex-start;  
  height: 10vh;
  padding-left: 50px; 
  border-radius: 40px;

}

.container{
  font-family: 'Arial', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 101vh;
  background-color: #f2f2f29f;
  border-radius: 40px;

}


h1 {
  color: #333;
  margin-bottom: 1em;
}
h2 {
  color: #333;
text-align: center; 
margin-top: 30px; 
margin-left: 40px;

}



.form-box {
  font-weight:lighter;
  width: 100%;
  max-width: 800px;
  padding: 25px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 40px;
  height: 62vh;
}

.input-group {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 20px;
}

label {
  flex: 1;
  margin-right: 10px;
}

input, select {
  flex: 2;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 20px;
}



.submit-button {
  width: 20%;
padding: 8px;
margin-top: 20px;
background-color: #4c64b4;
color: #fff;
border: none;
border-radius: 20px;
cursor: pointer;
margin-left: 680px;
}
.input-group input:not(:last-child) {
  margin-right: 15px;
}

</style>