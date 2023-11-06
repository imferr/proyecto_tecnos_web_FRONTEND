<template>
    <div>
    <AppNavbar/>
        <section>
          <div class="slide">
                <div class="slide-inner">
                    <input class="slide-open" type="radio" id="slide-1" 
                          name="slide" aria-hidden="true" hidden="" checked="checked">
                    <div class="slide-item">
                        <img src="../assets/wallpaper2.png">
                    </div>
                    <input class="slide-open" type="radio" id="slide-2" 
                          name="slide" aria-hidden="true" hidden="">
                    <div class="slide-item">
                        <img src="https://www.ucb.edu.bo/wp-content/uploads/2023/05/BANNER-WEB-.jpg">
                    </div>
                    <input class="slide-open" type="radio" id="slide-3" 
                          name="slide" aria-hidden="true" hidden="">
                    <div class="slide-item">
                        <img src="https://lpz.ucb.edu.bo/wp-content/uploads/2022/10/UCB-Redes-Sociales-Banner-1500x420-1.jpg">
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
        
    <li class="card" >
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
                        <h2>Aprende a través de la experiencia! Elige una de nuestra amplia variedad de pasantias basadas en el trabajo, servicio comunitario y colaboraciones de investigacion practica que te ayudaran a aplicar tus conocimientos y adquirir habilidades que te destacaran. </h2>
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
    </div>
    </template>
    
    <style>
