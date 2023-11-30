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
import axios from 'axios';
export default {
  components: {
    NavBarLogin,
  },

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
      if (!this.email || !this.password) {
        this.error = 'Por favor, completa todos los campos.';
        return;
      }

      this.getAllUsers().then(users => {
      console.log(users); // Verifica qué usuarios estás obteniendo
      const user = users.find(u => u.email === this.email);
      console.log(user); // Verifica si encontraste un usuario que coincida

      if (user && user.password === this.password) {
        // Verifica si el usuario es un administrador
        this.checkIfUserIsAdmin(user.id).then(isAdmin => {
          console.log(isAdmin); // Verifica si el usuario es un administrador
         // if (isAdmin) {
            this.$router.push('/home');
        //  } else {
          //  this.error = 'No tienes permisos de administrador.';
          //}
        });
      } else {
        this.error = 'Credenciales de usuario incorrectas.';
      }
    });
    },
    getAllUsers() {
      return axios.get('http://localhost:8080/api/v1/usuario')
        .then(response => response.data)
        .catch(error => {
          console.error('Error al obtener usuarios:', error);
          return [];
        });
    },
    findUserByEmail(email) {
      return axios.get('http://localhost:8080/api/v1/usuario')
      .then(response => {
        const users = response.data;
        const user = users.find(u => u.email === email);
        return user || null;
      });
    },
    checkIfUserIsAdmin(userId) {
  console.log("Iniciando verificación de administrador para el usuario ID:", userId);

  return axios.get('http://localhost:8080/api/v1/administradores')
    .then(response => {
      console.log("Respuesta de la API de administradores:", response.data);

      // Revisar si el usuario actual está en la lista de administradores
      const administradores = response.data.administradores;
      console.log("Lista de administradores obtenida:", administradores);

      const esAdmin = administradores.some(admin => {
        console.log("Verificando administrador con ID:", admin.userId, "y typeuserId:", admin.typeuserId);
        return admin.userId === userId && admin.typeuserId === 2;
      });

      console.log("Resultado de la verificación de administrador:", esAdmin);
      return esAdmin;
    })
    .catch(error => {
      console.error('Error al verificar el rol de administrador:', error);
      return true;
    });
},

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


