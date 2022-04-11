<template>

  <div id="scene-container" ref="sceneContainer">
     <div class="informacion" id="informacionID" style="z-index=100">
          <info-boton/>
    </div> 
     <div class="imagen"  style="position:absolute">
        <button id=gabs; style="border:none; "  >     
        </button>
         <img alt="Logo" style="width:10%; display:block; margin-left: 85%;" src="../assets/imagenes/LOGOFONDO.png" @click="mostrarinformacion()" >   
      </div>   
    <div id="header">
        
        <h1 class="principal-title">Ferriel 2.0</h1>
        <button v-if="FPest1 == false" @click="firstPerson">First person</button>
        <button v-if="FPest1" @click="mainView">Main view</button>
    </div>
    <div id="content">
        <div class="point est1">
            <div class="label">Estacion Usaquén</div>
            <div class="nom-estacion">
                Información de las estaciones.
            </div>
        </div>
        <div class="point est2">
            <div class="label">Estacion Chía</div>
            <div class="nom-estacion">
                Información de las estaciones.
            </div>
        </div>
        <div class="point est3">
            <div class="label">Estacion Cajicá</div>
            <div class="nom-estacion">
                Información de las estaciones.
            </div>
        </div>
        <div class="point est4">
            <div class="label">Estacion Zipaquirá</div>
            <div class="nom-estacion">
                Información de las estaciones.
            </div>
        </div>
    </div>
    <div id="footer">
       <img   src="../assets/imagenes/Controles.png">
    </div>
  </div>
</template>

<script>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
//import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js'
//import Stats from 'stats.js'
import { TWEEN }  from "three/examples/jsm/libs/tween.module.min.js"
//import { TWEEN } from "js/tweenjs.min.js"

import InfoBoton from './InfoBoton.vue';

