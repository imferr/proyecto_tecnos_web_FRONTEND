<template>
    
    <div>
        <AppNavbar/>
        <div class="container2">
            <h2>Formulario de solicitud de convenio</h2>
            </div>
                <div class="container">
        <div class="form-box">
            <div class="input-group">
                <label for="convenio">Convenio:</label>
                <select id="convenio" placeholder="[seleccione una opcion]">
                    <option value="opcion1">opcion 1</option>
                    <option value="opcion2">opcion 2</option>
                    <option value="opcion3">opcion 3</option>
                </select>
            </div>

            <div class="input-group">
                <label for="cedula">Cédula Identidad:</label>
                <input id="cedula" type="text" placeholder="">
                <input id="nombre" type="text" placeholder="Nombre completo del estudiante">
            </div>

            <h3>Documentación requerida</h3>

            <div class="input-group">
                <label for="carta">Carta de motivación:</label>
                <input id="carta" type="file">
        
                <label for="pasaporte">Pasaporte/Visa:</label>
                <input id="pasaporte" type="file">
            </div>

            <div class="input-group">
                <label for="seguro">Seguro médico:</label>
                <input id="seguro" type="file">
            </div>

            <button class="submit-button">Enviar</button>
        </div>
    </div>
    </div>
    
</template>
  
  <script>
 import AppNavbar from '../components/AppNavbar.vue'; 
 import FormularioSolicitudConvenioAPI from '../services/FormularioSolicitudConvenioAPI.js';
export default {
  components: {
    AppNavbar, 
  },
  mixins: [FormularioSolicitudConvenioAPI],

  data() {
    return {
      //variables
    };
  },
  methods: {
    //metodos
  },
};
  </script>
  
  <style scoped>

body {
  background-image: url('@/assets/background.jpg');
  background-size: cover; 
  background-repeat: no-repeat; 
  background-attachment: fixed; 
}
.container2 {
  padding-top: 100px;
    font-family: 'Arial', sans-serif;
    display: flex;
    flex-direction: column;  
    align-items: flex-start;  
    height: 10vh;
    padding-left: 50px; 
    border-radius: 40px;

}

.container{
    font-family: 'Arial', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 101vh;
    background-color: #f2f2f29f;
    border-radius: 40px;

}


h1 {
    color: #333;
    margin-bottom: 1em;
}
h2 {
    color: #333;
  text-align: center; 
  margin-top: 30px; 
  margin-left: 40px;

}



.form-box {
    font-weight:lighter;
    width: 100%;
    max-width: 800px;
    padding: 25px;
    background-color: #f9f9f9;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 40px;
    height: 62vh;
}

.input-group {
    display: flex;
    justify-content: space-evenly;
    /*align-items: center;*/
    margin-bottom: 20px;
}

label {
    flex: 1;
    margin-right: 10px;
}

input, select {
    flex: 2;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 20px;
}



.submit-button {
    width: 20%;
  padding: 8px;
  margin-top: 20px;
  background-color: #4c64b4;
  color: #fff;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  margin-left: 680px;
}
.input-group input:not(:last-child) {
    margin-right: 15px;
}

</style>