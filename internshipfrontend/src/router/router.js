import { createRouter, createWebHistory } from 'vue-router';
import HomePageComponent from '../components/HomePageComponent.vue';
import LoginStudentComponent from '../components/LoginStudentComponent.vue';
import AgregarConvocatoriaComponent from '../components/AgregarConvocatoriaComponent.vue';
import AgregarEventosComponent from '../components/AgregarEventosComponent.vue';
import RegistroConvocatoriaComponent from '../components/RegistroConvocatoriaComponent.vue';
import FormSolicitudPasantiaComponent from '../components/FormSolicitudPasantiaComponent.vue';

const routes = [
    { path : '/', component: LoginStudentComponent, name: 'registro' },
    { path : '/home', component: HomePageComponent, name: 'home' },
    { path : '/convocatoria', component: AgregarConvocatoriaComponent, name: 'convocatoria' },
    { path : '/eventos', component: AgregarEventosComponent, name: 'eventos' },
    { path : '/registroConvocatoria', component: RegistroConvocatoriaComponent, name: 'registroConvocatoria' },
    { path : '/solicitudPasantia', component: FormSolicitudPasantiaComponent, name: 'solicitudPasantia' }

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;