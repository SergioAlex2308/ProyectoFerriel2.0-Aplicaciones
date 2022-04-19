<template>
  <div id="ViewMap">
    <div id="modal-backdrop">
      <div class="todo">
        <header class="header">
          <div class="cerrar">
            <button
              type="button"
              class="btn-close"
              @click="cerrarinformacion()"
            >
              X
            </button>
          </div>
          <div class="logos">
            <img
              class="logo"
              alt="Logo"
              style="display: block"
              src="../assets/imagenes/LOGOFONDO.png"
            />
          </div>
        </header>
        <div id="autores" class="overflow-auto" style="display: block">
          <h2>Product Manager</h2>
          <h6>Jhon Sebastian Martínez Orjuela</h6>
          <img
            class="circular--square"
            src="../assets/Icons/Icons-User.png"
            width="100px"
            alt="IconUser"
          />
          <h2 class="hola">Development Team</h2>
          <h6>
            Sergio Alexander Martínez Cardenas <br />
            David Ernesto Arguello Mosquera <br />
            Guillermo Andres Diaz Moreno<br />
          </h6>
          <div class="caras">
            <img
              class="circular--square"
              src="../assets/Icons/Icons-User.png"
              width="100px"
              alt="Foto integrante"
            />
            <img
              class="circular--square"
              src="../assets/Icons/Icons-User.png"
              width="100px"
              alt="Foto integrante"
            />
            <img
              class="circular--square"
              src="../assets/Icons/Icons-User.png"
              width="100px"
              alt="Foto integrante"
            />
          </div>
          <div class="universidad">
            <h5>
              UMNG<br />
              Proyecto Ferriel 2022
            </h5>
          </div>
        </div>
        <div class="overflow-auto" style="display: none" id="perfil">
          <div class="virgencentrada">
            <div class="titulo">
              <h1>Bienvenidos a Ferriel</h1>
            </div>

            <div id="estodebe">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not o nly five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages , and more recently with desktop
                publishing software like Aldus PageMaker including versions o f
                Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>
            </div>
            <div class="columnas">
              <div class="imagenescol">
                <img
                  src="../assets/imagenes/virgen.png"
                  width="200px"
                  alt="virgo"
                />
                <img
                  src="../assets/imagenes/matera.png"
                  width="200px"
                  alt="mata"
                />
              </div>
              <div id="estodeberia">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not o nly five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum passages
                  , and more recently with desktop publishing software like
                  Aldus PageMaker including versions o f Lorem Ipsum.Lorem Ipsum
                  is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not o nly five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum passages
                  , and more recently with desktop publishing software like
                  Aldus PageMaker including versions o f Lorem Ipsum.Lorem Ipsum
                  is simply dummy text of the printing and typesetting industry.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="overflow-auto" style="display: none" id="otracosa">
          <h1>Horarios</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not o
            nly five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages
            , and more recently with desktop publishing software like Aldus
            PageMaker including versions o f Lorem Ipsum.Lorem Ipsum is simply
            dummy text of the printing and typesetting industry.
          </p>
          <img
            src="../assets/imagenes/HorariosTrenZipaquira.png"
            width="600px"
            alt="mata"
          />
          <h1>Mapas</h1>
          <div class="mapas">
            <img
              src="../assets/imagenes/tablatren.png"
              width="300px"
              alt="virgo"
            />
            <img src="../assets/imagenes/map.jpg" width="300px" alt="mata" />
          </div>
        </div>
        <div class="overflow-auto" style="display: none" id="controles">
          <h1>Ayuda</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not o
            nly five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages
            , and more recently with desktop publishing software like Aldus
            PageMaker including versions o f Lorem Ipsum.Lorem Ipsum is simply
            dummy text of the printing and typesetting industry.
          </p>

          <h1>Controles</h1>
          <div class="control">
            <img
              src="../assets/imagenes/Controles.png"
              width="200px"
              alt="control"
            />
          </div>
        </div>
        <div class="botones">
          <div class="boton">
            <a
              class="ov-btn-grow-box"
              id="boton1"
              style="
                display: block;
                text-decoration: none;
                background-color: transparent;
                border: none;
              "
              type="submit"
              @click="informacion()"
            >
              Bienvenidos
            </a>
          </div>
          <div class="boton">
            <a
              class="ov-btn-grow-box"
              id="boton2"
              style="
                display: block;
                text-decoration: none;
                background-color: transparent;
                border: none;
              "
              type="submit"
              @click="informacion2()"
            >
              Integrantes
            </a>
          </div>
          <div class="boton">
            <a
              class="ov-btn-grow-box"
              id="boton3"
              style="
                display: block;
                text-decoration: none;
                background-color: transparent;
                border: none;
              "
              type="submit"
              @click="informacion3()"
            >
              Horarios
            </a>
          </div>
          <div class="boton">
            <a
              class="ov-btn-grow-box"
              id="boton4"
              style="
                display: block;
                text-decoration: none;
                background-color: transparent;
                border: none;
              "
              type="submit"
              @click="informacion4()"
            >
              controles
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//import MapaEstaciones from "./Mapa.vue";

export default {
  name: "Informacion",
  components: {
    //MapaEstaciones,
  },
  methods: {
    cerrarinformacion() {
      var x = document.getElementById("modal-backdrop");
      x.style.display = "none";
      // x.style.z-index=101;
    },
    informacion: function () {
      var x = document.getElementById("autores");
      var g = document.getElementById("otracosa");
      var a = document.getElementById("controles");
      var y = document.getElementById("boton1");
      var w = document.getElementById("boton2");
      var d = document.getElementById("boton3");
      var z = document.getElementById("perfil");
      x.style.display = "none";
      z.style.display = "block";
      y.style.display = "block";
      d.style.display = "block";
      w.style.display = "block";
      g.style.display = "none";
      a.style.display = "none";
    },

    informacion2: function () {
      var a = document.getElementById("controles");
      var x = document.getElementById("autores");
      var d = document.getElementById("boton3");
      var y = document.getElementById("boton1");
      var w = document.getElementById("boton2");
      var z = document.getElementById("perfil");
      var g = document.getElementById("otracosa");
      x.style.display = "block";
      z.style.display = "none";
      y.style.display = "block";
      w.style.display = "block";
      g.style.display = "none";
      d.style.display = "block";
      a.style.display = "none";
    },
    informacion3: function () {
      var a = document.getElementById("controles");
      var g = document.getElementById("otracosa");
      var d = document.getElementById("boton3");
      var x = document.getElementById("autores");
      var y = document.getElementById("boton1");
      var w = document.getElementById("boton2");
      var z = document.getElementById("perfil");
      x.style.display = "none";
      z.style.display = "none";
      y.style.display = "block";
      d.style.display = "block";
      w.style.display = "block";
      g.style.display = "block";
      a.style.display = "none";
    },
    informacion4: function () {
      var a = document.getElementById("controles");
      var x = document.getElementById("autores");
      var d = document.getElementById("boton3");
      var y = document.getElementById("boton1");
      var w = document.getElementById("boton2");
      var z = document.getElementById("perfil");
      var g = document.getElementById("otracosa");
      a.style.display = "block";
      x.style.display = "none";
      z.style.display = "none";
      y.style.display = "block";
      w.style.display = "block";
      g.style.display = "none";
      d.style.display = "block";
    },
  },
};
</script>
<style src="../assets/Styles/style_InfoBoton.css"></style>