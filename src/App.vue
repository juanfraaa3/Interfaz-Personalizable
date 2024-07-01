<template>
  <div id="app" :class="[selectedTheme,'w-4/5']">
    <!-- Header Navigation -->
    <header :class="`theme-${selectedTheme} p-4`">
      <nav class="flex justify-around">
        <a href="#" class=" flex items-center">
          <font-awesome-icon v-if="showIcons && izquierda" icon="fas fa-home" class="mr-2" />
          Start
          <font-awesome-icon v-if="showIcons && !izquierda" icon="fas fa-home" class="mr-2" />

        </a>
        <a href="#" class=" flex items-center">
          <font-awesome-icon v-if="showIcons && izquierda" icon="fas fa-info-circle" class="mr-2" />
          About this
          <font-awesome-icon v-if="showIcons && !izquierda" icon="fas fa-info-circle" class="mr-2" />
        </a>
        <a href="#" class="flex items-center">
          <font-awesome-icon v-if="showIcons && izquierda" icon="fas fa-question-circle" class="mr-2" />
          Help
          <font-awesome-icon v-if="showIcons && !izquierda" icon="fas fa-question-circle" class="mr-2" />
        </a>
        <a href="#" class="flex items-center">
          <font-awesome-icon v-if="showIcons && izquierda" icon="fas fa-address-book" class="mr-2" />
          Contacts
          <font-awesome-icon v-if="showIcons && !izquierda" icon="fas fa-address-book" class="mr-2" />
        </a>
      </nav>
    </header>

    
    <div>
      <!-- Carousel Section -->
      <section class="p-4 justify-center flex">
        <h2 class="text-2xl font-bold mb-4"></h2>
        <div class="relative ">
          <!-- Carousel -->            
          <img src="./assets/imagenpela.jpg" alt="Personality Image" class="" />

        </div>
      </section>
    </div>





    <section class="content p-4">
      <div class="flex items-center justify-center">
        <div>
          <!--botones 1-->
          <div v-show="button_visible" :class="['flex',selectedTheme ,selectedButtonPosition , 'mt-4', 'button_divs']" >
            <button
              @click="goToPage(currentPage - 1)"
              class="button button-pagination px-4 py-2rounded-none hover:bg-gray-500"
            >
              Anterior
            </button>
            <button
              @click="goToPage(currentPage + 1)"
              class="button button-pagination px-4 py-2 rounded-none hover:bg-gray-500"
            >
              Siguiente
            </button>
          </div>
          
          <!-- Texto -->
          <h2 class="text-2xl font-bold mb-2">Este es un Título</h2>
          <figure :class="[selectedFloat, 'mr-4 mb-4 w-1/4', 'image-wrapper', 'mx-2']">
            <img src="./assets/imagenpela.jpg" alt="Personality Image" class="w-full" />
            <figcaption :class="['text-sm', selectedCaptionAligment, selectedFont ,'mt-2']">This is the caption for the image.</figcaption>
          </figure>
          <p :class="[selectedFont, 'text-content', selectedMargin, 'text-left']">
            {{ currentPageText }}
          </p>
          
          <!--botones 2-->
          <div v-show="!button_visible" :class="['flex',selectedTheme, selectedButtonPosition , 'mt-4', 'button_divs']" >
            <button
              @click="goToPage(currentPage - 1)"
              class="button button-pagination px-4 py-2  rounded-none hover:bg-gray-500"
            >
              Anterior
            </button>
            <button
              @click="goToPage(currentPage + 1)"
              class="button button-pagination px-4 py-2 rounded-none hover:bg-gray-500"
            >
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </section>
</div>

  <!-- Seleccion de Parametros-->
  <div class="hidden md:block w-1/5 fixed top-0 right-0 h-screen bg-gray-100 border-l border-gray-200 p-4 overflow-y-auto">
    <div class="mb-4 text-gray-600">
      <label for="font-select" class="block mb-2 mt-10">Fuente:</label>
      <select id="font-select" v-model="selectedFont" @change="updateFont" class="border border-gray-300 rounded p-2">
          <option value="font-playfair">PlayFair</option> <!-- Serif -->
          <option value="font-roboto">Roboto</option> <!-- Sans Serif -->
          <option value="font-courier">Courier</option> <!-- Serif Monoespaciado-->
          <option value="font-nanum">Nanum </option> <!-- Sans Serif Monoespaciado-->
        </select>
    </div>
    <div class="mb-4 text-gray-600">
      <label for="alignment-select" class="block mb-2">Alineación de Texto:</label>
      <select id="alignment-select" v-model="selectedAlignment" @change="updateAlignment" class="text-gray-600 border border-gray-300 rounded p-2">
        <option value="text-left">Izquierda</option>
        <option value="text-center">Centro</option>
        <option value="text-right">Derecha</option>
        <option value="text-justify">Justificado</option>
      </select>
    </div>
    <div class="mb-4 text-gray-600">
      <label for="float-select" class="block mb-2">Posición de Imagen:</label>
      <select id="float-select" v-model="selectedFloat" @change="updateFloat" class="text-gray-600 border border-gray-300 rounded p-2">
        <option value="float-left">Izquierda del texto</option>
        <option value="float-right">Derecha del texto</option>
        <option value="align-left">Arriba Izquierda</option>
        <option value="align-right">Arriba Derecha</option>
      </select>
    </div>
    <div class="mb-4 text-gray-600">
      <label for="caption-select" class="block mb-2">Descripción de Imagen:</label>
      <select id="captionAligment-select" v-model="selectedCaptionAligment" @change="updateAlignmentCaption" class="text-gray-600 border border-gray-300 rounded p-2">
          <option value="text-left">Left</option>
          <option value="text-center">Center</option>
          <option value="text-right">Right</option>
        </select>
    </div>
    <div class="mb-4">
      <label for="theme-select" class="block mb-2 text-gray-600">Seleccionar Tema:</label>
      <select id="captionAligment-select" v-model="selectedTheme" @change="updateTheme" class=" text-gray-600 border border-gray-300 rounded p-2">
          <option value="theme-default">Default</option>
          <option value="theme-dark">Oscuro</option>
          <option value="theme-light">Claro</option>
          <option value="theme-ocean-blue">Azul Océano</option>
          <option value="theme-forest-green">Verde Bosque</option>
          <option value="theme-sunset-red">Rojo Atardecer</option>
          <option value="theme-purple-rain">Púrpura Lluvia</option>
          <option value="theme-neon-glow">Brillo Neon</option>
          <option value="theme-vintage-brown">Café Vintage</option>
          <option value="theme-minimalist-gray">Gris Minimalista</option>
        </select>
    <div class="mb-4 text-gray-600">
      <label for="font-size-select" class="block mt-2 mb-2">Tamaño de Fuente</label>
      <select id="font-size-select" v-model="selectedFontSize" @change="updateFontSize" class="text-gray-600 border border-gray-300 rounded p-2">
        <option value="text-xs">Muy Pequeña</option>
        <option value="text-sm">Pequeña</option>
        <option value="text-base">Medio</option>
        <option value="text-lg">Grande</option>
        <option value="text-xl">Muy Grande</option>
      </select>
    </div>

    <div class="mb-4 text-gray-600">
      <label for="margin-select" class="block mb-2">Tamaño Margen:</label>
      <select id="margin-select" v-model="selectedMargin" @change="updateMargin" class="text-gray-600 border border-gray-300 rounded p-2">
        <option value="max-w-7xl">Muy Pequeño</option>
        <option value="max-w-3xl">Pequeño</option>
        <option value="max-w-xl">Medio</option>
        <option value="max-w-md">Grande</option>
      </select>
    </div>

    <div class="mb-4 text-gray-600">
      <label for="button-shape-select" class="block mb-2">Forma de Botones:</label>
      <select id="button-shape-select" v-model="selectedButtonShape" @change="updateButtonShape" class="text-gray-600 border border-gray-300 rounded p-2">
        <option value="rounded-none">Rectangular</option>
        <option value="rounded">Redondo</option>
      </select>
    </div>

    <div class="mb-4 text-gray-600">
      <label for="float-select" class="block mb-2">Alineación de Botones:</label>
      <select id="float-select" v-model="selectedButtonPosition" class="text-gray-600 border border-gray-300 rounded p-2">
        <option value="justify-start">Izquierda</option>
        <option value="justify-center">Centro</option>
        <option value="justify-end">Derecha</option>
        <option value="justify-between">Justificado</option>
      </select>
    </div>

    <div class="mb-4 text-gray-600">
      <label for="float-select" class="block mb-2">Posición de Botones:</label>
      <select id="float-select" v-model="button_visible" class="text-gray-600 border border-gray-300 rounded p-2">
        <option :value="true">Arriba</option>
        <option :value="false">Abajo</option>
      </select>
    </div>

    <div class="mb-4 text-gray-600">
      <label for="navbar-fixed-select" class="block mb-2">Barra de Navegación:</label>
      <select id="navbar-fixed-select" v-model="navbarPosition" @change="updateNavbarPosition" class="text-gray-600 border border-gray-300 rounded p-2">
        <option value="navbar-fixed">Fijo</option>
        <option value="navbar-not-fixed">No Fijo</option>
      </select>
    </div>
    
    <div class="p-4">
      <!-- Dropdown for selecting whether to show icons -->
      <label class="block mb-2 text-gray-700">Mostrar iconos Barra: </label>
      <select v-model="showIcons" class="form-select mt-1 block w-full">
        <option :value="true">Yes</option>
        <option :value="false">No</option>
      </select>
    </div>

    <div class="p-4">
      <!-- Dropdown for selecting whether to show icons -->
      <label class="block mb-2 text-gray-700">Posicion Iconos: </label>
      <select v-model="izquierda" class="form-select mt-1 block w-full">
        <option :value="true">Izquierda</option>
        <option :value="false">Derecha</option>
      </select>
    </div>
    
    
    </div>
  </div>

