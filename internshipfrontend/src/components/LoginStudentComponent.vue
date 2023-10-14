<template>
    <div class="login-student">
        <h1>Login estudiante</h1>
        <button @click="login">Login</button>
    </div>
</template>

<script>

import LoginStudentAPI from '../services/LoginStudentAPI.js';

export default {
  mixins: [LoginStudentAPI],
};

</script>