<template>
    <nav class="navbar navbar-expand-md navbar-dark">
      <!-- Brand/logo -->   
      <a class="navbar-brand" href="/">
        <img src="../assets/logo_internship.png">
      </a>
  
      <!-- Toggler/collapsible Button -->
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav-collapsible">
        <span class="navbar-toggler-icon"></span>
      </button>
  
      <!-- Navbar links -->
      <div class="collapse navbar-collapse" id="nav-collapsible">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Iniciar Sesion</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/registroUsuario">Registrarse</router-link>
            </li>
          </ul>
        </div>
    </nav>
  </template>
    
  <script>
  export default {
    name: 'NavBarLogin',
    mounted() {
      this.addScripts();
      this.addBootstrapCSS();
    },
    methods: {
      addScripts() {
        // Crea una promesa que cargará un script
        const loadScript = (src) => new Promise((resolve, reject) => {
          let script = document.createElement('script');
          script.src = src;
          script.onload = () => resolve(script);
          script.onerror = () => reject(new Error(`Error al cargar el script ${src}`));
          document.head.appendChild(script);
        });
  
        // Carga cada script en secuencia
        loadScript('https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js')
          .then(() => loadScript('https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js'))
          .then(() => loadScript('https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js'))
          .catch(error => console.error(error));
      },
      addBootstrapCSS() {
        const link = document.createElement('link');
        link.href = 'https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css';
        link.type = 'text/css';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
      }
    }
  };
  </script>
  
    
    <style scoped>
    .navbar {
      background-color: #4c64b4; /* Nuevo color de fondo */
      color: #fff;
      width: 100%;
      font-family: 'Poppins', sans-serif; /* Fuente Poppins aplicada */
    }
    .navbar-brand img {
    max-height: 50px; /* Ajusta la altura máxima de la imagen del logo */
    width: auto; /* Asegura que el ancho de la imagen se ajuste proporcionalmente */
    margin-right: 10px; /* Opcional: añade un margen a la derecha del logo si quieres espacio entre el logo y el texto */
  }
    
  .navbar ul.navbar-nav {
    list-style: none;
    display: flex;
    padding: 10px;
    justify-content: flex-end; /* Alínea los elementos a la derecha */
  }
  
  .navbar-collapse {
    flex-grow: 1; /* Asegura que el contenedor ocupe todo el espacio disponible */
  }
    .navbar li.nav-item {
      cursor: pointer;
      transition: color 0.3s;
      position: relative; /* Posición relativa para los pseudoelementos */
      margin-right: 35px;
    }
  
    .navbar li.nav-item:last-child {
    margin-right: 0; /* Elimina el margen adicional en el último elemento para evitar un espaciado extra al final */
  }
    
    .navbar li.nav-item a.nav-link { /* Asegurándonos de que afecte a los enlaces dentro de li */
      color: #ffffff; /* Color del texto para los enlaces */
      font-weight: 400;
      transition: color 0.3s; /* Transición suave para el color */
      text-decoration: none; /* Remover el subrayado de los enlaces */
    }
    
    .navbar li.nav-item:hover a.nav-link {
      color: #d8d8e6; /* Color al pasar el mouse */
    }
    
    .navbar li.nav-item a.nav-link::before {
      content: '';
      position: absolute;
      width: 0%;
      height: 2px;
      bottom: -5px; /* Ajustar según el padding de tu navbar */
      left: 0;
      background-color: #f8b739; /* Color del subrayado animado */
      transition: width 0.3s;
      visibility: hidden; /* Ocultar hasta que se haga hover */
    }
    
    .navbar li.nav-item a.nav-link:hover::before {
      width: 100%; /* Ancho completo al hacer hover */
      visibility: visible; /* Mostrar la animación al hacer hover */
    }
    
    .navbar .navbar-brand {
      color: #4c64b4;
      font-weight: bold;
    }
    </style>