export default {
  name: "MapaEstaciones",
  components: {
    InfoBoton
 
  },
  data() {
    return {
      container: null,
      scene: null,
      camera: null,
      controls: null,
      renderer: null,
      stats: null,
      raycaster: null,
      mouse: new THREE.Vector2(),
      points: [],
      point: null,
      FPest1: false
    };
  },
  methods: {
    mostrarinformacion(){
        var x = document.getElementById("informacionID");
        x.style.display="block";
        x.style.zIndex=100;
        console.log("funciona");
      },

    init() {
      // set container
      this.container = this.$refs.sceneContainer;

      // add stats
      /* this.stats = new Stats()
            this.container.appendChild(this.stats.dom) */

      // add camera
      const fov = 40; // Field of view
      const aspect = this.container.clientWidth / this.container.clientHeight;
      const near = 0.1; // the near clipping plane
      const far = 1000; // the far clipping plane
      const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
      camera.position.set(0, 5, 10);
      this.camera = camera;

      // create scene
      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color("skyblue");
      this.scene.fog = new THREE.Fog(0x8caad2, 0, 16);

      // add lights
      const ambientLight = new THREE.HemisphereLight(
        0xffffff, // bright sky color
        0x222222, // dim ground color
        0.5 // intensity
      );
      const mainLight = new THREE.DirectionalLight(0xffffff, 1.0);
      mainLight.position.set(10, 10, 10);
      this.scene.add(ambientLight, mainLight);

      /* const gridHelper = new THREE.GridHelper( 10, 50, 0x303030, 0x303030 );
            this.scene.add( gridHelper ); */

      // create renderer
      this.renderer = new THREE.WebGLRenderer({ antialias: true });
      this.renderer.setSize(
        this.container.clientWidth,
        this.container.clientHeight
      );
      this.renderer.setPixelRatio(window.devicePixelRatio);
      this.renderer.outputEncoding = THREE.sRGBEncoding;
      this.container.appendChild(this.renderer.domElement);

      //Load Model
      const loader01 = new GLTFLoader().setPath("/Models/");
      const loader02 = new GLTFLoader().setPath("/Models/");
      const loader03 = new GLTFLoader().setPath("/Models/");
      const loader04 = new GLTFLoader().setPath("/Models/");

      loader01.load(
        "City2.glb",
        (gltf) => {
          this.mesh = gltf;
          this.mesh.scene.position.x = 0;
          this.mesh.scene.position.y = 0;
          this.mesh.scene.position.z = 0;
          this.scene.add(gltf.scene);
        },
        undefined,
        undefined
      );
      loader02.load(
        "City2.glb",
        (gltf) => {
          this.mesh = gltf;
          this.mesh.scene.position.x = 4.5;
          this.mesh.scene.position.y = 0;
          this.mesh.scene.position.z = 0;
          this.scene.add(gltf.scene);
        },
        undefined,
        undefined
      );
      loader03.load(
        "City2.glb",
        (gltf) => {
          this.mesh = gltf;
          this.mesh.scene.position.x = 4.5;
          this.mesh.scene.position.y = 0;
          this.mesh.scene.position.z = 4.5;
          this.scene.add(gltf.scene);
        },
        undefined,
        undefined
      );
      loader04.load(
        "City2.glb",
        (gltf) => {
          this.mesh = gltf;
          this.mesh.scene.position.x = 0;
          this.mesh.scene.position.y = 0;
          this.mesh.scene.position.z = 4.5;
          this.scene.add(gltf.scene);
        },
        undefined,
        undefined
      );
      /* loader.load(
                'Train.glb',
                gltf => {
                    this.mesh = gltf;
                    this.mesh.scene.position.x = 0;
                    this.mesh.scene.position.y = 0;
                    this.mesh.scene.position.z = 0;
                    this.scene.add(gltf.scene)
                },
                undefined,
                undefined
            ) */

      this.color = new THREE.Color();
      this.white = new THREE.Color().setHex(0xffffff);

      //Add geometry
      var geometry = new THREE.BoxGeometry(2, 2, 2, 3, 3, 3);
      var material = new THREE.MeshLambertMaterial({
        color: Math.random() * 0xffffff,
      });

      var cube = new THREE.Mesh(geometry, material);
      cube.position.x = 0;
      cube.position.y = 0;
      cube.position.z = -8;
      /* this.scene.add(cube); */

      //Add Sphere
      var sphere = new THREE.Mesh(
        new THREE.SphereGeometry(2, 16, 0, Math.PI),
        material
      );
      sphere.position.x = 5;
      sphere.position.z = -8;
      /* this.scene.add(sphere); */

      //Add cone
      var cone = new THREE.Mesh(new THREE.ConeGeometry(0.5, 2, 8, 2), material);
      cone.position.x = -5;
      cone.position.z = -8;
      /* this.scene.add(cone); */

      this.group1 = new THREE.Object3D();
      this.group1.add(sphere);
      this.group1.add(cone);

      //Render Label
      /* this.labelRenderer = new CSS2DRenderer();
            this.labelRenderer.setSize( window.innerWidth, window.innerHeight );
            this.labelRenderer.domElement.style.position = 'absolute';
            this.labelRenderer.domElement.style.top = '0px';
            document.body.appendChild( this.labelRenderer.domElement ); */

      // add controls
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      this.controls.autoRotate = true;
      this.controls.minDistance = 5;
      this.controls.maxDistance = 12;
      //controls.enableRotate = false;
      this.controls.maxPolarAngle = Math.PI / 3;
      this.controls.minPolarAngle = Math.PI / 6;
      //controls.minAzimuthAngle = Math.PI/4;
      //controls.maxAzimuthAngle = Math.PI/4;
      this.controls.zoomSpeed = 1;
      this.controls.enableDamping = true;
      this.controls.screenSpacePanning = false;

      //Label name
      /* const nameEstation01 = document.createElement( 'div' );
            nameEstation01.className = 'label';
            nameEstation01.textContent = 'Estacion 01';
            const nameLabel01 = new CSS2DObject( nameEstation01 );
            nameLabel01.position.set(0, 1, 0);
            nameLabel01.addEventListener("click", this.pop)
            sphere.add( nameLabel01 );

            const nameEstation02 = document.createElement( 'div' );
            nameEstation02.className = 'label';
            nameEstation02.textContent = 'Estacion 02';
            const nameLabel02 = new CSS2DObject( nameEstation02 );
            nameLabel02.position.set(0, 1, 0);
            nameLabel02.addEventListener("click", this.pop)
            cone.add( nameLabel02 );

            const nameEstation03 = document.createElement( 'div' );
            nameEstation03.className = 'label';
            nameEstation03.textContent = 'Estacion 03';
            const nameLabel03 = new CSS2DObject( nameEstation03 );
            nameLabel03.position.set(0, 1, 0);
            nameLabel03.addEventListener("click", this.pop)
            cube.add( nameLabel03 ); */

      this.raycaster = new THREE.Raycaster();
      this.points = [
        {
          position: new THREE.Vector3(2, 1, 0),
          element: document.querySelector(".est1"),
        },
        {
          position: new THREE.Vector3(-2, 1, 0),
          element: document.querySelector(".est2"),
        },
        {
          position: new THREE.Vector3(2, 1, 6),
          element: document.querySelector(".est3"),
        },
        {
          position: new THREE.Vector3(-2, 1, 6),
          element: document.querySelector(".est4"),
        }
      ];

      window.addEventListener("resize", this.onWindowResize);
      /* document.addEventListener("mousemove", this.onMouseMove); */
    },
    contentPoints() {
      for (this.point of this.points) {
        const screenPosition = this.point.position.clone();
        screenPosition.project(this.camera);

        this.raycaster.setFromCamera(screenPosition, this.camera);
        this.intersects = this.raycaster.intersectObjects(
          this.scene.children,
          true
        );
        if (this.intersects.length === 0) {
          this.point.element.classList.add("visible");
        } 
        else {
          const intersectionDistance = this.intersects[0].distance;
          const pointDistance = this.point.position.distanceTo(
            this.camera.position
          );
          if (intersectionDistance < pointDistance) {
            this.point.element.classList.remove("visible");
          } else {
            this.point.element.classList.add("visible");
          }
        }
        const translateX = screenPosition.x * this.container.clientWidth * 0.5;
        const translateY =-screenPosition.y * this.container.clientHeight * 0.5;
        //this.point.element.style.transform = `translateX(${translateX}px) translateY(${translateY}px)`;
        this.point.element.style.transform = `translate(${translateX}px, ${translateY}px)`;
      }
    },
    firstPerson()
    {
        let PosEst1 = new THREE.Vector3(0, 0, 0);
        let aniEst1 = new TWEEN.Tween(this.camera.position)
        .to(PosEst1, 2000)
        .easing(TWEEN.Easing.Cubic.InOut);
        aniEst1.start();
        this.FPest1 = true;
    },
    mainView()
    {
        let PosCam = new THREE.Vector3(0, 5, 10);
        let aniMain = new TWEEN.Tween(this.camera.position)
        .to(PosCam, 2000)
        .easing(TWEEN.Easing.Cubic.In);
        aniMain.start();
        this.FPest1 = false;
    },
    animate() {
      requestAnimationFrame(this.animate);
      this.controls.update();
      TWEEN.update();
      this.contentPoints();
      this.render();
      //this.stats.update();
    },
    onWindowResize() {
      // set aspect ratio to match the new browser window aspect ratio
      this.camera.aspect =
        this.container.clientWidth / this.container.clientHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(
        this.container.clientWidth,
        this.container.clientHeight
      );
      /* this.labelRenderer.setSize(this.container.clientWidth, this.container.clientHeight); */
    },
    /* onMouseMove(event) {
      //Set raycaster
      this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    }, */
    render() {
      this.renderer.render(this.scene, this.camera);
      /* this.labelRenderer.render(this.scene, this.camera) */
    },
  },
  mounted() {
    this.init();
    this.animate();
  },
};

