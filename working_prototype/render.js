import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r125/build/three.module.js';
// Create Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color( 0xb0b0b0 );
const camera = new THREE.PerspectiveCamera( 20, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setPixelRatio( window.devicePixelRatio );

document.body.appendChild( renderer.domElement );

// // Add box
// const geometry = new THREE.BoxGeometry();   
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// const cube = new THREE.Mesh( geometry, material );
// // Set position
// cube.position.set(0,0,0);
// scene.add( cube );

camera.position.z = 20;

// Image Loader
let loader1 = new THREE.TextureLoader();

let material1 = new THREE.MeshBasicMaterial({
    map: loader1.load('./TestElement.png'),
    transparent: true,
    side: THREE.DoubleSide
});


// Plane
let plan1g = new THREE.PlaneGeometry(4,3);


let plan1m = new THREE.Mesh(plan1g, material1);


plan1m.position.set(0,0,-1);


let group = new THREE.Group();

group.add(plan1m);


scene.add(group);

// Render
function animate() {
// cube.rotation.x += 0.01;
// cube.rotation.y += 0.01;

// plan1m.rotation.y += 0.01;
// plan2m.rotation.y += 0.01;
// plan3m.rotation.y += 0.01;
// plan4m.rotation.y += 0.01;

group.rotation.y += 0.01;

requestAnimationFrame( animate );
renderer.render( scene, camera );
}

animate();


