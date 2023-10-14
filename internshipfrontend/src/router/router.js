import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from '../components/HomeComponent.vue';
import LoginStudentComponent from '../components/LoginStudentComponent.vue';


const routes = [
    { path : '/', component: LoginStudentComponent, name: 'login' },
    { path : '/home', component: HomeComponent, name: 'home' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;