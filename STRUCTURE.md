# HRVST Website Structure Guide

This document explains the architecture of the HRVST interactive website, including how to add new sections, add new visual elements, and how the scroll system works.

## Project File Structure

- `index.html`: The main HTML file containing the structure of the site, including the sections and popovers.
- `style.css`: The main stylesheet for the website.
- `src/main.js`: The main entry point of the application. It initializes the Three.js scene, managers, and handles UI population.
- `src/data/DataManager.js`: Manages loading and accessing data from `public/releases.json`.
- `src/scenes/SceneManager.js`: Manages the different Three.js objects (scenes), their visibility, and animations.
- `src/utils/ScrollController.js`: Handles all scroll-related logic, including scroll snapping, camera movement, and triggering scene transitions.
- `src/shaders/`: This directory contains custom GLSL shaders.

## How the Scroll System Works

The scroll system is managed by `src/utils/ScrollController.js`. It uses a viewport-based approach, where each section of the website is 100vh tall.

1.  **Scroll Snapping:** The `ScrollController` implements scroll snapping. When you scroll, it determines the nearest section and smoothly scrolls to it. This is handled by the `snapToNearestSection` method. Keyboard navigation (arrow keys) and clicking on the navigation dots also trigger scrolling to specific sections.

2.  **Scroll Position Tracking:** The `updateScroll` method is called on every scroll event. It calculates the `scrollPercent` (a value from 0 to 1 representing the overall scroll progress) and determines the `currentSection`.

3.  **Camera Control:** The `updateCameraPosition` method in `ScrollController` defines the camera's position and rotation for each section. As you scroll, it smoothly interpolates the camera's transform between the settings for the current and next sections.

4.  **Scene Morphing:** The `updateSceneMorphing` method is called to notify the `SceneManager` of the scroll progress. It passes the `scrollPercent`, `currentSection`, and `sectionProgress` (the scroll progress within the current section). This data is used in `SceneManager` to control the visibility and animations of the different 3D objects.

## How to Add a New Section

To add a new section to the website, you need to modify a few files:

1.  **`index.html`:**
    *   Add a new `<section>` element with a unique ID (e.g., `<section id="section-new" class="section">...</section>`).
    *   Add a new navigation dot in the `.section-nav` div: `<div class="section-dot" data-section="5" title="New Section"><span>New Section</span></div>`. Make sure to update the `data-section` attribute to the correct index (starting from 0).

2.  **`src/utils/ScrollController.js`:**
    *   Add a new entry to the `sections` array: `{ name: 'new', index: 5 }`.
    *   Add a new camera configuration to the `cameraConfigs` array in the `updateCameraPosition` method. This will define where the camera should be for your new section.

3.  **`src/scenes/SceneManager.js`:**
    *   Create a new method to create the 3D object for your section (e.g., `createMyNewObject`).
    *   Call this new method in the `init` method of `SceneManager`.
    *   Add a new state to the `transitionStates` object for your new object (e.g., `myNewObject: { visible: false, opacity: 0, targetOpacity: 0 }`).
    *   Update the `updateVisibility` method to control the visibility of your new object based on the `currentSection`.

## How to Add New Shaders, Materials, and Geometry

1.  **Create Geometry:** In `src/scenes/SceneManager.js`, create a new method (e.g., `createMyNewObject`) to define the geometry for your object (e.g., `new THREE.BoxGeometry()`).

2.  **Create a Shader:**
    *   Create a new JavaScript file in `src/shaders/` (e.g., `MyNewShader.js`).
    *   This file should export an object containing the `vertexShader` and `fragmentShader` as strings. You can look at `src/shaders/GlowingParticleShader.js` for an example.

3.  **Create a Material:**
    *   In your `createMyNewObject` method in `SceneManager.js`, create a new `THREE.ShaderMaterial`.
    *   Import your new shader and pass the `vertexShader` and `fragmentShader` to the material.
    *   Define any `uniforms` your shader needs.

4.  **Create a Mesh and Add to Scene:**
    *   Create a new `THREE.Mesh` using your geometry and material.
    *   Add the mesh to the scene: `this.scene.add(myNewObject)`.
    *   Store a reference to the mesh in the `SceneManager` (e.g., `this.myNewObject = myNewObject`).

5.  **Manage Visibility and Animation:**
    *   Follow the steps in "How to Add a New Section" to manage the visibility of your new object.
    *   Add any animation logic for your new object to the `update` method in `SceneManager.js`. You can use the `elapsedTime` uniform for time-based animations.
