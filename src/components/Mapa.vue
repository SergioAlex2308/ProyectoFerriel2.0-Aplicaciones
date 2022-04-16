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
<<<<<<< HEAD
        
        <h1 class="principal-title">Ferriel 2.0</h1>
        <button v-if="FPest1 == false" @click="firstPerson">First person</button>
        <button v-if="FPest1" @click="mainView">Main view</button>
=======
      <h1 class="principal-title">Ferriel 2.0</h1>
      <!-- <button v-if="FPest1 == false" @click="FPEstacion1" class="buttonView">First person</button> -->
      <button v-if="FPest1" @click="mainView" class="buttonView">
        Main view
      </button>
      <button v-if="FPest2" @click="mainView" class="buttonView">
        Main view
      </button>
      <button v-if="FPest3" @click="mainView" class="buttonView">
        Main view
      </button>
      <button v-if="FPest4" @click="mainView" class="buttonView">
        Main view
      </button>
>>>>>>> ThreejsFuncionamiento
    </div>
    <div id="content">
      <div v-show="FPest1 == false" @click="FPEstacion1" class="point est1">
        <div class="label">Estacion Usaquén</div>
        <div class="marca"></div>
        <div class="nom-estacion">Información de las estaciones.</div>
      </div>
      <div v-show="FPest2 == false" @click="FPEstacion2" class="point est2">
        <div class="label">Estacion Chía</div>
        <div class="marca"></div>
        <div class="nom-estacion">Información de las estaciones.</div>
      </div>
      <div v-show="FPest3 == false" @click="FPEstacion3" class="point est3">
        <div class="label">Estacion Cajicá</div>
        <div class="marca"></div>
        <div class="nom-estacion">Información de las estaciones.</div>
      </div>
      <div v-show="FPest4 == false" @click="FPEstacion4" class="point est4">
        <div class="label">Estacion Zipaquirá</div>
        <div class="marca"></div>
        <div class="nom-estacion">Información de las estaciones.</div>
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
//import Stats from 'stats.js'
import { TWEEN } from "three/examples/jsm/libs/tween.module.min.js";
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls";
import { Octree } from "three/examples/jsm/math/Octree";
//import { OctreeHelper } from 'three/examples/jsm/helpers/OctreeHelper';
import { Capsule } from "three/examples/jsm/math/Capsule";

import InfoBoton from './InfoBoton.vue';

