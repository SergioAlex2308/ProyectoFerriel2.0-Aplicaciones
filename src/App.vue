<template>
  <div id="app">
    <!-- <Carga/> -->
    <MapaEstaciones />
    <!-- <informacion/>  -->
    <!-- <not-found/>  -->
    <!-- <Colisiones/> -->
    <!-- <Menus/> -->
  </div>
</template>

<script>
//import Carga from "./components/EsperaUsuarios.vue";
import MapaEstaciones from './components/Mapa.vue'
//import Menus from "./components/Menu.vue";
// import NotFound from './components/NotFound.vue'
//import Informacion from './components/InfoBoton.vue'
//import PrimeraPersona from './components/FirstPerson.vue'
//import Colisiones from './components/Collition.vue'

export default {
  name: "App",
  components: {
    //Carga,
    MapaEstaciones,

    // NotFound,
    //Informacion
    //PrimeraPersona
    //Colisiones
    //Menus
  },
};
</script>
<style src="./assets/Styles/style_Main.css"></style>

