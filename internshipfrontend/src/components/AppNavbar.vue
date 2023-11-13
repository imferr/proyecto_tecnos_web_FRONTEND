<template>
  <nav class="navbar navbar-expand-md navbar-dark">
    <a class="navbar-brand" href="/">
      <img src="../assets/logo_internship.png">
    </a>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav-collapsible">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="nav-collapsible">
      <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/home">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Informacion-Perfil">Perfil</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/mainBolsaTrabajo">Bolsa Trabajo</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Convenios-Pasantias">Convenios-Pasantias</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/">Promociones</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Mensajeria">Contacto</router-link>
          </li>
        </ul>
      </div>
  </nav>

</template>
  
<script>
export default {
  name: 'MyNavbarComponent',
  mounted() {
    this.addScripts();
    this.addBootstrapCSS();
  },
  methods: {
    addScripts() {
      const loadScript = (src) => new Promise((resolve, reject) => {
        let script = document.createElement('script');
        script.src = src;
        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error(`Error al cargar el script ${src}`));
        document.head.appendChild(script);
      });

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

  
  <style>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #4c64b4;
  color: #fff;
  width: 100%;
  font-family: 'Poppins', sans-serif;
  position: fixed;
  z-index: 1000; 
}
  .navbar-brand img {
  max-height: 50px; 
  width: auto;
    margin-right: 10px; 
  }
  
.navbar ul.navbar-nav {
  list-style: none;
  display: flex;
  padding: 10px;
  justify-content: flex-end; 
}

.navbar-collapse {
  flex-grow: 1; 
}
  .navbar li.nav-item {
    cursor: pointer;
    transition: color 0.3s;
    position: relative; 
    margin-right: 35px;
  }

  .navbar li.nav-item:last-child {
  margin-right: 0;
}
  
  .navbar li.nav-item a.nav-link { 
    color: #ffffff; 
    font-weight: 400;
    transition: color 0.3s;
        text-decoration: none; 
  }
  
  .navbar li.nav-item:hover a.nav-link {
    color: #d8d8e6; 
  }
  
  .navbar li.nav-item a.nav-link::before {
    content: '';
    position: absolute;
    width: 0%;
    height: 2px;
    bottom: -5px; 
    left: 0;
    background-color: #f8b739;
    transition: width 0.3s;
    visibility: hidden; 
  }
  
  .navbar li.nav-item a.nav-link:hover::before {
    width: 100%; 
    visibility: visible; 
  }
  
  .navbar .navbar-brand {
    color: #4c64b4;
    font-weight: bold;
  }
  </style>