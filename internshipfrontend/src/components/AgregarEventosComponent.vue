<template>
    <div>
      <AppNavbar/>
      <div class="componentAgregarEventos">
        <div class="gray-container">
          <div class="title">
            <h2>Añadir eventos</h2>  
          </div>
        <div class="container">
          <form action="#">
            <div class="user__details">
              <div class="input__box">
                <span class="details">Tipo evento:</span>
                <input type="text" placeholder="" required>
              </div>
              <div class="input__box">
                <span class="details">Fecha inicio:</span>
                <input type="date" placeholder="" required>
              </div>
              <div class="input__box">
                <span class="details">Hora:</span>
                <input type="time" placeholder="" required>
              </div>
              <div class="input__box description">
                <span class="details">Descripción:</span>
                <textarea placeholder="Descripción del evento..."></textarea>
              </div>
            </div>
            <div class="button">
              <button type="submit" value="AÑADIR" @click="eventos">Añadir</button>
              <button type="reset" value="CANCELAR" @click="eventos">Cancelar</button>
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
  --main-grey: #dddada;
  --sub-grey: #b8b0b0;
  --main-black: #111111;
}

.container .title .logo {
  height: 70px; 
  width: auto;  
  margin-right: 10px; 
}
.componentAgregarEventos {
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

/* contenedores y formas */
.container {
  max-width: 900px;
  width: 100%;
  background: #ffffffc9;
  padding: 25px 30px;
  border-radius: 20px;
}
.container .title {
  font-size: 25px;
  font-weight: 500;
  position: relative;
  display: flex;
  align-items: center;
}
.container form{
  position: relative;
}

.container form .user__details {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 20px 0 12px 0;
}
/* inside the form user details */
form .user__details .input__box {
  width: calc(100% / 2 - 20px);
  margin-bottom: 15px;
}

.user__details .input__box .details {
  font-weight: 500;
  margin-bottom: 5px;
  display: block;
}
.user__details .input__box input {
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
.user__details .input__box textarea {
  height: 100px;  /* Ajusta según la altura deseada */
  width: 100%;
  outline: none;
  border-radius: 20px;  /* Esto hará que los bordes sean redondeados */
  border: 1px solid var(--main-grey);
  padding: 15px;  /* Añade relleno para que el texto no esté demasiado cerca del borde */
  font-size: 16px;
  border-bottom-width: 2px;
  transition: all 0.3s ease;
  resize: vertical;  /* Esto permitirá que el usuario ajuste verticalmente el área de texto si lo necesita */
}

.user__details .input__box input:focus,
.user__details .input__box input:valid {
  border-color: var(--main-purple);
}

/* detalles para el genero */

form .gender__details .gender__title {
  font-size: 20px;
  font-weight: 500;
}

form .gender__details .category {
  display: flex;
  width: 15%;
  margin: 15px 0;
  justify-content: space-between;
}

.gender__details .category label {
  display: flex;
  align-items: center;
}

.gender__details .category .dot {
  height: 18px;
  width: 18px;
  background: var(--sub-grey);
  border-radius: 50%;
  margin: 10px;
  border: 5px solid transparent;
  transition: all 0.3s ease;
}

#dot-1:checked ~ .category .one,
#dot-2:checked ~ .category .two,
#dot-3:checked ~ .category .three {
  border-color: var(--sub-grey);
  background: var(--main-black);
}

form input[type="radio"] {
  display: none;
}

/* submit button */
form .button {
  position: absolute;
  bottom: 0;
  right: 10px;
  height: 30px; 
  margin: 0;
}

form .button button {
  height: 100%;
  margin-top: 20px; 
  display: inline-block; 
  padding: 0 25px; 
  outline: none;
  color: #fff;
  border: none;
  font-size: 14px;
  font-weight: 500;
  border-radius: 20px;
  background-color:  #4c64b4 ;
  transition: all 0.3s ease;
}

form .button button:first-child {
  margin-right: 10px;
}

form .button button:hover {
  background: linear-gradient(-135deg, var(--main-yellow), var(--main-blue));
}

@media only screen and (max-width: 584px) {
  .container {
    max-width: 100%;
  }

  form .user__details .input__box {
    margin-bottom: 15px;
    width: 100%;
  }cd

  form .gender__details .category {
    width: 100%;
  }

  .container form .user__details {
    max-height: 300px;
    overflow-y: scroll;
  }

  .user__details::-webkit-scrollbar {
    width: 0;
  }
}
</style>



<script>

import AgregarEventosAPI from '../services/AgregarEventosAPI.js';
import AppNavbar from  '../components/AppNavbar.vue';

export default {
  components:{
    AppNavbar,
  },
  mixins: [AgregarEventosAPI],
};   



</script>  