<template>
  <div id="Modal">
    <div class="contentMenu">
      <div class="headerModal">
        <div class="boo">
         <button type="button" id="ZoomMenos"  class="btn btn-dark mr-1" @click="ZoomMenos()">Disminuir</button>
         <button type="button" id="ZoomMas" class="btn btn-dark mr-1" @click="ZoomMas()">Aumentar</button>
        </div>
          <!-- <div class="btn-toolbar justify-content-center" role="toolbar" aria-label="Botones">
          <button type="button" id="disminuir" class="btn btn-dark mr-1">Disminuir</button>
          <button type="button" id="aumentar" class="btn btn-dark mr-1">Aumentar</button>
          <button type="button" id="restablecer" class="btn btn-danger">Restablecer</button> -->
           <!-- </div>
          <p class="mt-3">Tamaño actual: <span class="tamaño-actual"></span></p>  -->
        <span class="closeMenu">&times;</span>
      </div>
      
      <div class="seccionMenu">
       <!-- <div id="zoomtext">  -->
        <div id="autores" style="display: none">
          <div id="zoomtexto">
          <h1 >Equipo Ferriel 2.0</h1>
          </div>
          <img
            class="circular--square"
            src="../assets/Icons/Icons-User.png"
            width="100px"
            alt="IconUser"
          />
          <div id="zoomtexto1">
          <h2>Jhon Sebastian Martínez Orjuela</h2>
          <h6>Gerente de producto y desarrollador 3D</h6>
          </div>
          <img
            class="circular--square"
            src="../assets/Icons/Icons-User.png"
            width="100px"
            alt="IconUser"
          />
          <div id="zoomtexto2">
          <h2>Sergio Alexander Martínez Cardenas</h2>
          <h6>Desarrollador BackEnd y FrontEnd</h6>
          </div>
          <img
            class="circular--square"
            src="../assets/Icons/Icons-User.png"
            width="100px"
            alt="IconUser"
          />
          <div id="zoomtexto3">
          <h2>David Ernesto Arguello Mosquera</h2>
          <h6>Desarrollador 3D</h6>
          </div>
          <img
            class="circular--square"
            src="../assets/Icons/Icons-User.png"
            width="100px"
            alt="IconUser"
          />
          <div id="zoomtexto4">
          <h2>Guillermo Andres Diaz Moreno</h2>
          <h6>Desarrollador FrontEnd</h6>
          </div>
          <div class="universidad">
            <div id="zoomtexto5">
            <h3>
              Universidad Militar Nueva Granada<br />
              2022
            </h3>
            </div>
          </div>
          </div>
      
        <div id="historia" style="display: block">
          <div class="virgencentrada">
            <div class="tituloHistory">
              <div id="zoomtexto6">
              <h1>Bienvenidos a Ferriel</h1>
              </div>
            </div>
            <div id="estodebe">
              <div id="zoomtexto7">
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
                <div id="zoomtexto8">
                <p class="mitexto">
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
          <div class="pocisionamientoaudio">
          <div class="audios">
            <audio controls muted>
              <source src="../assets/audios/sonidotren.mp3" type="audio/mpeg" />
              <source src="horse.ogv" type="audio/ogg" />
            </audio>
          </div>
          </div>
        </div>
        <div id="horarios" style="display: none">
          <div class="textHorarios">
            <div id="zoomtexto9">
            <h1>Horarios</h1>
            
            <p class="mitexto">
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
            <div id="zoomtexto20">
            <a href="https://www.turistren.com.co" target="_blank">Página oficial del tren de la sabana</a>
            </div>
          </div>
        </div>
      </div>
      
     
      <div class="botones">
        <div class="boton" @click="informacion()">
         <div id="zoomtexto21">
          <h3>Historia</h3>
          </div>
        </div>
        
        <div class="boton" @click="informacion2()">
         <div id="zoomtexto22"> 
          <h3>Integrantes</h3>
          </div>
        </div>
         
        <div class="boton" @click="informacion3()">
         <div id="zoomtexto23">
          <h3>Horarios</h3>
          </div>
        </div>
      </div>
    </div>
   </div> 
  
