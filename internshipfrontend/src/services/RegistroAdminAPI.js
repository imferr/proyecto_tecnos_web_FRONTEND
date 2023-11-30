import axios from 'axios';
import Swal from "sweetalert2";


const API_BASE_URL = 'http://localhost:8080/api/v1/administradores';

class RegistroAdminAPI {
    async register(adminData) {
        try {
            const response = await axios.post(`${API_BASE_URL}/register`, adminData);
            Swal.fire({
              icon: "success",
              title: "Registro exitoso",
              text: "El registro se ha completado con éxito.",
            });
            return response.data;
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "Error en el registro",
            text: "Hubo un error al registrar al administrador. Por favor, inténtalo de nuevo.",
          });
            throw error;
            
        }
    }

}

export default new RegistroAdminAPI();
