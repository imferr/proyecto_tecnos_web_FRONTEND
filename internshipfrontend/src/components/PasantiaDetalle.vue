<template>
    <div>
      <AppNavbar/>
      <div class="internship-container">
        <div class="internship-card" v-for="internship in internships" :key="internship.id">
          <div class="card-body">
            <div class="card-image">
              <img :src="internship.image" alt="Internship" class="intern-image"/>
              <div class="card-footer">
                <div class="company-name">{{ internship.companyName }}</div>
                <div class="publish-date">{{ internship.publishDate }}</div>
              </div>
            </div>
            <div class="card-info">
              <h2>{{ internship.title }}</h2>
              <p>{{ internship.description }}</p>
            </div>
          </div>
          <button class="back-btn">VOLVER</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import AppNavbar from '../components/AppNavbar.vue';
  import PasantiaDetalleAPI from '../services/PasantiaDetalleAPI.js';
  
  export default {
    components: {
      AppNavbar,
    },
    mixins: [PasantiaDetalleAPI],
    name: 'CardSection',
    data() {
      return {
        //ejemplos
        internships: [
          {
            id: 1,
            image: require('@/assets/imagenConvenio1.png'),
            title: 'PASANTIA 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            companyName: 'Empresa 1',
            publishDate: '17/11/2023'
          },
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .internship-container {
    background-color: #eff2f5bb; 
    border-radius: 25px;
    display: flex;
    justify-content: center;
  }
  
  .internship-card {
    font-family: 'Arial', sans-serif;
    position: relative;
    width: 100%;
    max-width: 1000px;
    margin: 20px;
    background: #FFF;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    border-radius: 25px;
  }
  
  .card-body {
    display: flex;
    flex-direction: row;
  }
  
  .card-image {
    flex-basis: 35%;
    position: relative;
  }
  
  .intern-image {
    width: 100%;
    height: auto;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  
  .card-info {
    flex-basis: 65%;
    padding: 20px;
  }
  
  .card-footer {
    position: absolute;
    bottom: 0;
    background: white;
    width: 100%;
    padding: 10px;
    border-top: 1px solid #eee;
    border-bottom-left-radius: 8px;
  }
  
  .company-name {
    font-weight: bold;
  }
  
  .publish-date {
    font-size: 0.9em;
  }
  
  .back-btn {
    position: absolute;
    right: 20px;
    bottom: 20px;
    padding: 0.5rem 1rem;
    background: #4c64b4;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 25px;
  }
  
  .back-btn:hover {
    background: #4c64b4;
  }
  </style>