</template>
<script>
//   const $ = require('jquery')

 
// //Obtengo el tamaño de letra inicial de 16px 
//     // tamañoLetra(); {
//      $(".restablecer").on("click", function() {
//   $(".mitexto").css("font-size", "initial");
//   size = $(".mitexto" ).css("font-size");
//   size = parseInt(size, 10);
//   $( ".tamaño-actual" ).text(size);
//   })
 
// // Función para aumentar el tamaño del texto (fuente) 
//   $(".aumentar").on("click", function() { 
//   if ((size + 2) <= 47) {
//     $(".mitexto").css("font-size", "+=2");
//     $(".tamaño-actual").text(size += 1);
//   }
//   });
//      $(".disminuir").on("click", function() {
//     console.log("Disminye");
//     if ((size - 2) >= 13) {
//     $(".mitexto").css("font-size", "-=2");
//     $(".tamaño-actual").text(size -= 1);
//     }
//    })
// // Función para restablecer el tamaño del texto (fuente) al tamaño inicial 
export default {
  name: "Informacion",
  methods: {
    ZoomMas: function(){
      var zoom = 1;
      var zoompoquito = 0.1;
    
      document.getElementById("ZoomMas").addEventListener("click", function() {
      
      zoom += zoompoquito;
      
      document.getElementById("zoomtexto").style.transform = "scale(" + zoom + ")";
      document.getElementById("zoomtexto1").style.transform = "scale(" + zoom + ")";
      document.getElementById("zoomtexto2").style.transform = "scale(" + zoom + ")";
      document.getElementById("zoomtexto3").style.transform = "scale(" + zoom + ")";
      document.getElementById("zoomtexto4").style.transform = "scale(" + zoom + ")";
      document.getElementById("zoomtexto5").style.transform = "scale(" + zoom + ")";
      document.getElementById("zoomtexto6").style.transform = "scale(" + zoom + ")";
      document.getElementById("zoomtexto7").style.transform = "scale(" + zoom + ")";
      document.getElementById("zoomtexto8").style.transform = "scale(" + zoom + ")";
      document.getElementById("zoomtexto9").style.transform = "scale(" + zoom + ")";
      document.getElementById("zoomtexto20").style.transform = "scale(" + zoom + ")";
      document.getElementById("zoomtexto21").style.transform = "scale(" + zoom + ")";
      document.getElementById("zoomtexto22").style.transform = "scale(" + zoom + ")";
      document.getElementById("zoomtexto23").style.transform = "scale(" + zoom + ")";
    console.log("se logro")
        
    });
    },
    ZoomMenos: function(){
       var zoom = 1;
      var zoompoquito = 0.1;
      document.getElementById("ZoomMenos").addEventListener("click", function() {
      // if (zoom > zoompoquito) {
       
      zoom -= zoompoquito;
      
      
        document.getElementById("zoomtexto").style.transform = "scale(" + zoom + ")";
        document.getElementById("zoomtexto1").style.transform = "scale(" + zoom + ")";
        document.getElementById("zoomtexto2").style.transform = "scale(" + zoom + ")";
        document.getElementById("zoomtexto3").style.transform = "scale(" + zoom + ")";
        document.getElementById("zoomtexto4").style.transform = "scale(" + zoom + ")";
        document.getElementById("zoomtexto5").style.transform = "scale(" + zoom + ")";
        document.getElementById("zoomtexto6").style.transform = "scale(" + zoom + ")";
        document.getElementById("zoomtexto7").style.transform = "scale(" + zoom + ")";
        document.getElementById("zoomtexto8").style.transform = "scale(" + zoom + ")";
        document.getElementById("zoomtexto9").style.transform = "scale(" + zoom + ")";
        document.getElementById("zoomtexto20").style.transform = "scale(" + zoom + ")";
        document.getElementById("zoomtexto21").style.transform = "scale(" + zoom + ")";
        document.getElementById("zoomtexto22").style.transform = "scale(" + zoom + ")";
        document.getElementById("zoomtexto23").style.transform = "scale(" + zoom + ")";
      console.log("se logro")
    });
    },
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
    }
    



    
  },
};
</script>

<style src="../assets/Styles/style_InfoBoton.css"></style>