<template>
  <div>
    <AppNavbar/>
    <div class="componentRegistroUsuario">
      <div class="gray-container">
        <div>
        <h2>Registro de usuario</h2>          
      </div>
      <div class="container">
        <form action="#">
          <div class="user__details">
            <div class="input__box">
              <span class="details">Nombre:</span>
              <input type="text" id="nombre" placeholder="" required>
            </div>
            <div class="input__box">
              <span class="details">Apellido:</span>
              <input type="text" id="apellido" placeholder="" required>
            </div>
            <div class="input__box">
              <span class="details">Carnet:</span>
              <input type="text" id="carnet" placeholder="" required>
            </div>
            <div class="input__box">
              <span class="details">Correo:</span>
              <input type="email" id="correo" placeholder="...@correo.com" required>
            </div>
            <div class="input__box">
              <span class="details">Telefono:</span>
              <input type="text" id="telefono" placeholder="" required>
            </div>
            <div class="input__box">
              <span class="details">Dirección:</span>
              <input type="text" id="direccion" placeholder="" required>
            </div>
            <div class="input__box">
            <span class="details">Fecha de nacimiento:</span>
            <input type="date" id="fechaNacimiento" placeholder="dd/mm/aaaa" required>
            </div>
            <div class="input__box">
              <span class="details">Contraseña:</span>
              <input type="password" id="contrasenia" placeholder="" required>
            </div>
            <div class="input__box">
            <span class="details">Género:</span>
            <div class="gender__details">
            <input type="radio" name="gender" id="dot-1" value="Femenino">
            <input type="radio" name="gender" id="dot-2" value="Masculino">
            <div class="category">
            <label for="dot-1">
              <span class="dot one"></span>
              <span>Femenino</span>
            </label>
            <label for="dot-2">
              <span class="dot two"></span>
              <span>Masculino</span>
            </label>
          </div>
          </div>
        </div>
          </div>
          <div class="button">
            <button type="submit" value="AÑADIR" @click="registro">Registrar</button>
            <button type="reset" value="CANCELAR" @click="cancelar">Cancelar</button>
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

.componentRegistroUsuario {
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
.user__details .input__box input, 
.user__details .input__box textarea {
  width: 100%;
  outline: none;
  border-radius: 20px; 
  border: 1px solid var(--main-grey);
  padding-left: 15px;
  font-size: 16px;
  border-bottom-width: 2px;
  transition: all 0.3s ease;
}
.user__details .input__box input[type="text"],
.user__details .input__box input[type="email"],
.user__details .input__box input[type="tel"],
.user__details .input__box input[type="date"] {
  height: 40px;
}
.user__details .input__box input:focus,
.user__details .input__box input:valid {
  border-color: var(--main-purple);
}

/* Botones */
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
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.4s ease;
  background: var(--main-yellow); 
  align-items: center;
}

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

/* Responsive */
@media (max-width: 584px) {
  .container {
    max-width: 100%;
  }
  .container .user__details .input__box {
    margin-bottom: 15px;
    width: 100%;
  }
  .container form .button {
    position: relative;
    bottom: initial;
    right: initial;
  }
}
</style>

<script>
import RegistroUsuarioAPI from '../services/RegistroUsuarioAPI.js';
import AppNavbar from '../components/AppNavbar.vue';

export default {
  components: {
    AppNavbar,
  },
  methods: {
    async registro() {
      const selectedGender = document.querySelector('input[name="gender"]:checked');

      const userFormData = {
        name: document.getElementById('nombre').value,
        lastName: document.getElementById('apellido').value,
        email: document.getElementById('correo').value,
        password: document.getElementById('contrasenia').value,
        phone: document.getElementById('telefono').value,
        address: document.getElementById('direccion').value,
        carnet: document.getElementById('carnet').value,
        birth: document.getElementById('fechaNacimiento').value,
        gender: selectedGender ? selectedGender.value : null,

      };

      try {
        const response = await RegistroUsuarioAPI.register(userFormData);
        console.log(response);
      
      } catch (error) {
        console.error(error);

      }
    },
    cancelar() {
      this.$router.go(-1);
    }
  }
};
</script>
