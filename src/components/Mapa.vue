<template>
  <div id="scene-container" ref="sceneContainer">
    <transition name="fade">
      <Carga class="loadPage" v-show="!loaded"></Carga>
    </transition>
    <Toggle :mode="mode" @toggle="$emit('toggle')" />
    <AeControls :View="onViewFP"></AeControls>
    <FpControls :ViewFp="onViewFP"></FpControls>
    <div id="title">
      <img id="logo" src="../assets/Images/logo.png" alt="Logo" />
      <!-- <h1 id="principal-title">Ferriel Web</h1> -->
    </div>

    <div id="header">
      <div id="menuIcon" @click="ShowInfo()">
        <div class="hamburIcon">
          <div class="lineIcon"></div>
          <div class="lineIcon"></div>
          <div class="lineIcon"></div>
        </div>
      </div>
      <div id="menuHelp" @click="HelpMenu()">
        <img
          class="iconHelp"
          src="../assets/Icons/Icons-Help.png"
          alt="IconoAyuda"
        />
      </div>
      <!-- <div id="ModalHelp" class="ModalControls">
        <div class="contentHelp">
          <div class="headerModal">
            <div class="boo">
              <button
                type="button"
                id="zoommin"
                class="btn btn-dark mr-1"
                @click="zoommin()"
              >
                Disminuir
              </button>
              <button
                type="button"
                id="zoommax"
                class="btn btn-dark mr-1"
                @click="zoommax()"
              >
                Aumentar
              </button>
            </div>
            <span class="close">&times;</span>
          </div>
          <div class="contentModal">
            <div id="zoomletra" class="titleHelp">
              <h2 class="NameMenu">Ayuda</h2>
            </div>
            <div id="zoomletra1" class="textHelp">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                qui commodi neque sequi hic, asperiores, mollitia placeat
                quisquam expedita pariatur impedit omnis. Quod consequatur
                repellendus illum quaerat enim molestiae sint?
              </p>
            </div>
            <h3 id="zoomletra2" class="titleControls">
              Controles en la vista aérea
            </h3>
            <div class="PictureControls">
              <div class="InstControls">
                <div class="invert">
                  <img src="../assets/Icons/Icons-Clic.png" alt="Icono Mouse" />
                </div>
                <p id="zoomletra3" class="textControls">
                  Haz clic izquierdo y arrastra para mover la vista.
                </p>
              </div>
            </div>
            <h3 id="zoomletra4" class="titleControls">
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
                <p id="zoomletra5" class="textControls">
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
                <p id="zoomletra6" class="textControls">
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
                <p id="zoomletra7" class="textControls">
                  Cuando tenga el cursor bloqueado dale a la tecla de Escape
                  para liberarlo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> -->
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
              <div class="InstControls">
                <div class="invert">
                  <img
                    src="../assets/Icons/Icons-Space.png"
                    alt="Icono tecla espacio"
                  />
                </div>
                <p class="textControls">
                  Para moverte mas rápido por el entorno puedes saltar y tomar
                  velocidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="MenuInfo">
        <Informacion />
      </div>
      <div id="TeamInfo">
        <div class="contentMenu darkmode">
          <div class="headerModal">
            <span class="closeTeam">&times;</span>
          </div>
          <div class="contentModal">
            <div class="titleTeam">
              <h1>Equipo Ferriel Web</h1>
            </div>
            <div class="teamMember">
              <div class="pictureTeam">
                <img
                  class="circular--square"
                  src="../assets/Icons/Icons-User.png"
                  width="100px"
                  alt="IconUser"
                />
              </div>
              <div class="infoMember">
                <div class="nameMember">
                  <h2>Jhon Sebastian Martínez Orjuela</h2>
                </div>
                <div class="rolMember">
                  <h6>Gerente de producto y desarrollador 3D</h6>
                </div>
              </div>
            </div>
            <div class="teamMember">
              <div class="pictureTeam">
                <img
                  class="circular--square"
                  src="../assets/Icons/Icons-User.png"
                  width="100px"
                  alt="IconUser"
                />
              </div>
              <div class="infoMember">
                <div class="nameMember">
                  <h2>Sergio Alexander Martínez Cardenas</h2>
                </div>
                <div class="rolMember">
                  <h6>Desarrollador BackEnd y FrontEnd</h6>
                </div>
              </div>
            </div>
            <div class="teamMember">
              <div class="pictureTeam">
                <img
                  class="circular--square"
                  src="../assets/Icons/Icons-User.png"
                  width="100px"
                  alt="IconUser"
                />
              </div>
              <div class="infoMember">
                <div class="nameMember">
                  <h2>David Ernesto Arguello Mosquera</h2>
                </div>
                <div class="rolMember">
                  <h6>Desarrollador 3D</h6>
                </div>
              </div>
            </div>
            <div class="teamMember">
              <div class="pictureTeam">
                <img
                  class="circular--square"
                  src="../assets/Icons/Icons-User.png"
                  width="100px"
                  alt="IconUser"
                />
              </div>
              <div class="infoMember">
                <div class="nameMember">
                  <h2>Guillermo Andres Diaz Moreno</h2>
                </div>
                <div class="rolMember">
                  <h6>Accesibilidad</h6>
                </div>
              </div>
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
        </div>
      </div>
      <button v-if="Fp" @click="mainView()" class="buttonView">
        Volver a la vista aérea
      </button>
    </div>
    <transition name="fade">
      <div v-show="onViewFP == false" id="content">
        <div
          v-show="Fp == false"
          @click="FPEstacion1()"
          class="point MapView-1"
        >
          <div class="label">Estación de Zipaquirá</div>
          <div class="nom-estacion">
            Haz click para navegar en primera persona.
          </div>
        </div>
        <div
          v-show="Fp == false"
          @click="FPEstacion2()"
          class="point MapView-2"
        >
          <div class="label">Estación de Usaquén</div>
          <div class="nom-estacion">
            Haz click para navegar en primera persona.
          </div>
        </div>
        <div
          v-show="Fp == false"
          @click="FPEstacion3()"
          class="point MapView-3"
        >
          <div class="label">Estación de Cajicá</div>
          <div class="nom-estacion">
            Haz click para navegar en primera persona.
          </div>
        </div>
        <div
          v-show="Fp == false"
          @click="FPEstacion4()"
          class="point MapView-4"
        >
          <div class="label">Estación de Chía</div>
          <div class="nom-estacion">
            Haz click para navegar en primera persona.
          </div>
        </div>
      </div>
    </transition>
    <div id="contentObjs">
      <div class="pointer">
        <div v-show="onViewFP" id="cross"></div>
      </div>

      <!-- Info Obcject -->
      <div v-show="onViewFP" id="Modal-1" class="ModalObjects">
        <div class="contentObj">
          <div class="contentModal">
            <div class="imageObject">
              <img
                class="PictureModal"
                src="../assets/Images/MaquinaRoyal.jpg"
                alt="Fotografia Objeto"
              />
            </div>
            <div class="titleObj">
              <h1 class="NameObject">Máquina de escribir</h1>
            </div>
            <div class="historyObjtext">
              <p>
                Las máquinas de escribir se utilizaban en gran medida en las
                estaciones para evitar la documentación a mano y mantener un
                registro constante de los pasajeros y productos que circulaban
                por cada estación.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div v-show="onViewFP" id="Modal-2" class="ModalObjects">
        <div class="contentObj">
          <div class="contentModal">
            <div class="imageObject">
              <img
                class="PictureModal"
                src="../assets/Images/Telegrafo.jpg"
                alt="Fotografia Objeto"
              />
            </div>
            <div class="titleObj">
              <h1 class="NameObject">Télegrafo</h1>
            </div>
            <div class="historyObjtext">
              <p>
                Utilizado para mantener la comunicación a larga distancia entre
                estaciones y otras empresas relacionadas con la vía ferrovial,
                remplazado años más tarde por el teléfono.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div v-show="onViewFP" id="Modal-3" class="ModalObjects">
        <div class="contentObj">
          <div class="contentModal">
            <div class="imageObject">
              <img
                class="PictureModal"
                src="../assets/Images/Perforador.jpg"
                alt="Fotografia Objeto"
              />
            </div>
            <div class="titleObj">
              <h1 class="NameObject">Perforador de papel</h1>
            </div>
            <div class="historyObjtext">
              <p>
                Utilizado por los encargados de los pasajeros en los trenes para
                poder confirmar si un boleto fue utilizado previamente o no.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div v-show="onViewFP" id="Modal-4" class="ModalObjects">
        <div class="contentObj">
          <div class="contentModal">
            <div class="imageObject">
              <img
                class="PictureModal"
                src="../assets/Images/Vagoneta.png"
                alt="Fotografia Objeto"
              />
            </div>
            <div class="titleObj">
              <h1 class="NameObject">Vagoneta</h1>
            </div>
            <div class="historyObjtext">
              <p>
                Es un vagón pequeño que sirve para el transporte de mercancías,
                principalmente minerales, piedra, arena o materiales de
                construcción. También se usaba para transportar pequeños grupos
                de personas.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div v-show="onViewFP" id="Modal-5" class="ModalObjects">
        <div class="contentObj">
          <div class="contentModal">
            <div class="imageObject">
              <img
                class="PictureModal"
                src="../assets/Images/Telefono.png"
                alt="Fotografia Objeto"
              />
            </div>
            <div class="titleObj">
              <h1 class="NameObject">Télefono de campaña</h1>
            </div>
            <div class="historyObjtext">
              <p>
                Son teléfonos portátiles de uso militar, diseñados para soportar
                condiciones adversas.
                <br />
                Pueden alimentarse de su propia batería, desde una central
                telefónica o de una fuente de energía externa, estos eran
                utilizados por los operarios en las estaciones.
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- Info Station -->
      <div v-show="onViewFP" id="Modal-6" class="ModalStation">
        <div class="contentSta">
          <div class="contentModal">
            <div class="imageStation">
              <img
                class="PictureModal"
                src="../assets/Images/Zipaquira01.jpg"
                alt="Fotografia Objeto"
              />
            </div>
            <div class="titleSta">
              <h1 class="NameStation">Estación de Zipaquirá</h1>
            </div>
            <div class="historyStation">
              <p>
                En 1926 mientras el General Pedro Nel Ospina era presidente de
                la República, comenzó la construcción con un estilo neoclásico
                francés de la edificación conocida como la estación Tres
                Esquinas, parte del trayecto hacia el norte del Ferrocarril de
                la Sabana; el 8 de diciembre de 1927, fue inaugurada con la
                presencia de varios funcionarios del Gobierno, con bombos y
                platillos, pues marcaba el punto de partida para el progreso de
                la ciudad.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div v-show="onViewFP" id="Modal-7" class="ModalStation">
        <div class="contentSta">
          <div class="contentModal">
            <div class="imageStation">
              <img
                class="PictureModal"
                src="../assets/Images/Usaquen02.jpg"
                alt="Fotografia Objeto"
              />
            </div>
            <div class="titleSta">
              <h1 class="NameStation">Estación de Usaquén</h1>
            </div>
            <div class="historyStation">
              <p>
                La estación del tren de Usaquén fue, con la estación de La
                Sabana, los principales centros de recepción de la Bogotá de
                antaño, cuando esta no tenía vías y el norte eran potreros.
                <br />
                El ferrocarril del nordeste llegó a la estación de Usaquén hacia
                1926 con el fin de comunicar los departamentos de Cundinamarca y
                Boyacá.
                <br />
                El proyecto del tren de la Sabana, terminado en 1953, tuvo en
                Bogotá estaciones principales como la de Chapinero, Calle 100,
                Fontibón, Bosa, entre otras, que a la postre determinaron la
                dirección en la que la capital se desarrolló.
                <br />
                Las únicas estaciones “sobrevivientes” son Usaquén y Sabana, las
                cuales son patrimonio histórico de cómo la ciudad olvidó este
                sistema vial para enfocarse en la construcción de vías y la
                implementación de los buses urbanos, que eran la moda en los
                años 50.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div v-show="onViewFP" id="Modal-8" class="ModalStation">
        <div class="contentSta">
          <div class="contentModal">
            <div class="imageStation">
              <img
                class="PictureModal"
                src="../assets/Images/Chia02.jpg"
                alt="Fotografia Objeto"
              />
            </div>
            <div class="titleSta">
              <h1 class="NameStation">Estación de Chía</h1>
            </div>
            <div class="historyStation">
              <p>
                La estación de La Caro fue una de las últimas líneas construidas
                en el año 1953. Se ubica en el municipio de Chía, a 33 KM de la
                ciudad de Bogotá, Cerca de una de las obras más importantes de
                la época colonial y que a la fecha sigue siendo un referente
                histórico y turístico, como lo es el Puente del Común y a 4.5 KM
                del Instituto Caro y Cuervo que es un centro colombiano de altos
                estudios en literatura, filología y lingüística del idioma
                castellano y las lenguas nativas del país, orientado a la
                investigación y a la divulgación de la cultura del libro y la
                lectura.
                <br />
                Su arquitectura es de estilo republicano, llamada así en memoria
                de Miguel Antonio Caro, político y escritor.
                <br />
                El Ferrocarril de la Sabana sirvió como base para la expansión
                de las vías férreas hacia el resto del país las cuales
                posteriormente se unieron bajo la administración de los
                Ferrocarriles Nacionales de Colombia.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div v-show="onViewFP" id="Modal-9" class="ModalStation">
        <div class="contentSta">
          <div class="contentModal">
            <div class="imageStation">
              <img
                class="PictureModal"
                src="../assets/Images/Cajica01.jpg"
                alt="Fotografia Objeto"
              />
            </div>
            <div class="titleSta">
              <h1 class="NameStation">Estación de Cajicá</h1>
            </div>
            <div class="historyStation">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                neque, sint quas a sunt velit non consectetur debitis laboriosam
                voluptate! Nulla, nisi odit? Delectus eveniet nisi maiores
                recusandae alias numquam.
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- <div v-show="onViewFP" class="pointObject ObjView-1">
        <div id="Obj-1" @click="ObjHistory1()" class="labelObject">
          Teléfono
        </div>
        <div class="infoObject">
          Haz click conocer la historia de este objecto.
        </div>
      </div> -->
      <!-- <div id="ModalObj-1" class="ModalObjects">
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
      </div> -->
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
    <div id="keyLock">
      <div id="lockCursor" class="instEsc">
        <img
          class="Escape"
          src="../assets/Icons/Icons-Escape.png"
          alt="Icono tecla escape"
        />
        <p>Presiona la tecla Escape para liberar el cursor.</p>
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
      <div class="instJump">
        <img
          class="Mouse"
          src="../assets/Icons/Icons-Space.png"
          alt="Icono Espace"
        />
        <p>
          Oprime la tecla Espacio
          <br />
          para saltar y moverte mas rápido.
        </p>
      </div>
    </div>
    <div id="footer03">
      <div id="menuTeam" @click="ShowTeam()">
        <span class="tooltiptext">Equipo Ferriel</span>
        <img
          class="iconTeam"
          src="../assets/Icons/Icons-Team.png"
          alt="IconoEquipo"
        />
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
import Toggle from "./Toggle.vue";
import Informacion from "./InfoBoton.vue";
import Carga from "./EsperaUsuarios.vue";
import AeControls from "./AerialControls.vue";
import FpControls from "./FirstControls.vue";

