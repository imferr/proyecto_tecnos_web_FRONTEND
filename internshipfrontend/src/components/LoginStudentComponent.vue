<template>
  <div id="app">
    <NavBarLogin/>
    <div class="registro-student">
      <div class="registro-box">
        <img src="@/assets/logo_Universidad.png" alt="Logo" class="logo" />
        <h2>REGISTRARSE</h2>
        <p>REGISTRO PARA ESTUDIANTES</p>
        <div class="form-group">
          <div class="half-width">
            <label for="carrera">Carrera:</label>
            <input type="text" id="carrera" v-model="carrera" />
          </div>
          <div class="half-width">
            <label for="semestre">Semestre:</label>
            <input type="text" id="semestre" v-model="semestre" />
          </div>
        </div>

        <button @click="registrar" class="btn-registrar">Registrarse</button>
      </div>
    </div>
  </div>
</template>

<script>
import AppNavbar from "../components/AppNavbar.vue";
import axios from "axios";
import NavBarLogin from "../components/NavBarLogin.vue";
import LoginStudentAPI from "../services/LoginStudentAPI.js";
import Swal from 'sweetalert2';

export default {
  components: {
    NavBarLogin,
  },
  data() {
    return {
      carrera: "",
      semestre: "",
    };
  },
  methods: {
    async registrar() {
      try {
        const studentData = {
          semester: this.semestre,
          carrier: this.carrera,
          userId: 1, // Deberás obtener este valor según tu lógica de aplicación
          typeUserId: 1 // Igualmente, ajusta este valor según tu lógica
        };

        const response = await LoginStudentAPI.register(studentData);
        console.log(response);
        Swal.fire({
              icon: "success",
              title: "Registro exitoso",
              text: "El registro se ha completado con éxito.",
            });
      } catch (error) {
        console.error(error);
        Swal.fire({
            icon: "error",
            title: "Error en el registro",
            text: "Hubo un error al registrar al administrador. Por favor, inténtalo de nuevo.",
          });      }
    }
  }
};
</script>


<style>
body {
  background-image: url("@/assets/background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>

<style>
.registro-student {
  padding-top: 70px;
  font-family: "Arial", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
}

.registro-box {
  margin-top: 2px;
  text-align: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 40px;
  background-color: rgba(255, 255, 255, 0.85);
  max-width: 800px;
  width: 100%;
  /* Eliminar la altura fija */
}
.logo {
  display: block;
  margin: 0 auto;
  max-width: 70px;
}

label {
  text-align: left;
  display: block;
  margin-top: 10px;
  margin-left: 15px;
  font-size: small;
}

input,
select {
  width: 88%;
  padding: 5px;
  margin-top: 12px;
  border: 1px solid #ccc;
  border-radius: 20px;
}

.btn-registrar {
  width: 25%;
  padding: 5px;
  margin-top: 10px;
  background-color: #4c64b4;
  color: #fff;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  margin-right: -30pc;
}

.form-group {
  display: flex;
  justify-content: space-evenly;
  margin-top: 10px;
}

.half-width {
  width: 48%;
}
.half-width-first {
  width: 30%;
}

.third-width {
  width: 65%;
}

.radio-group {
  display: flex;
  align-items: center;
}

h2 {
  font-size: medium;
}

p {
  font-size: small;
}


</style>
