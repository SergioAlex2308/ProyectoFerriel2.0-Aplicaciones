<template>
  <div v-show="!View" id="ShowControls">
    <div id="tutoControls">
      <div id="tutoView">
        <img
          class="Mouse"
          src="../assets/Icons/Icons-Clic.png"
          alt="Icono Mouse"
        />
        <p>Haz click y arrastra el ratón para mover la vista</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AeControls",
  data() {
    return {};
  },
  props: {
    View: null,
  },
  methods: {
    hideTutoAerial() {
      var component = document.getElementById("ShowControls");
      var aerial = document.getElementById("tutoControls");

      aerial.addEventListener("animationend", function () {
        component.style.display = "none";
      });
    }
  },
  mounted() {
    this.hideTutoAerial();
  },
};
</script>
<style src="../assets/Styles/style_Controls.css"></style>