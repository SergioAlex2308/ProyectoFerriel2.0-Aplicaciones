<template>
  <div id="app">
    <!-- <PrimeraPersona/> -->
    <MapaEstaciones/>
    <!-- <espera-usuarios/>
    <info-boton/>
    <not-found/> -->
    <!-- <Colisiones/> -->
  </div>
</template>

<script>

import MapaEstaciones from './components/Mapa.vue'
//import NotFound from './components/NotFound.vue'
//import EsperaUsuarios from './components/EsperaUsuarios.vue'
//import InfoBoton from './components/InfoBoton.vue'
//import PrimeraPersona from './components/FirstPerson.vue'
//import Colisiones from './components/Collition.vue'

export default {
  name: 'App',
  components: {
    MapaEstaciones
    /* EsperaUsuarios,
    NotFound,
    InfoBoton */
    //PrimeraPersona
    //Colisiones
  }
}
</script>
<style src="./assets/Styles/style_Main.css"></style>

