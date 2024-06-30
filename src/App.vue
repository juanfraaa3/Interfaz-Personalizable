<template>
  <div  :class="[selectedTheme,'w-4/5']">
    <!-- Header Navigation -->
    <header class="theme-default p-4">
      <nav class="flex justify-around">
        <a href="#" class="text-white">Start</a>
        <a href="#" class="text-white">About this</a>
        <a href="#" class="text-white">Help</a>
        <a href="#" class="text-white">Contacts</a>
      </nav>
    </header>

    <!-- Main Image -->
    <!--
    <div class="main-image my-4" data-carousel-item>
      <img src="./assets/imagenpela.jpg" alt="Main Image" class="" />
    </div>
    -->
<Carousel :value="products" :numVisible="3" :numScroll="3" :responsiveOptions="responsiveOptions">
    <template #item="slotProps">
        <div class="border border-surface-200 dark:border-surface-700 rounded-md m-2 p-3">
            <div class="mb-3">
                <div class="relative mx-auto">
                    <img :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.data.image" :alt="slotProps.data.name" class="w-full rounded-md" />
                    <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data.inventoryStatus)" class="absolute" style="left:5px; top: 5px"/>
                </div>
            </div>
            <div class="mb-3 font-medium">{{ slotProps.data.name }}</div>
            <div class="flex justify-between items-center">
                <div class="mt-0 font-semibold text-xl">${{ slotProps.data.price }}</div>
                <span>
                    <Button icon="pi pi-heart" severity="secondary" outlined />
                    <Button icon="pi pi-shopping-cart" class="ml-2"/>
                </span>
            </div>
        </div>
    </template>
</Carousel>
  




    <section class="content p-4">
      <div class="flex items-center justify-center">
        <div>
          <h2 class="text-2xl font-bold mb-2">Este es un Título</h2>
          <figure :class="[selectedFloat, 'mr-4 mb-4 w-1/4', 'image-wrapper']">
            <img src="./assets/imagenpela.jpg" alt="Personality Image" class="w-full" />
            <figcaption :class="['text-sm', selectedCaptionAligment, selectedFont ,'mt-2']">This is the caption for the image.</figcaption>
          </figure>
          <p :class="[selectedFont, 'text-content', selectedMargin, 'text-left']">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam libero justo laoreet sit. Vivamus at augue eget arcu dictum varius. Et ultrices neque ornare aenean euismod elementum. Pharetra vel turpis nunc eget lorem dolor sed viverra. Semper eget duis at tellus at urna condimentum mattis. Diam volutpat commodo sed egestas. At urna condimentum mattis pellentesque id nibh tortor id aliquet. Ut eu sem integer vitae justo eget magna fermentum. Rutrum tellus pellentesque eu tincidunt. Quis enim lobortis scelerisque fermentum dui. Faucibus scelerisque eleifend donec pretium vulputate sapien. Commodo ullamcorper a lacus vestibulum sed. Posuere morbi leo urna molestie at elementum eu facilisis sed.
            Vitae turpis massa sed elementum. Mattis rhoncus urna neque viverra justo nec ultrices dui sapien. Ornare quam viverra orci sagittis eu. Nibh nisl condimentum id venenatis a condimentum vitae sapien pellentesque. Lorem sed risus ultricies tristique nulla aliquet enim. Sit amet nisl suscipit adipiscing bibendum est ultricies integer. Ut sem viverra aliquet eget. Bibendum est ultricies integer quis auctor elit sed vulputate mi. Magna eget est lorem ipsum dolor sit amet consectetur. Amet volutpat consequat mau
          </p>
        </div>
      </div>
    </section>
</div>

  <!-- Seleccion de Parametros-->
  <div class="hidden md:block w-1/5 fixed top-0 right-0 h-screen bg-gray-100 border-l border-gray-200 p-4 overflow-y-auto">
    <div class="mb-4">
      <label for="font-select" class="block mb-2">Fuente:</label>
      <select id="font-select" v-model="selectedFont" @change="updateFont" class="border border-gray-300 rounded p-2">
          <option value="font-playfair">PlayFair</option> <!-- Serif -->
          <option value="font-roboto">Roboto</option> <!-- Sans Serif -->
          <option value="font-courier">Courier</option> <!-- Serif Monoespaciado-->
          <option value="font-nanum">Nanum </option> <!-- Sans Serif Monoespaciado-->
        </select>
    </div>
    <div class="mb-4">
      <label for="alignment-select" class="block mb-2">Alineación de Texto:</label>
      <select id="alignment-select" v-model="selectedAlignment" @change="updateAlignment" class="border border-gray-300 rounded p-2">
        <option value="text-left">Izquierda</option>
        <option value="text-center">Centro</option>
        <option value="text-right">Derecha</option>
        <option value="text-justify">Justificado</option>
      </select>
    </div>
    <div class="mb-4">
      <label for="float-select" class="block mb-2">Posición de Imagen:</label>
      <select id="float-select" v-model="selectedFloat" @change="updateFloat" class="border border-gray-300 rounded p-2">
        <option value="float-left">Izquierda del texto</option>
        <option value="float-right">Derecha del texto</option>
        <option value="align-left">Arriba Izquierda</option>
        <option value="align-right">Arriba Derecha</option>
      </select>
    </div>
    <div class="mb-4">
      <label for="caption-select" class="block mb-2">Descripción de Imagen:</label>
      <select id="captionAligment-select" v-model="selectedCaptionAligment" @change="updateAlignmentCaption" class="border border-gray-300 rounded p-2">
          <option value="text-left">Left</option>
          <option value="text-center">Center</option>
          <option value="text-right">Right</option>
        </select>
    </div>
    <div class="mb-4">
      <label for="theme-select" class="block mb-2">Seleccionar Tema:</label>
      <select id="captionAligment-select" v-model="selectedTheme" @change="updateTheme" class="border border-gray-300 rounded p-2">
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
    <div class="mb-4">
      <label for="font-size-select" class="block mb-2">Tamaño de Fuente</label>
      <select id="font-size-select" v-model="selectedFontSize" @change="updateFontSize" class="border border-gray-300 rounded p-2">
        <option value="text-xs">Muy Pequeña</option>
        <option value="text-sm">Pequeña</option>
        <option value="text-base">Medio</option>
        <option value="text-lg">Grande</option>
        <option value="text-xl">Muy Grande</option>
      </select>
    </div>

    <div class="mb-4">
      <label for="margin-select" class="block mb-2">Tamaño Margen:</label>
      <select id="margin-select" v-model="selectedMargin" @change="updateMargin" class="border border-gray-300 rounded p-2">
        <option value="max-w-7xl">Muy Pequeño</option>
        <option value="max-w-3xl">Pequeño</option>
        <option value="max-w-xl">Medio</option>
        <option value="max-w-md">Grande</option>
      </select>
    </div>
    
    
    </div>
  </div>

