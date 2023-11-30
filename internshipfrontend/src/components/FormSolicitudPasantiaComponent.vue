<template>
  <div>
    <AppNavbar/>
    <div class="componentFormSolicitudPasantia">
      <div class="gray-container">
        <div>
          <h2>Formulario de solicitudes</h2>          
        </div>
      <div class="container">
        <form action="#" method="post"> 
          <div class="user__details">
            <div class="input__box">
              <span class="details">Nombres:</span>
              <input type="text" :value="nombres" readonly>
            </div>
            <div class="input__box">
              <span class="details">Apellidos:</span>
              <input type="text" :value="apellidos" readonly>
            </div>
            <div class="input__box">
              <span class="details">Teléfono:</span>
              <input type="tel" :value="telefono" readonly>
            </div>
            <div class="input__box">
              <span class="details">Cédula:</span>
              <input type="text" :value="cedula" readonly>
            </div>
            <div class="input__box">
              <span class="details">Dirección:</span>
              <input type="text" :value="direccion" readonly>
            </div>
            <div class="input__box">
              <span class="details">Correo:</span>
              <input type="email" :value="correo" readonly>
            </div>
            <div class="input__box">
              <span class="details">Fecha nacimiento:</span>
              <input type="text" :value="fechaNacimiento" readonly>
            </div>
            <div class="input__box">
              <span class="details">Fecha postulación:</span>
              <input type="text" :value="fechaPostulacion" readonly>
            </div>
            <!--
            <div class="input__box">
              <span class="details">Programa postulado:</span>
              <input type="text" :value="programaPostulado" readonly>
            </div>
            -->
            <div class="input__box">
              <span class="details">Documentación:</span>
              <div class="document-buttons">
                <div v-for="(documento, index) in documentosFiltrados" :key="index">
                  <span class="document-label">{{ nombresDocumentos[index] }}:</span><br>
                  <div class="document-group">
                    <button type="button" class="download-button" @click="abrirDocumento(documento.urldocumento)">VER</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="button">
            <button type="submit" @click.prevent="aceptarSolicitud">Aceptar</button>
            <button type="button" @click="rechazarSolicitud">Rechazar</button>
          </div>
          </form>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import FormSolicitudPasantiaAPI from '../services/FormSolicitudPasantiaAPI.js';
import AppNavbar from  '../components/AppNavbar.vue';
import axios from 'axios';

export default {
  components: {
    AppNavbar,
  },
  mixins: [FormSolicitudPasantiaAPI],
  data() {
    return {
      nombres: '',
      apellidos: '',
      telefono: '',
      cedula: '',
      direccion: '',
      correo: '',
      fechaNacimiento: '',
      fechaPostulacion: '',
      nombresDocumentos: ['Carta Motivación', 'Pasaporte o Visa', 'Seguro Médico'], // Nombres predefinidos
      documentosFiltrados: [] 
    };
  },
  methods: {
    formatFecha(fechaISO) {
      return fechaISO.split('T')[0]; // Divide la cadena por 'T' y toma la primera parte
    },
    async obtenerFormulario(id) {
      try {
        const response = await axios.get(`http://localhost:8080/api/v1/formulario-solicitud/${id}`);
        this.formularioDetalle = response.data.formularioSolicitud;
        this.actualizarDatos();
      } catch (error) {
        console.error('Error al obtener el formulario:', error);
      }
    },
    actualizarDatos() {
      if (this.formularioDetalle && this.formularioDetalle.studentId) {
        this.nombres = this.formularioDetalle.studentId.userId.name;
        this.apellidos = this.formularioDetalle.studentId.userId.lastName;
        this.telefono = this.formularioDetalle.studentId.userId.phone;
        this.cedula = this.formularioDetalle.studentId.userId.carnet;
        this.direccion = this.formularioDetalle.studentId.userId.address;
        this.correo = this.formularioDetalle.studentId.userId.email;
        this.fechaNacimiento = this.formularioDetalle.studentId.userId.birth;
        this.fechaPostulacion = this.formatFecha(this.formularioDetalle.requestDate);
      }
      
    },

    async obtenerDocumentosPorRequestId(requestId) {
      try {
        const response = await axios.get(`http://localhost:8080/api/v1/documento-electronico`);
        const documentosElectronicos = response.data.documentosElectronicos;

        // Filtrar los documentos por requestId
        const documentosFiltrados = documentosElectronicos.filter((documento) => documento.formularioSolicitudId.requestId === requestId);

        // Almacenar los documentos filtrados en la propiedad documentosFiltrados
        this.documentosFiltrados = documentosFiltrados;
      } catch (error) {
        console.error('Error al obtener documentos:', error);
      }
    },
    abrirDocumento(urlDocumento) {
      // Abrir la URL del documento en una nueva pestaña o ventana
      window.open(urlDocumento, '_blank');
    }

  },
  mounted() {
    const id = 12; // Reemplaza esto con el ID real que necesitas
    this.obtenerFormulario(id);

    const requestId = 12; // Reemplaza con el requestId que desees
    this.obtenerDocumentosPorRequestId(requestId);
  }

};
</script>



