var composer, camera, scene, renderer, funnel;
var clearColor = 0x000000;

var blueish = 0xa8eb12;
var greenish = 0x004d7a;

init();
animate();

function init() {
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 1000 );
	camera.position.x = -7.5;
	camera.position.y = 5.5;
	camera.position.z = -4.0;
	camera.target = new THREE.Vector3();

	var loader = new THREE.ObjectLoader();
	loader.load("models/json/scene2.json", function (loadedScene) {
		scene = loadedScene;
		scene.fog = new THREE.Fog(new THREE.Color(blueish), 20, 3);

		funnel = scene.children[1];
		funnel.material = new THREE.MeshBasicMaterial({
			color: greenish,
			wireframe: true,
			transparent: true,
			opacity: 0.125
		});
	});

	renderer = new THREE.WebGLRenderer({alpha: true});
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.setClearColor(clearColor, 0);

	document.getElementById("deepsource-animation").appendChild(renderer.domElement);
	window.addEventListener('resize', onWindowResize, false);
}

function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
}

function animate() {

	if (funnel) funnel.rotation.z += 0.001;

	requestAnimationFrame(animate);
	render();
}

function render() {
	camera.lookAt( scene.position );
	renderer.render( scene, camera );
}
