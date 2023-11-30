<template>
  <div>
    <NavBarLogin />
  </div>
  <div id="app">
    <div class="login-container">
      <div class="login-box">
        <img src="@/assets/logo_Universidad.png" alt="Logo" class="logo" />
        <h2>INICIO DE SESIÓN</h2>

        <label for="email">Correo:</label>
        <input type="text" id="email" v-model="email" @input="clearError" placeholder="Ingresa tu correo" />

        <label for="password">Contraseña:</label>
        <input type="password" id="password" v-model="password" @input="clearError" placeholder="Ingresa tu contraseña" />
        <div class="button-container">
          <button @click="login">Iniciar Sesión</button>

          <button @click="adminLogin">Iniciar Sesión Administrador</button>
        </div>

        <p class="error" v-if="error">{{ error }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import NavBarLogin from '../components/NavBarLogin.vue';
import LoginAPI from '../services/LoginAPI.js';
export default {
  components: {
    NavBarLogin,
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
    login() {
      //TO DO: MANDAR Y VERICAR DATOS DEL USUARIO PARA EL LOGIN Y DESPUES MANDAR A LA RUTA

      //ALGO ASÍ
      //THEN()=>
      this.$router.push('/home');
    },
    adminLogin() {
      //TO DO: MANDAR Y VERICAR DATOS DEL USUARIO PARA EL LOGIN Y DESPUES MANDAR A LA RUTA

      //ALGO ASÍ
      //THEN()=>
      this.$router.push('/home');
    },

    //AÑADIR VALIDADORES DE CAMPOS, SI NO ESTA COMPLETO UN CAMPO QUE NO SE MANDE NINGUN DATO
    //SWEET ALERT PARA MOSTRAR MENSAJES DE ERROR
    //ALERTA DE QUE EL USUARIO NO EXISTE
    //ALERTA DE QUE LA CONTRASEÑA ES INCORRECTA
    //ALERTA DE LLENA TODOS LOS CAMPOS
  },
};
</script>

<style scoped>
.login-container {
  font-family: 'Arial', sans-serif;
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
  background-color: rgba(255, 255, 255, 0.85);
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
  background-color: #4c64b4;
  color: #fff;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #b6a358;
}

.error {
  color: red;
  margin-top: 10px;
}

.button-container {
  display: flex;
  justify-content: space-evenly;
  margin-top: 10px;
}
</style>
<style>
body {
  background-image: url('@/assets/background.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>


