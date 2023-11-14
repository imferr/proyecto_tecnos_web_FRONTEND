<template>
  <div>
    <AppNavbar/>
  <div class = "espacio">
  </div>
    <div class="convenios-section">
      <div class="container">
        <div class="row">
          <div v-for="convenio in convenio" :key="convenio.id" class="col-md-4 mb-4">
             <div class="card">
              <div class="card-img-container">
                <img :src="convenio.imagen" class="card-img-top" :alt="convenio.nombre">
              </div>
              <div class="card-body">
                <div class="card-title-container">
                <h5 class="card-title">{{ convenio.nombre }}</h5>
                <button class="btn btn-secondary">ver mas</button> 
                </div>
                <p class="card-text">{{ convenio.descripcion }}</p>
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
 import ConveniosAPI from '../services/ConveniosAPI.js';
export default {
  components: {
    AppNavbar, 
    },
  mixins: [ConveniosAPI],
  name: 'ListaConvenios',
  data() {
    return {
      convenio: [
        {
          id: 1,
          nombre: 'CONVENIO 1',
          descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et quam vitae sapien tincidunt gravida.',
          imagen: require('@/assets/imagenConvenio1.png') 
        },
        {
          id: 2,
          nombre: 'CONVENIO 2',
          descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et quam vitae sapien tincidunt gravida.',
          imagen: require('@/assets/imagenConvenio2.png')
        },
        {
          id: 3,
          nombre: 'CONVENIO 3',
          descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et quam vitae sapien tincidunt gravida.',
          imagen: require('@/assets/imagenConvenio1.png')
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

.convenios-section .container {
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

.convenios-section .card {
  margin-top: 90px;
  margin-bottom: -2rem;
  overflow: hidden; 
  position: relative;
  border: none; 
  border-radius: 25px; 
}


.convenios-section .card-img-top {
  align-items: center;
  width: 100%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  margin-left: -2px;
  transition: transform .3s ease;
}

.convenios-section .card-body {
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


.convenios-section .btn {
  font-family: 'Arial', sans-serif;
  border-radius: 25px; 
  padding: 0.5rem 1.0rem; 
  flex: 1; 
  margin: 0 10px; 
  border: none; 
}

.convenios-section .card-img-container {
  margin-left: 5px; 
  position: relative; 
  z-index: 2; 
} 

.convenios-section .card-img-top:hover {
  transform: scale(1.05);
}

.convenios-section .card-buttons {
  font-family: 'Arial', sans-serif;
  width: 320px; 
  display: flex;
  justify-content: space-between; 
  padding: 0.5rem 1rem;
}




.convenios-section .btn-primary {
  background-color: #4c64b4;
  text-decoration: none; 
}

.convenios-section .btn-secondary {
  background-color: #4c64b4;
  text-decoration: none; 
}

.convenios-section .btn-primary:hover {
  background-color: #1e294e; 
}

.convenios-section .btn-secondary:hover {
  background-color: #1e294e; 
}
</style>
