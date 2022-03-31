<template>
<div class="modal-backdrop">
    <div class="todo">
        <header class="header">
            <div class="logos" >
                    <img alt="Logo" style="width:150px; display:block" src="../assets/imagenes/LOGOFONDO.png"> 
            </div>
     
            <div class="cerrar">
                <button type="button" class="btn-close" @click="cerrarinformacion()">
                </button>
            </div>
        </header>
        <div class="datos" style="display:block" id="autores">
            
            <h5>Product Manager</h5>
            <h6>Jhon Sebastian Martínez Orjuela</h6>
          
            <h5>Development Team</h5> 
            <h6> Sergio Alexander Martínez Cardenas <br>
            David Ernesto Arguello Mosquera <br>
            Guillermo Andres Diaz Moreno<br>
           
            </h6>

            <div class="universidad" style="font-size: 13px;"> 
                UMNG<br>
                Proyecto Ferriel 2022
            </div>
            
        </div>
     
        <div class="boton">
            <button class="btn-dark"  id="boton1" style="display:block;background-color: transparent; border:none"
                type="submit" @click="informacion()">
                   <img alt="Logo" style="width:80px" src="../assets/imagenes/atras.png"> 
            </button>
        </div>
        <div class="boton">
            <button class="btn-dark" id="boton2" style="display:none; background-color: transparent;border:none"
                type="submit" @click="informacion2()">
                   <img alt="Logo" style="width:80px" src="../assets/imagenes/Adela.png"> 
            </button>
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
        x.style.zIndex=100;
        },
        informacion:function() {
            var x = document.getElementById("autores");            
            var y = document.getElementById("boton1");
            var w = document.getElementById("boton2");
            var z = document.getElementById("perfil");
            x.style.display = "none";
            z.style.display = "block";
            y.style.display = "none";
            w.style.display = "block";
        },
        informacion2:function() {
             var x = document.getElementById("autores");            
            var y = document.getElementById("boton1");
            var w = document.getElementById("boton2");
            var z = document.getElementById("perfil");
            x.style.display = "block";
            z.style.display = "none";
            y.style.display = "block";
            w.style.display = "none";
        },
    }
}
</script>

<style scoped>
    .modal-backdrop {
        display: flex;
        justify-content: center;
        align-items: center;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.6);
    }
    .todo{
        background: #eb6c6c8a;
        width: 40%;
        font-family: 'Montserrat', sans-serif;
        font-size: 18px;
        text-align: center;
        padding: 33px;
        min-height: 250px;
        border-radius: 60px;
        box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.219);
    }
    .btn-dark2{
       margin: 1%; 
       background-color: #414aff; 
       border: none; 
       border-radius: 30px;
       font-family: 'Montserrat', sans-serif; 
       padding: 3%;
       color: white;
    }
    .btn-dark2:hover{
        background-color: #78ccac;
        color: white;
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
</style>