</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  components: {
    FontAwesomeIcon,
  },
  name: 'App',
  data() {
    return {
      imagesList: [
        { image: './assets/imagenpela.jpg', text: 'Image 1' },
        { image: './assets/imagenpela.jpg', text: 'Image 2' },
        { image: './assets/imagenpela.jpg', text: 'Image 3' }
      ],
      currentImageIndex: 1,

      showIcons: true,
      izquierda: true,
      selectedFont: 'font-playfair',
      selectedAlignment: 'text-left',
      selectedCaptionAligment: 'text-left',
      selectedFloat: 'float-left',
      selectedFontSize: 'text-base',
      iconPosition: 'left',
      themes: [
        { name: 'Default', value: 'theme-default' },
        { name: 'Dark Mode', value: 'theme-dark' },
        { name: 'Light Mode', value: 'theme-light' },
        { name: 'Ocean Blue', value: 'theme-ocean-blue' },
        { name: 'Forest Green', value: 'theme-forest-green' },
        { name: 'Sunset Red', value: 'theme-sunset-red' },
        { name: 'Purple Rain', value: 'theme-purple-rain' },
        { name: 'Neon Glow', value: 'theme-neon-glow' },
        { name: 'Vintage Brown', value: 'theme-vintage-brown' },
        { name: 'Minimalist Gray', value: 'theme-minimalist-gray' }
      ],
      selectedTheme: 'theme-default',
      activeIndex: 0,
      text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam libero justo laoreet sit. Vivamus at augue eget arcu dictum varius. Et ultrices neque ornare aenean euismod elementum. Pharetra vel turpis nunc eget lorem dolor sed viverra. Semper eget duis at tellus at urna condimentum mattis. Diam volutpat commodo sed egestas. At urna condimentum mattis pellentesque id nibh tortor id aliquet. Ut eu sem integer vitae justo eget magna fermentum. Rutrum tellus pellentesque eu tincidunt. Quis enim lobortis scelerisque fermentum dui. Faucibus scelerisque eleifend donec pretium vulputate sapien. Commodo ullamcorper a lacus vestibulum sed. Posuere morbi leo urna molestie at elementum eu facilisis sed. Vitae turpis massa sed elementum. Mattis rhoncus urna neque viverra justo nec ultrices dui sapien. Ornare quam viverra orci sagittis eu. Nibh nisl condimentum id venenatis a condimentum vitae sapien pellentesque. Lorem sed risus ultricies tristique nulla aliquet enim. Sit amet nisl suscipit adipiscing bibendum est ultricies integer. Ut sem viverra aliquet eget. Bibendum est ultricies integer quis auctor elit sed vulputate mi. Magna eget est lorem ipsum dolor sit amet consectetur. Amet volutpat consequat mau Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit elit sit amet neque vehicula, sed condimentum risus ultricies. Proin auctor est id eros fringilla, non accumsan felis efficitur. Duis commodo pharetra erat, sit amet sollicitudin purus congue at. Nam ac vestibulum arcu. Duis non enim eros. Nulla facilisi. Vivamus sed fermentum libero. Nullam nec condimentum turpis. Nullam ultricies dolor vitae dolor placerat, nec venenatis orci blandit. Vivamus tincidunt metus nec tellus sodales, sit amet aliquam felis bibendum. Sed at nibh pulvinar, sagittis dui sed, placerat ligula. Donec lobortis odio at turpis ultricies, a mollis eros pulvinar. Sed eget sollicitudin ex. Curabitur eu ligula eget ligula tempor cursus. Vivamus sed lacus ut eros maximus dictum ac et libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit elit sit amet neque vehicula, sed condimentum risus ultricies. Proin auctor est id eros fringilla, non accumsan felis efficitur. Duis commodo pharetra erat, sit amet sollicitudin purus congue at. Nam ac vestibulum arcu. Duis non enim eros. Nulla facilisi. Vivamus sed fermentum libero. Nullam nec condimentum turpis. Nullam ultricies dolor vitae dolor placerat, nec venenatis orci blandit. Vivamus tincidunt metus nec tellus sodales, sit amet aliquam felis bibendum. Sed at nibh pulvinar, sagittis dui sed, placerat ligula. Donec lobortis odio at turpis ultricies, a mollis eros pulvinar. Sed eget sollicitudin ex. Curabitur eu ligula eget ligula tempor cursus. Vivamus sed lacus ut eros maximus dictum ac et libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit elit sit amet neque vehicula, sed condimentum risus ultricies. Proin auctor est id eros fringilla, non accumsan felis efficitur. Duis commodo pharetra erat, sit amet sollicitudin purus congue at. Nam ac vestibulum arcu. Duis non enim eros. Nulla facilisi. Vivamus sed fermentum libero. Nullam nec condimentum turpis. Nullam ultricies dolor vitae dolor placerat, nec venenatis orci blandit. Vivamus tincidunt metus nec tellus sodales, sit amet aliquam felis bibendum. Sed at nibh pulvinar, sagittis dui sed, placerat ligula. Donec lobortis odio at turpis ultricies, a mollis eros pulvinar. Sed eget sollicitudin ex. Curabitur eu ligula eget ligula tempor cursus. Vivamus sed lacus ut eros maximus dictum ac et libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit elit sit amet neque vehicula, sed condimentum risus ultricies. Proin auctor est id eros fringilla, non accumsan felis efficitur. Duis commodo pharetra erat, sit amet sollicitudin purus congue at. Nam ac vestibulum arcu. Duis non enim eros. Nulla facilisi. Vivamus sed fermentum libero. Nullam nec condimentum turpis. Nullam ultricies dolor vitae dolor placerat, nec venenatis orci blandit. Vivamus tincidunt metus nec tellus sodales, sit amet aliquam felis bibendum. Sed at nibh pulvinar, sagittis dui sed, placerat ligula. Donec lobortis odio at turpis ultricies, a mollis eros pulvinar. Sed eget sollicitudin ex. Curabitur eu ligula eget ligula tempor cursus. Vivamus sed lacus ut eros maximus dictum ac et libero.',
      currentPage: 0,
      pageSize: 2000,
      selectedButtonShape: "rounded-none",
      selectedButtonPosition: "justify-end",
      button_visible: true,
    };
  },
  computed: {
    currentPageText() {
      const start = this.currentPage * this.pageSize;
      const end = start + this.pageSize;
      return this.text.substring(start, end);
    },
    totalPages() {
      return Math.ceil(this.text.length / this.pageSize);
    },
  },
  methods: {
    goToPage(pageIndex) {
      this.currentPage = pageIndex;
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.items.length;
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
    },
    goToSlide(index) {
      this.activeIndex = index;
    },
    nextImage() {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    },
    prevImage() {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
    },
    
    updateFont() {
      const fontElements = document.querySelectorAll('.text-content');
      fontElements.forEach((element) => {
        element.classList.remove('font-playfair', 'font-roboto', 'font-courier', 'font-nanum');
        element.classList.add(this.selectedFont);
      });
    },
    updateAlignment() {
      const alignmentElements = document.querySelectorAll('.text-content');
      alignmentElements.forEach((element) => {
        element.classList.remove('text-left', 'text-center', 'text-right', 'text-justify');
        element.classList.add(this.selectedAlignment);
      });
    },
    updateAlignmentCaption() {
      const alignmentElements = document.querySelectorAll('.text-content');
      alignmentElements.forEach((element) => {
        element.classList.remove('text-left', 'text-center', 'text-right');
        element.classList.add(this.selectedAlignment);
      });
    },
    updateFloat() {
      const floatElements = document.querySelectorAll('.float-left');
      floatElements.forEach((element) => {
        element.classList.remove('float-left', 'float-right');
        element.classList.add(this.selectedFloat);
      });
    },
    updateTheme() {
      const themeElements = document.querySelector('#app');
      themeElements.classList.remove('theme-default', 'theme-dark', 'theme-light', 'theme-ocean-blue', 'theme-forest-green', 'theme-sunset-red', 'theme-purple-rain', 'theme-neon-glow', 'theme-vintage-brown', 'theme-minimalist-gray');
      themeElements.classList.add(this.selectedTheme);
    },
    updateFontSize() {
      const fontSizeElements = document.querySelectorAll('.text-content');
      fontSizeElements.forEach((element) => {
        element.classList.remove('text-xs', 'text-sm', 'text-base', 'text-lg', 'text-xl');
        element.classList.add(this.selectedFontSize);
      });
    },
    updateMargin() {
      const marginElements = document.querySelectorAll('.text-content');
      marginElements.forEach((element) => {
        element.classList.remove('max-w-xl', 'max-w-md', 'max-w-3xl', 'max-w-7xl');
        element.classList.add(this.selectedMargin);
      });
    },
    updateButtonShape() {
      const buttonElements = document.querySelectorAll('.button-pagination');
      buttonElements.forEach((element) => {
        element.classList.remove('rounded-none', 'rounded');
        element.classList.add(this.selectedButtonShape);
      });
    },
    updateButtonPosition() {
      const div = document.querySelectorAll('.button_divs');
      div.forEach((element) => {
        element.classList.remove('justify-start', 'justify-end', 'justify-center', 'justify-between');
        element.classList.add(this.selectedButtonShape);
      });
    },
    updateNavbarPosition() {
      const navbarElements = document.querySelector('header');
      if (this.navbarPosition == 'navbar-fixed'){
        navbarElements.classList.add('navbar-fixed');
      }else{
        navbarElements.classList.remove('navbar-fixed');
      }
    }

    
  },
};
</script>


