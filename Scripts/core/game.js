/// <reference path="_reference.ts"/>
/*
Author:             Jason Gunter
Last Modified By:   Jason Gunter @ March 2, 2016
Description:        Midterm
Revision History:   https://github.com/jgunter7/COMP392-Midterm
*/
// MAIN GAME FILE
// THREEJS Aliases
var Scene = THREE.Scene;
var Renderer = THREE.WebGLRenderer;
var PerspectiveCamera = THREE.PerspectiveCamera;
var BoxGeometry = THREE.BoxGeometry;
var CubeGeometry = THREE.CubeGeometry;
var PlaneGeometry = THREE.PlaneGeometry;
var SphereGeometry = THREE.SphereGeometry;
var Geometry = THREE.Geometry;
var AxisHelper = THREE.AxisHelper;
var LambertMaterial = THREE.MeshLambertMaterial;
var MeshBasicMaterial = THREE.MeshBasicMaterial;
var Material = THREE.Material;
var Mesh = THREE.Mesh;
var Object3D = THREE.Object3D;
var SpotLight = THREE.SpotLight;
var PointLight = THREE.PointLight;
var AmbientLight = THREE.AmbientLight;
var Control = objects.Control;
var GUI = dat.GUI;
var Color = THREE.Color;
var Vector3 = THREE.Vector3;
var Face3 = THREE.Face3;
var Point = objects.Point;
var CScreen = config.Screen;
//Custom Game Objects
var gameObject = objects.gameObject;
// setup an IIFE structure (Immediately Invoked Function Expression)
var game = (function () {
    // declare game objects
    var scene = new Scene();
    var renderer;
    var camera;
    var control;
    var gui;
    var stats;
    var cube1;
    var cube2;
    var cube3;
    var cube4;
    var cube5;
    var possibleColors = [
        new LambertMaterial({ color: 0XFF8700 }),
        new LambertMaterial({ color: 0xffaa11 }),
        new LambertMaterial({ color: 0x11ee66 }),
        new LambertMaterial({ color: 0xf12396 }),
        new LambertMaterial({ color: 0xfff116 }),
        new LambertMaterial({ color: 0xaaabb6 }),
        new LambertMaterial({ color: 0xff6226 }),
        new LambertMaterial({ color: 0xf12366 }),
        new LambertMaterial({ color: 0xa77896 }),
        new LambertMaterial({ color: 0xffff99 })
    ];
    function init() {
        // Instantiate a new Scene object
        //scene = new Scene();
        setupRenderer(); // setup the default renderer
        setupCamera(); // setup the camera
        /* ENTER CODE HERE */ //- thxaxes = new AxisHelper(100);
        var axes = new AxisHelper(10);
        scene.add(axes);
        //add ambient light to the scene
        var aLight = new THREE.AmbientLight(0xffffff);
        scene.add(aLight);
        AddMyObjects();
        var spotLight = new THREE.SpotLight(0xffffff);
        spotLight.position.set(-40, 50, 10);
        spotLight.lookAt(scene.position);
        spotLight.castShadow = true;
        scene.add(spotLight);
        // add controls
        gui = new GUI();
        control = new Control();
        addControl(control);
        // Add framerate stats
        addStatsObject();
        console.log("Added Stats to scene...");
        document.body.appendChild(renderer.domElement);
        gameLoop(); // render the scene	
    }
    function addControl(controlObject) {
        gui.add(controlObject, 'rotateCube1', false);
        gui.add(controlObject, 'cube1Speed', -0.5, 0.5);
        gui.add(controlObject, 'rotateCube2', false);
        gui.add(controlObject, 'cube2Speed', -0.5, 0.5);
        gui.add(controlObject, 'rotateCube3', false);
        gui.add(controlObject, 'cube3Speed', -0.5, 0.5);
        gui.add(controlObject, 'rotateCube4', false);
        gui.add(controlObject, 'cube4Speed', -0.5, 0.5);
        gui.add(controlObject, 'rotateCube5', false);
        gui.add(controlObject, 'cube5Speed', -0.5, 0.5);
    }
    function addStatsObject() {
        stats = new Stats();
        stats.setMode(0);
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.left = '0px';
        stats.domElement.style.top = '0px';
        document.body.appendChild(stats.domElement);
    }
    // Setup main game loop
    function gameLoop() {
        stats.update();
        // add stuff here for updating
        if (control.rotateCube1) {
            cube1.rotation.z += control.cube1Speed;
        }
        if (control.rotateCube2) {
            cube2.rotation.z += control.cube2Speed;
        }
        if (control.rotateCube3) {
            cube3.rotation.z += control.cube3Speed;
        }
        if (control.rotateCube4) {
            cube4.rotation.z += control.cube4Speed;
        }
        if (control.rotateCube5) {
            cube5.rotation.z += control.cube5Speed;
        }
        // render using requestAnimationFrame
        requestAnimationFrame(gameLoop);
        // render the scene
        renderer.render(scene, camera);
    }
    // Setup default renderer
    function setupRenderer() {
        renderer = new Renderer();
        renderer.setClearColor(0x404040, 1.0);
        renderer.setSize(CScreen.WIDTH, CScreen.HEIGHT);
        //renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.shadowMap.enabled = true;
        console.log("Finished setting up Renderer...");
    }
    // Setup main camera for the scene
    function setupCamera() {
        camera = new PerspectiveCamera(35, config.Screen.RATIO, 0.1, 150);
        camera.position.x = -40;
        camera.position.y = 60;
        camera.position.z = 40;
        camera.lookAt(new Vector3(0, 0, 0));
        console.log("Finished setting up Camera...");
    }
    function AddMyObjects() {
        // custom function to add objects to the scene :) - jgunter
        var plane = new THREE.Mesh(new PlaneGeometry(50, 50), new LambertMaterial({ color: 0XFF888F }));
        plane.receiveShadow = true;
        plane.castShadow = true;
        plane.rotation.x = -0.5 * Math.PI;
        plane.position.x = 0;
        plane.position.y = 0;
        plane.position.z = 0;
        scene.add(plane);
        cube1 = new THREE.Mesh(new CubeGeometry(10, 10, 2), new LambertMaterial({ color: 0XFF1FFF }));
        cube1.receiveShadow = true;
        cube1.castShadow = true;
        cube1.rotation.x = -0.5 * Math.PI;
        cube1.position.x = 0;
        cube1.position.y = 2;
        cube1.position.z = 0;
        cube1.material = possibleColors[getRandomInt(0, 9)];
        scene.add(cube1);
        cube2 = new THREE.Mesh(new CubeGeometry(8, 8, 2), new LambertMaterial({ color: 0XFFFFFF }));
        cube2.receiveShadow = true;
        cube2.castShadow = true;
        cube2.rotation.x = -0.5 * Math.PI;
        cube2.position.x = 0;
        cube2.position.y = 4;
        cube2.position.z = 0;
        cube2.material = possibleColors[getRandomInt(0, 9)];
        scene.add(cube2);
        cube3 = new THREE.Mesh(new CubeGeometry(6, 6, 2), new LambertMaterial({ color: 0XFF8700 }));
        cube3.receiveShadow = true;
        cube3.castShadow = true;
        cube3.rotation.x = -0.5 * Math.PI;
        cube3.position.x = 0;
        cube3.position.y = 6;
        cube3.position.z = 0;
        cube3.material = possibleColors[getRandomInt(0, 9)];
        scene.add(cube3);
        cube4 = new THREE.Mesh(new CubeGeometry(4, 4, 2), new LambertMaterial({ color: 0XFF001F }));
        cube4.receiveShadow = true;
        cube4.castShadow = true;
        cube4.rotation.x = -0.5 * Math.PI;
        cube4.position.x = 0;
        cube4.position.y = 8;
        cube4.position.z = 0;
        cube4.material = possibleColors[getRandomInt(0, 9)];
        scene.add(cube4);
        cube5 = new THREE.Mesh(new CubeGeometry(2, 2, 10), new LambertMaterial({ color: 0XFF1FFF }));
        cube5.receiveShadow = true;
        cube5.castShadow = true;
        cube5.rotation.x = -0.5 * Math.PI;
        cube5.position.x = 0;
        cube5.position.y = 10;
        cube5.position.z = 0;
        cube5.material = possibleColors[getRandomInt(0, 9)];
        scene.add(cube5);
    }
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    window.onload = init;
    return {
        scene: scene
    };
})();
//# sourceMappingURL=game.js.map