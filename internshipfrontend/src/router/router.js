import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from '../components/HomeComponent.vue';

import LoginComponent from '../components/LoginComponent.vue';
import RegistroAdminComponent from '../components/RegistroAdmin.vue';


const routes = [
    { path : '/login', component: LoginComponent, name: 'login' },
    { path : '/home', component: HomeComponent, name: 'home' },

    { path: '/registro-admin', component: RegistroAdminComponent, name: 'registroAdmin' },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;