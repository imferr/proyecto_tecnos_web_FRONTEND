<template>
    <nav class="AppNavbar">
      <ul>
        <li @mouseover="hovered = true" @mouseout="hovered = false">
          <router-link to="/">Inicio</router-link>
        </li>
        <li @mouseover="hovered = true" @mouseout="hovered = false">
          <router-link to="/login">Login</router-link>
        </li>
        <li @mouseover="hovered = true" @mouseout="hovered = false">
          <router-link to="/registro">Registro</router-link>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    data() {
      return {
        hovered: false,
      };
    },
  };
  </script>
  
  <style scoped>
  .AppNavbar {
    background-color: #4c64b4;
    color: #fff;
    width: 100%; /* Ocupa todo el ancho horizontal de la pantalla */
  }
  
  .AppNavbar ul {
    list-style: none;
    display: flex;
    padding: 10px;
    justify-content: space-around; /* Espaciado uniforme entre los elementos */
  }
  
  .AppNavbar li {
    cursor: pointer;
    transition: color 0.3s;
    font-family: 'Arial', sans-serif; /* Cambia la fuente según tus preferencias */
  }
  
  .AppNavbar li:hover {
    color: #d8d8e6; /* Cambia el color al pasar el mouse */
  }
  </style>