<style>
.font-playfair {
  @apply font-serif;
  font-family: 'Playfair Display', serif;
}

.font-roboto {
  @apply font-sans;
  font-family: 'Roboto', sans-serif;
}

.font-courier {
  @apply font-mono;
  font-family: 'Courier New', monospace;
}

.font-nanum {
  @apply font-sans;
  font-family: 'Nanum Gothic', sans-serif;
}


.container {
  display: flex;
}


/* Estilos comunes */
#app header {
  padding: 10px;
  text-align: center;
}

/* Estilos para el tema por defecto */
.theme-default {
  background-color: #f5f5f5; /* Fondo blanco suave */
  color: #333333; /* Texto negro */
}

.theme-default header {
  background-color: #333333; /* Azul suave */
  color: #f5f5f5; /* Texto blanco */
}

.theme-default button {
  background-color: #333333; /* Azul suave */
  color: #f5f5f5; /* Texto blanco */
}

/* Estilos para el tema oscuro */
.theme-dark {
  background-color: #1e1e1e; /* Fondo negro */
  color: #ffffff; /* Texto gris claro */
}

.theme-dark header {
  background-color: #333333; /* Gris oscuro */
  color: #ffffff; /* Texto blanco */
}
.theme-dark button {
  background-color: #333333; /* Gris oscuro */
  color: #ffffff; /* Texto blanco */
}

