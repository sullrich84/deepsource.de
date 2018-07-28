var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer({alpha: true});
renderer.setClearColor(0x000000, 0);
renderer.setSize(window.innerWidth, window.innerHeight);

document.getElementById("deepsource-animation").appendChild(renderer.domElement);
var highlight = getComputedStyle(document.body).getPropertyValue('--highlight');

var geometry = new THREE.SphereGeometry( 2, 32, 32 );
var material = new THREE.MeshBasicMaterial({color: 0xffffff, wireframe: true});
var sphere = new THREE.Mesh(geometry, material);


var loader = new THREE.ObjectLoader();
loader.load("models/json/example.json", function (obj) {
	scene.add( obj );
});

scene.add( object );

scene.add(sphere);

camera.position.z = 5;

var animate = function () {
	requestAnimationFrame(animate);

	//sphere.rotation.x += 0.001;
	sphere.rotation.y -= 0.001;
	sphere.rotation.x -= 0.001;
	sphere.rotation.z -= 0.001;

	renderer.render(scene, camera);
};

console.log("Starting animation with color: {}", highlight);
animate();
