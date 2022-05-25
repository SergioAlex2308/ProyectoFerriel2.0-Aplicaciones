<template>
  <div id="Modal">
    <div id="contentMenu">
      <div class="headerModal">
        <div class="buttons">
          <div id="ZoomMenos" @click="ZoomMenos()" class="boton">
            <img
              src="../assets/Icons/Icons-ZoomOut.png"
              alt="Lupa disminucion"
              class="Lens"
            />
          </div>
          <div id="ZoomMas" @click="ZoomMas()" class="boton">
            <img
              src="../assets/Icons/Icons-ZoomIn.png"
              alt="Lupa aumento"
              class="Lens"
            />
          </div>
        </div>
        <span class="closeMenu">&times;</span>
      </div>
      <div class="seccionMenu">
        <div id="historia" class="seccion" style="display: block">
          <div class="titleModal">
            <div>
              <h1 id="zoomtexto1">Bienvenidos a Ferriel</h1>
            </div>
          </div>
          <div class="contentHistory">
            <div>
              <p id="zoomtexto2" class="mitexto">
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
          </div>
          <div class="audios">
            <audio controls muted>
              <source src="../assets/audios/sonidotren.mp3" type="audio/mpeg" />
              <source src="horse.ogv" type="audio/ogg" />
            </audio>
          </div>
        </div>
        <div id="horarios" class="seccion" style="display: none">
          <div class="titleModal">
            <h1 id="zoomtexto3">Horarios</h1>
          </div>
          <div class="textHorarios">
            <div>
              <p id="zoomtexto4" class="mitexto">
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
          </div>
          <table class="tableHorario">
            <tr class="Itinerario">
              <th colspan="5">
                ITINERARIO TREN TURISTICO DE IDA: BOGOTÁ - ZIPAQUIRÁ <br />
                Sábados, Domingos y Festivos
              </th>
            </tr>
            <tr class="infoTable">
              <td>Estación</td>
              <td>Llegada</td>
              <td>Escala</td>
              <td>Salida</td>
              <td>Tiempo de viaje</td>
            </tr>
            <tr>
              <td>Estación de la Sabana</td>
              <td></td>
              <td></td>
              <td>8:20</td>
              <td>0:45</td>
            </tr>
            <tr>
              <td>Estación de Usaquén</td>
              <td>9:05</td>
              <td>0:10</td>
              <td>9:15</td>
              <td>1:30</td>
            </tr>
            <tr>
              <td>Estación de Zipaquirá</td>
              <td>10:45</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </table>
          <table class="tableHorario">
            <tr class="Itinerario">
              <th colspan="5">
                ITINERARIO TREN TURISTICO DE REGRESO: ZIPAQUIRÁ - BOGOTÁ<br />
                Sábados, Domingos y Festivos
              </th>
            </tr>
            <tr class="infoTable">
              <td>Estación</td>
              <td>Llegada</td>
              <td>Escala</td>
              <td>Salida</td>
              <td>Tiempo de viaje</td>
            </tr>
            <tr>
              <td>Estación de Zipaquirá</td>
              <td></td>
              <td></td>
              <td>15:15</td>
              <td>1:30</td>
            </tr>
            <tr>
              <td>Estación de Usaquén</td>
              <td>16:45</td>
              <td>0:05</td>
              <td>16:50</td>
              <td>0:45</td>
            </tr>
            <tr>
              <td>Estación de la Sabana</td>
              <td>17:35</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </table>
          <div class="pageTrain">
            <div>
              <a
                id="zoomtexto5"
                href="https://www.turistren.com.co"
                target="_blank"
                >Página oficial del tren de la sabana</a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="botones">
        <button class="boton" @click="informacion()">Historia</button>
        <button class="boton" @click="informacion2()">Horarios</button>
      </div>
    </div>
  </div>
