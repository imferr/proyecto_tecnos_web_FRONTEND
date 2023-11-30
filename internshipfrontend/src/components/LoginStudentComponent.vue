<template>
  <div>
    <AppNavbar />
    <div class="componentRegistroStudent">
      <div class="container">
        <div class="title">
          <img
            src="../assets/logo_Universidad.png"
            alt="Logo"
            class="logo"
          />REGISTRARSE
        </div>
        <form @submit.prevent="registrar">
          <div class="user__details">
            <div class="input__box">
              <label for="nombres" class="details">Nombres:</label>
              <input
                id="nombres"
                type="text"
                v-model="nombre"
                placeholder=""
                required
              />
            </div>
            <div class="input__box">
              <label for="apellidos" class="details">Apellidos:</label>
              <input
                id="apellidos"
                type="text"
                v-model="apellido"
                placeholder=""
                required
              />
            </div>
            <div class="input__box">
              <label for="correo" class="details">Correo institucional:</label>
              <input
                id="correo"
                type="email"
                v-model="email"
                placeholder="nombre.apellido@ucb.edu.bo"
                required
              />
            </div>
            <div class="input__box">
              <label for="contrasena" class="details">Contraseña:</label>
              <input
                type="password"
                id="contrasena"
                v-model="contrasena"
                placeholder="Ingresa tu contraseña"
                required
              />
            </div>
            <div class="input__box">
              <label for="telefono">Número de Teléfono:</label>
              <input type="tel" id="telefono" v-model="telefono" />
            </div>
            <div class="input__box">
              <label for="direccion" class="details">Dirección:</label>
              <input
                type="text"
                id="direccion"
                v-model="direccion"
                placeholder=""
                required
              />
            </div>
            <div class="input__box">
              <label for="carrera" class="details">Carrera:</label>
              <input
                type="text"
                id="carrera"
                v-model="carrera"
                placeholder=""
                required
              />
            </div>
            <div class="input__box">
              <label for="semestre" class="details">Semestre:</label>
              <input
                type="text"
                id="semestre"
                v-model="semestre"
                placeholder=""
                required
              />
            </div>
            <div class="input__box">
              <label for="carnet" class="details">Carnet de identidad:</label>
              <input
                type="text"
                id="carnet"
                v-model="carnet"
                placeholder=""
                required
              />
            </div>
            <div class="input__box">
              <label for="nacimiento" class="details"
                >Fecha de nacimiento:</label
              >
              <input
                type="date"
                id="nacimiento"
                v-model="nacimiento"
                placeholder="dd/mm/aaaa"
                required
              />
            </div>
            <div class="input__box">
              <span class="details">Género:</span>
              <div class="gender__details">
                <input
                  type="radio"
                  name="gender"
                  id="dot-1"
                  value="Mujer"
                  v-model="genero"
                />
                <label for="dot-1">
                  <span class="dot one"></span>
                  <span>Mujer</span>
                </label>
                <input
                  type="radio"
                  name="gender"
                  id="dot-2"
                  value="Hombre"
                  v-model="genero"
                />
                <label for="dot-2">
                  <span class="dot two"></span>
                  <span>Hombre</span>
                </label>
              </div>
            </div>
          </div>
          <div class="button">
            <button type="submit" value="REGISTRARSE">Registrarse</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import AppNavbar from "../components/AppNavbar.vue";
import LoginStudentAPI from "../services/LoginStudentAPI.js";
import Swal from 'sweetalert2'

export default {
  components: {
    AppNavbar,
  },
  mixins: [LoginStudentAPI],

  data() {
    return {
      nombre: "",
      apellido: "",
      email: "",
      contrasena: "",
      telefono: "",
      direccion: "",
      carrera: "",
      semestre: "",
      carnet: "",
      nacimiento: "",
      genero: "",
    };
  },
  methods: {
    async registrar() {
      try {
        const usuarioData = {
          name: this.nombre,
          lastName: this.apellido,
          email: this.email,
          password: this.contrasena,
          phone: this.telefono,
          address: this.direccion,
          carnet: this.carnet,
          birth: this.nacimiento,
          gender: this.genero
        };

        await axios.post(
          "http://localhost:8080/api/v1/usuario/register",
          usuarioData
        );

        const estudianteData = {
          semester: this.semestre,
          carrier: this.carrera,
          userId: 1,
          typeUserId: 1,
        };

        // Enviar los datos a la segunda API
        await axios.post(
          "http://localhost:8080/api/v1/estudiantes/register",
          estudianteData
        );

        Swal.fire({
          icon: "success",
          title: "Registro exitoso",
          text: "El registro se ha completado con éxito.",
        });

        console.log("Registro exitoso");
      } catch (error) {
        console.error("Error en el registro:", error);


      }
    },
  },
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
  --main-grey: #dddada;
  --sub-grey: #b8b0b0;
  --main-black: #111111;
}

.container .title .logo {
  height: 70px;
  width: auto;
  margin-right: 10px;
}
.componentRegistroStudent {
  display: flex;
  height: 100vh;
  justify-content: center; /*verticalmente */
  align-items: center; /* horizontalmente */
  padding: 10px;
  background-image: url("../assets/fondo_principal.jpeg");
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
.container form {
  position: relative;
}

.container form .user__details {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 20px 0 12px 0;
}
/* inside the form user details */
form .user_details .input_box {
  width: calc(100% / 2 - 20px);
  margin-bottom: 15px;
}

.user_details .input_box .details {
  font-weight: 500;
  margin-bottom: 5px;
  display: block;
}
.user_details .input_box input {
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

.user_details .input_box input:focus,
.user_details .input_box input:valid {
  border-color: var(--main-purple);
}

/* detalles para el genero */

form .gender_details .gender_title {
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
  display: inline-block;
  padding: 0 25px;
  outline: none;
  color: #fff;
  border: none;
  font-size: 14px;
  font-weight: 500;
  border-radius: 20px;
  background-color: #4c64b4;
  transition: all 0.3s ease;
}

form .button button:hover {
  background: linear-gradient(-135deg, var(--main-yellow), var(--main-blue));
}

@media only screen and (max-width: 584px) {
  .container {
    max-width: 100%;
  }

  form .user_details .input_box {
    margin-bottom: 15px;
    width: 100%;
  }
  cd form .gender__details .category {
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
