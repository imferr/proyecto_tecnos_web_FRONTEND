<template>
  <div>
    <AppNavbar />
   <div id="app">
  <div class="registro-admin">
    <div class="registro-box">
      <img src="@/assets/logoU.png" alt="Logo" class="logo" />
      <h2>REGISTRARSE</h2>
      <p>ADMINISTRADOR DE UNA EMPRESA</p>

      <div class="form-group">
        <div class="half-width">
          <label for="nombre">Nombre:</label>
          <input type="text" id="nombre" v-model="nombre" />
        </div>
        <div class="half-width">
          <label for="apellido">Apellido:</label>
          <input type="text" id="apellido" v-model="apellido" />
        </div>
      </div>

      <div class="form-group">
        <div class="half-width-first">
          <label for="email">Correo Electrónico:</label>
          <input type="email" id="email" v-model="email" />
        </div>
        <div class="half-width-first">
          <label for="telefono">Número de Teléfono:</label>
          <input type="tel" id="telefono" v-model="telefono" />
        </div>
        <div>
        <label>Género:</label>
      </div>
        <div>
          <label for="hombre">Hombre</label>
          <label for="mujer">Mujer</label>
        </div>
        <div>
          <input type="radio" id="hombre" value="hombre" v-model="genero" />
          <input type="radio" id="mujer" value="mujer" v-model="genero" />
        </div>
      
      </div>

      <div class="form-group">
        <div class="third-width">
          <label for="carnet">Carnet de Identidad:</label>
          <input type="text" id="carnet" v-model="carnet" />
        </div>
        <div class="third-width">
          <label for="nacimiento">Fecha de Nacimiento:</label>
          <input type="date" id="nacimiento" v-model="nacimiento" />
        </div>
        <div class="third-width">
          <label for="direccion">Dirección:</label>
          <input type="text" id="direccion" v-model="direccion" />
        </div>
      </div>

      <div class="form-group">
        <div class="half-width">
          <label for="cargo">Cargo:</label>
          <input type="text" id="cargo" v-model="cargo" />
        </div>
        <div class="half-width">
          <label for="empresa">Empresa:</label>
          <select id="empresa" v-model="empresa">
            <option value="empresa1">Empresa 1</option>
            <option value="empresa2">Empresa 2</option>
            <option value="empresa3">Empresa 3</option>
          </select>
        </div>
      </div>

      <button @click="registrar" class="btn-registrar">Registrarse</button>    </div>
  </div>
   </div>
  </div>
</template>

<script>
import AppNavbar from '../components/AppNavbar.vue'; // Importa el componente Navbar
import RegistroAdminAPI from '../services/RegistroAdminAPI.js'; // Asegúrate de importar LoginStudentAPI
export default {
  components: {
    AppNavbar, // Registra el componente Navbar para usarlo en la plantilla
  },
  mixins: [RegistroAdminAPI],

  data() {
    return {
      nombre: '',
      apellido: '',
      email: '',
      telefono: '',
      genero: '',
      carnet: '',
      nacimiento: '',
      direccion: '',
      cargo: '',
      empresa: 'empresa1', // Valor predeterminado
    };
  },
  methods: {
    registrar() {
      // Agregar lógica de registro aquí
    },
  },
};
</script>
<style>
body {
  background-image: url('@/assets/background.jpg');
  background-size: cover; /* Ajusta la imagen al tamaño de la pantalla */
  background-repeat: no-repeat; /* Evita que la imagen se repita */
  background-attachment: fixed; /* Fija la imagen en su lugar */
}
</style>


<style scoped>
.registro-admin {
  font-family: 'Arial', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
}

.registro-box {
  margin-top: 100px;
  text-align: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 40px;
  background-color: #f9f9f9;
  background-color: rgba(255, 255, 255, 0.85);
  max-width: 800px; /* Ajustar el ancho a tus necesidades */
  width: 100%;
  height: 82vh; /* Ajustar la altura según tus necesidades */
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
  font-size:small;
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
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  margin-right: -30pc; /* Ajusta la cantidad de margen a tu preferencia */
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

h2{
  font-size: medium;

}

p{
  font-size: small;

}
</style>
