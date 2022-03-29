<template>
  <div id="app">
    <!-- <PrimeraPersona/> -->
    <MapaEstaciones/>
  </div>
</template>

<script>
import MapaEstaciones from './components/Mapa.vue'
/* import PrimeraPersona from './components/FirstPerson.vue' */

export default {
  name: 'App',
  components: {
    MapaEstaciones,
    //PrimeraPersona
  }
}
</script>
<style src="./assets/Styles/style_Main.css"></style>

