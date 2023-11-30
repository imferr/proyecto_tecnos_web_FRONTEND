<template>
  <div id="app">
    <app-navbar></app-navbar>
    <div class="registro-admin">
      <div class="registro-box">
        <img src="@/assets/logo_Universidad.png" alt="Logo" class="logo" />
        <h2>REGISTRARSE</h2>
        <p>ADMINISTRADOR DE UNA EMPRESA</p>
        <div class="form-group">
          <div class="half-width">
            <label for="cargo">Cargo:</label>
            <input type="text" id="cargo" v-model="cargo" />
          </div>
          <div class="half-width">
            <label for="empresa">Empresa:</label>
            <select id="empresa" v-model="empresa">
              <option value="1">Empresa 1</option>
              <option value="2">Empresa 2</option>
              <option value="3">Empresa 3</option>
            </select>
          </div>
        </div>

        <button @click="registrar" class="btn-registrar">Registrarse</button>
      </div>
    </div>
  </div>
</template>

<script>
import AppNavbar from "../components/AppNavbar.vue";
import RegistroAdminAPI from "../services/RegistroAdminAPI.js";
import Swal from "sweetalert2";


export default {
  components: {
    AppNavbar,
  },
  data() {
    return {
      cargo: "",
      empresa: "",
    };
  },
  methods: {
    async registrar() {
      try {
        const adminData = {
          cargo: this.cargo,
          companyId: parseInt(this.empresa),
          userId: 1, // Deberás obtener este valor según tu lógica de aplicación
          typeuserId: 1 // Igualmente, ajusta este valor según tu lógica
        };

        const response = await RegistroAdminAPI.register(adminData);
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
            });
      }
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
.registro-admin {
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
