<template>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Home Page</title>
    </head>
    <body>
      
        <section>
           <div class="carousel-container">
      <div class="carousel-slide">
        <img src="https://www.ucb.edu.bo/wp-content/uploads/2023/06/UCB-MUNDO2023.jpg" alt="Image 1">
      </div>
      <div class="carousel-slide">
        <img src="https://www.ucb.edu.bo/wp-content/uploads/2020/05/Walikis-min.jpg" alt="Image 2">
      </div>
      <div class="carousel-slide">
        <img src="image3.jpg" alt="Image 3">
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
      font-weight: 600;
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
      background-color: #117964;
    }
    
     footer {
                background-color: #4c64b4;
                color: #fff;
            }
    
    
            
    </style>
    <style scoped>
    .card {
      box-shadow: 0 0px 1px rgba(0, 0, 0, 0.10), 0 2px 2px rgba(0, 0, 0, 0.10);
      background: #fff;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
    }
    
    .card-body {
      display: flex;
      flex-flow: row wrap;
      padding: 30px;
    }
    
    header {
      flex: 100%;
    }
    
    .meta {
      margin-bottom: 22px;
    }
    
    .chips {
      align-self: flex-end;
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
    
    /* Horizontal kicks in */
    @media only screen and (min-width: 768px) {
      .card {
        flex-direction: row;
        max-height: 279px; /* desktop horizontal cards with featured image */
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
      color: #444;
      font-size: 20px;
      font-weight: 400;
      text-transform: uppercase;
    }
    
    .meta {
      color: #555;
      font-size: 16px;
      text-transform: uppercase;
    }
    
    .author {
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
    
    /* Recruitler.com's _chips.scss */
    /* Container for chips */
    .chips {
      white-space: nowrap;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
    
      /* Hide scrollbars Chrome / IE10+ & Edge */
      &::-webkit-scrollbar {
        display: none;
      }
      -ms-overflow-style: -ms-autohiding-scrollbar;
      -ms-overflow-style: none;
    }
    
    /* Single chips */
    .chip {
      display: inline-block;
      position: relative;
      font-size: 16px;
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      line-height: 1.4;
      white-space: nowrap;
      color: white;
      background: #009DFF;
      border-radius: 25px;
      margin-right: 8px;
      padding: 5px 12px;
      max-height: 32px;
    
      &.large {
        text-transform: uppercase;
        color: black;
        border: 1px solid #E0E0E0;
        background: white;
        padding: 10px 15px;
        max-height: 44px;
      }
    
      input {
        margin-bottom: 0 !important;
        height: 22px !important;
        background-color: transparent !important;
        padding: 3px 0 0 0 !important;
    
        &::placeholder {
          color: black;
          text-transform: uppercase;
          font-size: 16px;
          font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        }
      }
    }
    
    a.chip {
      cursor: pointer;
    
      &:hover,
      &:visited,
      &:active {
        color: white;
      }
    }
    
    a.chip.large {
      &:visited,
      &:hover,
      &:active {
        color: black;
      }
    }
    </style>
    
    
    
    
    
    <script>

    import HomePageAPI from '../services/HomePageAPI.js';
    
    export default {
      mixins: [HomePageAPI],
    };
    
    </script>