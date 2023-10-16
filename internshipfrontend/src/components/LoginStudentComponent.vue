<template>
  <link rel="stylesheet" href="@/assets/style_LoginStudent.css">
  <div class="container">
    <div class="title">
      <img src="../assets/logo_Universidad.png" alt="Logo" class="logo">REGISTRARSE
    </div>
    <form action="#">
      <div class="user__details">
        <div class="input__box">
          <span class="details">Nombres:</span>
          <input type="text" placeholder="" required>
        </div>
        <div class="input__box">
          <span class="details">Apellidos:</span>
          <input type="text" placeholder="" required>
        </div>
        <div class="input__box">
          <span class="details">Correo institucional: </span>
          <input type="email" placeholder="nombre.apellido@ucb.edu.bo" required>
        </div>
        <div class="input__box">
          <span class="details">Número de teléfono</span>
          <input type="tel" pattern="" placeholder="" required>
        </div>
        <div class="input__box">
          <span class="details">Dirección:</span>
          <input type="text" placeholder="" required>
        </div>
        <div class="input__box">
          <span class="details">Carrera:</span>
          <input type="text" placeholder="" required>
        </div>
        <div class="input__box">
          <span class="details">Semestre:</span>
          <input type="text" placeholder="" required>
        </div>
        <div class="input__box">
          <span class="details">Carnet de identidad</span>
          <input type="text" placeholder="" required>
        </div>
        <div class="input__box">
          <span class="details">Fecha de nacimiento:</span>
          <input type="date" placeholder="dd/mm/aaaa" required>
        </div>
        <div class="input__box">
          <span class="details">Género:</span>
          <div class="gender__details">
            <input type="radio" name="gender" id="dot-1">
            <input type="radio" name="gender" id="dot-2">
            <div class="category">
              <label for="dot-1">
                <span class="dot one"></span>
                <span>Mujer</span>
              </label>
              <label for="dot-2">
                <span class="dot two"></span>
                <span>Hombre</span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="button">
        <button type="submit" value="REGISTRARSE" @click="login">Registrarse </button>
      </div>
    </form>
  </div>
</template>

<style src="@/assets/style_LoginStudent.css"></style>


<script>

import LoginStudentAPI from '../services/LoginStudentAPI.js';

export default {
  mixins: [LoginStudentAPI],
};

</script>