</template>
<script>
// // Función para restablecer el tamaño del texto (fuente) al tamaño inicial
export default {
  name: "Informacion",
  methods: {
    ZoomMas: function () {
      // var zoom = 1;
      // var zoompoquito = 0.1;
      // let fontSize=getfontsize();
      document.getElementById("ZoomMas").addEventListener("click", function () {
        // zoom += zoompoquito;
        getfontsize("zoomtexto1", "+");
        getfontsize("zoomtexto2", "+");
        getfontsize("zoomtexto3", "+");
        getfontsize("zoomtexto4", "+");
        getfontsize("zoomtexto5", "+");
        // document.getElementById("zoomtexto9").style.setProperty('--font-size', `${fontSize + 0.5}`);

        // document.getElementById("zoomtexto1").style.transform =
        //   "scale(" + zoom + ")";
        // document.getElementById("zoomtexto2").style.transform =
        //   "scale(" + zoom + ")";
        // document.getElementById("zoomtexto3").style.transform =
        //   "scale(" + zoom + ")";
        // document.getElementById("zoomtexto4").style.transform =
        //   "scale(" + zoom + ")";
        // document.getElementById("zoomtexto5").style.transform =
        //   "scale(" + zoom + ")";
        // document.getElementById("zoomtexto6").style.transform =
        //   "scale(" + zoom + ")";
        // document.getElementById("zoomtexto7").style.transform =
        //   "scale(" + zoom + ")";
        // document.getElementById("zoomtexto8").style.transform =
        //   "scale(" + zoom + ")";
        // document.getElementById("zoomtexto").style.transform =
        //   "scale(" + zoom + ")";
        // document.getElementById("zoomtexto20").style.transform =
        //   "scale(" + zoom + ")";
        // document.getElementById("zoomtexto21").style.transform =
        //   "scale(" + zoom + ")";
        // document.getElementById("zoomtexto22").style.transform =
        //   "scale(" + zoom + ")";
        // document.getElementById("zoomtexto23").style.transform =
        //   "scale(" + zoom + ")";
        console.log("se logro");
      });
    },
    nueva: function () {},
    ZoomMenos: function () {
      // var zoom = 1;
      // var zoompoquito = 0.1;
      document
        .getElementById("ZoomMenos")
        .addEventListener("click", function () {
          // if (zoom > zoompoquito) {

          // zoom -= zoompoquito;

          getfontsize("zoomtexto1", "-");
          getfontsize("zoomtexto2", "-");
          getfontsize("zoomtexto3", "-");
          getfontsize("zoomtexto4", "-");
          getfontsize("zoomtexto5", "-");
          // document.getElementById("zoomtexto1").style.transform =
          //   "scale(" + zoom + ")";
          // document.getElementById("zoomtexto2").style.transform =
          //   "scale(" + zoom + ")";
          // document.getElementById("zoomtexto3").style.transform =
          //   "scale(" + zoom + ")";
          // document.getElementById("zoomtexto4").style.transform =
          //   "scale(" + zoom + ")";
          // document.getElementById("zoomtexto5").style.transform =
          //   "scale(" + zoom + ")";
          // document.getElementById("zoomtexto6").style.transform =
          //   "scale(" + zoom + ")";
          // document.getElementById("zoomtexto7").style.transform =
          //   "scale(" + zoom + ")";
          // document.getElementById("zoomtexto8").style.transform =
          //   "scale(" + zoom + ")";
          // document.getElementById("zoomtexto9").style.transform =
          //   "scale(" + zoom + ")";
          // document.getElementById("zoomtexto20").style.transform =
          //   "scale(" + zoom + ")";
          // document.getElementById("zoomtexto21").style.transform =
          //   "scale(" + zoom + ")";
          // document.getElementById("zoomtexto22").style.transform =
          //   "scale(" + zoom + ")";
          // document.getElementById("zoomtexto23").style.transform =
          //   "scale(" + zoom + ")";
          console.log("se logro menos");
        });
    },
    informacion: function () {
      var schedule = document.getElementById("horarios");
      var history = document.getElementById("historia");
      schedule.style.display = "none";
      history.style.display = "block";
    },
    informacion2: function () {
      var schedule = document.getElementById("horarios");
      var history = document.getElementById("historia");
      schedule.style.display = "block";
      history.style.display = "none";
    },
  },
};

const getfontsize = (id, ip) => {
  // let parseFloat=
  // parseFloat(getComputedStyle(document.documentElement)
  //   .getPropertyValue('--font-size'))
  let texto = document.getElementById(id);
  let style = document.defaultView
    .getComputedStyle(texto)
    .getPropertyValue("font-size");
  let fontSize = parseInt(style);

  if (ip === "+") {
    texto.style.fontSize = `${fontSize + 6}px `;
    console.log("este:", style);
  } else {
    texto.style.fontSize = `${fontSize - 6}px `;
  }
};
</script>

<style src="../assets/Styles/style_InfoBoton.css">