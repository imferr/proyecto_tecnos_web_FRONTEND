<template>
    <div>
      <AppNavbar/>
      <div class="espacio">
      </div>
      <div class="profile-content">
      <div class="profile-header">
        <h2>Información perfil</h2>
      </div>
      <div class="profile-form">
        <form>
          <div class="form-row">
            <label for="firstName">Nombres:</label>
            <input type="text" id="firstName" v-model="profile.firstName" disabled/>
          </div>
          <div class="form-row">
            <label for="lastName">Apellidos:</label>
            <input type="text" id="lastName" v-model="profile.lastName" disabled/>
          </div>
          <div class="form-row2">
            <label for="phone">Teléfono:</label>
            <input type="text" id="phone" v-model="profile.phone" disabled/>
                <div>
                    <label for="id">Cédula:</label>
                </div>
                <div>
                    <input type="text" id="id" v-model="profile.id" disabled/>
                </div>
          </div>
          <div class="form-row">
            
            <label for="address">Dirección:</label>
            <input type="text" id="address" v-model="profile.address" disabled/>
          </div>
          <div class="form-row2">
                    <label for="email">Correo:</label>
                    <input type="text" id="email" v-model="profile.email" disabled/>
                <div>
                    <label for="career">Carrera:</label>
                </div>
                <div>
                    <input type="text" id="career" v-model="profile.career" disabled/>
                </div>
          </div>
          <div class="form-row2">
            <label for="dob">Fecha nacimiento:</label>
            <input type="text" id="dob" v-model="profile.dob" disabled/>
          <div>
            <label for="semester">Semestre:</label>
            </div>
            <div>
            <input type="text" id="semester" v-model="profile.semester" disabled/>
            </div>
          </div>
        </form>
      </div>
    </div>
    </div>
  </template>
  
  <script>
  import AppNavbar from '../components/AppNavbar.vue';
  import InformacionPerfilAPI from '../services/InformacionPerfilAPI.js';
  export default {
    components: {
        AppNavbar,
    },
    mixins: [InformacionPerfilAPI],
    name: 'CardSection',
    data() {
    return {
      profile: {
        firstName: 'Maria ',
        lastName: 'Perez Perez',
        phone: '65031650',
        id: '110423635',
        address: 'C. x, zona x, calle X',
        email: 'maria@ucb.edu.bo',
        career: 'Ingeniería de Sistemas',
        dob: '11/11/2023',
        semester: 'Sexto'
      }
    };
    }
  };
  </script>
  
  <style scoped>
  .espacio{
    margin-top: 3%;
  
  }
.profile-content {
  position: relative;
  padding-top: 20px; 
}

.profile-header {
  text-align: center;
  color: #000;
  padding: 20px;
  position: absolute;
  top: 0;
  left: 50%; 
  transform: translateX(-50%);
  z-index: 1;
  background-color: #eff2f5bb;
  font-family: 'Arial', sans-serif;
  border-radius: 25px;
  width: 80%; 
  margin: auto;
  padding-bottom: 600px; 
}


.profile-form {
    font-family: 'Arial', sans-serif;
  background-color: #f8f9fa;
  padding: 40px;
  margin-top: 20px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  border-radius: 25px;
  position: relative;
  z-index: 2;
  width: calc(80% - 80px); 
  margin-left: auto;
  margin-right: auto;
  top: 40px; 

}

.form-row {
  display: flex;
  margin-bottom: 15px;
}
.form-row2 {
    justify-content: space-evenly;
  display: flex;
  margin-bottom: 15px;
  width: 70%;
  

}
label {
  flex: 150px;
  font-weight: bold;
}

input[type="text"] {
    justify-content: flex-start; 
    width: 88%;
  padding: 5px;
  margin-top: 12px;
  border: 1px solid #ccc;
  border-radius: 20px;
}

input[type="text"]:disabled {
  background-color: #e9ecef;
}

</style>
  