export default {
  name: "MapaEstaciones",
  components: {
    Informacion,
    Carga,
    Toggle,
    AeControls,
    FpControls,
  },
  data() {
    return {
      loaded: false, //Carga
      load01: false, //Cajicá load
      load02: false, //Zipaquirá load
      load03: false, //Parque load
      load04: false, //Puentes load
      load05: false, //Cajicá Letrero load
      load06: false, //Zipaquirá Letrero load
      load07: false, //CajicaColisiones load
      load08: false, // ZipaquiraColisiones load
      load09: false, //PuentesColisiones load
      load10: false, //ParqueColisiones load
      esperatime: true,
      mostrar: false,
      container: null,
      scene: null,
      camera: null,
      cameraFp: null,
      controls: null,
      renderer: null,
      stats: null,
      raycaster: null,
      raycaster2: null,
      MainTarget: null,
      MainPosition: null,
      MainRotation: null,
      points: [], //PuntosEstaciones
      point: null,
      Fp: false,
      pointsObjects: [], //PuntosObjetos
      pointObject: null,
      modalObj: null,
      Model1: null,
      intersects: null,
      pointer: new THREE.Vector2(),
      INTERSECTED: null,
      labelRenderer: null,
      pControls: null, //FirstPerson
      onViewFP: false,
      onStation: false,
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
      const fov = 80; // Field of view
      const aspect = this.container.clientWidth / this.container.clientHeight;
      const near = 0.1; // the near clipping plane
      var far = 150; // the far clipping plane
      this.camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
      this.camera.position.x = 40;
      this.camera.position.y = 40;
      this.camera.position.z = 0;

      // add camera first person
      const fovFp = 80;
      var farFp = 40;
      this.cameraFp = new THREE.PerspectiveCamera(fovFp, aspect, near, farFp);

      this.MainPosition = new THREE.Vector3();
      this.MainPosition.copy(this.camera.position);

      this.MainRotation = new THREE.Vector3();
      this.MainRotation.copy(this.camera.rotation);

      this.camera.rotation.order = "YXZ";
      this.cameraFp.rotation.order = "YXZ";

      // create scene
      const nearFog = 60;
      const farFog = 90;
      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color("#6dd2dc");
      this.scene.fog = new THREE.Fog(0x4eacce, nearFog, farFog);

      // add lights
      /* const ambientLight = new THREE.HemisphereLight(
        0xffffff, // bright sky color
        0x222222, // dim ground color
        0.5 // intensity
      );
      const mainLight = new THREE.DirectionalLight(0xffffff, 1.0);
      mainLight.position.set(10, 2, 10);
      mainLight.castShadow = true;
      mainLight.shadow.camera.top = 2;
      mainLight.shadow.camera.bottom = -2;
      mainLight.shadow.camera.left = -2;
      mainLight.shadow.camera.right = 2;
      mainLight.shadow.camera.near = 0.1;
      mainLight.shadow.camera.far = 40;
      this.scene.add(ambientLight, mainLight); */

      const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444);
      hemiLight.position.set(0, 20, 0);
      this.scene.add(hemiLight);

      /* const dirLight = new THREE.DirectionalLight(0xffffff, 1);
      dirLight.color.setHSL(0.1, 1, 0.95);
      dirLight.position.set(-1, 1.75, 1);
      dirLight.position.multiplyScalar(30);
      this.scene.add(dirLight);

      dirLight.castShadow = true;

      dirLight.shadow.mapSize.width = 2048;
      dirLight.shadow.mapSize.height = 2048;

      const d = 50;

      dirLight.shadow.camera.left = -d;
      dirLight.shadow.camera.right = d;
      dirLight.shadow.camera.top = d;
      dirLight.shadow.camera.bottom = -d;

      dirLight.shadow.camera.far = 3500;
      dirLight.shadow.bias = -0.0001; */

      /* const dirLightHelper = new THREE.DirectionalLightHelper(dirLight, 10);
      this.scene.add(dirLightHelper); */

      /* const spotLight = new THREE.SpotLight(0xffffff);
      spotLight.position.set(-3, 2, -25);

      spotLight.castShadow = true;
      spotLight.shadow.mapSize.width = 1024;
      spotLight.shadow.mapSize.height = 1024;
      spotLight.shadow.camera.near = 500;
      spotLight.shadow.camera.far = 4000;
      spotLight.shadow.camera.fov = 30;

      this.scene.add(spotLight); */

      //Load Model
      const loader01 = new GLTFLoader().setPath("/Models/");
      const loader02 = new GLTFLoader().setPath("/Models/");
      const loader03 = new GLTFLoader().setPath("/Models/");
      const loader04 = new GLTFLoader().setPath("/Models/");
      const loader05 = new GLTFLoader().setPath("/Models/");
      const loader06 = new GLTFLoader().setPath("/Models/");
      const loader07 = new GLTFLoader().setPath("/Models/");
      const loader08 = new GLTFLoader().setPath("/Models/");
      const loader09 = new GLTFLoader().setPath("/Models/");
      const loader10 = new GLTFLoader().setPath("/Models/");

      //Models
      loader01.load(
        "Cajica01.glb",
        (gltf) => {
          this.mesh = gltf;
          this.scene.add(gltf.scene);

          this.mesh.receiveShadow = true;
          this.mesh.castShadow = true;

          if (this.mesh) {
            this.load01 = true;
          }
          /* this.mesh.traverse(function (child) {
            if (child instanceof THREE.Mesh) {
              child.visible = false;
            }
          }); */
          //this.worldOctree.fromGraphNode(gltf.scene);
          /*  this.mesh.scene.traverse(function (object) {
            if (object.isMesh) object.castShadow = true;
          });
          this.mesh.traverse(function (node) {
            if (node.isMesh || node.isLight) node.castShadow = true;
            if (node.isMesh || node.isLight) node.receiveShadow = true;
          }); */
          //this.animate();
        },
        undefined,
        undefined
      );
      loader02.load(
        "Zipaquira01.glb",
        (gltf) => {
          this.mesh = gltf;
          this.mesh.castShadow = true;
          this.mesh.receiveShadow = true;

          this.scene.add(gltf.scene);
          if (this.mesh) {
            this.load02 = true;
          }
          //this.worldOctree.fromGraphNode(gltf.scene);
          //this.animate();
          /* this.Model1 = new THREE.Object3D();
          this.Model1.add(this.mesh.scene);
          this.scene.add(this.Model1); */
        },
        undefined,
        undefined
      );
      loader03.load(
        "Parque.glb",
        (gltf) => {
          this.mesh = gltf;
          this.scene.add(gltf.scene);
          if (this.mesh) {
            this.load03 = true;
          }
          //this.worldOctree.fromGraphNode(gltf.scene);
        },
        undefined,
        undefined
      );
      loader04.load(
        "Puentes.glb",
        (gltf) => {
          this.mesh = gltf;
          this.mesh.castShadow = true;
          this.mesh.receiveShadow = true;
          this.scene.add(gltf.scene);
          if (this.mesh) {
            this.load04 = true;
          }
          //this.worldOctree.fromGraphNode(gltf.scene);
        },
        undefined,
        undefined
      );
      loader05.load(
        "CajicaLetrero.glb",
        (gltf) => {
          this.mesh = gltf;
          this.mesh.castShadow = true;
          this.mesh.receiveShadow = true;
          this.scene.add(gltf.scene);
          if (this.mesh) {
            this.load05 = true;
          }
          //this.worldOctree.fromGraphNode(gltf.scene);
        },
        undefined,
        undefined
      );
      loader06.load(
        "ZipaquiraLetrero.glb",
        (gltf) => {
          this.mesh = gltf;
          this.mesh.castShadow = true;
          this.mesh.receiveShadow = true;
          this.scene.add(gltf.scene);
          if (this.mesh) {
            this.load06 = true;
          }
          //this.worldOctree.fromGraphNode(gltf.scene);
        },
        undefined,
        undefined
      );
      //Collitions
      loader07.load(
        "CajicaColisiones.glb",
        (gltf) => {
          this.mesh = gltf;
          this.mesh.castShadow = true;
          this.mesh.receiveShadow = true;
          this.scene.add(gltf.scene);
          if (this.mesh) {
            this.load07 = true;
          }
          this.worldOctree.fromGraphNode(gltf.scene);
        },
        undefined,
        undefined
      );
      loader08.load(
        "ZipaquiraColisiones.glb",
        (gltf) => {
          this.mesh = gltf;
          this.mesh.castShadow = true;
          this.mesh.receiveShadow = true;
          this.scene.add(gltf.scene);
          if (this.mesh) {
            this.load08 = true;
          }
          this.worldOctree.fromGraphNode(gltf.scene);
        },
        undefined,
        undefined
      );
      loader09.load(
        "PuentesColisiones.glb",
        (gltf) => {
          this.mesh = gltf;
          this.mesh.castShadow = true;
          this.mesh.receiveShadow = true;
          this.scene.add(gltf.scene);
          if (this.mesh) {
            this.load09 = true;
          }
          this.worldOctree.fromGraphNode(gltf.scene);
        },
        undefined,
        undefined
      );
      loader10.load(
        "ParqueColisiones.glb",
        (gltf) => {
          this.mesh = gltf;
          this.mesh.castShadow = true;
          this.mesh.receiveShadow = true;
          this.scene.add(gltf.scene);
          if (this.mesh) {
            this.load010 = true;
          }
          this.worldOctree.fromGraphNode(gltf.scene);
        },
        undefined,
        undefined
      );

      this.pointObjs();

      // create renderer
      this.renderer = new THREE.WebGLRenderer({ antialias: true });
      this.renderer.setSize(
        this.container.clientWidth,
        this.container.clientHeight
      );
      this.renderer.setPixelRatio(window.devicePixelRatio);
      this.renderer.outputEncoding = THREE.sRGBEncoding;
      this.renderer.shadowMap.enabled = true;
      this.container.appendChild(this.renderer.domElement);

      // add Orbitcontrols
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);

      // add pointerControl
      this.pControls = new PointerLockControls(
        this.cameraFp,
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
      this.raycaster2 = new THREE.Raycaster();
      this.points = [
        {
          //Zipaquirá
          position: new THREE.Vector3(-50, 6, 0),
          element: document.querySelector(".MapView-1"),
        },
        {
          //Usaquén
          position: new THREE.Vector3(0, 1, 40),
          element: document.querySelector(".MapView-2"),
        },
        {
          //Cajicá
          position: new THREE.Vector3(50, 5, 0),
          element: document.querySelector(".MapView-3"),
        },
        {
          //Chía
          position: new THREE.Vector3(0, 1, -40),
          element: document.querySelector(".MapView-4"),
        },
      ];
      /* this.pointsObjects = [
        {
          //Telefono
          position: new THREE.Vector3(34, 1, 6),
          element: document.querySelector(".ObjView-1"),
        },
      ]; */
      window.addEventListener("resize", this.onWindowResize);
    },
    pointObjs() {
      this.color = new THREE.Color();
      this.white = new THREE.Color().setHex(0xffffff);
      //Add geometry
      var geometry = new THREE.SphereGeometry(0.4, 6, 4);
      var material = new THREE.MeshLambertMaterial({
        color: Math.random() * 0xffffff,
      });
      var sphere1 = new THREE.Mesh(geometry, material);
      sphere1.position.x = 0;
      sphere1.position.y = 2;
      sphere1.position.z = 5;
      sphere1.nameId = "Label1";
      this.scene.add(sphere1);

      var sphere2 = new THREE.Mesh(geometry, material);
      sphere2.position.x = 0;
      sphere2.position.y = 2;
      sphere2.position.z = -5;
      sphere2.nameId = "Label2";
      this.scene.add(sphere2);

      var sphere3 = new THREE.Mesh(geometry, material);
      sphere3.position.x = 2;
      sphere3.position.y = 2;
      sphere3.position.z = 5;
      sphere3.nameId = "Label3";
      this.scene.add(sphere3);

      var sphere4 = new THREE.Mesh(geometry, material);
      sphere4.position.x = 2;
      sphere4.position.y = 2;
      sphere4.position.z = -5;
      sphere4.nameId = "Label4";
      this.scene.add(sphere4);

      var sphere5 = new THREE.Mesh(geometry, material);
      sphere5.position.x = 4;
      sphere5.position.y = 2;
      sphere5.position.z = 5;
      sphere5.nameId = "Label5";
      this.scene.add(sphere5);

      var sphere6 = new THREE.Mesh(geometry, material);
      sphere6.position.x = 4;
      sphere6.position.y = 2;
      sphere6.position.z = -5;
      sphere6.nameId = "Label6";
      this.scene.add(sphere6);

      var sphere7 = new THREE.Mesh(geometry, material);
      sphere7.position.x = 6;
      sphere7.position.y = 2;
      sphere7.position.z = 5;
      sphere7.nameId = "Label7";
      this.scene.add(sphere7);

      var sphere8 = new THREE.Mesh(geometry, material);
      sphere8.position.x = 6;
      sphere8.position.y = 2;
      sphere8.position.z = -5;
      sphere8.nameId = "Label8";
      this.scene.add(sphere8);

      var sphere9 = new THREE.Mesh(geometry, material);
      sphere9.position.x = 8;
      sphere9.position.y = 2;
      sphere9.position.z = 5;
      sphere9.nameId = "Label9";
      this.scene.add(sphere9);
    },
    ShowInfo() {
      var modal = document.getElementById("MenuInfo");
      var titleMenu = document.getElementById("menuIcon");
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
    ShowTeam() {
      var modal = document.getElementById("TeamInfo");
      var authorIcon = document.getElementById("menuTeam");
      var span = document.getElementsByClassName("closeTeam")[0];

      authorIcon.onclick = function () {
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
    HideWait() {
      if (
        this.load01 &&
        this.load02 &&
        this.load03 &&
        this.load04 &&
        this.load05 &&
        this.load06 &&
        this.load07 &&
        this.load08
      ) {
        this.loaded = true;
      }
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
    zoommax: function () {
      var zoom = 1;
      var zoompoquito = 0.1;

      document.getElementById("zoommax").addEventListener("click", function () {
        zoom += zoompoquito;

        document.getElementById("zoomletra").style.transform =
          "scale(" + zoom + ")";
        document.getElementById("zoomletra1").style.transform =
          "scale(" + zoom + ")";
        document.getElementById("zoomletra2").style.transform =
          "scale(" + zoom + ")";
        document.getElementById("zoomletra3").style.transform =
          "scale(" + zoom + ")";
        document.getElementById("zoomletra4").style.transform =
          "scale(" + zoom + ")";
        document.getElementById("zoomletra5").style.transform =
          "scale(" + zoom + ")";
        document.getElementById("zoomletra6").style.transform =
          "scale(" + zoom + ")";
        document.getElementById("zoomletra7").style.transform =
          "scale(" + zoom + ")";
        console.log("se logro");
      });
    },
    zoommin: function () {
      var zoom = 1;
      var zoompoquito = 0.1;
      document.getElementById("zoommin").addEventListener("click", function () {
        // if (zoom > zoompoquito) {

        zoom -= zoompoquito;

        document.getElementById("zoomletra").style.transform =
          "scale(" + zoom + ")";
        document.getElementById("zoomletra1").style.transform =
          "scale(" + zoom + ")";
        document.getElementById("zoomletra2").style.transform =
          "scale(" + zoom + ")";
        document.getElementById("zoomletra3").style.transform =
          "scale(" + zoom + ")";
        document.getElementById("zoomletra4").style.transform =
          "scale(" + zoom + ")";
        document.getElementById("zoomletra5").style.transform =
          "scale(" + zoom + ")";
        document.getElementById("zoomletra6").style.transform =
          "scale(" + zoom + ")";
        document.getElementById("zoomletra7").style.transform =
          "scale(" + zoom + ")";
        console.log("se logro");
      });
    },
    onPointerMove(event) {
      this.pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
      this.pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
    },
    intersectPoint() {
      for (let id = 1; id < 10; id++) {
        if (this.intersects[0].object.nameId === `Label${id}`) {
          this.modal = document.getElementById(`Modal-${id}`);
          this.modal.style.display = "block";
        }
      }
    },
    hideModalPoint() {
      for (let id = 1; id < 10; id++) {
        this.modal = document.getElementById(`Modal-${id}`);
        this.modal.style.display = "none";
      }
    },
    rayPoints() {
      this.raycaster.setFromCamera(this.pointer, this.cameraFp);
      this.intersects = this.raycaster.intersectObjects(
        this.scene.children,
        false
      );

      if (this.intersects.length > 0) {
        if (this.INTERSECTED != this.intersects[0].object) {
          if (this.INTERSECTED)
            this.INTERSECTED.material.emissive.setHex(
              this.INTERSECTED.currentHex
            );

          this.INTERSECTED = this.intersects[0].object;
          this.INTERSECTED.currentHex =
            this.INTERSECTED.material.emissive.getHex();
          this.INTERSECTED.material.emissive.setHex(0xff0000);
          this.intersectPoint();
        }
      } else {
        if (this.INTERSECTED)
          this.INTERSECTED.material.emissive.setHex(
            this.INTERSECTED.currentHex
          );
        this.INTERSECTED = null;
        this.hideModalPoint();
      }
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
        screenPosition.project(this.cameraFp);

        this.raycaster.setFromCamera(screenPosition, this.cameraFp);
        this.intersects = this.raycaster.intersectObjects(
          this.scene.children,
          true
        );
        if (this.intersects.length === 0) {
          this.pointObject.element.classList.add("visible");
        } else {
          const intersectionDistance = this.intersects[0].distance;
          const pointDistance = this.pointObject.position.distanceTo(
            this.cameraFp.position
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

      const PosEst1 = new THREE.Vector3(-36, 1, 0);
      const RotEst1 = new THREE.Vector3(0, 0, 0);

      this.playerCollider.translate(PosEst1);

      new TWEEN.Tween(this.camera.rotation)
        .to(RotEst1, 3000)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .onComplete(() => {
          this.cameraFp.rotation.copy(this.camera.rotation);
        })
        .start();

      new TWEEN.Tween(this.camera.position)
        .to(PosEst1, 3000)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .onComplete(() => {
          this.onStation = true;
          this.cameraFp.position.copy(PosEst1);
        })
        .start();

      if (!this.onViewFP) {
        this.firstPerson();
      }
      this.Fp = true;
    },
    FPEstacion2() {
      //Estacion de Usaquén
      this.MainPosition.copy(this.camera.position);
      this.MainRotation.copy(this.camera.rotation);

      const PosEst2 = new THREE.Vector3(0, 1, 13);
      const RotEst2 = new THREE.Vector3(0, 0, 0);

      this.playerCollider.translate(PosEst2);

      new TWEEN.Tween(this.camera.rotation)
        .to(RotEst2, 3000)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .onComplete(() => {
          this.cameraFp.rotation.copy(this.camera.rotation);
        })
        .start();

      new TWEEN.Tween(this.camera.position)
        .to(PosEst2, 3000)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .onComplete(() => {
          this.onStation = true;
          this.cameraFp.position.copy(PosEst2);
        })
        .start();

      if (!this.onViewFP) {
        this.firstPerson();
      }
      this.Fp = true;
    },
    FPEstacion3() {
      //Estacion de Cajicá
      this.MainPosition.copy(this.camera.position);
      this.MainRotation.copy(this.camera.rotation);

      const PosEst3 = new THREE.Vector3(36, 1, 0);
      const RotEst3 = new THREE.Vector3(0, 0, 0);

      this.playerCollider.translate(PosEst3);

      new TWEEN.Tween(this.camera.rotation)
        .to(RotEst3, 3000)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .onComplete(() => {
          this.cameraFp.rotation.copy(this.camera.rotation);
        })
        .start();

      new TWEEN.Tween(this.camera.position)
        .to(PosEst3, 3000)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .onComplete(() => {
          this.onStation = true;
          this.cameraFp.position.copy(PosEst3);
        })
        .start();

      if (!this.onViewFP) {
        this.firstPerson();
      }
      this.Fp = true;
    },
    FPEstacion4() {
      //Estacion de Chía
      this.MainPosition.copy(this.camera.position);
      this.MainRotation.copy(this.camera.rotation);

      const PosEst4 = new THREE.Vector3(0, 1, -13);
      const RotEst4 = new THREE.Vector3(0, 0, 0);

      this.playerCollider.translate(PosEst4);

      new TWEEN.Tween(this.camera.rotation)
        .to(RotEst4, 3000)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .onComplete(() => {
          this.cameraFp.rotation.copy(this.camera.rotation);
        })
        .start();

      new TWEEN.Tween(this.camera.position)
        .to(PosEst4, 3000)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .onComplete(() => {
          this.onStation = true;
          this.cameraFp.position.copy(PosEst4);
        })
        .start();

      if (!this.onViewFP) {
        this.firstPerson();
      }
      this.Fp = true;
    },
    mainView() {
      this.controls.enabled = true;
      this.pControls.enabled = false;
      this.camera.position.copy(this.cameraFp.position);
      this.camera.rotation.copy(this.cameraFp.rotation);

      this.playerCollider.start.set(0, 0.35, 0);
      this.playerCollider.end.set(0, 1, 0);
      this.playerCollider.radius = 0.35;

      new TWEEN.Tween(this.camera.position)
        .to(this.MainPosition, 3000)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .onComplete(() => {
          this.onViewFP = false;
        })
        .start();

      new TWEEN.Tween(this.camera.rotation)
        .to(this.MainRotation, 3000)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .start();

      this.Fp = false;
      this.onStation = false;
    },
    firstPerson() {
      this.onViewFP = true;
      this.controls.enabled = false;
      this.pControls.enabled = true;

      this.changeFog();

      this.pControls.addEventListener("unlock", function () {
        var cursor = document.getElementById("lockCursor");
        cursor.style.display = "none";
      });
      this.pControls.addEventListener("lock", function () {
        var cursor = document.getElementById("lockCursor");
        cursor.style.display = "block";
      });
      this.container.addEventListener("contextmenu", (e) => {
        e.preventDefault();
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
    changeFog() {
      if (this.onStation) {
        this.scene.fog.near = 5;
        this.scene.fog.far = 30;
      } else {
        this.scene.fog.near = 60;
        this.scene.fog.far = 120;
      }
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

      this.cameraFp.position.copy(this.playerCollider.end);
    },
    getForwardVector() {
      this.cameraFp.getWorldDirection(this.playerDirection);
      this.playerDirection.y = 0;
      this.playerDirection.normalize();

      return this.playerDirection;
    },
    getSideVector() {
      this.cameraFp.getWorldDirection(this.playerDirection);
      this.playerDirection.y = 0;
      this.playerDirection.normalize();
      this.playerDirection.cross(this.camera.up);

      return this.playerDirection;
    },
    controlsMove(deltaTime) {
      // gives a bit of air control
      //const speedDelta = deltaTime * ( this.playerOnFloor ? 25 : 8 );
      const speedDelta = deltaTime * 15;

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
      if (this.cameraFp.position.y <= -25) {
        this.playerCollider.start.set(0, 0.35, 0);
        this.playerCollider.end.set(0, 1, 0);
        this.playerCollider.radius = 0.35;
        const Respawn = new THREE.Vector3(0, 0, 2);
        this.playerCollider.translate(Respawn);
        this.cameraFp.position.copy(this.playerCollider.end);
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

      /* const d = this.clock.getDelta();
      this.mixer.update(d); */

      TWEEN.update();
      this.rayPoints();
      this.contentPoints();
      //this.contentPointsObjects();
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

      this.cameraFp.aspect =
        this.container.clientWidth / this.container.clientHeight;
      this.cameraFp.updateProjectionMatrix();
      this.renderer.setSize(
        this.container.clientWidth,
        this.container.clientHeight
      );
    },
    render() {
      this.HideWait();
      this.changeFog();
      if (this.onStation) {
        this.renderer.render(this.scene, this.cameraFp);
      } else {
        this.renderer.render(this.scene, this.camera);
        //this.labelRenderer.render(this.scene, this.camera);
      }
      //this.renderer.render(this.scene, this.camera);
    },
  },
  mounted() {
    this.init();
    this.animate();
  },
};
</script>
<style src="../assets/Styles/style_Mapa.css"></style>



