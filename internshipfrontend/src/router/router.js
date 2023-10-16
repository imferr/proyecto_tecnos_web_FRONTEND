import { createRouter, createWebHistory } from 'vue-router';

import HomePageComponent from '../components/HomePageComponent.vue';
import LoginStudentComponent from '../components/LoginStudentComponent.vue';
import LoginComponent from '../components/LoginComponent.vue';
import RegistroAdminComponent from '../components/RegistroAdmin.vue';

const routes = [
    { path : '/', component: LoginStudentComponent, name: 'login' },
    { path : '/home', component: HomePageComponent, name: 'home' },
      { path: '/registro-admin', component: RegistroAdminComponent, name: 'registroAdmin' },
         { path : '/login', component: LoginComponent, name: 'login' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;