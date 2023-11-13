<template>
    <div>
    <div>
      <AppNavbar/>
    </div>
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
  import ConvenioDetalleAPI from '../services/ConvenioDetalleAPI.js';
  
  export default {
    components: {
      AppNavbar,
    },
    mixins: [ConvenioDetalleAPI],
    name: 'CardSection',
    data() {
      return {
        internships: [
          {
            id: 1,
            image: require('@/assets/imagenConvenio2.png'),
            title: 'CONVENIO 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            companyName: 'Empresa 1',
            publishDate: '17/11/2023'
          },
          // Agrega más objetos de pasantía como sea necesario
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .internship-container {
    padding-top: 100px; 
    display: flex;
    align-items: center;
    background-color: #eff2f5bb;
    border-radius: 25px;
    margin-left: 80px;
    margin-right: 40px;
  }
  
  .internship-card {
    font-family: 'Arial', sans-serif;
    width: 100%;
    max-width: 900px; 
    margin: 3rem auto;
    background: #FFF;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    border-radius: 25px;
    overflow: hidden;
  }
  
  .card-body {
    display: flex;
    flex-direction: row;
    padding: 20px;
  }
  
  .card-image img {
    width: 100%;
    height: auto;
    display: block;
  }
  
  .card-info {
    padding: 20px;
  }
  
  .card-footer {
    background: #f9f9f9;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #eee;
  }
  
  .company-name {
    font-weight: bold;
  }
  
  .publish-date {
    font-size: 0.9em;
  }
  
  .back-btn {
    padding: 10px 20px;
    background-color: #4c64b4;
    color: white;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    margin-top: 20px; 
    align-self: flex-end;
    margin-left: 750px;
  }
  
  .back-btn:hover {
    background-color: #365d98; 
  }
  </style>
  