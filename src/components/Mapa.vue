<template>
    <div id="scene-container" ref="sceneContainer">
        <div id="header">
            <h1 class="principal-title">Ferriel</h1>
        </div>
        <div id="content">
            
        </div>
        <div id="footer">
            
        </div>
        <ButtonP/>
    </div>
</template>

<script>
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js'
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
            raycaster: null,
            mouse: new THREE.Vector2(),
            group1: null
        }
    },
    methods: {
        init () {
            // set container
            this.container = this.$refs.sceneContainer

            

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
            this.scene.fog = new THREE.Fog( 0x8f93e1, 0, 10 );

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
                    this.scene.add(gltf.scene);
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
			var material = new THREE.MeshLambertMaterial( { color: Math.random() * 0xffffff });
			
			var cube = new THREE.Mesh(geometry, material);
            cube.position.z = -8;
			this.scene.add( cube );

			//Add Sphere
			var sphere = new THREE.Mesh(new THREE.SphereGeometry(2, 16, 0, Math.PI), material);
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
            this.labelRenderer = new CSS2DRenderer();
            this.labelRenderer.setSize( window.innerWidth, window.innerHeight );
            this.labelRenderer.domElement.style.position = 'absolute';
            this.labelRenderer.domElement.style.top = '0px';
            document.body.appendChild( this.labelRenderer.domElement );
            
            // add controls
            this.controls = new OrbitControls(this.camera, this.labelRenderer.domElement)
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

            //Label name
            const nameEstation01 = document.createElement( 'div' );
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
            cube.add( nameLabel03 );

            window.addEventListener( 'resize', this.onWindowResize);
            document.addEventListener( 'mousemove', this.onMouseMove);
        },
        pop ()
        {
            var popup = document.getElementById("myPopup");
            popup.ClassList.toggle("show")
        },
        animate () {

            requestAnimationFrame( this.animate );

            this.controls.update();
            this.render();
            this.stats.update();
        },
        onWindowResize() {
            // set aspect ratio to match the new browser window aspect ratio
            this.camera.aspect = this.container.clientWidth / this.container.clientHeight
            this.camera.updateProjectionMatrix()
            this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
            this.labelRenderer.setSize(this.container.clientWidth, this.container.clientHeight);
        },
        onMouseMove( event ) 
        {
            //Set raycaster
            this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

            this.raycaster = new THREE.Raycaster();

            this.raycaster.setFromCamera(this.mouse, this.camera);

            this.scene.add(this.group1);

            const intersects = this.raycaster.intersectObject(this.group1.children, false);

            let INTERSECTED;

            if (intersects.length > 0) 
            {   
                console.log("intersecto un objeto");
                if (INTERSECTED != intersects[0].this.sphere) {

                    if (INTERSECTED) INTERSECTED.material.emissive.setHex(INTERSECTED.currentHex);

                    INTERSECTED = intersects[0].this.sphere;
                    INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
                    INTERSECTED.material.emissive.setHex(0xff0000);

                }
            } else {

                if (INTERSECTED) INTERSECTED.material.emissive.setHex(INTERSECTED.currentHex);

                INTERSECTED = null;

            }
        },
        render () {    
            this.renderer.render(this.scene, this.camera) 
            this.labelRenderer.render(this.scene, this.camera)
        }
    },
    mounted () {
        this.init()
        this.animate()
    }
}
</script>

<style src="../assets/Styles/style_Mapa.css"></style>