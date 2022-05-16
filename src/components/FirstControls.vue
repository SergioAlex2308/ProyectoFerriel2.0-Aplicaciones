<template>
  <div v-show="ViewFp" id="ShowControlsFp">
    <div id="tutoControlsFp">
      <div id="tutoViewFp">
        <div class="instKeys">
          <img
            class="Keys"
            src="../assets/Icons/Icons-Keys.png"
            alt="Teclas de movimiento"
          />
          <p>Presiona las teclas para desplazarte.</p>
        </div>
        <div class="instKeys">
          <img
            class="Mouse MouseClic"
            src="../assets/Icons/Icons-Clic.png"
            alt="Icono Mouse"
          />
          <p>
            Oprime click derecho
            <br />
            para mirar a tu alrededor.
          </p>
        </div>
        <div class="instKeys">
          <img
            class="Mouse"
            src="../assets/Icons/Icons-Space.png"
            alt="Icono Espace"
          />
          <p>
            Oprime la tecla Espacio
            <br />
            para saltar y moverte mas rápido.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FpControls",
  data() {
    return {};
  },
  props: {
    ViewFp: null,
  },
  methods: {
    showTutoFP() {
      var component = document.getElementById("ShowControlsFp");
      var first = document.getElementById("tutoControlsFp");

      first.addEventListener("animationend", function () {
        component.style.display = "none";
      });
    },
  },
  mounted() {
    this.showTutoFP();
  },
};
</script>
<style src="../assets/Styles/style_Controls.css"></style>