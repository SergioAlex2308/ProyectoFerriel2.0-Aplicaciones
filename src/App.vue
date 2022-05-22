<template>
  <div id="app" :class="mode">
    <MapaEstaciones :mode="mode" @toggle="toggle" />
  </div>
</template>

<script>
import MapaEstaciones from "./components/Mapa.vue";

export default {
  name: "App",
  data() {
    return {
      mode: "light",
    };
  },
  components: {
    MapaEstaciones,
  },
  methods: {
    toggle() {
      if (this.mode === "dark") {
        this.mode = "light";
      } else {
        this.mode = "dark";
      }
    },
  },
};
</script>
<style src="./assets/Styles/style_Main.css"></style>

