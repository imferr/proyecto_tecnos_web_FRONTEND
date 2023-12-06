import { createRouter, createWebHistory } from 'vue-router';
//Rosa
import HomePageComponent from '../components/HomePageComponent.vue';
import RegistroUsuarioComponent from '../components/RegistroUsuarioComponent.vue';
import LoginStudentComponent from '../components/LoginStudentComponent.vue';
import AgregarConvocatoriaComponent from '../components/AgregarConvocatoriaComponent.vue';
import AgregarEventosComponentAdmin from '../components/AgregarEventosComponentAdmin.vue';
import RegistroConvocatoriaComponent from '../components/RegistroConvocatoriaComponent.vue';
import FormSolicitudPasantiaComponent from '../components/FormSolicitudPasantiaComponent.vue';
import ListaEvaluacionPasantiaComponent from '../components/ListaEvaluacionPasantiaComponent.vue';
import InicioBolsaTrabajoComponent from '../components/InicioBolsaTrabajoComponent.vue';
import ListaRecepcionSolicitudesComponentAdmin from '../components/ListaRecepcionSolicitudesComponentAdmin.vue';
import Pasantias from '../components/Pasantias.vue';
//Paola
import LoginComponent from '../components/LoginComponent.vue';
import RegistroAdminComponent from '../components/RegistroAdmin.vue';
import FormularioSolicitudConvenio from '../components/FormularioSolicitudConvenio.vue';
import EvaluacionPasantiaAdmin from '../components/EvaluacionPasantiaAdmin.vue';
import Convenios from '../components/Convenios.vue';
import ConveniosYpasantias from '../components/ConveniosYpasantias.vue';
import PasantiaDetalle from '../components/PasantiaDetalle.vue';
import misSolicitudes from '../components/misSolicitudes.vue';
import InformacionPerfil from '../components/InformacionPerfil.vue';
import ConvenioDetalle from '../components/ConvenioDetalle.vue';
import Mensajeria from '../components/Mensajeria.vue';

import HomePageComponentAdmin from '../components/HomePageComponentAdmin.vue';
import InformacionPerfilVueAdmin from '../components/InformacionPerfilAdmin.vue';


const routes = [
  //Rosa
  { path : '/formulario', component: LoginStudentComponent, name: 'registro' },
  { path : '/registroUsuario', component: RegistroUsuarioComponent, name: 'registroUsuario' },
  { path : '/home', component: HomePageComponent, name: 'home' },
  { path : '/convocatoria', component: AgregarConvocatoriaComponent, name: 'convocatoria' },
  { path : '/eventos', component: AgregarEventosComponentAdmin, name: 'eventos' },
  { path : '/registroConvocatoria', component: RegistroConvocatoriaComponent, name: 'registroConvocatoria' },
  { path : '/solicitudPasantia', component: FormSolicitudPasantiaComponent, name: 'solicitudPasantia' },
  { path : '/listaEvaPasantia', component: ListaEvaluacionPasantiaComponent, name: 'listaEvaPasantia' },
  { path : '/mainBolsaTrabajo', component: InicioBolsaTrabajoComponent, name: 'mainBolsaTrabajo' },
  { path : '/recepSolicitudesAdmin', component: ListaRecepcionSolicitudesComponentAdmin, name: 'recepSolicitudesAdmin' },
  { path : '/ListaPasantias', component: Pasantias, name: 'ListaPasantias' },
  

  //PAOLA
  { path: '/', component: LoginComponent, name: 'login' },
  { path: '/registro-admin', component: RegistroAdminComponent, name: 'registroAdmin' },
  { path: '/Formulario-Convenio', component: FormularioSolicitudConvenio, name: 'FormularioConvenio' },
  { path: '/Evaluacion-Pasantia', component: EvaluacionPasantiaAdmin, name: 'EvaluacionPasantia' },
  { path: '/Convenios', component: Convenios, name: 'Convenios' },
  { path: '/Convenios-Pasantias', component: ConveniosYpasantias, name: 'ConveniosYpasantias' },
  { path: '/Pasantia-Detalle', component: PasantiaDetalle, name: 'PasantiaDetalle' },
  { path: '/Solicitudes', component: misSolicitudes, name: 'misSolicitudes' },
  { path: '/Informacion-Perfil', component: InformacionPerfil, name: 'InformacionPerfil' },
  { path: '/Convenio-Detalle', component: ConvenioDetalle, name: 'ConvenioDetalle' },
  { path: '/Mensajeria', component: Mensajeria, name: 'Mensajeria' },


  {path: '/homeAdmin', component: HomePageComponentAdmin, name: 'homeAdmin'},
  {path: '/InformacionPerfilAdmin', component: InformacionPerfilVueAdmin, name: 'InformacionPerfilAdmin'},
];
 
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

