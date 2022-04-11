<template>
<div class="modal-backdrop">
    <div class="todo">
          <header class="header">
            <div class="logos" >
                    <img alt="Logo" style="width:150px; display:block" src="../assets/imagenes/LOGOFONDO.png"> 
            </div>
     
            <div class="cerrar">
                <button  type="button" class="btn-close" @click="cerrarinformacion()">X
                </button>
            </div>
        </header>
        <div class="overflow-auto" style="display:block" id="autores">     
             <h2>Product Manager</h2>
            <h6>Jhon Sebastian Martinez Orjuela</h6>
          <img class="circular--square" src="../assets/imagenes/tres.png" width="100px" alt="virgo">
            <h2 class="hola">Development Team</h2> 
            <h6> Sergio Alexander Martinez Cardenas <br>
            David Ernesto Arguello Mosquera <br>
            Guillermo Andres Diaz Moreno<br>
           
            </h6>
             <div class="caras">
                      <img class="circular--square" src="../assets/imagenes/uno.png" width="100px" alt="virgo">
                      <img class="circular--square" src="../assets/imagenes/dos.png" width="100px" alt="mata">
                      <img class="circular--square" src="../assets/imagenes/cuatro.png" width="100px" alt="mata">
                  </div>
            <div class="universidad" style="font-size: 16px;" > 
               <h5> UMNG<br>
                Proyecto Ferriel 2022</h5>
            </div>
            
        </div>
        <div class="overflow-auto" style="display:none" id="perfil">
            <div class="virgencentrada">
                <div class=titulo>
                    <h1>Bienvenidos a Ferriel</h1>
                </div>
                           
                <div id="estodebe" >
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                     printer took a galley of type and scrambled it to make a type specimen book. It has survived not o
                     nly five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                      It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages
                      , and more recently with desktop publishing software like Aldus PageMaker including versions o
                      f Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                   </p>
                </div >
                    <div class="columnas">
                  <div class="imagenescol">
                      <img src="../assets/imagenes/virgen.png" width="200px" alt="virgo">
                       <img src="../assets/imagenes/matera.png" width="200px" alt="mata">
                  </div>
                   <div id="estodeberia" >
                         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                     printer took a galley of type and scrambled it to make a type specimen book. It has survived not o
                     nly five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                      It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages
                      , and more recently with desktop publishing software like Aldus PageMaker including versions o
                      f Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                     printer took a galley of type and scrambled it to make a type specimen book. It has survived not o
                     nly five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                      It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages
                      , and more recently with desktop publishing software like Aldus PageMaker including versions o
                      f Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                   </p>
                  </div>
              
         
            </div>
            </div>
            
        </div>
            <div class="overflow-auto" style="display:none" id="otracosa">
            <h1>Horarios</h1>
                <p> 
                     Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                     printer took a galley of type and scrambled it to make a type specimen book. It has survived not o
                     nly five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                      It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages
                      , and more recently with desktop publishing software like Aldus PageMaker including versions o
                      f Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
               <img src="../assets/imagenes/HorariosTrenZipaquira.png" width="600px" alt="mata">
            <h1>Mapas</h1>
             <div class="mapas">
                      <img src="../assets/imagenes/tablatren.png" width="300px" alt="virgo">
                       <img src="../assets/imagenes/map.jpg" width="300px" alt="mata">
                  </div>
        </div>
                 <div class="overflow-auto" style="display:none" id="controles">
            <h1>Ayuda</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                     printer took a galley of type and scrambled it to make a type specimen book. It has survived not o
                     nly five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                      It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages
                      , and more recently with desktop publishing software like Aldus PageMaker including versions o
                      f Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
            
            <h1>Controles</h1>
             <div class="control">
                      <img src="../assets/imagenes/Controles.png" width="200px" alt="control">
                       
                  </div>
            
        </div>
        <div class="botones">
        <div class="boton">
            <a class="ov-btn-grow-box"  id="boton1" style="display:block; text-decoration:none; background-color: transparent; border:none"
                type="submit" @click="informacion()">   Bienvenidos
            </a>
        </div>
        <div class="boton">
             <a class="ov-btn-grow-box"  id="boton2" style="display:block; text-decoration:none; background-color: transparent; border:none"
                type="submit" @click="informacion2()">   Integrantes
            </a>
        </div>
        <div class="boton">
              <a class="ov-btn-grow-box"  id="boton3" style="display:block;text-decoration:none; background-color: transparent; border:none"
                type="submit" @click="informacion3()">   Horarios
            </a>
        </div>
         <div class="boton">
              <a  class="ov-btn-grow-box"  id="boton4" style="display:block; text-decoration:none; background-color: transparent; border:none"
                type="submit" @click="informacion4()">   controles
            </a>
        </div>
        </div>
    </div>
