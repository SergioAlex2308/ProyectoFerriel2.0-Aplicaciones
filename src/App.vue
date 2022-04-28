<template>
  <div id="app">
    <!-- <PrimeraPersona/> -->
     <!-- <espera-usuarios/>  -->
      <MapaEstaciones/>
     <informacion/> 
     <!-- <not-found/>  -->
    <!-- <Colisiones/> -->
    <!-- <Menus/> -->
  </div>
</template>

<script>
//import EsperaUsuarios from './components/EsperaUsuarios.vue'
import MapaEstaciones from './components/Mapa.vue'
//import Menus from "./components/Menu.vue";
// import NotFound from './components/NotFound.vue'
import Informacion from './components/InfoBoton.vue'
//import PrimeraPersona from './components/FirstPerson.vue'
//import Colisiones from './components/Collition.vue'

export default {
  name: "App",
  components: {
     //EsperaUsuarios,
    MapaEstaciones,
    
    // NotFound,
    Informacion
    //PrimeraPersona
    //Colisiones
    //Menus
  }
};
</script>
<style src="./assets/Styles/style_Main.css"></style>

