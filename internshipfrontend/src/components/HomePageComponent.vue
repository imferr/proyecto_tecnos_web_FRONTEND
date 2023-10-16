<template>
    <!-- En tu componente principal o archivo HTML -->
<link rel="stylesheet" href="@/assets/style_HomePage.css">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Home Page</title>
    </head>
    <body>
      
        <section>
          <div class="slide">
                <div class="slide-inner">
                    <input class="slide-open" type="radio" id="slide-1" 
                          name="slide" aria-hidden="true" hidden="" checked="checked">
                    <div class="slide-item">
                        <img src="https://www.ucb.edu.bo/wp-content/uploads/2023/06/UCB-MUNDO2023.jpg">
                    </div>
                    <input class="slide-open" type="radio" id="slide-2" 
                          name="slide" aria-hidden="true" hidden="">
                    <div class="slide-item">
                        <img src="https://www.ucb.edu.bo/wp-content/uploads/2023/05/BANNER-WEB-.jpg">
                    </div>
                    <input class="slide-open" type="radio" id="slide-3" 
                          name="slide" aria-hidden="true" hidden="">
                    <div class="slide-item">
                        <img src="https://visitworld.today/media/blog/previews/LmwUcjsO8NreM5VBQYifywq1kGJYMXrupH4rjo1n.jpg">
                    </div>
                    <label for="slide-3" class="slide-control prev control-1">‹</label>
                    <label for="slide-2" class="slide-control next control-1">›</label>
                    <label for="slide-1" class="slide-control prev control-2">‹</label>
                    <label for="slide-3" class="slide-control next control-2">›</label>
                    <label for="slide-2" class="slide-control prev control-3">‹</label>
                    <label for="slide-1" class="slide-control next control-3">›</label>
                    <ol class="slide-indicador">
                        <li>
                            <label for="slide-1" class="slide-circulo">•</label>
                        </li>
                        <li>
                            <label for="slide-2" class="slide-circulo">•</label>
                        </li>
                        <li>
                            <label for="slide-3" class="slide-circulo">•</label>
                        </li>
                    </ol>
                </div>
            </div>
        </section>
          <ul>
        
    <li class="card">
        <a 
            href="#" 
            class="featured-image" 
            style="background-image:url('https://i0.wp.com/la-lista.com/wp-content/uploads/2023/04/diverse-university-students-at-campus-in-summertim-2022-12-16-01-24-36-utc.jpg?resize=800%2C533&ssl=1')">
        </a>
        <article class="card-body">
            <header>
                <a href="#">
                    <span class="pre-heading">INTERNSHIP UCB</span>
                    <div class="title">
                        <h3>Aprende a través de la experiencia! Elige una de nuestra amplia variedad de pasantias basadas en el trabajo, servicio comunitario y colaboraciones de investigacion practica que te ayudaran a aplicar tus conocimientos y adquirir habilidades que te destacaran. </h3>
                    </div>
                </a>
            </header>
    
        </article>
    </li>
        
    </ul>
        <section>
        <h1> PROGRAMAS DISPONIBLES</h1>
            <div class="card-container">
                <figure class="snip1208">
      <img src="https://infoturlatam.com/wp-content/uploads/2023/08/estudiantes-viajeros1.jpg" alt="sample66"/>
      <figcaption>
        <h3>Intercambio en canadá</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
        <button>Leer más</button>
      </figcaption><a href="#"></a>
    </figure>
    <figure class="snip1208">
      <img src="https://www.travelenglish.es/wp-content/uploads/2019/10/estudiantes-16.jpg" alt="sample9"/>
      <figcaption>
        <h3>Intercambio en Chile</h3>
        <p>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
        <button>Leer más</button>
      </figcaption><a href="#"></a>
    </figure>
    <figure class="snip1208">
      <img src="https://infoturlatam.com/wp-content/uploads/2023/08/estudiantes-viajeros1.jpg" alt="sample6"/>
      <figcaption>
        <h3>Intercambio en Argentina</h3>
        <p>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
        <button>Leer más</button>
      </figcaption><a href="#"></a>
    </figure>
            </div>
        </section>
    
        <footer>
            <p>Derechos de autor © 2023 Internship Grupo 2 :D</p>
        </footer>
    </body>
    </template>
    
    
    <style src="@/assets/style_HomePage.css"></style>
    
    <script>

    import HomePageAPI from '../services/HomePageAPI.js';
    
    export default {
      mixins: [HomePageAPI],
    };
    
    </script>