/* Estilos para el tema claro */
.theme-light {
  background-color: #ffffff; /* Fondo blanco */
  color: #333333; /* Texto negro */
}

.theme-light header {
  background-color: #f5f5f5; /* Gris claro */
  color: #333333; /* Texto negro */
}

.theme-light button {
  background-color: #f5f5f5; /* Gris claro */
  color: #333333; /* Texto negro */
}

/* Estilos para el tema Ocean Blue */
.theme-ocean-blue {
  background-color: #e0f7fa; /* Azul claro */
  color: #00796b; /* Texto verde azulado */
}

.theme-ocean-blue header {
  background-color: #00796b; /* Verde azulado */
  color: #ffffff; /* Texto blanco */
}
.theme-ocean-blue button {
  background-color: #00796b; /* Verde azulado */
  color: #ffffff; /* Texto blanco */
}
/* Estilos para el tema Forest Green */
.theme-forest-green {
  background-color: #e8f5e9; /* Verde claro */
  color: #388e3c; /* Texto verde oscuro */
}

.theme-forest-green header {
  background-color: #388e3c; /* Verde oscuro */
  color: #ffffff; /* Texto blanco */
}
.theme-forest-green button {
  background-color: #388e3c; /* Verde oscuro */
  color: #ffffff; /* Texto blanco */
}

