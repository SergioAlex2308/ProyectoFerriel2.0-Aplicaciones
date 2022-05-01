<template>
  <div id="loading">
    <div v-show="!loaded" class="ring">
      <h2>Ferriel 2.0</h2>
      <span class="circle"></span>
    </div>
    <!-- <MapaEstaciones v-show="InitApp"></MapaEstaciones> -->
  </div>
  
</template>
<script>
//import MapaEstaciones from './Mapa.vue';

export default {
  name: "Carga",
  components: {
    //MapaEstaciones
  },
  data() {
    return {
      InitApp: false
    };
  },
  props: {
    HideLoad: null,
  },
  methods: {
    hide() {
      this.InitApp = true;
    }
  }
};
</script>

<style src="../assets/Styles/style_Load.css"></style>