body {
    font-family: Arial, sans-serif;
    margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
    
            header, section, footer {
                padding: 20px;
                text-align: center;
            }
            section{
                background-image: url('../assets/fondo2.png');
                background-repeat: no-repeat;
                background-position: center;
                background-size: cover; 
            }
    
            .carousel-container {
      display: flex;
      overflow: hidden;
      width: 100%;
    }
    
    .carousel-slide {
      min-width: 100%;
      transition: transform 0.5s ease-in-out;
    }
    
    img {
      width: 100%;
      height: auto;
    }
    
            .card-container {
                display: flex;
                justify-content: space-around;
                flex-wrap: wrap;
            }
            h1{
                color: #100f0f;
            }
            h2{
                color: #201f1f;
                font-size: 22px;
            }
    @import url(https://fonts.googleapis.com/css?family=Raleway:400,600,700,800);
    @import url(https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css);
    figure.snip1208 {
      font-family: 'Raleway', Arial, sans-serif;
      color: #fff;
      position: relative;
      overflow: hidden;
      margin: 10px;
      min-width: 220px;
      max-width: 310px;
      width: 100%;
      background-color: #ffffff;
      color: #000000;
      border-radius: 20px;
      text-align: left;
      font-size: 16px;
    }
    figure.snip1208 * {
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      -webkit-transition: all 0.2s ease;
      transition: all 0.2s ease;
    }
    figure.snip1208 img {
      max-width: 100%;
      vertical-align: top;
      -webkit-transform-origin: 50% 100%;
      transform-origin: 50% 100%;
      -webkit-transition: all 0.4s ease;
      transition: all 0.4s ease;
    }
    figure.snip1208 figcaption {
      padding: 25px;
      position: relative;
    }
    
    figure.snip1208 h3,
    figure.snip1208 p {
      margin: 0;
      padding: 0;
    }
    figure.snip1208 h3 {
      margin-bottom: 10px;
      display: inline-block;
      font-weight: 400;
      font-size: 25px;
      color: #333333;
      text-transform: uppercase;
    }
    figure.snip1208 p {
      font-size: 0.8em;
      margin-bottom: 20px;
      line-height: 1.6em;
    }
    figure.snip1208 button {
      border: medium none;
      padding: 10px 20px;
      border-radius: 20px;
      background-color: #4c64b4;
      font-weight: 800;
      color: #ffffff;
      letter-spacing: 2px;
      text-transform: uppercase;
      font-size: 0.8em;
    }
    figure.snip1208 a {
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      position: absolute;
      z-index: 1;
    }
    figure.snip1208:hover img,
    figure.snip1208.hover img {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
    figure.snip1208:hover .date,
    figure.snip1208.hover .date {
      -webkit-transform: rotateY(90deg);
      transform: rotateY(90deg);
      -webkit-transition-delay: 0s;
      transition-delay: 0s;
    }
    figure.snip1208:hover i,
    figure.snip1208.hover i {
      -webkit-transform: rotateY(0);
      transform: rotateY(0);
      -webkit-transition-delay: 0.2s;
      transition-delay: 0.2s;
    }
    figure.snip1208:hover button,
    figure.snip1208.hover button {
      background-color: #b8a547;
    }
    
     footer {
                background-color: #4c64b4;
                color: #fff;
            } 

  .card {
  box-shadow: 0 0px 1px rgba(0, 0, 0, 0.10), 0 2px 2px rgba(0, 0, 0, 0.10);
  background: #4c64b4;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
}

    
    .card-body {
      display: flex;
      flex-flow: row wrap;
      padding: 20px;
      border-radius: 20px;
    }
    
    header {
      flex: 100%;
      
    }
    
    .featured-image {
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      overflow: hidden;
      width: 100%;
      height: 300px; /* only for mobile, vertical cards: flex-direction: column; */
    }
    
    @media only screen and (min-width: 768px) {
      .card {
        flex-direction: row;
        border-radius: 20px;
        max-height: 279px; 
      }
    
      .card h3 {
        font-size: calc(100% + 1vw);
      }
    
      .featured-image {
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        border-top-right-radius: 0;
        max-width: 390px;
        max-height: 279px; /* desktop horizontal cards with featured image */
      }
    }
    
    /* Monitor screen sizes */
    @media only screen and (min-width: 1280px) {
      .card h3 {
        font-size: 32px;
      }
    }
    
    /* Typography */
    * {
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }
    
    h3 {
      font-size: 32px;
      line-height: 1.2;
      font-weight: bold;
      color: #222;
      margin: 0.5em 0;
    }
    
    .pre-heading {
      color: #101010;
      font-size: 25px;
      font-weight: 400;
      text-transform: uppercase;
    }
    
    /* NON-CARD STYLES */
    ul {
      display: block;
      margin: 0 auto;
      max-width: 1160px;
      padding: 30px;
    }
    
    
    a {
      text-decoration: none;
    }
    
    .slide {
                    position: relative;
                    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.64);
                    margin-top: 26px;
                }
                .slide-inner {
                    position: relative;
                    overflow: hidden;
                    width: 100%;
                    height: calc(300px + 3em); /* Check if this height is suitable */
                }
                .slide-open:checked + .slide-item {
                    position: static;
                    opacity: 100;
                }
                .slide-item {
                    position: absolute;
                    opacity: 0;
                    -webkit-transition: opacity 0.6s ease-out;
                    transition: opacity 0.6s ease-out;
                }
                .slide-item img {
                    display: block;
                    height: auto;
                    max-width: 100%;
                }
                .slide-control {
                    background: rgba(0, 0, 0, 0.28);
                    border-radius: 50%;
                    color: #fff;
                    cursor: pointer;
                    display: none;
                    font-size: 40px;
                    height: 40px;
                    line-height: 35px;
                    position: absolute;
                    top: 50%;
                    -webkit-transform: translate(0, -50%);
                    cursor: pointer;
                    -ms-transform: translate(0, -50%);
                    transform: translate(0, -50%);
                    text-align: center;
                    width: 40px;
                    z-index: 10;
                }
                .slide-control.prev {
                    left: 2%;
                }
                .slide-control.next {
                    right: 2%;
                }
                .slide-control:hover {
                    background: rgba(0, 0, 0, 0.8);
                    color: #aaaaaa;
                }
                #slide-1:checked ~ .control-1,
                #slide-2:checked ~ .control-2,
                #slide-3:checked ~ .control-3 {
                    display: block;
                }
                .slide-indicador {
                    list-style: none;
                    margin: 0;
                    padding: 0;
                    position: absolute;
                    bottom: 2%;
                    left: 0;
                    right: 0;
                    text-align: center;
                    z-index: 10;
                }
                .slide-indicador li {
                    display: inline-block;
                    margin: 0 5px;
                }
                .slide-circulo {
                    color: #828282;
                    cursor: pointer;
                    display: block;
                    font-size: 35px;
                }
                .slide-circulo:hover {
                    color: #aaaaaa;
                }
                #slide-1:checked ~ .control-1 ~ .slide-indicador 
                     li:nth-child(1) .slide-circulo,
                #slide-2:checked ~ .control-2 ~ .slide-indicador 
                      li:nth-child(2) .slide-circulo,
                #slide-3:checked ~ .control-3 ~ .slide-indicador 
                      li:nth-child(3) .slide-circulo {
                    color: #428bca;
                }
</style>
               
    <script>

    import HomePageAPI from '../services/HomePageAPI.js';
    import AppNavbar from  '../components/AppNavbar.vue';
    
    export default {
        components:{
    AppNavbar,
  },
      mixins: [HomePageAPI],
    };
    
    </script>