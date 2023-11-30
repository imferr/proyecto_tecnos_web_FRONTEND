<template>
    <div>
      <AppNavbar />
    <div class="espacio">
    </div>
      <div class="container">
        <div class="card">
          <div class="card-header">
            <img src="@/assets/imagenConvenio1.png" alt="Convenios" />
          </div>
          <div class="card-body">
            <div class="title-row">
              <h2 class="card-title">CONVENIOS</h2>
              <button class="btn add-btn">AÑADIR</button>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button class="btn view-btn"  @click="verConvenios">VER CONVENIOS</button>
          </div>
        </div>
        
        <div class="card">
          <div class="card-header">
            <img src="@/assets/imagenConvenio2.png" alt="Pasantías" />
          </div>
          <div class="card-body">
            <div class="title-row">
              <h2 class="card-title">PASANTÍAS</h2>
              <button class="btn add-btn" @click="formSolicitudPasantia">AÑADIR</button>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button class="btn view-btn"
              @click="verPasantias"> VER PASANTÍAS</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  
  <script>
  import AppNavbar from '../components/AppNavbar.vue';
  import ConveniosYpasantiasAPI from '../services/ConveniosYpasantiasAPI.js';
  
  export default {
    components: {
      AppNavbar,
    },
    mixins: [ConveniosYpasantiasAPI],
    name: 'CardSection',
  
  methods: {
    
    verConvenios() {
    this.$router.push('/Convenios');
  },
  verPasantias() {
    this.$router.push('/ListaPasantias');
  },
  formSolicitudPasantia() {
    this.$router.push('/solicitudPasantia');
  },
  },
};
  </script>
  
  <style scoped>
  .espacio{
    margin-top: 100px;
  }
  
.container {
  padding-top: 320px; 
  max-width: 1200px; 
  padding-bottom: 19rem;
  border-radius: 25px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.1); 
  display: flex; 
}




.card {
    border-radius: 25px; 
  margin-bottom: 2rem; 
  position: relative;
  border: none;
  overflow: hidden;
}
.card:not(:last-child) {
  margin-right: 2rem; 
}

.card-header img {
  width: 100%;
  height: auto;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  transition: transform .3s ease;

}

.card-body {
    z-index: 1;
    border-radius: 15px;
  font-family: 'Arial', sans-serif;
  position: relative;
  top: -25px; 
  border-radius: 15px;
  
}

.title-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.card-title {
  margin: 0;
  font-size: 1.5em;
}

.btn {
  border: none;
  border-radius: 20px;
  padding: 0.5rem 1rem;
  color: white;
  cursor: pointer;
  outline: none;
}

.add-btn {
    width: 30%;

  background-color: #4c64b4;
}

.view-btn {
  background-color: #4c64b4;
  width: 40%;
  margin-top: 2rem;
  display: block;
}

.card-header img:hover {
  transform: scale(1.05); 
  background-color: #0d1f56;

}

.add-btn:hover, .view-btn:hover {
  opacity: 0.8;
}
.card-header {
  position: relative;
  z-index: 2; 
}
</style>
