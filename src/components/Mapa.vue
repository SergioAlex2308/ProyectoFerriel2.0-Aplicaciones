<template>
  <div id="scene-container" ref="sceneContainer">
    <div id="header">
        <h1 class="principal-title">Ferriel 2.0</h1>
        <!-- <button v-if="FPest1 == false" @click="FPEstacion1" class="buttonView">First person</button> -->
        <button v-if="FPest1" @click="mainView" class="buttonView">Main view</button>
    </div>
    <div id="content">
        <div v-show="FPest1 == false" @click="FPEstacion1" class="point est1">
            <div class="label">Estacion Usaquén</div>
            <div class="marca"></div>
            <div class="nom-estacion">
                Información de las estaciones.
            </div>
        </div>
        <div v-show="FPest1 == false" @click="FPEstacion1" class="point est2">
            <div class="label">Estacion Chía</div>
            <div class="marca"></div>
            <div class="nom-estacion">
                Información de las estaciones.
            </div>
        </div>
        <div v-show="FPest1 == false" @click="FPEstacion1" class="point est3">
            <div class="label">Estacion Cajicá</div>
            <div class="marca"></div>
            <div class="nom-estacion">
                Información de las estaciones.
            </div>
        </div>
        <div v-show="FPest1 == false" @click="FPEstacion1" class="point est4">
            <div class="label">Estacion Zipaquirá</div>
            <div class="marca"></div>
            <div class="nom-estacion">
                Información de las estaciones.
            </div>
        </div>
    </div>
    <div id="footer"></div>
  </div>
</template>

<script>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
//import Stats from 'stats.js'
import { TWEEN }  from "three/examples/jsm/libs/tween.module.min.js"
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls'

//import ButtonP from '@/components/Button.vue'

export default {
  name: "MapaEstaciones",
  components: {
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
      direction: new THREE.Vector3()
    };
  },
  methods: {
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
      this.camera.position.z = 10;

      this.MainPosition = new THREE.Vector3();
      this.MainPosition.copy(this.camera.position);

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

      console.log("Vista", this.onViewFP)
      // add Orbitcontrols
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      // add pointerControl
      this.pControls = new PointerLockControls(this.camera, this.renderer.domElement);
      if(this.onViewFP)
      {
        this.firstPerson();
      }
      else
      {
        
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
        this.MainTarget = new THREE.Vector3(2, 0, 2);
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
        }
      ];
      window.addEventListener("resize", this.onWindowResize);

      window.addEventListener( 'keydown', this.onKeyDown);
      window.addEventListener( 'keyup', this.onkeyUp);
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
        this.point.element.style.transform = `translate(${translateX}px, ${translateY}px)`;
      }
    },
    FPEstacion1()
    {
        /* console.log("Camaracopy", CameraPosition);
        console.log("CamaraMain", this.camera.position.x) */
        let PosEst1 = new THREE.Vector3(2, 1, 0);
        let aniEst1 = new TWEEN.Tween(this.camera.position)
        .to(PosEst1, 3000)
        .easing(TWEEN.Easing.Quadratic.InOut);
        aniEst1.start();
        this.FPest1 = true;
        this.onViewFP = true;
        console.log("Primera", this.onViewFP)
    },
    mainView()
    {
      let aniMain = new TWEEN.Tween(this.camera.position)
      .to(this.MainPosition, 3000)
      .easing(TWEEN.Easing.Quadratic.InOut);
      aniMain.start();
      this.FPest1 = false;
      this.onViewFP = false;
      console.log("Main", this.onViewFP)
    },
    firstPerson()
    {
      this.container.addEventListener('contextmenu', e => {
        e.preventDefault();
        document.body.requestPointerLock();
        this.pControls.lock();
      });
    },
    onKeyDown ( event )
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
    },
    animate() {
      requestAnimationFrame(this.animate);
      if (this.onViewFP) {
        this.Move();
      } else {
        this.controls.update();
      }
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

<style src="../assets/Styles/style_Mapa.css"></style>