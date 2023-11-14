import axios from 'axios';

export default {
  data() {
    return {
      // Declaración de variables de datos relacionadas con el registro
    };
  },
  methods: {
    registrarAdmin() {
      // Aquí deberías enviar una solicitud POST al servidor para registrar al administrador
      const adminData = {
        nombre: this.nombre,
        apellido: this.apellido,
        email: this.email,
        telefono: this.telefono,
        genero: this.genero,
        carnet: this.carnet,
        nacimiento: this.nacimiento,
        direccion: this.direccion,
        cargo: this.cargo,
        empresa: this.empresa,
      };

      axios
        .post('URL_DEL_SERVIDOR', adminData)
        .then((response) => {
          // Manejar la respuesta del servidor si es necesario
          console.log('Administrador registrado con éxito', response.data);
          // Redirigir a una página de éxito o realizar alguna otra acción
          this.$router.push({ name: 'registroExitoso' });
        })
        .catch((error) => {
          // Manejar errores de registro
          console.error('Error al registrar al administrador', error);
        });
    },
  },
};
