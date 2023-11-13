import { createRouter, createWebHistory } from 'vue-router';
import LoginComponent from '../components/LoginComponent.vue';
import RegistroAdminComponent from '../components/RegistroAdmin.vue';
import FormularioSolicitudConvenio from '../components/FormularioSolicitudConvenio.vue';
import EvaluacionPasantia from '../components/EvaluacionPasantia.vue';
import Convenios from '../components/Convenios.vue';
import ConveniosYpasantias from '../components/ConveniosYpasantias.vue';
import PasantiaDetalle from '../components/PasantiaDetalle.vue';
import misSolicitudes from '../components/misSolicitudes.vue';
import InformacionPerfil from '../components/InformacionPerfil.vue';
import ConvenioDetalle from '../components/ConvenioDetalle.vue';
import Mensajeria from '../components/Mensajeria.vue';







const routes = [
  { path: '/', component: LoginComponent, name: 'login' },
  { path: '/registro-admin', component: RegistroAdminComponent, name: 'registroAdmin' },
  { path: '/Formulario-Convenio', component: FormularioSolicitudConvenio, name: 'FormularioConvenio' },
  { path: '/Evaluacion-Pasantia', component: EvaluacionPasantia, name: 'EvaluacionPasantia' },
  { path: '/Convenios', component: Convenios, name: 'Convenios' },
  { path: '/Convenios-Pasantias', component: ConveniosYpasantias, name: 'ConveniosYpasantias' },
  { path: '/Pasantia-Detalle', component: PasantiaDetalle, name: 'PasantiaDetalle' },
  { path: '/Solicitudes', component: misSolicitudes, name: 'misSolicitudes' },
  { path: '/Informacion-Perfil', component: InformacionPerfil, name: 'InformacionPerfil' },
  { path: '/Convenio-Detalle', component: ConvenioDetalle, name: 'ConvenioDetalle' },
  { path: '/Mensajeria', component: Mensajeria, name: 'Mensajeria' },


];
 
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

