<template>
  <div class="container">
    <div class="title">
      <img src="../assets/logo_Universidad.png" alt="Logo" class="logo">REGISTRARSE
    </div>
    <form action="#">
      <div class="user__details">
        <div class="input__box">
          <span class="details">Nombres:</span>
          <input type="text" placeholder="" required>
        </div>
        <div class="input__box">
          <span class="details">Apellidos:</span>
          <input type="text" placeholder="" required>
        </div>
        <div class="input__box">
          <span class="details">Correo institucional: </span>
          <input type="email" placeholder="nombre.apellido@ucb.edu.bo" required>
        </div>
        <div class="input__box">
          <span class="details">Número de teléfono</span>
          <input type="tel" pattern="" placeholder="" required>
        </div>
        <div class="input__box">
          <span class="details">Dirección:</span>
          <input type="text" placeholder="" required>
        </div>
        <div class="input__box">
          <span class="details">Carrera:</span>
          <input type="text" placeholder="" required>
        </div>
        <div class="input__box">
          <span class="details">Semestre:</span>
          <input type="text" placeholder="" required>
        </div>
        <div class="input__box">
          <span class="details">Carnet de identidad</span>
          <input type="text" placeholder="" required>
        </div>
        <div class="input__box">
          <span class="details">Fecha de nacimiento:</span>
          <input type="date" placeholder="dd/mm/aaaa" required>
        </div>
        <div class="input__box">
          <span class="details">Género:</span>
          <div class="gender__details">
            <input type="radio" name="gender" id="dot-1">
            <input type="radio" name="gender" id="dot-2">
            <div class="category">
              <label for="dot-1">
                <span class="dot one"></span>
                <span>Mujer</span>
              </label>
              <label for="dot-2">
                <span class="dot two"></span>
                <span>Hombre</span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="button">
        <button type="submit" value="REGISTRARSE" @click="login">Registrarse </button>
      </div>
    </form>
  </div>
</template>


<style>
/* externo */
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

body {
  display: flex;
  height: 100vh;
  justify-content: center; /*verticalmente */
  align-items: center; /* horizontalmente */
  padding: 10px;
  background-image: url('../assets/fondo_principal.jpeg'); 
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat;
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

form .button input {
  height: 100%;
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

form .button input:hover {
  background: linear-gradient(-135deg, var(--main-yellow), var(--main-blue));
}

@media only screen and (max-width: 584px) {
  .container {
    max-width: 100%;
  }

  form .user__details .input__box {
    margin-bottom: 15px;
    width: 100%;
  }

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

import LoginStudentAPI from '../services/LoginStudentAPI.js';

export default {
  mixins: [LoginStudentAPI],
};

</script>