/* Estilos para el tema Sunset Red */
.theme-sunset-red {
  background-color: #ffebee; /* Rosa claro */
  color: #d32f2f; /* Texto rojo oscuro */
}

.theme-sunset-red header {
  background-color: #d32f2f; /* Rojo oscuro */
  color: #ffffff; /* Texto blanco */
}
.theme-sunset-red button {
  background-color: #d32f2f; /* Rojo oscuro */
  color: #ffffff; /* Texto blanco */
}

/* Estilos para el tema Purple Rain */
.theme-purple-rain {
  background-color: #f3e5f5; /* Morado claro */
  color: #7b1fa2; /* Texto morado oscuro */
}

.theme-purple-rain header {
  background-color: #7b1fa2; /* Morado oscuro */
  color: #ffffff; /* Texto blanco */
}
.theme-purple-rain button {
  background-color: #7b1fa2; /* Morado oscuro */
  color: #ffffff; /* Texto blanco */
}

/* Estilos para el tema Neon Glow */
.theme-neon-glow {
  background-color: #e0f7fa; /* Azul claro */
  color: #00acc1; /* Texto azul neón */
}

.theme-neon-glow header {
  background-color: #00acc1; /* Azul neón */
  color: #ffffff; /* Texto blanco */
}

.theme-neon-glow button {
  background-color: #00acc1; /* Azul neón */
  color: #ffffff; /* Texto blanco */
}

