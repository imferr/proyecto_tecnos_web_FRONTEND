import { createRouter, createWebHistory } from 'vue-router';
import HomePageComponent from '../components/HomePageComponent.vue';
import LoginStudentComponent from '../components/LoginStudentComponent.vue';
import AgregarConvocatoriaComponent from '../components/AgregarConvocatoriaComponent.vue';
import AgregarEventosComponent from '../components/AgregarEventosComponent.vue';
import RegistroConvocatoriaComponent from '../components/RegistroConvocatoriaComponent.vue';
import FormSolicitudPasantiaComponent from '../components/FormSolicitudPasantiaComponent.vue';
import ListaEvaluacionPasantiaComponent from '../components/ListaEvaluacionPasantiaComponent.vue';
import InicioBolsaTrabajoComponent from '../components/InicioBolsaTrabajoComponent.vue';
import ListaRecepcionSolicitudesComponent from '../components/ListaRecepcionSolicitudesComponent.vue';
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
  { path : '/formulario', component: LoginStudentComponent, name: 'registro' },
  { path : '/home', component: HomePageComponent, name: 'home' },
  { path : '/convocatoria', component: AgregarConvocatoriaComponent, name: 'convocatoria' },
  { path : '/eventos', component: AgregarEventosComponent, name: 'eventos' },
  { path : '/registroConvocatoria', component: RegistroConvocatoriaComponent, name: 'registroConvocatoria' },
  { path : '/solicitudPasantia', component: FormSolicitudPasantiaComponent, name: 'solicitudPasantia' },
  { path : '/listaEvaPasantia', component: ListaEvaluacionPasantiaComponent, name: 'listaEvaPasantia' },
  { path : '/mainBolsaTrabajo', component: InicioBolsaTrabajoComponent, name: 'mainBolsaTrabajo' },
  { path : '/recepSolicitudes', component: ListaRecepcionSolicitudesComponent, name: 'recepSolicitudes' },
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

