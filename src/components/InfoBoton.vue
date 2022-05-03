<template>
  <div id="Modal">
    <div class="contentMenu">
      <div class="headerModal">
        <span class="closeMenu">&times;</span>
      </div>
      <div class="seccionMenu">
        <div id="autores" style="display: none">
          <h1>Equipo Ferriel 2.0</h1>
          <img
            class="circular--square"
            src="../assets/Icons/Icons-User.png"
            width="100px"
            alt="IconUser"
          />
          <h2>Jhon Sebastian Martínez Orjuela</h2>
          <h6>Gerente de producto y desarrollador 3D</h6>
          <img
            class="circular--square"
            src="../assets/Icons/Icons-User.png"
            width="100px"
            alt="IconUser"
          />
          <h2>Sergio Alexander Martínez Cardenas</h2>
          <h6>Desarrollador BackEnd y FrontEnd</h6>
          <img
            class="circular--square"
            src="../assets/Icons/Icons-User.png"
            width="100px"
            alt="IconUser"
          />
          <h2>David Ernesto Arguello Mosquera</h2>
          <h6>Desarrollador 3D</h6>
          <img
            class="circular--square"
            src="../assets/Icons/Icons-User.png"
            width="100px"
            alt="IconUser"
          />
          <h2>Guillermo Andres Diaz Moreno</h2>
          <div class="universidad">
            <h3>
              Universidad Militar Nueva Granada<br />
              2022
            </h3>
          </div>
        </div>
        <div id="historia" style="display: block">
          <div class="virgencentrada">
            <div class="tituloHistory">
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
          <div class="audios">
            <audio controls muted>
              <source src="../assets/audios/sonidotren.mp3" type="audio/mpeg" />
              <source src="horse.ogv" type="audio/ogg" />
            </audio>
          </div>
        </div>
        <div id="horarios" style="display: none">
          <div class="textHorarios">
            <h1>Horarios</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not o nly five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages , and more recently with desktop
              publishing software like Aldus PageMaker including versions o f
              Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
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
            <a href="https://www.turistren.com.co" target="_blank">Página oficial del tren de la sabana</a>
          </div>
        </div>
      </div>
      <div class="botones">
        <div class="boton" @click="informacion()">
          <h3>Historia</h3>
        </div>
        <div class="boton" @click="informacion2()">
          <h3>Integrantes</h3>
        </div>
        <div class="boton" @click="informacion3()">
          <h3>Horarios</h3>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Informacion",
  methods: {
    informacion: function () {
      var author = document.getElementById("autores");
      var schedule = document.getElementById("horarios");
      var history = document.getElementById("historia");
      author.style.display = "none";
      schedule.style.display = "none";
      history.style.display = "block";
    },
    informacion2: function () {
      var author = document.getElementById("autores");
      var schedule = document.getElementById("horarios");
      var history = document.getElementById("historia");

      author.style.display = "block";
      schedule.style.display = "none";
      history.style.display = "none";
    },
    informacion3: function () {
      var author = document.getElementById("autores");
      var schedule = document.getElementById("horarios");
      var history = document.getElementById("historia");

      author.style.display = "none";
      schedule.style.display = "block";
      history.style.display = "none";
    },
  },
};
</script>
<style src="../assets/Styles/style_InfoBoton.css"></style>