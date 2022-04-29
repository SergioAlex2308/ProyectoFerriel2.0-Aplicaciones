<template>
  <div id="scene-container" ref="sceneContainer">
    <espera-usuarios class="esperar" v-if="esperatime"> </espera-usuarios>
    <div class="btnInit" v-if="quitarboton">
      <a class="siguiboton" v-on:click="quitarespera()" v-if="quitarboton"
        >Iniciar</a
      >
    </div>

    <div id="header">
      <h1 id="principal-title" @click="ShowInfo()">Ferriel 2.0</h1>
      <div id="menuHelp" @click="HelpMenu()">
        <img
          class="iconHelp"
          src="../assets/Icons/Icons-Help.png"
          alt="IconoAyuda"
        />
      </div>
      <div id="ModalHelp" class="ModalControls">
        <div class="contentHelp">
          <div class="headerModal">
            <span class="close">&times;</span>
          </div>
          <div class="contentModal">
            <div class="titleHelp">
              <h2 class="NameMenu">Ayuda</h2>
            </div>
            <div class="textHelp">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                qui commodi neque sequi hic, asperiores, mollitia placeat
                quisquam expedita pariatur impedit omnis. Quod consequatur
                repellendus illum quaerat enim molestiae sint?
              </p>
            </div>
            <h3 class="titleControls">Controles en la vista aérea</h3>
            <div class="PictureControls">
              <div class="InstControls">
                <div class="invert">
                  <img src="../assets/Icons/Icons-Clic.png" alt="Icono Mouse" />
                </div>
                <p class="textControls">
                  Haz clic izquierdo y arrastra para mover la vista.
                </p>
              </div>
            </div>
            <h3 class="titleControls">
              Controles en la vista de primera persona
            </h3>
            <div class="PictureControls">
              <div class="InstControls">
                <div class="invert">
                  <img
                    src="../assets/Icons/Icons-Keys.png"
                    alt="Teclas de movimiento"
                  />
                </div>
                <p class="textControls">
                  Con las teclas A, W, S y D, te podras desplazar a través de
                  entorno.
                </p>
              </div>
              <div class="InstControls">
                <div class="invert">
                  <img
                    class="MouseClic"
                    src="../assets/Icons/Icons-Clic.png"
                    alt="Icono Mouse"
                  />
                </div>
                <p class="textControls">
                  Haz clic derecho para poder mover la cámara y mirar a tu
                  alrededor.
                </p>
              </div>
              <div class="InstControls">
                <div class="invert">
                  <img
                    src="../assets/Icons/Icons-Escape.png"
                    alt="Icono tecla escape"
                  />
                </div>
                <p class="textControls">
                  Cuando tenga el cursor bloqueado dale a la tecla de Escape
                  para liberarlo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button v-if="Fp" @click="mainView" class="buttonView">
        Volver a la vista aerea
      </button>
    </div>
    <div v-show="onViewFP == false" id="content">
      <div v-show="Fp == false" @click="FPEstacion1" class="point MapView-1">
        <div class="label">Estación de Zipaquirá</div>
        <div class="nom-estacion">
          Haz click para navegar en primera persona.
        </div>
      </div>
      <div v-show="Fp == false" @click="FPEstacion2" class="point MapView-2">
        <div class="label">Estación de Usaquén</div>
        <div class="nom-estacion">
          Haz click para navegar en primera persona.
        </div>
      </div>
      <div v-show="Fp == false" @click="FPEstacion3" class="point MapView-3">
        <div class="label">Estación de Cajicá</div>
        <div class="nom-estacion">
          Haz click para navegar en primera persona.
        </div>
      </div>
      <div v-show="Fp == false" @click="FPEstacion4" class="point MapView-4">
        <div class="label">Estación de Chía</div>
        <div class="nom-estacion">
          Haz click para navegar en primera persona.
        </div>
      </div>
    </div>
    <div id="content">
      <div id="MenuInfo">
        <Informacion />
      </div>
      <div v-show="onViewFP" class="pointObject ObjView-1">
        <div id="Obj-1" @click="ObjHistory1()" class="labelObject">1</div>
        <div class="infoObject">
          Haz click conocer la historia de este objecto.
        </div>
      </div>
      <div id="ModalObj-1" class="ModalObjects">
        <div class="contentObj">
          <div class="headerModal">
            <span class="closeObj">&times;</span>
          </div>
          <div class="contentModal">
            <div class="imageObject">
              <img
                class="PictureModal"
                src="../assets/Icons/Icons-Picture.png"
                alt="Fotografia Objeto"
              />
            </div>
            <div class="titleObj">
              <h1 class="NameObject">Nombre del objeto.</h1>
            </div>
            <div class="historyObjtext">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                qui commodi neque sequi hic, asperiores, mollitia placeat
                quisquam expedita pariatur impedit omnis. Quod consequatur
                repellendus illum quaerat enim molestiae sint?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-show="onViewFP == false" id="footer01">
      <div class="instView">
        <img
          class="Mouse"
          src="../assets/Icons/Icons-Clic.png"
          alt="Icono Mouse"
        />
        <p>Haz click y arrastra el ratón para mover la vista</p>
      </div>
    </div>
    <div v-show="onViewFP" id="footer02">
      <div class="instMove">
        <img
          class="Keys"
          src="../assets/Icons/Icons-Keys.png"
          alt="Teclas de movimiento"
        />
        <p>Presiona las teclas para desplazarte.</p>
      </div>
      <div class="instMoveCamera">
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
      <div class="instEsc">
        <img
          class="Escape"
          src="../assets/Icons/Icons-Escape.png"
          alt="Icono tecla escape"
        />
        <p>Presiona la tecla Escape para liberar el cursor.</p>
      </div>
    </div>
  </div>
