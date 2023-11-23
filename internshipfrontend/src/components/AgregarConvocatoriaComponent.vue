<template>
  <div>
    <AppNavbar/>
    <div class="componentAgregarConvocatoria">
      <div class="gray-container">
        <h2>Añadir convocatoria</h2>
        <div class="container">
          <form @submit.prevent="submitForm">
            <div class="user__details">
              <div class="input__box">
                <span class="details">Título:</span>
                <input type="text" v-model="form.titleConvocatoria" required>
              </div>
              <div class="input__box">
                <span class="details">Nombre Institución:</span>
                <input type="text" v-model="form.nombreInstitucion" placeholder="Institución ABC" required>
              </div>
              <div class="input__box">
                <span class="details">Correo:</span>
                <input type="email" v-model="form.correo" placeholder="name.lastname.@ucb.edu.bo" required>
              </div>
              <div class="input__box">
                <span class="details">Teléfono:</span>
                <input type="tel" v-model="form.telefono" required>
              </div>
              <div class="input__box">
                <span class="details">Fecha publicación:</span>
                <input type="date" v-model="form.dateConvocatoria" required>
              </div>
              <div class="input__box">
                <span class="details">Fecha inicio:</span>
                <input type="date" v-model="form.fechaInicio" required>
              </div>
              <div class="input__box">
                <span class="details">Fecha límite:</span>
                <input type="date" v-model="form.fechaLimite" required>
              </div>
              <div class="input__box description">
                <span class="details">Descripción:</span>
                <textarea v-model="form.descriptionConvocatoria" placeholder="Descripción del intercambio..."></textarea>
              </div>
            </div>
            <div class="button">
              <button type="submit">Añadir</button>
              <button type="button" @click="cancelar">Cancelar</button>
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

.componentAgregarConvocatoria {
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
import axios from 'axios';
import AppNavbar from '../components/AppNavbar.vue';

export default {
  components: {
    AppNavbar,
  },
  data() {
    return {
      form: {
        titleConvocatoria: '',
        descriptionConvocatoria: '',
        dateConvocatoria: '',
        stateConvocatoria: true,
        companyId: 1,
        useiId: 1
      },
    };
  },
  methods: {
    submitForm() {
      const API_URL = 'http://localhost:8080/api/v1/convocatoria/register';
      axios.post(API_URL, this.form)
        .then(response => {
          // Manejar la respuesta aquí, como mostrar un mensaje de éxito o redirigir
          console.log('Convocatoria añadida:', response.data);
        })
        .catch(error => {
          // Manejar errores aquí, como mostrar un mensaje de error
          console.error('Hubo un error:', error);
        });
    },
    cancelar() {
      this.$router.go(-1);
    },
  },
};
</script>