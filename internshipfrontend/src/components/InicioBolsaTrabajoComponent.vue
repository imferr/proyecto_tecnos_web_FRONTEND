<template>
    <div>
      <AppNavbar/>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
        crossorigin="anonymous"
      />
      <div class="componentInicioBolsaTrabajo">
        <div class="gray-container">
          <div class="internship-container">
            <div class="internship-list">
              <div class="internship-item">
                <img src="https://st.depositphotos.com/1017986/3131/i/600/depositphotos_31317045-stock-photo-group-of-teenagers-looking-down.jpg" alt="RECEPCION SOLICITUDES" />
                <div class="title-edit-container">
                  <div class="title-icon-wrapper">
                  <h3>RECEPCIÓN SOLICITUDES</h3>
                </div>
              </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam  consectetur adipiscing elit, sed do eiusmod tempor incididunt...</p>
                <button class="add-button" @click="recepcionSolicitudes">INGRESAR</button>
              </div>
              <div class="internship-item">
                <img src="https://www.avanzaentucarrera.com/orientacion/comp/uploads/2014/02/AETC-vias-de-acceso-a-la-universidad.jpg" alt="REGISTRO CONVOCATORIAS" />
                <div class="title-edit-container">
                  <div class="title-icon-wrapper">
                  <h3>REGISTRO CONVOCATORIAS</h3>
                </div>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam  consectetur adipiscing elit, sed do eiusmod tempor incididunt...</p>
                <button class="add-button" @click="regConvocatoria">INGRESAR</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  
  <style scoped>
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap");
    
  :root {
    --main-blue: #4c64b4;
    --main-yellow: #b6a358;
    --main-grey: #dddada;
    --sub-grey: #b8b0b0;
    --main-black: #111111;
  }
  
  .componentInicioBolsaTrabajo {
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
    width: 70%; 
    height: 70%;
    background-color: rgba(228, 219, 219, 0.639); 
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    margin-top: 20px; 
  }
  
  .internship-container {
    text-align: center;
  }
  
  .internship-container h1,
  .internship-container h2 {
    color: var(--main-black);
    margin-bottom: 20px;
  }
  
  .internship-list {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 10px;
  }
  
  .internship-item {
    width: 350px;
    height: 460px;
    border: 1px solid var(--sub-grey);
    border-radius: 10px;
    background-color: white;
    transition: transform 0.3s ease;
    position: relative;
  }
  .internship-item:hover {
    transform: translateY(-5px);
  }
  
  .internship-item img {
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    height: 200px;
    object-fit: cover;
  }
  
  .internship-item h3 {
    color: var(--main-black);
    margin: 10px;
    font-size: 20px; 
  }
  
  
  .internship-item p {
    padding: 0 10px;
    color: var(--sub-black);
  }
  
  .internship-item button {
    background-color: var(--main-blue);
    color: white;
    border: none;
    padding: 10px 20px;
    margin: 3px;
    border-radius: 20px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    position: absolute;
    right: 10px;
    bottom: 10px;
  }
  
  .internship-item button:hover {
    background-color: var(--main-yellow);
  }
  .title-edit-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
  }
  .title-edit-container h3 {
    margin: 10px 8px; 
    display: inline-block; 
    font-size: 20px; 
  }
  
  .title-edit-container > * {
    margin-right: 5px; 
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
  import InicioBolsaTrabajoAPI from '../services/InicioBolsaTrabajoAPI.js';
  
  export default {
    components: {
      AppNavbar,
    },
    mixins: [InicioBolsaTrabajoAPI],
    setup() {
      // Obtener la instancia del router
      const router = useRouter();
  
      // Método para redirigir al componente de registro de convocatoria
      const regConvocatoria = () => {
        router.push({ name: 'registroConvocatoria' });
      };
  
      // Método para redirigir al componente de recepción de solicitudes
      const recepcionSolicitudes = () => {
        router.push({ name: 'recepSolicitudes' });
      };
  
      // Exponer los métodos al template
      return {
        regConvocatoria,
        recepcionSolicitudes,
      };
    },
  };
  </script>
  
  