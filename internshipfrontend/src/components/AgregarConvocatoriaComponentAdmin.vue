<template>
  <div>
    <AppNavbarAdmin/>
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


<style scoped>
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
  height: 80%; 
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
  margin-top: 20px; 
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
  height: 45px;
  padding: 10px 30px;
  font-size: 16px;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  outline: none;
  color: #fff;
  border: none;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.4s ease;
  background: #4c64b4;
}

/* Cambio de color al pasar el cursor */
form .button button:hover {
  background-color: #b6a358; 
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
import AppNavbarAdmin from './AppNavbarAdmin.vue';
import Swal from "sweetalert2";

export default {
  components: {
    AppNavbarAdmin
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
        // Check the response status or data to determine success or failure.
        if (response.status === 200) {
          Swal.fire({
            icon: 'success',
            title: 'Convocatoria añadida',
            text: 'La convocatoria se ha añadido correctamente.',
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Hubo un error al añadir la convocatoria.',
          });
        }
      })
      .catch(error => {
        // Handle network errors or other issues.
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Hubo un error al comunicarse con el servidor.',
        });
        console.error('Hubo un error:', error);
      });
    },
    cancelar() {
      this.$router.go(-1);
    },
  },
};
</script>