</template>

<script>
import { Carousel } from 'primevue/carousel';

export default {
  components: {
    Carousel
  },
  name: 'App',
  data() {
    return {
      selectedFont: 'font-playfair',
      selectedAlignment: 'text-left',
      selectedCaptionAligment: 'text-left',
      selectedFloat: 'float-left',
      selectedFontSize: 'text-base',
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
      items: [
        { src: './assets/imagenpela.jpg' },
        { src: './assets/imagenpela.jpg' },
        { src: './assets/imagenpela.jpg' },
        { src: './assets/imagenpela.jpg' },
        { src: './assets/imagenpela.jpg' },
      ]
    };
  },
  methods: {
    nextSlide() {
      this.activeIndex = (this.activeIndex + 1) % this.items.length;
    },
    prevSlide() {
      this.activeIndex = (this.activeIndex - 1 + this.items.length) % this.items.length;
    },
    goToSlide(index) {
      this.activeIndex = index;
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

.theme-default #app divheader {
  background-color: #020202ee; /* Fondo */
  color: #e0e0e0; /* Texto */
}

/* Estilos para el tema oscuro */
.theme-dark {
  background-color: #b3b3b3; /* Fondo gris oscuro suave */
  color: #ffffff; /* Texto blanco */
}

.theme-dark #app header {
  background-color: #999999; /* Fondo más oscuro */
  color: #ffffff; /* Texto blanco */
}

/* Estilos para el tema claro */
.theme-light {
  background-color: #fafafa; /* Fondo claro */
  color: #333333; /* Texto negro */
}

.theme-light #app header {
  background-color: #e0e0e0; /* Fondo un poco más oscuro */
  color: #333333; /* Texto negro */
}

/* Estilos para el tema Ocean Blue */
.theme-ocean-blue {
  background-color: #a3d9ff; /* Azul océano pastel */
  color: #333333; /* Texto negro */
}

.theme-ocean-blue #app header {
  background-color: #82c4ff; /* Azul más oscuro */
  color: #333333; /* Texto negro */
}

/* Estilos para el tema Forest Green */
.theme-forest-green {
  background-color: #b2e2b2; /* Verde bosque pastel */
  color: #333333; /* Texto negro */
}

.theme-forest-green #app header {
  background-color: #8cd98c; /* Verde más oscuro */
  color: #333333; /* Texto negro */
}

/* Estilos para el tema Sunset Red */
.theme-sunset-red {
  background-color: #ff9999; /* Rojo atardecer pastel */
  color: #333333; /* Texto negro */
}

.theme-sunset-red #app header {
  background-color: #ff6666; /* Rojo más oscuro */
  color: #333333; /* Texto negro */
}

/* Estilos para el tema Purple Rain */
.theme-purple-rain {
  background-color: #d1b3d1; /* Morado lluvia pastel */
  color: #333333; /* Texto negro */
}

.theme-purple-rain #app header {
  background-color: #b380b3; /* Morado más oscuro */
  color: #333333; /* Texto negro */
}

/* Estilos para el tema Neon Glow */
.theme-neon-glow {
  background-color: #ccffcc; /* Verde neón pastel */
  color: #333333; /* Texto negro */
}

.theme-neon-glow #app header {
  background-color: #99ff99; /* Verde neón más oscuro */
  color: #333333; /* Texto negro */
}

/* Estilos para el tema Vintage Brown */
.theme-vintage-brown {
  background-color: #e6ccb3; /* Marrón vintage pastel */
  color: #333333; /* Texto negro */
}

.theme-vintage-brown #app header {
  background-color: #cc9966; /* Marrón más oscuro */
  color: #333333; /* Texto negro */
}

/* Estilos para el tema Minimalist Gray */
.theme-minimalist-gray {
  background-color: #d9d9d9; /* Gris minimalista pastel */
  color: #333333; /* Texto negro */
}

.theme-minimalist-gray #app header {
  background-color: #bfbfbf; /* Gris más oscuro */
  color: #333333; /* Texto negro */
}
</style>