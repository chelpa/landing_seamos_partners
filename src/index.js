import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './assets/scss/theme.scss';
import './assets/js/src/theme.js';
import './index.css';import './index.css';

import BrandBar from './components/brandbar';
import FiftyPercent from './components/index/fiftypercent';
import ComoFunciona from './components/index/comofunciona';
import Flyers from './components/index/flyers';
import Preguntas from './components/index/preguntas';
import Footer from './components/footer';
import StickyBar from './components/stickybar';
import TopBar from './components/topbar';
import Barra from './components/barra';
import VideoPartners from './components/videopartners';
import VideoPartners2 from './components/videopartners2';
import VideoPartners4 from './components/videopartners4';
import Contacto from './components/index/contacto';
import Gallery from './components/lightgallery';
import SiliconBar from './components/navbar-footer';
import './assets/css/theme.css';
import './assets/css/theme.min.css';
import './assets/js/src/theme.js';
import './App.css';
import reportWebVitals from './reportWebVitals';

// theme mode
let mode = window.localStorage.getItem('mode'),
    root = document.getElementsByTagName('html')[0];
if (mode !== undefined && mode === 'dark') {
  root.classList.add('dark-mode');
} else {
  root.classList.remove('dark-mode');
}
// spinner
(function () {
  window.onload = function () {
    const preloader = document.querySelector('.page-loading');
    preloader.classList.remove('active');
    setTimeout(function () {
      preloader.remove();
    }, 1000);
  };
})();


ReactDOM.render(
  <React.StrictMode>

    <div class="page-loading active">
      <div class="page-loading-inner">
        <div class="page-spinner"></div><span>Cargando información...</span>
      </div>
    </div>
    <main class="page-wrapper">



    <Barra />

    <App />

    <a id="home">
      <FiftyPercent />
    </a>

    <a id="QueEsUnPartner">
      <ComoFunciona
      />
    </a>

    <Flyers
    />

    <a id="PreguntasFrecuentes">
      <Preguntas
      />
    </a>
    <VideoPartners />
    <VideoPartners2 />
    <VideoPartners4 />
    <Contacto />

    </main>
    <Footer />



  </React.StrictMode>,

  document.getElementById('root')

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
