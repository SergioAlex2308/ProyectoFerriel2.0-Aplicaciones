<template>
  <div id="app">
    <!-- <PrimeraPersona/> -->
    <MapaEstaciones/>
    <espera-usuarios/>
    <info-boton/>
    <not-found/>
  </div>
</template>

<script>
import EsperaUsuarios from './components/EsperaUsuarios.vue'
import InfoBoton from './components/InfoBoton.vue'
import MapaEstaciones from './components/Mapa.vue'
import NotFound from './components/NotFound.vue'
//import PrimeraPersona from './components/FirstPerson.vue'

export default {
  name: 'App',
  components: {
    MapaEstaciones,
    EsperaUsuarios,
    NotFound,
    InfoBoton,
    //PrimeraPersona
  }
}
</script>
<style src="./assets/Styles/style_Main.css"></style>

