import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/v1/usuario';

class RegistroUsuarioAPI {
    async register(userData) {
        try {
            const response = await axios.post(`${API_BASE_URL}/register`, userData);
            console.log("Registro exitoso:", response.data);
              return response.data;
        } catch (error) {
            console.error("Error en el registro:", error);
            throw error;
          }
    }

}

export default new RegistroUsuarioAPI();
