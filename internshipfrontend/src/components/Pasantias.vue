<template>
  <div>
    <AppNavbar/>
  <div class = "espacio">
  </div>
    <div class="pasantias-section">
      <div class="container">
        <div class="row">
          <div v-for="pasantia in pasantia" :key="pasantia.id" class="col-md-4 mb-4">
             <div class="card">
              <div class="card-img-container">
                <img :src="pasantia.imagen" class="card-img-top" :alt="pasantia.nombre">
              </div>
              <div class="card-body">
                <div class="card-title-container">
                <h5 class="card-title">{{ pasantia.nombre }}</h5>
                <button class="btn btn-secondary">ver mas</button> 
                </div>
                <p class="card-text">{{ pasantia.descripcion }}</p>
                <div class="card-buttons">
                  <a href="#" class="btn btn-primary">Formulario de solicitud</a>
                  <a href="#" class="btn btn-secondary">Subir documentación</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>




  <script>
 import AppNavbar from '../components/AppNavbar.vue'; 
 import PasantiasAPI from '../services/PasantiasAPI.js';
export default {
  components: {
    AppNavbar, 
    },
  mixins: [PasantiasAPI],
  name: 'ListaPasantias',
  data() {
    return {
      pasantia: [
        {
          id: 1,
          nombre: 'PASANTIA 1',
          descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et quam vitae sapien tincidunt gravida.',
          imagen: 'https://www.clarin.com/img/2021/04/23/2hDNHGgJf_1200x0__1.jpg'
        },
        {
          id: 2,
          nombre: 'PASANTIA 2',
          descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et quam vitae sapien tincidunt gravida.',
          imagen: 'https://incareersjobs.com/wp-content/uploads/2020/11/Tiempo-libre-para-los-estudiantes.jpeg'
        },
        {
          id: 3,
          nombre: 'PASANTIA 3',
          descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et quam vitae sapien tincidunt gravida.',
          imagen: 'https://www.clarin.com/img/2021/04/23/2hDNHGgJf_1200x0__1.jpg'
        },
      ],
    }
  },
  methods: {
    //metodos
  },
};
</script>
  
<style scoped>
 .espacio{
    margin-top: 90px;
  }

.pasantias-section .container {
  padding-top: 120px; 
  border-radius: 15px; 
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.1); 
    padding: 2rem; 
  padding-bottom: 100px;
  height: 110vh;
}
.card-title-container {
  display: flex;
  align-items: center;
  justify-content: space-between; 
  margin-bottom: 1rem; 
}

.pasantias-section .card {
  margin-top: 90px;
  margin-bottom: -2rem;
  overflow: hidden; 
  position: relative;
  border: none; 
  border-radius: 25px; 
}


.pasantias-section .card-img-top {
  align-items: center;
  width: 100%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  margin-left: -2px;
  transition: transform .3s ease;
}

.pasantias-section .card-body {
  font-family: 'Arial', sans-serif;
  width: 100%; 
    position: relative;
  margin-top: 10px;
  margin-left: 7px; 
  top: -25px;
    padding: 1rem;
  border-radius: 15px;
  z-index: 1; 
}

.card-title {
  margin: 0; 
}

.btn {
  border: none;
  border-radius: 20px;
  padding: 0.5rem 1rem;
  color: white;
  cursor: pointer;
  text-align: center;
  background-color: #4c64b4; 
  text-decoration: none;
  display: inline-block; 
  min-width: 90px; 
  max-width: 200px; 
}


.pasantias-section .btn {
  font-family: 'Arial', sans-serif;
  border-radius: 25px; 
  padding: 0.5rem 1.0rem; 
  flex: 1; 
  margin: 0 10px; 
  border: none; 
}

.pasantias-section .card-img-container {
  margin-left: 5px; 
  position: relative; 
  z-index: 2; 
} 

.pasantias-section .card-img-top:hover {
  transform: scale(1.05);
}

.pasantias-section .card-buttons {
  font-family: 'Arial', sans-serif;
  width: 320px; 
  display: flex;
  justify-content: space-between; 
  padding: 0.5rem 1rem;
}




.pasantias-section .btn-primary {
  background-color: #4c64b4;
  text-decoration: none; 
}

.pasantias-section .btn-secondary {
  background-color: #4c64b4;
  text-decoration: none; 
}

.pasantias-section .btn-primary:hover {
  background-color: #1e294e; 
}

.pasantias-section .btn-secondary:hover {
  background-color: #1e294e; 
}
</style>