/* Estilos para el tema Vintage Brown */
.theme-vintage-brown {
  background-color: #efebe9; /* Marrón claro */
  color: #795548; /* Texto marrón oscuro */
}

.theme-vintage-brown header {
  background-color: #795548; /* Marrón oscuro */
  color: #ffffff; /* Texto blanco */
}
.theme-vintage-brown button {
  background-color: #795548; /* Marrón oscuro */
  color: #ffffff; /* Texto blanco */
}

/* Estilos para el tema Minimalist Gray */
.theme-minimalist-gray {
  background-color: #f5f5f5; /* Gris claro */
  color: #757575; /* Texto gris oscuro */
}

.theme-minimalist-gray header {
  background-color: #757575; /* Gris oscuro */
  color: #ffffff; /* Texto blanco */
}
.theme-minimalist-gray button {
  background-color: #757575; /* Gris oscuro */
  color: #ffffff; /* Texto blanco */
}

/* CAMBIO DE FORMA PARA LOS BOTONES


/* Add these styles in your <style> section */
.button-pagination {
  /* Common button styles */
  padding: 8px 16px;
  border: 2px solid transparent;
  cursor: pointer;
  transition: all 0.3s ease;
}

/* Rectangular button */
.button-rectangle {
  border-radius: 4px;
}

/* Rounded button */
.button-rounded {
  border-radius: 100px; /* Adjust radius as needed */
}

/* Triangular button */
.button-triangle {
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 20px solid #333; /* Adjust color as needed */
}

/* Arrow button */
.button-arrow {
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 20px solid #333; /* Adjust color as needed */
}
/* Estilo para navbar fijo */
.navbar-fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 5; /* Ajusta según sea necesario */
}

</style>
