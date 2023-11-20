import axios from 'axios';

export default {
  data() {
    return {
      // Declaración de variables de datos relacionadas con el registro
    };
  },
  methods: {
    //ejemplo
    registrarAdmin() {
      //solicitud POST al servidor para registrar al administrador
      const adminData = {
        //variables
      };

      axios
        .post('URL_DEL_SERVIDOR', adminData)
        //manejar excepciones
    },
  },
};