export default {
  name: "MapaEstaciones",
<<<<<<< HEAD
  components: {
    InfoBoton
 
  },
=======
  components: {},
>>>>>>> ThreejsFuncionamiento
  data() {
    return {
      container: null,
      scene: null,
      camera: null,
      controls: null,
      renderer: null,
      stats: null,
      raycaster: null,
      MainTarget: null,
      MainPosition: null,
      points: [], //PuntosEstaciones
      point: null,
      FPest1: false,
      FPest2: false,
      FPest3: false,
      FPest4: false,
      pControls: null, //FirstPerson
      onViewFP: false,
      moveForward: false,
      moveBackward: false,
      moveLeft: false,
      moveRight: false,
      prevTime: performance.now(),
      velocity: new THREE.Vector3(),
      direction: new THREE.Vector3(),
      worldOctree: new Octree(), //Collition
      playerCollider: new Capsule(
        new THREE.Vector3(0, 0.35, 0),
        new THREE.Vector3(0, 1, 0),
        0.35
      ),
      playerVelocity: new THREE.Vector3(),
      playerDirection: new THREE.Vector3(),
      mouseTime: 0,
      keyStates: {},
      deltaTime: null,
      STEPS: 2,
      vector1: new THREE.Vector3(),
      vector2: new THREE.Vector3(),
      vector3: new THREE.Vector3(),
      clock: new THREE.Clock(),
      GRAVITY: 30,
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
      this.camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
      this.camera.position.x = 0;
      this.camera.position.y = 8;
      this.camera.position.z = 0;

      this.MainPosition = new THREE.Vector3();
      this.MainPosition.copy(this.camera.position);

      this.camera.rotation.order = "YXZ";

      // create scene
      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color("skyblue");
      this.scene.fog = new THREE.Fog(0xcbe9fc, 0, 20);

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
      /* const loader02 = new GLTFLoader().setPath("/Models/");
      const loader03 = new GLTFLoader().setPath("/Models/");
      const loader04 = new GLTFLoader().setPath("/Models/"); */
      //const loader05 = new GLTFLoader().setPath( '/Models/' );

      loader01.load(
        "Zipaquira02.glb",
        (gltf) => {
          this.mesh = gltf;
          this.mesh.scene.position.x = 0;
          this.mesh.scene.position.y = 0;
          this.mesh.scene.position.z = 0;
          this.scene.add(gltf.scene);
          this.worldOctree.fromGraphNode(gltf.scene);

          /* const helper = new OctreeHelper( this.worldOctree );
          helper.visible = false;
          this.scene.add( helper ); */
          this.animate();
        },
        undefined,
        undefined
      );
      /* loader02.load(
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
      ); */

      /* loader05.load( 'CollisionWorld.glb', ( gltf ) => {

				this.scene.add( gltf.scene );

				this.worldOctree.fromGraphNode( gltf.scene );

				//Shadows
				gltf.scene.traverse( child => {

					if ( child.isMesh ) {

						child.castShadow = true;
						child.receiveShadow = true;

						if ( child.material.map ) {

							child.material.map.anisotropy = 4;

						}

					}

				} );

				const helper = new OctreeHelper( this.worldOctree );
				helper.visible = false;
				this.scene.add( helper );

			} ); */

      this.color = new THREE.Color();
      this.white = new THREE.Color().setHex(0xffffff);

      //Add geometry
      var geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
      var material = new THREE.MeshLambertMaterial({
        color: Math.random() * 0xffffff,
      });

      var cube = new THREE.Mesh(geometry, material);
      cube.position.x = 2;
      cube.position.y = 0.5;
      cube.position.z = 0;
      this.scene.add(cube);

      console.log("Vista", this.onViewFP);
      
      // add Orbitcontrols
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);

      // add pointerControl
      this.pControls = new PointerLockControls(
        this.camera,
        this.renderer.domElement
      );

      if (!this.onViewFP) {
        this.controls.autoRotate = true;
        this.controls.autoRotateSpeed = 1;
        this.controls.rotateSpeed = 0.3;
        this.controls.enableZoom = false;
        this.controls.enablePan = false;
        this.controls.maxPolarAngle = Math.PI / 3;
        this.controls.minPolarAngle = Math.PI / 6;
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.1;
        this.controls.screenSpacePanning = false;
        this.MainTarget = new THREE.Vector3(0, 0, 0);
        this.controls.target.copy(this.MainTarget);
        //controls.minAzimuthAngle = Math.PI/4;
        //controls.maxAzimuthAngle = Math.PI/4;
      }

      this.raycaster = new THREE.Raycaster();
      this.points = [
        {
          position: new THREE.Vector3(2, 0.8, 0),
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
        },
      ];

      //Collition
      this.worldOctree = new Octree();
      this.playerCollider = new Capsule(
        new THREE.Vector3(0, 0.35, 0),
        new THREE.Vector3(0, 1, 0),
        0.35
      );

      window.addEventListener("resize", this.onWindowResize);

      /* window.addEventListener( 'keydown', this.onKeyDown);
      window.addEventListener( 'keyup', this.onkeyUp); */
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
        } else {
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
        const translateY =
          -screenPosition.y * this.container.clientHeight * 0.5;
        this.point.element.style.transform = `translate(${translateX}px, ${translateY}px)`;
      }
    },
    FPEstacion1() {
      /* console.log("Camaracopy", CameraPosition);
        console.log("CamaraMain", this.camera.position.x) */
      let PosEst1 = new THREE.Vector3(2, 0.5, 0);
      let aniEst1 = new TWEEN.Tween(this.camera.position)
        .to(PosEst1, 3000)
        .easing(TWEEN.Easing.Quadratic.InOut);
      aniEst1.start();

      this.firstPerson();

      this.FPest1 = true;
      this.FPest2 = false;
      this.FPest3 = false;
      this.FPest4 = false;

      this.onViewFP = true;
      //console.log("Primera", this.onViewFP)
    },
    FPEstacion2() {
      /* console.log("Camaracopy", CameraPosition);
        console.log("CamaraMain", this.camera.position.x) */

      let PosEst2 = new THREE.Vector3(-2, 1, 0);
      let aniEst2 = new TWEEN.Tween(this.camera.position)
        .to(PosEst2, 3000)
        .easing(TWEEN.Easing.Quadratic.InOut);
      aniEst2.start();
      this.FPest1 = false;
      this.FPest2 = true;
      this.FPest3 = false;
      this.FPest4 = false;

      this.onViewFP = true;
      //console.log("Primera", this.onViewFP)
    },
    FPEstacion3() {
      /* console.log("Camaracopy", CameraPosition);
        console.log("CamaraMain", this.camera.position.x) */
      let PosEst3 = new THREE.Vector3(2, 1, 6);
      let aniEst3 = new TWEEN.Tween(this.camera.position)
        .to(PosEst3, 3000)
        .easing(TWEEN.Easing.Quadratic.InOut);
      aniEst3.start();

      this.FPest1 = false;
      this.FPest2 = false;
      this.FPest3 = true;
      this.FPest4 = false;

      this.onViewFP = true;
      //console.log("Primera", this.onViewFP)
    },
    FPEstacion4() {
      /* console.log("Camaracopy", CameraPosition);
        console.log("CamaraMain", this.camera.position.x) */
      let PosEst4 = new THREE.Vector3(-2, 1, 6);
      let aniEst4 = new TWEEN.Tween(this.camera.position)
        .to(PosEst4, 3000)
        .easing(TWEEN.Easing.Quadratic.InOut);
      aniEst4.start();
      this.FPest1 = false;
      this.FPest2 = false;
      this.FPest3 = false;
      this.FPest4 = true;

      this.onViewFP = true;
      //console.log("Primera", this.onViewFP)
    },
    mainView() {
      let aniMain = new TWEEN.Tween(this.camera.position)
        .to(this.MainPosition, 3000)
        .easing(TWEEN.Easing.Quadratic.InOut);
      aniMain.start();
      
      this.FPest1 = false;
      this.onViewFP = false;
      
      console.log("Main", this.onViewFP);
    },
    firstPerson() {
      /* this.container.addEventListener('contextmenu', e => {
        e.preventDefault();
        document.body.requestPointerLock();
        this.pControls.lock();
      }); */
      
      this.container.addEventListener("mousedown", () => {
        document.body.requestPointerLock();
        this.pControls.lock();
        this.mouseTime = performance.now();
      });

      document.addEventListener("keydown", (event) => {
        this.keyStates[event.code] = true;
      });
      document.addEventListener("keyup", (event) => {
        this.keyStates[event.code] = false;
      });

      /* document.body.addEventListener("mousemove", (event) => {
        if (document.pointerLockElement === document.body) {
          this.camera.rotation.y -= event.movementX / 500;
          this.camera.rotation.x -= event.movementY / 500;
        }
      }); */
    },
    /* onKeyDown ( event )
    {
        switch ( event.code ) 
        {

            case 'ArrowUp':
            case 'KeyW':
                this.moveForward = true;
                break;

            case 'ArrowLeft':
            case 'KeyA':
                this.moveLeft = true;
                break;

            case 'ArrowDown':
            case 'KeyS':
                this.moveBackward = true;
                break;

            case 'ArrowRight':
            case 'KeyD':
                this.moveRight = true;
                break;
		}
    },
    onkeyUp(event) 
    {
        switch ( event.code ) 
        {

            case 'ArrowUp':
            case 'KeyW':
                this.moveForward = false;
                break;

            case 'ArrowLeft':
            case 'KeyA':
                this.moveLeft = false;
                break;

            case 'ArrowDown':
            case 'KeyS':
                this.moveBackward = false;
                break;

            case 'ArrowRight':
            case 'KeyD':
                this.moveRight = false;
                break;
		}
    },
    Move () 
    {
        const time = performance.now();

        const delta = (time - this.prevTime)/1000;

        this.velocity.x -=this.velocity.x * 10.0 * delta;
        this.velocity.z -=this.velocity.z * 10.0 * delta;

        this.direction.z = Number( this.moveForward )- Number( this.moveBackward);
        this.direction.x = Number( this.moveRight ) - Number( this.moveLeft );
        this.direction.normalize();

        if(this.moveForward || this.moveBackward) this.velocity.z -=this.direction.z * 20.0 * delta;
        if(this.moveLeft || this.moveRight ) this.velocity.x -= this.direction.x * 20.0 * delta;

        this.pControls.moveRight( - this.velocity.x *delta);
        this.pControls.moveForward( - this.velocity.z * delta);

        this.prevTime = time;
    }, */
    playerCollisions() {
      const result = this.worldOctree.capsuleIntersect(this.playerCollider);

      this.playerOnFloor = false;

      if (result) {
        this.playerOnFloor = result.normal.y > 0;

        if (!this.playerOnFloor) {
          this.playerVelocity.addScaledVector(
            result.normal,
            -result.normal.dot(this.playerVelocity)
          );
        }

        this.playerCollider.translate(
          result.normal.multiplyScalar(result.depth)
        );
      }
    },
    updatePlayer(deltaTime) {
      let damping = Math.exp(-4 * deltaTime) - 1;

      if (!this.playerOnFloor) {
        this.playerVelocity.y -= this.GRAVITY * deltaTime;

        // small air resistance
        damping *= 0.1;
      }

      this.playerVelocity.addScaledVector(this.playerVelocity, damping);

      const deltaPosition = this.playerVelocity
        .clone()
        .multiplyScalar(deltaTime);
      this.playerCollider.translate(deltaPosition);

      this.playerCollisions();

      this.camera.position.copy(this.playerCollider.end);
    },
    getForwardVector() {
      this.camera.getWorldDirection(this.playerDirection);
      this.playerDirection.y = 0;
      this.playerDirection.normalize();

      return this.playerDirection;
    },
    getSideVector() {
      this.camera.getWorldDirection(this.playerDirection);
      this.playerDirection.y = 0;
      this.playerDirection.normalize();
      this.playerDirection.cross(this.camera.up);

      return this.playerDirection;
    },
    controlsMove(deltaTime) {
      // gives a bit of air control
      //const speedDelta = deltaTime * ( this.playerOnFloor ? 25 : 8 );
      const speedDelta = deltaTime * 25;

      if (this.keyStates["KeyW"]) {
        //this.playerVelocity.add( this.getForwardVector().multiplyScalar( speedDelta ) );
        this.playerVelocity.add(
          this.getForwardVector().multiplyScalar(speedDelta)
        );
      }

      if (this.keyStates["KeyS"]) {
        this.playerVelocity.add(
          this.getForwardVector().multiplyScalar(-speedDelta)
        );
      }

      if (this.keyStates["KeyA"]) {
        this.playerVelocity.add(
          this.getSideVector().multiplyScalar(-speedDelta)
        );
      }

      if (this.keyStates["KeyD"]) {
        this.playerVelocity.add(
          this.getSideVector().multiplyScalar(speedDelta)
        );
      }

      if ( this.playerOnFloor ) {

				if ( this.keyStates[ 'Space' ] ) {

					this.playerVelocity.y = 15;
				}
			}
    },
    teleportPlayerIfOob() {
      if (this.camera.position.y <= -25) {
        this.playerCollider.start.set(0, 0.35, 0);
        this.playerCollider.end.set(0, 1, 0);
        this.playerCollider.radius = 0.35;
        this.camera.position.copy(this.playerCollider.end);
        this.camera.rotation.set(0, 0, 0);
      }
    },
    animate() {
      if (this.onViewFP) {
        //this.Move();
        this.deltaTime = Math.min(0.05, this.clock.getDelta()) / this.STEPS;

        for (let i = 0; i < this.STEPS; i++) {
          
          this.controlsMove(this.deltaTime);
          this.updatePlayer(this.deltaTime);
          this.teleportPlayerIfOob();
        }
      } else {
        this.controls.update();
      }

      TWEEN.update();
      this.contentPoints();
      this.render();
      //this.stats.update();

      requestAnimationFrame(this.animate);
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
    },
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



