<template>
  <div id="app" :class= "mode">
    <!-- <Carga/> -->
    <MapaEstaciones :mode= "mode" @toggle= "toggle"/>
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
  data (){
  return{
    mode: 'light'
  }
  },
  components: {
    //Carga,
    MapaEstaciones,

    // NotFound,
    //Informacion
    //PrimeraPersona
    //Colisiones
    //Menus
  },
   methods: {
  
    toggle () {
      if (this.mode === "dark") {
        this.mode = "light"
      } else {
        this.mode = "dark"
      }
    }
  }
};
</script>
<style src="./assets/Styles/style_Main.css"></style>

