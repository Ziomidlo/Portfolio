import * as THREE from 'theree';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { createScene } from './utils.js';

const { scene, camera, renderer } = createScene();

// Load a GLTF model
const loader = new GLTFLoader();
loader.load('assets/models/cheetahInGltf.webp', (gltf) => {
    scene.add(gltf.scene);
    gltf.scene.position.set(0,0,0);
},undefined, (error) => {
    console.error("An error happend while loading the model",error);
});

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
