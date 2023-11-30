import axios from 'axios';


const API_BASE_URL = 'http://localhost:8080/api/v1/administradores';

class RegistroAdminAPI {
    async register(adminData) {
        try {
            const response = await axios.post(`${API_BASE_URL}/register`, adminData);
           
            console.log("Registro exitoso:", response.data);
            return response.data;
      } catch (error) {
          console.error("Error en el registro:", error);
          throw error;
            
        }
    }

}

export default new RegistroAdminAPI();
