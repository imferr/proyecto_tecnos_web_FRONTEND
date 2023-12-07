<template>
  <div>
    <AppNavbar/>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
      crossorigin="anonymous"
    />
    <div class="componentPasantias">
      <div class="gray-container">
        <div class="header-with-button">
          <div>
            <h1>PASANTIAS</h1>
          </div>
        </div>
        <div class="internship-container">
          <div class="internship-list">
            <div v-for="pasantia in pasantia" :key="pasantia.id" class="internship-item">
              <img :src="pasantia.imagen" alt="" />
              <div class="title-edit-container">
                <div class="title-icon-wrapper">
                  <h3>{{ pasantia.nombre }}</h3>
                  <button>VER MÁS</button>
                </div>
              </div>
              <p>{{ pasantia.descripcion }}</p>
              <button @click="redirigir">Formulario de solicitud</button>
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
          descripcion: 'Descripción de la pasantía 1',
          imagen: 'https://www.clarin.com/img/2021/04/23/2hDNHGgJf_1200x0__1.jpg'
        },
        {
          id: 2,
          nombre: 'PASANTIA 2',
          descripcion: 'Descripción de la pasantía 2',
          imagen: 'https://incareersjobs.com/wp-content/uploads/2020/11/Tiempo-libre-para-los-estudiantes.jpeg'
        },
        {
          id: 3,
          nombre: 'PASANTIA 3',
          descripcion: 'Descripción de la pasantía 3',
          imagen: 'https://www.clarin.com/img/2021/04/23/2hDNHGgJf_1200x0__1.jpg'
        }
      ],
    }
  },
  methods: {
    cancelar() {
      this.$router.go(-1);
    },
    redirigir() {
      this.$router.push('/Formulario-Convenio');
    }
  },
};
</script>


<style scoped>
.componentPasantias {
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

.internship-container {
  text-align: center;
}

.internship-container h1,
.internship-container h2 {
  color: #111111;
  margin-bottom: 20px;
}

.internship-list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 10px;
}

.internship-item {
  width: 300px;
  border: 1px solid #b8b0b0;
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
  color: #111111;
  margin: 10px;
  font-size: 20px;
}

.internship-item p {
  padding: 0 10px;
  color: #b8b0b0;
}

.internship-item button {
  background-color: #4c64b4;
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 10px;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 10px;
}

.internship-item button:hover {
  background-color: #b6a358;
}

.title-edit-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
}

.title-edit-container h3 {
  margin: 5px 25px;
  display: inline-block; 
  font-size: 20px; 
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