</div>
</template>
<script>

export default {
 
    
    methods:{
        cerrarinformacion(){
        var x = document.getElementById("informacionID");
        x.style.display="none";
        // x.style.z-index=101;
        },
        informacion:function() {
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
         
        informacion2:function() {
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
            g.style.display ="none";
            d.style.display = "block";
            a.style.display = "none";
        },
        informacion3:function() {
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
            g.style.display ="block";
            a.style.display = "none";
        },
            informacion4:function() {
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
            g.style.display ="none";
            d.style.display = "block";
        },
    }
}
</script>
<style scoped>
.columnas{
    display: flex;
    margin: 2px;
    padding: 5px;
}
.imagenescol{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
        margin: 10px;
        padding: 20px;
      

}
.overflow-auto::-webkit-scrollbar{
    width: 7px;
    background: black;
    border: solid 2px black;
}
.circular--square {
  border-top-left-radius: 50% 50%;
  border-top-right-radius: 50% 50%;
  border-bottom-right-radius: 50% 50%;
  border-bottom-left-radius: 50% 50%;
}
.caras{
    display: flex;
    justify-content: space-around;
    padding-bottom: 30px;
}

.universidad{
    margin-bottom: 50px;
}
.mapas{
    display: flex;
    justify-content:space-around;
        margin: 10px;
        padding: 20px;    

}
    .texto{
        display: flex;
        flex-direction: column;
        border: solid 2px black;
    }
    .modal-backdrop  {
       position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(146, 99, 99, 0);
    }
    .menu{
        display: flex;
        justify-content: space-between;
        
    }
    .todo{
        background:  #FFFBBC;
;
        width: 40%;
        height: 70%;
        font-family: 'Montserrat', sans-serif;
        font-size: 18px;
        text-align: center;
        padding: 33px;
        min-height: 250px;
        border-radius: 60px;
        
        box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.219);
    }
    h1 {
        color:#0053AE;
    }
    h2 {
        color:#0053AE;
    }
    h3{
        color:black;
    }
    h4{
        color:black;
    }
    h5{
        color:black;
    }
    h6{
        color:black;
    }
    p{
        color: black;
    }
    .btn-dark2{
       margin: 1%; 
       background-color: #414aff; 
       border: none; 
       border-radius: 30px;
       font-family: 'Montserrat', sans-serif; 
       padding: 3%;
       color: black;
    }
    .btn-dark2:hover{
        background-color: #78ccac;
        color: black;
    }
    .header{
        display: flex;
        justify-content: space-between;
        margin-bottom: 5%;
    }
    .datos{
        color:#ffffff;
    }
    .logos{
        margin-left: 40%;
    }
    h6{
        margin-bottom: 7%;
    }
    h5{
        font-family: 'Righteous';
    }
    #boton2{
        left:10%;
    }
    .botones{
        padding-top: 25px;
        display: flex;
        justify-content: space-between;
      
    }
     .vor{
            border: solid 5px black;
        }
        #perfil {
        height: 350px;
        }
          #otracosa {
        height: 350px;
        }
           #controles {
        height: 350px;
        }
        #autores {
        height: 350px;
        }
        
        /*** ESTILOS BOTÓN GROW BOX ***/
.ov-btn-grow-box {
  background: rgb(0, 0, 0); /* color de fondo */
  color: #4741d7; /* color de fuente */
  border: 2px solid #4741d7; /* tamaño y color de borde */
  padding: 16px 20px;
  border-radius: 3px; /* redondear bordes */
  position: relative;
  z-index: 1;
  overflow: hidden;
  display: inline-block;
}
.ov-btn-grow-box:hover {
  color: #fff;/* color de fuente hover */
}
.ov-btn-grow-box::after {
  content: "";
  background: #4741d7; /* color de fondo hover */
  position: absolute;
  z-index: -1;
  padding: 16px 20px;
  display: block;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  transform: scale(0, 0);
  transition: all 0.3s ease;
}
.ov-btn-grow-box:hover::after {
  transition: all 0.3s ease-out;
  transform: scale(1, 1);
}
  .hola{
      padding-top:30px;
      padding-bottom: 30px;
  }      
    
</style>