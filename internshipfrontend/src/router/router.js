import { createRouter, createWebHistory } from 'vue-router';
import HomePageComponent from '../components/HomePageComponent.vue';
import LoginStudentComponent from '../components/LoginStudentComponent.vue';


const routes = [
    { path : '/', component: LoginStudentComponent, name: 'registro' },
    { path : '/home', component: HomePageComponent, name: 'home' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;