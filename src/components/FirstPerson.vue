<template>
  <div id="fp-container" ref="fpContainer">
      <!-- <button id="btn">
          LOCK
      </button>
      <div id="blocker">
        <div id="instructions">
          <p style="font-size:36px">
            Click to play
          </p>
          <p>
            Move: WASD<br/>
            Look: MOUSE
          </p>
        </div>
		</div> -->
  </div>
</template>

<script>
import * as THREE from "three";
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls'
//import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export default {
  name: "PrimeraPersona",
  data() {
    return {
      container: null,
      scene: null,
      camera: null,
      renderer: null,
      pControls: null,
      oControls: null,
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
      this.container = this.$refs.fpContainer;

      // add camera
      const fov = 60; // Field of view
      const aspect = this.container.clientWidth / this.container.clientHeight;
      const near = 0.1; // the near clipping plane
      const far = 1000; // the far clipping plane
      const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
      camera.position.set(0, 0.5, 5);
      /* camera.lookAt( this.scene.position ); */
      this.camera = camera;

      // create scene
      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color("skyblue");
      this.scene.fog = new THREE.Fog( 0xffffff, 0, 10 );

      // add lights
      const ambientLight = new THREE.HemisphereLight(
        0xffffff, // bright sky color
        0x222222, // dim ground color
        0.5 // intensity
      );
      const mainLight = new THREE.DirectionalLight(0xffffff, 1.0);
      mainLight.position.set(10, 10, 10);
      this.scene.add(ambientLight, mainLight);

      const gridHelper = new THREE.GridHelper( 10, 50, 0x303030, 0x303030 );
      this.scene.add( gridHelper );

      //Add geometry
      var geometry = new THREE.BoxGeometry(0.5, 3, 2, 1, 1, 1);
      var material = new THREE.MeshNormalMaterial();

      var cube = new THREE.Mesh(geometry, material);
      cube.position.set(0, 3, 0);
      this.scene.add(cube);

      // add pointerControl
      this.pControls = new PointerLockControls(this.camera, this.container);

      this.container.addEventListener('mousedown', ()=> {
        document.body.requestPointerLock();
        this.pControls.lock();
      });
      
      //this.oControls = new OrbitControls(this.camera, this.container);
      //this.oControls.keys;

      

      /* const blocker = document.getElementById( 'blocker' );
      const instructions = document.getElementById( 'instructions' );

      instructions.addEventListener('click', function()
      {
        this.pControls.lock();
      });
      this.pControls.addEventListener('lock', function()
      {
        instructions.style.display = 'none';
        blocker.style.display = 'none';
      });
      this.pControls.addEventListener('unlock', function()
      {
        blocker.style.display = 'block';
        instructions.style.display = '';
      }); */
      /* this.pControls = new OrbitControls(this.camera, this.container); */

      /* this.scene.add( this.pControls.getObject()) */


      /* document.getElementById('btn').onclick = ()=>{
          this.pControls.lock();
      } */
      
       // create renderer
      this.renderer = new THREE.WebGLRenderer({ antialias: true });
      this.renderer.setSize(
        this.container.clientWidth,
        this.container.clientHeight
      );
      this.renderer.setPixelRatio(window.devicePixelRatio);
      this.container.appendChild(this.renderer.domElement);

      window.addEventListener( 'resize', this.onWindowResize);

      document.addEventListener( 'keydown', this.onKeyDown);
      document.addEventListener( 'keyup', this.onkeyUp);
      /* document.addEventListener( 'mousemove', this.onMouseMove); */
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
    animate() 
    {
      requestAnimationFrame(this.animate);
      this.Move();
      this.render();
    },
    onWindowResize() 
    {
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

<style>
body {
  margin: 0;
  padding: 0;
  top: 0;
  left: 0;
}
#fp-container {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}
#blocker {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
}

#instructions 
{
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;
    font-size: 14px;
    cursor: pointer;
}
</style>