</template>

<script>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Stats from "stats.js";
import { TWEEN } from "three/examples/jsm/libs/tween.module.min.js";
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls";
import { Octree } from "three/examples/jsm/math/Octree";
import { Capsule } from "three/examples/jsm/math/Capsule";
//import { OctreeHelper } from "three/examples/jsm/helpers/OctreeHelper";
//import { GUI } from "three/examples/jsm/libs/lil-gui.module.min.js";

import Informacion from "./InfoBoton.vue";
import EsperaUsuarios from "./EsperaUsuarios.vue";
export default {
  name: "MapaEstaciones",
  components: {
    Informacion,
    EsperaUsuarios,
  },
  data() {
    return {
      quitarboton: false,
      esperatime: true,
      mostrar: false,
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
      Fp: false,
      pointsObjects: [], //PuntosObjetos
      pointObject: null,
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
      STEPS: 5,
      vector1: new THREE.Vector3(),
      vector2: new THREE.Vector3(),
      vector3: new THREE.Vector3(),
      clock: new THREE.Clock(),
      GRAVITY: 30,
      mixer: null, //Animations
    };
  },
  methods: {
    init() {
      // set container
      this.container = this.$refs.sceneContainer;

      // add stats
      this.stats = new Stats();
      this.container.appendChild(this.stats.dom);

      // add camera
      const fov = 60; // Field of view
      const aspect = this.container.clientWidth / this.container.clientHeight;
      const near = 0.1; // the near clipping plane
      const far = 1000; // the far clipping plane
      this.camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
      this.camera.position.x = 20;
      this.camera.position.y = 40;
      this.camera.position.z = 0;

      this.MainPosition = new THREE.Vector3();
      this.MainPosition.copy(this.camera.position);

      this.MainRotation = new THREE.Vector3();
      this.MainRotation.copy(this.camera.rotation);

      this.camera.rotation.order = "YXZ";

      // create scene
      const nearFog = 60;
      const farFog = 80;
      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color("skyblue");
      this.scene.fog = new THREE.Fog(0xcbe9fc, nearFog, farFog);

      // add lights
      const ambientLight = new THREE.HemisphereLight(
        0xffffff, // bright sky color
        0x222222, // dim ground color
        0.5 // intensity
      );
      const mainLight = new THREE.DirectionalLight(0xffffff, 1.0);
      mainLight.position.set(10, 10, 10);
      mainLight.castShadow = true;
      mainLight.shadow.camera.top = 2;
      mainLight.shadow.camera.bottom = -2;
      mainLight.shadow.camera.left = -2;
      mainLight.shadow.camera.right = 2;
      mainLight.shadow.camera.near = 0.1;
      mainLight.shadow.camera.far = 40;
      this.scene.add(ambientLight, mainLight);

      /* const gridHelper = new THREE.GridHelper( 10, 50, 0x303030, 0x303030 );
            this.scene.add( gridHelper ); */

      /* const axesHelper = new THREE.AxesHelper(5);
      this.scene.add(axesHelper); */

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
      //const loader02 = new GLTFLoader().setPath("/Models/");
      const loader03 = new GLTFLoader().setPath("/Models/");
      //const loader04 = new GLTFLoader().setPath("/Models/");

      loader01.load(
        "ModeloColisiones.glb",
        (gltf) => {
          this.mesh = gltf;
          this.mesh.scene.position.x = 10;
          this.mesh.scene.position.y = -1;
          this.mesh.scene.position.z = 5;
          this.scene.add(gltf.scene);
          this.worldOctree.fromGraphNode(gltf.scene);
          if (this.mesh) {
            this.quitarboton = true;
            console.log("esta cargado");
          }
          /* this.mesh.traverse(function (node) {
          if (node.isMesh || node.isLight) node.castShadow = true;
          if (node.isMesh || node.isLight) node.receiveShadow = true;
        }); */
          this.animate();

          /* const helper = new OctreeHelper(this.worldOctree);
          helper.visible = false;
          this.scene.add(helper);

          const gui = new GUI({ width: 200 });
          gui.add({ debug: false }, "debug").onChange(function (value) {
            helper.visible = value;
          }); */
        },
        undefined,
        undefined
      );
      /* loader02.load(
        "Zipaquira05.glb",
        (gltf) => {
          this.mesh = gltf;
          this.mesh.scene.position.x = 12;
          this.mesh.scene.position.y = 0;
          this.mesh.scene.position.z = 0;
          this.scene.add(gltf.scene);
          this.worldOctree.fromGraphNode(gltf.scene);
          this.animate();
        },
        undefined,
        undefined
      ); */
      loader03.load(
        "Cloud01.glb",
        (gltf) => {
          this.model = gltf.scene;
          this.model.scale.set(2, 2, 2);
          this.scene.add(this.model);

          this.mixer = new THREE.AnimationMixer(this.model);
          this.mixer.clipAction(gltf.animations[0]).play();

          this.animate();
        },
        undefined,
        function (e) {
          console.error(e);
        }
      );
      /* loader04.load(
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

      this.color = new THREE.Color();
      this.white = new THREE.Color().setHex(0xffffff);

      //Add geometry
      var geometry = new THREE.BoxGeometry(0.5, 0.1, 0.5);
      var material = new THREE.MeshLambertMaterial({
        color: Math.random() * 0xffffff,
      });

      var cube1 = new THREE.Mesh(geometry, material);
      cube1.position.x = 0;
      cube1.position.y = -0.5;
      cube1.position.z = 0;
      this.scene.add(cube1);

      var cube2 = new THREE.Mesh(geometry, material);
      cube2.position.x = 25;
      cube2.position.y = -0.5;
      cube2.position.z = 0;
      this.scene.add(cube2);

      var cube3 = new THREE.Mesh(geometry, material);
      cube3.position.x = 0;
      cube3.position.y = -0.5;
      cube3.position.z = 25;
      this.scene.add(cube3);

      var cube4 = new THREE.Mesh(geometry, material);
      cube4.position.x = 25;
      cube4.position.y = -0.5;
      cube4.position.z = 25;
      this.scene.add(cube4);

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
          position: new THREE.Vector3(0, 0, 0),
          element: document.querySelector(".MapView-1"),
        },
        {
          position: new THREE.Vector3(25, 0, 0),
          element: document.querySelector(".MapView-2"),
        },
        {
          position: new THREE.Vector3(0, 0, 25),
          element: document.querySelector(".MapView-3"),
        },
        {
          position: new THREE.Vector3(25, 0, 25),
          element: document.querySelector(".MapView-4"),
        },
      ];
      this.pointsObjects = [
        {
          position: new THREE.Vector3(-3, 0.2, 1),
          element: document.querySelector(".ObjView-1"),
        },
      ];

      window.addEventListener("resize", this.onWindowResize);
    },
    ShowInfo() {
      var modal = document.getElementById("MenuInfo");
      var titleMenu = document.getElementById("principal-title");
      var span = document.getElementsByClassName("closeMenu")[0];

      titleMenu.onclick = function () {
        modal.style.display = "block";
      };
      span.onclick = function () {
        modal.style.display = "none";
      };
      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
    },
    quitarespera() {
      this.esperatime = false;
      this.quitarboton = false;
    },
    HelpMenu() {
      var modal = document.getElementById("ModalHelp");
      var help = document.getElementById("menuHelp");
      var span = document.getElementsByClassName("close")[0];

      help.onclick = function () {
        modal.style.display = "block";
      };
      span.onclick = function () {
        modal.style.display = "none";
      };
      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
    },
    ObjHistory1() {
      var modal = document.getElementById("ModalObj-1");
      var obj = document.getElementById("Obj-1");
      var span = document.getElementsByClassName("closeObj")[0];

      obj.onclick = function () {
        modal.style.display = "block";
      };
      span.onclick = function () {
        modal.style.display = "none";
      };
      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
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
    contentPointsObjects() {
      for (this.pointObject of this.pointsObjects) {
        const screenPosition = this.pointObject.position.clone();
        screenPosition.project(this.camera);

        this.raycaster.setFromCamera(screenPosition, this.camera);
        this.intersects = this.raycaster.intersectObjects(
          this.scene.children,
          true
        );
        if (this.intersects.length === 0) {
          this.pointObject.element.classList.add("visible");
        } else {
          const intersectionDistance = this.intersects[0].distance;
          const pointDistance = this.pointObject.position.distanceTo(
            this.camera.position
          );
          if (intersectionDistance < pointDistance) {
            this.pointObject.element.classList.remove("visible");
          } else {
            this.pointObject.element.classList.add("visible");
          }
        }
        const translateX = screenPosition.x * this.container.clientWidth * 0.5;
        const translateY =
          -screenPosition.y * this.container.clientHeight * 0.5;
        this.pointObject.element.style.transform = `translate(${translateX}px, ${translateY}px)`;
      }
    },
    FPEstacion1() {
      //Estacion de Zipaquirá
      this.MainPosition.copy(this.camera.position);
      this.MainRotation.copy(this.camera.rotation);
      const PosEst1 = new THREE.Vector3(0, 1, 0);
      const RotEst1 = new THREE.Vector3(0, 0, 0);

      this.playerCollider.translate(PosEst1);

      new TWEEN.Tween(this.camera.position)
        .to(PosEst1, 3000)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .start();

      new TWEEN.Tween(this.camera.rotation)
        .to(RotEst1, 3000)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .start();

      if (!this.onViewFP) {
        this.firstPerson();
      }
      this.Fp = true;
      this.onViewFP = true;
    },
    FPEstacion2() {
      //Estacion de Usaquén
      this.MainPosition.copy(this.camera.position);
      this.MainRotation.copy(this.camera.rotation);
      const PosEst2 = new THREE.Vector3(25, 1, 0);
      const RotEst2 = new THREE.Vector3(0, 0, 0);

      this.playerCollider.translate(PosEst2);

      new TWEEN.Tween(this.camera.position)
        .to(PosEst2, 3000)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .start();

      new TWEEN.Tween(this.camera.rotation)
        .to(RotEst2, 3000)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .start();

      if (!this.onViewFP) {
        this.firstPerson();
      }
      this.Fp = true;
      this.onViewFP = true;
    },
    FPEstacion3() {
      //Estacion de Cajicá
      this.MainPosition.copy(this.camera.position);
      this.MainRotation.copy(this.camera.rotation);
      const PosEst3 = new THREE.Vector3(0, 1, 25);
      const RotEst3 = new THREE.Vector3(0, 0, 0);

      this.playerCollider.translate(PosEst3);

      new TWEEN.Tween(this.camera.position)
        .to(PosEst3, 3000)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .start();

      new TWEEN.Tween(this.camera.rotation)
        .to(RotEst3, 3000)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .start();

      if (!this.onViewFP) {
        this.firstPerson();
      }
      this.Fp = true;
      this.onViewFP = true;
    },
    FPEstacion4() {
      //Estacion de Chía
      this.MainPosition.copy(this.camera.position);
      this.MainRotation.copy(this.camera.rotation);
      const PosEst4 = new THREE.Vector3(25, 1, 25);
      const RotEst4 = new THREE.Vector3(0, 0, 0);

      this.playerCollider.translate(PosEst4);

      new TWEEN.Tween(this.camera.position)
        .to(PosEst4, 3000)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .start();

      new TWEEN.Tween(this.camera.rotation)
        .to(RotEst4, 3000)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .start();

      if (!this.onViewFP) {
        this.firstPerson();
      }
      this.Fp = true;
      this.onViewFP = true;
    },
    mainView() {
      this.controls.enabled = true;
      this.pControls.enabled = false;

      this.playerCollider.start.set(0, 0.35, 0);
      this.playerCollider.end.set(0, 1, 0);
      this.playerCollider.radius = 0.35;

      new TWEEN.Tween(this.camera.position)
        .to(this.MainPosition, 3000)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .start();

      new TWEEN.Tween(this.camera.rotation)
        .to(this.MainRotation, 3000)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .start();

      this.Fp = false;
      this.onViewFP = false;
    },
    firstPerson() {
      this.controls.enabled = false;
      this.pControls.enabled = true;

      this.onViewFP = true;

      this.container.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        //document.body.requestPointerLock();
        this.pControls.lock();
        this.pControls.connect();
      });
      document.addEventListener("keydown", (event) => {
        this.keyStates[event.code] = true;
      });
      document.addEventListener("keyup", (event) => {
        this.keyStates[event.code] = false;
      });
    },
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
        damping *= 0.3;
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

      if (this.playerOnFloor) {
        if (this.keyStates["Space"]) {
          this.playerVelocity.y = 10;
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
        this.deltaTime = Math.min(0.05, this.clock.getDelta()) / this.STEPS;

        for (let i = 0; i < this.STEPS; i++) {
          this.controlsMove(this.deltaTime);
          this.updatePlayer(this.deltaTime);
          this.teleportPlayerIfOob();
        }
      } else {
        this.controls.update();
      }
      /* console.log("x", this.playerCollider.end.x);
      console.log("y", this.playerCollider.end.y);
      console.log("z", this.playerCollider.end.z); */

      const d = this.clock.getDelta();
      this.mixer.update(d);

      TWEEN.update();
      this.contentPoints();
      this.contentPointsObjects();
      this.render();
      requestAnimationFrame(this.animate);
      this.stats.update();
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
    },
  },
  mounted() {
    this.init();
    this.animate();
  },
};
</script>
<style src="../assets/Styles/style_Mapa.css"></style>