</script>

<style scoped>
*
{
    margin: 0;
    padding: 0;
}

.imagen{
  
    width: 100%;
 

}

#scene-container {
    background-color:skyblue;
    width: 100%;
    height: 100%;
    position: fixed;
    outline: none;
    z-index: 1000;
}

.principal-title
{
    margin: 0;
    text-align: center;
    vertical-align: middle;
    left: 100%;
}
#gabs{
    background-color: red;
    z-index: 100;
}
#header
{
    position: absolute;
    top: 3em;
    left: 3em;
    width: 14em;
    height: 50em;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
 
}
#header h1
{
    height: 5%;
    margin: 10%;
    background-color: transparent;
    color: black;
    font-family: Helvetica, Arial, sans-serif;
    text-align: center;
    width: 100%;
    display: inline-block;
    
}
#content 
{
    z-index: 1;
}
 #footer 
{
    width:1%; 
    margin-left: 75%;
    position: relative;
    bottom: -48em;
} 
.point
{
    position: absolute;
    top: 50%;
    left: 50%;
}
.point .label {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 330px;
    height: 90px;
    padding: 10px;
    border-radius: 5%;
    background: rgba(255, 255, 255, 0.8);
    color: #000000;
    font-family: Helvetica, Arial, sans-serif;
    text-align: center;
    line-height: 40px;
    font-weight: 100;
    font-size: 40px;
    transform: scale(0, 0);
    transition: transform 0.3s;
}
.point 
{
    cursor: pointer;
}
.point .nom-estacion 
{
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 100px;
    left: 105px;
    width: 100px;
    padding: 20px;
    border-radius: 6px;
    background: #000000cb;
    color: #ffffff;
    line-height: 1.3em;
    font-family: Helvetica, Arial, sans-serif;
    font-weight: 100;
    font-size: 14px;
    opacity: 0;
    transition: opacity 0.3s;
    pointer-events: none;
}
.point:hover .nom-estacion
{
    opacity: 1;
    overflow: hidden;
}
.point.visible .label 
{
    transform: scale(0.5, 0.5);
}


</style>



