import { createApp } from 'vue';
import App from './App.vue';
import './assets/tailwind.css';

// Importa las bibliotecas necesarias de FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import VueEasyCarousel from 'vue-easy-carousel';

// Agrega los iconos que desees utilizar
library.add(fas, far, fab);

// Crea la aplicación Vue
const app = createApp(App);

// Configura el componente FontAwesomeIcon para usarlo globalmente
app.component('font-awesome-icon', FontAwesomeIcon);


app.component('vue-easy-carousel', VueEasyCarousel);

// Monta la aplicación en el elemento con id="app"
app.mount('#app');
