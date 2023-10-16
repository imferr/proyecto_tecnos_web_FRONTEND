<template>
  <div>
    <AppNavbar />
     <div id="app">
  <div class="login-container">
    <div class="login-box">
      <img src="@/assets/logoU.png" alt="Logo" class="logo" />
      <h2>INICIO DE SESIÓN</h2>

      <label for="email">Correo:</label>
      <input
        type="text"
        id="email"
        v-model="email"
        @input="clearError"
        placeholder="Ingresa tu correo"
      />

      <label for="password">Contraseña:</label>
      <input
        type="password"
        id="password"
        v-model="password"
        @input="clearError"
        placeholder="Ingresa tu contraseña"
      />
      <div class="button-container">
    <button @click="login">Iniciar Sesión</button> 
    <button @click="adminLogin">Iniciar Sesión Administrador</button>
  </div>

      <p class="error" v-if="error">{{ error }}</p>
    </div>
  </div>
  </div>
</div>
</template>

<script>
import AppNavbar from '../components/AppNavbar.vue'; // Importa el componente Navbar
import LoginAPI from '../services/LoginAPI.js'; // Asegúrate de importar LoginStudentAPI
export default {
  components: {
    AppNavbar, // Registra el componente Navbar para usarlo en la plantilla
  },
  
  mixins: [LoginAPI],
  
  data() {
    return {
      email: '',
      password: '',
      error: '',
    };
  },
  
  methods: {
    clearError() {
      this.error = '';
    },
    // Otros métodos de inicio de sesión
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
.login-container {
  font-family: 'Arial', sans-serif; /* Cambia 'Arial' por la fuente que desees usar */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  border-radius: 8px;

}

.login-box {
  text-align: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 40px;
  background-color: #f9f9f9;
  background-color: rgba(255, 255, 255, 0.85); /* Establece la opacidad aquí */
  max-width: 400px;
  width: 100%;
}

.logo {
  display: block;
  margin: 0 auto;
  max-width: 90px;
}

label {
  text-align: left;
  display: block;
  margin-top: 10px;
  margin-left: 15px;

}

input {
  width: 88%;
  padding: 10px;
  margin-top: 5px;

  border: 1px solid #ccc;
  border-radius: 20px;
}

button {
  width: 40%;
  padding: 3px;
  margin-top: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 20px;
  cursor: pointer;
}

.error {
  color: red;
  margin-top: 10px;
}

.button-container {
  display: flex;
  justify-content: space-evenly; /* Coloca los botones al principio y al final del contenedor con espacio entre ellos */
  margin-top: 10px; /* Espacio superior entre el contenido y los botones */
}
</style>


