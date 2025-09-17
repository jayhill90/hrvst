### Creating New 3d Scenes
The SceneManager.js file is responsible for handling the WebGL scenes and animations. 

Each geometry and section has a createGEOMETRYNAME() method that creates the new geometry applies the material, adds it to the scene, and sets positioning. 

The `updateVisibility()` method controls which animation displays in which section of the website. To change the order, these sections would be changed.

Handling of the render updates for the different animations is done in the `update()` method within the same file. This method takes in the deltaTime and elapsedTime as arguments and will apply smooth transitions to each effect. This method calls the individual update functions pertaining to each geometry that we've added to the scene.

The `update()` method also applies the smoothing of visibiity with `applySmoothVisibility()` method which essentially just uses the lerp function to fade between opacity of materials on the object.

Example: 
```js
// Smooth point network opacity
    if (this.pointNetwork) {
        this.transitionStates.pointNetwork.opacity = this.lerp(
            this.transitionStates.pointNetwork.opacity,
            this.transitionStates.pointNetwork.targetOpacity,
            speed
        );
        this.pointNetwork.material.opacity = this.transitionStates.pointNetwork.opacity;
        this.pointNetwork.visible = this.transitionStates.pointNetwork.opacity > TransitionConfig.visibility.minOpacity;
        
        // Update line network visibility to match points
        if (this.pointNetworkLines) {
            this.pointNetworkLines.visible = this.pointNetwork.visible;
        }
    }
```




