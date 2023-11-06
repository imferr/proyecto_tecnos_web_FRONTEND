<template>
  <div>
    <AppNavbar/>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
      crossorigin="anonymous"
    />
    <div class="componentRegistroConvocatoria">
      <div class="gray-container">
        <div class="header-with-button">
          <div>
            <h1>REGISTRO DE CONVOCATORIAS</h1>
            <h2>Convocatorias publicadas:</h2>
          </div>
          <button class="add-button" @click="addConvocatoria">AÑADIR</button>
        </div>
        <div class="internship-container">
          <div class="internship-list">
            <div class="internship-item">
              <img src="https://www.eduquality.org/wp-content/uploads/pexels-andre-furtado-2916826-1-1024x683.jpg" alt="INTERCAMBIO CANADA" />
              <div class="title-edit-container">
                <div class="title-icon-wrapper">
                <h3>INTERCAMBIO CANADA</h3>
                <i class="fas fa-edit"></i>
              </div>
            </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...</p>
              <button>LEER MÁS</button>
              <button>CERRAR</button>
            </div>
            <div class="internship-item">
              <img src="https://i0.wp.com/unitedkingdom.unam.mx/wp-content/uploads/2021/02/academic-exchange-intercambio-academico-unam-united-kingdom-reino-unido.jpg?fit=1944%2C995&ssl=1" alt="INTERCAMBIO MEXICO" />
              <div class="title-edit-container">
                <div class="title-icon-wrapper">
                <h3>INTERCAMBIO MEXICO</h3>
                <i class="fas fa-edit"></i>
              </div>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...</p>
              <button>LEER MÁS</button>
              <button>CERRAR</button>
            </div>
            <div class="internship-item">
              <img src="https://colombianabroad.com/wp-content/uploads/intercambio-usa.jpg" alt="INTERCAMBIO USA" />
              <div class="title-edit-container">
                <div class="title-icon-wrapper"> 
                <h3>INTERCAMBIO EN U.S.A</h3>
                <i class="fas fa-edit"></i>
              </div>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam... </p>
              <button>LEER MÁS</button>
              <button>CERRAR</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

:root {
  --main-blue: #4c64b4;
  --main-yellow: #b6a358;
  --main-grey: #dddada;
  --sub-grey: #b8b0b0;
  --main-black: #111111;
}

.componentRegistroConvocatoria {
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-image: url('../assets/fondo_principal.jpeg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.gray-container {
  width: 90%; 
  background-color: rgba(228, 219, 219, 0.639); 
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-top: 20px; 
}


.header-with-button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.add-button {
  background-color: var(--main-blue);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.add-button:hover {
  background-color: var(--main-yellow);
}

.internship-container {
  text-align: center;
}

.internship-container h1,
.internship-container h2 {
  color: var(--main-black);
  margin-bottom: 20px;
}
.header-with-button h1,
.header-with-button h2 {
  color: var(--main-black);
}

.internship-list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 10px;
}

.internship-item {
  width: 300px;
  border: 1px solid var(--sub-grey);
  border-radius: 10px;
  background-color: white;
  transition: transform 0.3s ease;
}
.internship-item:hover {
  transform: translateY(-5px);
}

.internship-item img {
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  height: 150px;
  object-fit: cover;
}

.internship-item h3 {
  color: var(--main-black);
  margin: 10px;
  font-size: 20px; /* Adjust the size to your preference */
}


.internship-item p {
  padding: 0 10px;
  color: var(--sub-grey);
}

.internship-item button {
  background-color: var(--main-blue);
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 10px;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.internship-item button:hover {
  background-color: var(--main-yellow);
}
.title-edit-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
}
.title-edit-container h3 {
  margin: 10px 8px; /* Remueve el margen derecho para acercar el ícono */
  display: inline-block; /* Asegúrate de que el título se comporte como un elemento en línea */
  font-size: 20px; /* Ajusta el tamaño según tu preferencia */
}

.fas.fa-edit {
  color: var(--main-black);
  margin-left: 10px; /* Aumenta o disminuye para ajustar el espacio */
  cursor: pointer;
}
.title-edit-container > * {
  margin-right: 5px; /* Ajusta el margen derecho para todos los elementos dentro del contenedor */
}

@media only screen and (max-width: 768px) {
  .internship-list {
    flex-direction: column;
    align-items: center;
  }
  
  .gray-container {
    width: 100%; 
  }
}
</style>



<script>
// Importar useRouter desde vue-router
import { useRouter } from 'vue-router';
import AppNavbar from '../components/AppNavbar.vue';
import RegistroConvocatoriaAPI from '../services/RegistroConvocatoriaAPI.js';

export default {
  components: {
    AppNavbar,
  },
  mixins: [RegistroConvocatoriaAPI],
  setup() {
    // Obtener la instancia del router
    const router = useRouter();
    
    // Método para redirigir al componente de agregar convocatoria
    const addConvocatoria = () => {
      router.push({ name: 'convocatoria' });
    };
    
    // Exponer el método al template
    return {
      addConvocatoria,
    };
  },
};
</script>
