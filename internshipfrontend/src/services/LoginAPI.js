import axios from 'axios';

export default {
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
      // Realiza una solicitud de inicio de sesión al servidor
      axios.post('/api/login', {
        email: this.email,
        password: this.password,
      })
      .then((response) => {
        // Maneja la respuesta del servidor, por ejemplo, almacenando un token de autenticación
        // y redirigiendo al usuario a la página de inicio.
        localStorage.setItem('token', response.data.token);
        this.$router.push({ name: 'home' });
      })
      .catch((error) => {
        // Maneja los errores de inicio de sesión
        if (error.response) {
          this.error = error.response.data.message;
        } else {
          this.error = 'Error de inicio de sesión';
        }
      });
    },
    adminLogin() {
      // Lógica de inicio de sesión de administrador (similar a login())
      // Puedes realizar una solicitud al servidor para autenticar al administrador
    },
  },
};
