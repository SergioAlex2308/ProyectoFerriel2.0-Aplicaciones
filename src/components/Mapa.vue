<template>
    <div id="scene-container" ref="sceneContainer">
        <div id="header">
            <h1 class="principal-title">Ferriel</h1>
        </div>
        <div id="footer">
            <ButtonP/>
        </div>
    </div>
</template>

<script>
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
//import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js'
import Stats from 'stats.js'

import ButtonP from '@/components/Button.vue'

export default {
    name: 'MapaEstaciones',
    components: {
        ButtonP
    },
    data () {
        return {
            container: null,
            scene: null,
            camera: null,
            controls: null,
            renderer: null,
            stats: null,
            selectedObject: null
        }
    },
    methods: {
        init () {
            // set container
            this.container = this.$refs.sceneContainer

            this.mouse = new THREE.Vector2();
            this.raycaster = new THREE.Raycaster();

            // add stats
            this.stats = new Stats()
            this.container.appendChild(this.stats.dom)

            // add camera
            const fov = 60 // Field of view
            const aspect = this.container.clientWidth / this.container.clientHeight
            const near = 0.1 // the near clipping plane
            const far = 1000 // the far clipping plane
            const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
            camera.position.set(0, 5, 10)
            /* camera.lookAt( this.scene.position ); */
            this.camera = camera

            // create scene
            this.scene = new THREE.Scene()
            this.scene.background = new THREE.Color('skyblue')

            // add lights
            const ambientLight = new THREE.HemisphereLight(
                0xffffff, // bright sky color
                0x222222, // dim ground color
                0.5 // intensity
            )
            const mainLight = new THREE.DirectionalLight(0xffffff, 1.0)
            mainLight.position.set(10, 10, 10)
            this.scene.add(ambientLight, mainLight)

            /* const gridHelper = new THREE.GridHelper( 10, 50, 0x303030, 0x303030 );
            this.scene.add( gridHelper ); */

            // add controls
            this.controls = new OrbitControls(this.camera, this.container)
            this.controls.autoRotate = true;
            this.controls.minDistance = 5;
            this.controls.maxDistance = 10;
            //controls.enableRotate = false;
            this.controls.maxPolarAngle = Math.PI/3;
            this.controls.minPolarAngle = Math.PI/6;
            //controls.minAzimuthAngle = Math.PI/4;
            //controls.maxAzimuthAngle = Math.PI/4;
            this.controls.zoomSpeed = 4; 
            this.controls.enableDamping = true;

            // create renderer
            this.renderer = new THREE.WebGLRenderer({ antialias: true })
            this.renderer.setSize(this.container.clientWidth, this.container.clientHeight)
            this.renderer.setPixelRatio(window.devicePixelRatio)
            this.renderer.outputEncoding = THREE.sRGBEncoding
            this.container.appendChild(this.renderer.domElement)

            //Load Model
            const loader01 = new GLTFLoader().setPath('/three-assets/');
            const loader02 = new GLTFLoader().setPath('/three-assets/');
            const loader03 = new GLTFLoader().setPath('/three-assets/');
            const loader04 = new GLTFLoader().setPath('/three-assets/');

            loader01.load(
                'City2.glb',
                gltf => {
                    this.mesh = gltf;
                    this.mesh.scene.position.x = 0;
                    this.mesh.scene.position.y = 0;
                    this.mesh.scene.position.z = 0;
                    this.scene.add(gltf.scene)
                },
                undefined,
                undefined
            )
            loader02.load(
                'City2.glb',
                gltf => {
                    this.mesh = gltf;
                    this.mesh.scene.position.x = 4.5;
                    this.mesh.scene.position.y = 0;
                    this.mesh.scene.position.z = 0;
                    this.scene.add(gltf.scene)
                },
                undefined,
                undefined
            )
            loader03.load(
                'City2.glb',
                gltf => {
                    this.mesh = gltf;
                    this.mesh.scene.position.x = 4.5;
                    this.mesh.scene.position.y = 0;
                    this.mesh.scene.position.z = 4.5;
                    this.scene.add(gltf.scene)
                },
                undefined,
                undefined
            )
            loader04.load(
                'City2.glb',
                gltf => {
                    this.mesh = gltf;
                    this.mesh.scene.position.x = 0;
                    this.mesh.scene.position.y = 0;
                    this.mesh.scene.position.z = 4.5;
                    this.scene.add(gltf.scene)
                },
                undefined,
                undefined
            )
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
			this.white = new THREE.Color().setHex( 0xffffff );
            
            //Add geometry
			var geometry = new THREE.BoxGeometry(2, 2, 2, 3,  3,  3);
			var material = new THREE.MeshBasicMaterial( { color: 0xffffff} );
			
			var object = new THREE.Mesh(geometry, material);
            object.position.z = -8;
			this.scene.add( object );

			//Add Sphere
			var sphere = new THREE.Mesh(new THREE.SphereGeometry(2, 16, 0, Math.PI), material);
			sphere.position.x = 5;
            sphere.position.z = -8;
			this.scene.add(sphere);

			//Add cone
			var cone = new THREE.Mesh(new THREE.ConeGeometry(0.5, 2, 8, 2), material);
			cone.position.x = -5;
            cone.position.z = -8;
			this.scene.add(cone);

            window.addEventListener( 'resize', this.onWindowResize);
            document.addEventListener( 'mousemove', this.onMouseMove, false);
        },
        animate () {

            requestAnimationFrame( this.animate );

            this.controls.update();

            this.raycaster.setFromCamera( this.mouse, this.camera );

            /* const c = [this.object, this.cone, this.sphere];
            const intersects = this.raycaster.intersectObjects(c); */

            /* if( intersects.length > 0 ) {

                const instanceID = intersects[0].instanceID;

                c.getColorAt( instanceID, this.color );

                if (this.color.equals( this.white )) {
                    
                    c.setColorAt( instanceID, this.color.setHex( Math.random()* 0xffffff ));

                    c.instanceColor.needUpdate = true;
                }
            } */
            /* for ( let i = 0; i < intersects.length; i ++ ) 
            {
                intersects[ i ].object.rotation.y += 0.15;
                console.log(i);
            } */
            this.render();
            this.stats.update();
        },
        onWindowResize() {
            // set aspect ratio to match the new browser window aspect ratio
            this.camera.aspect = this.container.clientWidth / this.container.clientHeight
            this.camera.updateProjectionMatrix()
            this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
        },
        onMouseMove( event ) {

            if( this.selectedObject ) {

                this.selectedObject.material.color.setHex( 0xffffff );
                this.selectedObject = null;
            }

            /* event.preventDefault(); */
            this.mouse.x = ( event.clientX / this.container.offsetWidth ) * 2 - 1;
            this.mouse.y = - ( event.clientY / this.container.offsetHeight ) * 2 + 1;

            const c = [this.object, this.cone, this.sphere];
            const intersects = this.raycaster.intersectObjects(c, true);

            if ( intersects.length > 0) {
                const res = intersects.filter( function ( res ) {
                    return res && res.object;
                })[0];

                if( res && res.object) {
                    this.selectedObject = res.object;
                    this.selectedObject.material.color.setHex(0x000000);
                }
            }
        },
        render () {     
            this.renderer.render(this.scene, this.camera) 
        }
    },
    mounted () {
        this.init()
        this.animate()
    }
}
</script>

<style src="../assets/Styles/style_Mapa.css"></style>