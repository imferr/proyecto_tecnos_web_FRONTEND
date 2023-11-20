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
              <input type="text" required>
            </div>
            <div class="input__box">
              <span class="details">Apellidos:</span>
              <input type="text" required>
            </div>
            <div class="input__box">
              <span class="details">Teléfono:</span>
              <input type="tel" required> 
            </div>
            <div class="input__box">
              <span class="details">Cédula:</span>
              <input type="text" required>
            </div>
            <div class="input__box">
              <span class="details">Dirección:</span>
              <input type="text" required>
            </div>
            <div class="input__box">
              <span class="details">Correo:</span>
              <input type="email" required> 
            </div>
            <div class="input__box">
              <span class="details">Fecha nacimiento:</span>
              <input type="text" required> 
            </div>
            <div class="input__box">
              <span class="details">Fecha postulación:</span>
              <input type="text" required> 
            </div>
            <div class="input__box">
              <span class="details">Programa postulado:</span>
              <input type="text" required>
            </div>
            <div class="input__box">
              <span class="details">Documentación:</span>
              <div class="document-buttons">
                <div class="document-group">
                  <span class="document-label">Documento 1:</span>
                  <button type="button" class="download-button" @click="descargarDocumento('doc1')">DESCARGAR</button>
                </div> 
                <div class="document-group">
                  <span class="document-label">Documento 2:</span>
                  <button type="button" class="download-button" @click="descargarDocumento('doc2')">DESCARGAR</button>
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
}

.document-label {
  font-size: 0.75em; 
  color: var(--main-black); 
  font-weight: bold;
}

@media only screen and (max-width: 584px) {
  .container {
    max-width: 100%;
  }

  .document-buttons {
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

<script>
import FormSolicitudPasantiaAPI from '../services/FormSolicitudPasantiaAPI.js';
import AppNavbar from  '../components/AppNavbar.vue';

export default {
  components:{
    AppNavbar,
  },
  mixins: [FormSolicitudPasantiaAPI],
};   
</script>  