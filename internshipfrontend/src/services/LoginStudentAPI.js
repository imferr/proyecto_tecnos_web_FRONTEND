import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/v1/estudiantes';

class LoginStudentAPI {
    async register(studentData) {
        try {
            const response = await axios.post(`${API_BASE_URL}/register`, studentData);
            console.log("Registro exitoso:", response.data);
            return response.data;
      } catch (error) {
          console.error("Error en el registro:", error);
          throw error;
        }
    }

}

export default new LoginStudentAPI();