<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

:root {
  --main-blue: #4c64b4;
  --main-yellow: #b6a358;
  --main-grey: #9c9797;
  --main-black: #111111;
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

.componentFormSolicitudPasantia{
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

.container form .user__details {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 20px 0 12px 0;
}

form .user__details .input__box {
  width: calc(100% / 2 - 20px);
  margin-bottom: 15px;
}

.user__details .input__box .details {
  font-weight: 500;
  margin-bottom: 5px;
  display: block;
}

.user__details .input__box input,
.user__details .input__box textarea {
  height: 40px;
  width: 100%;
  outline: none;
  border-radius: 20px;
  border: 1px solid var(--main-grey);
  padding-left: 15px;
  font-size: 16px;
  border-bottom-width: 2px;
  transition: all 0.3s ease;
}

.user__details .input__box input:focus,
.user__details .input__box input:valid {
  border-color: var(--main-black);
}

.user__details .input__box textarea {
  height: 100px;  
  resize: vertical;  
}

form .button {
  height: 30px; 
  margin-top: 20px;
}

form .button button {
  height: 100%;
  padding: 0 25px; 
  color: #fff;
  border: none;
  font-size: 14px;
  font-weight: 500;
  border-radius: 20px;
  background-color: var(--main-blue);
  transition: all 0.3s ease;
}

form .button button:hover {
  background: linear-gradient(-135deg, var(--main-yellow), var(--main-blue));
}

.document-buttons {
  display: flex;
  flex-direction: row; 
  justify-content: start; 
  flex-wrap: wrap; 
  gap: 10px;

}

.download-button {
  padding: 5px 25px; 
  color: #fff;
  border: none;
  font-size: 14px;
  font-weight: 500;
  border-radius: 20px;
  background-color: var(--main-blue);
  transition: all 0.3s ease;
  cursor: pointer; 
  text-transform: uppercase; 
  display: inline-flex; 
  align-items: center;
  justify-content: center; 
  margin-top: 20px; 
  margin-bottom: 20px;
}

.download-button:hover {
  background: linear-gradient(-135deg, var(--main-yellow), var(--main-blue));
}

.document-group {
  display: flex;
  flex-direction: column; 
  align-items: center;
  margin-right: 50px;
}

.document-label {
  font-size: 0.85em; 
  color: var(--main-black); 
  font-weight: bold;
}

@media only screen and (max-width: 584px) {
  .container {
    max-width: 100%;
  }

  .document-buttons {
  display: flex;
  flex-direction: column;
}
  
  .download-button {
    width: 100%; 
    margin-top: 15px; 
  }

  form .user__details .input__box {
    width: 100%;
  }

  .gray-container {
    width: 90%;
  }
}
</style>

