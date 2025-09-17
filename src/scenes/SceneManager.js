import * as THREE from 'three';
import { RenderPass, EffectPass } from 'postprocessing';
import { TransitionConfig, applyEasing, logTransitionState } from '../utils/TransitionConfig.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import {BloomPass} from 'three/addons/postprocessing/BloomPass.js';
import { GlowingParticleShader } from '../shaders/GlowingParticleShader.js';

class SceneManager {
    constructor(scene, camera, renderer) {
        this.scene = scene;
        this.camera = camera;
        this.renderer = renderer;
        
        this.currentSection = 0;
        this.morphData = { scrollPercent: 0, sectionProgress: 0 };
        
        // Smooth transition properties
        this.transitionStates = {
            grid: { visible: true, opacity: 1, targetOpacity: 1 },
            sphere: { visible: false, opacity: 0, targetOpacity: 0 },
            cubes: { visible: false, opacity: 0, targetOpacity: 0 },
            particles: { visible: false, opacity: 0, targetOpacity: 0 },
            pointNetwork: { visible: false, opacity: 0, targetOpacity: 0 }
        };
        
        this.transitionSpeed = TransitionConfig.visibility.transitionSpeed;
        
        // Scene objects
        this.topMesh = null;
        this.sphereMesh = null;
        this.cubes = [];
        this.particles = null;
        this.pointNetwork = null;
        
        // Materials and shaders
        this.materials = {};
        this.uniforms = {};
        
        this.isInitialized = false;
    }
    
    async init() {
        try {
            console.log('Initializing SceneManager...');
            
            // Initialize uniforms for shader morphing
            this.initUniforms();
            
            // Create all scene objects
            await this.createVaporwaveGrid();
            await this.createGlowingSphere();
            await this.createParticleSystem();
            await this.createRotatingCubes();
            await this.createPointNetwork();
            
            // Setup lighting
            this.setupLighting();
            const pmremGenerator = new THREE.PMREMGenerator(this.renderer);
            const envMap = pmremGenerator.fromScene(new RoomEnvironment(), 0.1).texture;
            this.scene.environment = envMap;
            this.isInitialized = true;
            console.log('SceneManager initialized successfully');
            
        } catch (error) {
            console.error('Failed to initialize SceneManager:', error);
            throw error;
        }
    }
    
    initUniforms() {
        this.uniforms = {
            time: { value: 0 },
            morphFactor: { value: 0 },
            sectionIndex: { value: 0 },
            resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
        };
    }
    
    async createVaporwaveGrid() {
        console.log('Creating vaporwave grid...');
        // Create a highly subdivided plane for smooth Perlin noise displacement
        let geometry = new THREE.PlaneGeometry(40, 40, 120, 120);
        geometry = geometry.toNonIndexed();

        // Displace vertices with Perlin noise
        const positions = geometry.attributes.position;
        for (let i = 0; i < positions.count; i++) {
            const x = positions.getX(i);
            const y = positions.getY(i);
            let npos = [x * 0.13, y * 0.13];
            let elevation = this.perlin(npos) * 3.0;
            // Fade elevation toward the front
            let fade = (y + 10) / 20;
            fade = Math.max(0, Math.min(1, fade));
            elevation *= fade;
            positions.setZ(i, elevation);
        }
        positions.needsUpdate = true;

        // Store vaporwave grid data for animation
        this.vaporwaveGrid = {
            baseGeometry: geometry,
            positions: geometry.attributes.position,
            xArr: Array.from({length: geometry.attributes.position.count}, (_, i) => geometry.attributes.position.getX(i)),
            yArr: Array.from({length: geometry.attributes.position.count}, (_, i) => geometry.attributes.position.getY(i))
        };

        // Create grid mesh with wireframe material
        const gridMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
        const topMesh = new THREE.Mesh(geometry, gridMaterial);
        const bottomMesh = topMesh.clone();
        bottomMesh.position.set(0, -10, 5)
        bottomMesh.rotation.x = -Math.PI / 2;
        topMesh.position.set(0, 10, -10);
        topMesh.rotation.x = -Math.PI / 2;
        this.scene.add(topMesh);
        this.scene.add(bottomMesh);
        this.topMesh = topMesh;
        this.bottomMesh = bottomMesh;
        this.materials.grid = gridMaterial;
        this.vaporwaveGrid = { ...this.vaporwaveGrid, mesh: bottomMesh };
        console.log('Grid mesh added to scene:', topMesh);
    }
    
    async createGlowingSphere() {
        console.log('Creating glowing sphere...');
        const geometry = new THREE.SphereGeometry(1.5, 64, 64);

        // Displace vertices with Perlin noise for ripples
        const positions = geometry.attributes.position;
        const normals = geometry.attributes.normal;
        for (let i = 0; i < positions.count; i++) {
            const x = positions.getX(i);
            const y = positions.getY(i);
            const z = positions.getZ(i);
            // Use spherical coordinates for more natural ripples
            const r = Math.sqrt(x * x + y * y + z * z);
            const theta = Math.atan2(Math.sqrt(x * x + z * z), y);
            const phi = Math.atan2(z, x);

            // Perlin noise input: you can use theta/phi or x/y/z
            const n = this.perlin([theta * 2, phi * 2]);
            // Ripple effect: combine noise and a sin wave for extra effect
            const ripple = n * 0.18 + Math.sin(theta * 8 + phi * 8) * 0.05;

            // Displace along normal
            const nx = normals.getX(i);
            const ny = normals.getY(i);
            const nz = normals.getZ(i);
            positions.setXYZ(i, x + nx * ripple, y + ny * ripple, z + nz * ripple);
        }
        positions.needsUpdate = true;

        const material = new THREE.MeshPhysicalMaterial({
            color: 0x049ef4,
            roughness: 1.0,
            metalness: 1.0,
            clearcoat: 0,
            clearcoatRoughness: 0.0,
            specularIntensity: 0.0,
            wireframe: true,
            specularColor: 0x1aff5e,
        })

        this.sphereMesh = new THREE.Mesh(geometry, material);
        this.sphereMesh.position.set(0, 0, 0);
        this.sphereMesh.visible = true;
        this.scene.add(this.sphereMesh);

       /*  // Add a spotlight focused on the sphere
        const sphereLight = new THREE.SpotLight(0xffffff, 2, 10, Math.PI / 4, 0.5, 1);
        sphereLight.position.set(0, 2, 1);
        sphereLight.target = this.sphereMesh;
        this.scene.add(sphereLight);
        this.scene.add(sphereLight.target);
        this.sphereLight = sphereLight; // Store reference */

        this.materials.sphere = material;
    }
    
    // --- Perlin helpers as class methods ---
    hash(p) {
        return (Math.sin(p[0] * 127.1 + p[1] * 311.7) * 43758.5453123) % 1;
    }
    noise(p) {
        const i = [Math.floor(p[0]), Math.floor(p[1])];
        const f = [p[0] - i[0], p[1] - i[1]];
        const ff = [f[0] * f[0] * (3 - 2 * f[0]), f[1] * f[1] * (3 - 2 * f[1])];
        const a = this.hash(i);
        const b = this.hash([i[0] + 1, i[1]]);
        const c = this.hash([i[0], i[1] + 1]);
        const d = this.hash([i[0] + 1, i[1] + 1]);
        return (
            (1 - ff[0]) * (1 - ff[1]) * a +
            ff[0] * (1 - ff[1]) * b +
            (1 - ff[0]) * ff[1] * c +
            ff[0] * ff[1] * d
        );
    }
    perlin(p) {
        let value = 0.0;
        let amp = 0.5;
        let pp = [p[0], p[1]];
        for (let j = 0; j < 5; j++) {
            value += amp * this.noise(pp);
            pp = [pp[0] * 2, pp[1] * 2];
            amp *= 0.5;
        }
        return value;
    }

    async createRotatingCubes() {
        console.log('Creating rotating cubes...');

        const geometry = new THREE.SphereGeometry(1, 20, 20);

        // Create placeholder textures for album covers
        const loader = new THREE.TextureLoader();
        const placeholderTextures = [];
        
        for (let i = 0; i < 3; i++) {
            // Create colored placeholder textures
            const canvas = document.createElement('canvas');
            canvas.width = 512;
            canvas.height = 512;
            const ctx = canvas.getContext('2d');
            
            const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1'];
            ctx.fillStyle = colors[i];
            ctx.fillRect(0, 0, 512, 512);
            const texture = new THREE.CanvasTexture(canvas);
            placeholderTextures.push(texture);
        }
        
        // Create 3 cubes
        for (let i = 0; i < 3; i++) {
            const material = new THREE.MeshStandardMaterial({
                map: placeholderTextures[i],
                transparent: false,
                wireframe: true
            });

            // Clone geometry for each cube
            const cubeGeometry = geometry.clone();
            // Set originalPosition attribute for animation
            cubeGeometry.setAttribute(
                'originalPosition',
                new THREE.BufferAttribute(
                    new Float32Array(cubeGeometry.attributes.position.array), 3
                )
            );

            const cube = new THREE.Mesh(cubeGeometry, material);
            cube.position.set((i * 3 - 1), 0, (Math.sin(i * .1) - 1));
            cube.userData = {
                originalScale: 1,
                rotationAxis: new THREE.Vector3(
                    Math.random() - Math.sin(0.5),
                    Math.random() - Math.cos(0.5), 
                    Math.random() - 0.5
                ).normalize(),
                rotationSpeed: 0.01 + Math.random() * Math.sin(Math.random()) * 0.1,
                releaseId: i + 1
            };
            cube.visible = false; // Initially hidden
            this.scene.add(cube);
            this.cubes.push(cube);
        }
    }
    
    async createParticleSystem() {
        console.log('Creating particle system...');
        const particleCount = 300;
        const positions = new Float32Array(particleCount * 3);
        const velocities = new Float32Array(particleCount * 3);
        const ages = new Float32Array(particleCount);
        const lifetimes = new Float32Array(particleCount);

        // Generate a soft round texture for particles
        function generateCircleTexture(size = 64) {
            const canvas = document.createElement('canvas');
            canvas.width = canvas.height = size;
            const ctx = canvas.getContext('2d');
            const gradient = ctx.createRadialGradient(
                size / 2, size / 2, 0,
                size / 2, size / 2, size / 2
            );
            gradient.addColorStop(0, 'rgba(255,255,255,1)');
            gradient.addColorStop(0.2, 'rgba(255, 255, 255, 0.7)');
            gradient.addColorStop(0.5, 'rgba(255,255,255,0.2)');
            gradient.addColorStop(1, 'rgba(255, 22, 22, 0)');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, size, size);
            return new THREE.CanvasTexture(canvas);
        }
        const pointTexture = generateCircleTexture();

        // Initialize particles
        for (let i = 0; i < particleCount; i++) {
            const i3 = i * 3;
            positions[i3] = (Math.random() - 0.5) * 3;
            positions[i3 + 1] = (Math.random() - 0.5) * 3;
            positions[i3 + 2] = (Math.random() - 0.5) * -3;
            velocities[i3] = -positions[i3] * 0.01;
            velocities[i3 + 1] = -positions[i3 + 1] * Math.sin(positions[i3 + 1]) * 0.005;
            velocities[i3 + 2] = Math.sin(positions[i3 + 2]) * 0.005;
            lifetimes[i] = 1.5 + Math.random() * 2.0;
            ages[i] = Math.random() * lifetimes[i];
        }

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('velocity', new THREE.BufferAttribute(velocities, 3));
        geometry.setAttribute('age', new THREE.BufferAttribute(ages, 1));
        geometry.setAttribute('lifetime', new THREE.BufferAttribute(lifetimes, 1));

        const material = new THREE.ShaderMaterial({
            uniforms: {
                pointTexture: { value: pointTexture },
                color: { value: new THREE.Color(0xffffff) },
                time: { value: 0 }
            },
            vertexShader: GlowingParticleShader.vertexShader,
            fragmentShader: GlowingParticleShader.fragmentShader,
            transparent: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });

        this.particles = new THREE.Points(geometry, material);
        this.particles.visible = false;
        this.scene.add(this.particles);
    }
    
    // Point Network with Lines Setup.
    async createPointNetwork() {
        console.log('Creating point network...');
        
        const pointCount = 50;
        const positions = new Float32Array(pointCount * 3);
        
        // Create random points
        for (let i = 0; i < pointCount; i++) {
            const i3 = i * 3;
            positions[i3] = (Math.random() - 0.5) * 15; // x
            positions[i3 + 1] = (Math.random() - 0.5) * 10; // y 
            positions[i3 + 2] = (Math.random() - 0.5) * 8; // z
        }
        
        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        
        const material = new THREE.PointsMaterial({
            color: 0xffffff,
            size: 0.05,
            transparent: true,
            opacity: 1.0
        });
        
        this.pointNetwork = new THREE.Points(geometry, material);
        this.pointNetwork.visible = false; // Initially hidden
        this.scene.add(this.pointNetwork);
        
        // Create lines between nearby points (simplified for now)
        this.createPointNetworkLines(positions, pointCount);
    }
    
    createPointNetworkLines(positions, pointCount) {
    const maxDistance = 3.0; // Maximum distance for connections
    const linePositions = [];
    
    // Find connections between nearby points
    for (let i = 0; i < pointCount; i++) {
        for (let j = i + 1; j < pointCount; j++) {
            const i3 = i * 3;
            const j3 = j * 3;
            
            const dx = positions[i3] - positions[j3];
            const dy = positions[i3 + 1] - positions[j3 + 1];
            const dz = positions[i3 + 2] - positions[j3 + 2];
            
            const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
            
            if (distance < maxDistance) {
                // Add line connection
                linePositions.push(
                    positions[i3], positions[i3 + 1], positions[i3 + 2],
                    positions[j3], positions[j3 + 1], positions[j3 + 2]
                );
            }
        }
    }
    
    // Create line geometry
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    
    const lineMaterial = new THREE.LineBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.3,
        blending: THREE.AdditiveBlending
    });
    
    this.pointNetworkLines = new THREE.LineSegments(lineGeometry, lineMaterial);
    this.pointNetworkLines.visible = false; // Initially hidden
    this.scene.add(this.pointNetworkLines);
    
    // Store original line positions for animation
    this.pointNetworkLinesData = {
        originalPositions: new Float32Array(linePositions),
        geometry: lineGeometry
    };
}

setupLighting() {
    // Ambient light for overall illumination
    const ambientLight = new THREE.AmbientLight(0x404040, 0.9);
    this.scene.add(ambientLight);
    const hemisphereLight = new THREE.HemisphereLight(0xffffbb, 0xffffff, 1.0);
        this.scene.add(hemisphereLight);
        hemisphereLight.position.set(0, 1, -4);
        // Directional light from left side for cube section
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(0, 0, 2);
        this.scene.add(directionalLight);
        
        // Point light for sphere glow
        const pointLight = new THREE.PointLight(0xffffff, 1, 10);
        pointLight.position.set(2, 0, 2);
        this.scene.add(pointLight);
    }
    
    setCurrentSection(sectionIndex) {
        this.currentSection = sectionIndex;
        
        // Show/hide relevant objects based on section
        this.updateVisibility();
    }
    /**
     * Function to update visibility and opacity of scene objects based on current section. 
     * Change order of FX here.
     */
    updateVisibility() {
        // Calculate target opacities based on current section (0-4) instead of scroll percentage
        const currentSection = this.currentSection;
        const sectionProgress = this.morphData.sectionProgress;
        const fadeDistance = 0.3; // Fade distance as fraction of section
        
        // Section 0: Grid (always visible but fades with overall scroll)
        this.transitionStates.grid.targetOpacity = Math.max(0.3, 1 - (currentSection / 4) * 0.7);
        // Section 1: Sphere (appears in section 1)
        this.transitionStates.sphere.targetOpacity = this.calculateSectionFade(currentSection, 1, fadeDistance);
        // Section 2: Particles (appears in section 2)
        this.transitionStates.particles.targetOpacity = this.calculateSectionFade(currentSection, 2, fadeDistance);
        // Section 3: Cubes (appears in section 3)
        this.transitionStates.cubes.targetOpacity = this.calculateSectionFade(currentSection, 3, fadeDistance);
        // Section 4: Point Network (appears in section 4)
        this.transitionStates.pointNetwork.targetOpacity = this.calculateSectionFade(currentSection, 4, fadeDistance);
        
        // Apply smooth transitions to actual objects
        this.applySmoothVisibility();
    }

    calculateSectionFade(currentSection, targetSection, fadeDistance) {
        // Object is fully visible in its target section
        if (currentSection === targetSection) return 1;
        
        // Calculate distance from target section
        const distance = Math.abs(currentSection - targetSection);
        
        // Fade based on distance
        if (distance > 1) return 0; // Too far away
        
        // Adjacent sections get partial visibility
        return Math.max(0, 1 - (distance / fadeDistance));
    }
    
    applySmoothVisibility() {
        const speed = this.transitionSpeed;
        
        // Smooth grid opacity
        if (this.topMesh) {
            this.transitionStates.grid.opacity = this.lerp(
                this.transitionStates.grid.opacity,
                this.transitionStates.grid.targetOpacity,
                speed
            );
            this.topMesh.material.opacity = this.transitionStates.grid.opacity;
            this.topMesh.material.transparent = true;
            this.topMesh.visible = this.transitionStates.grid.opacity > TransitionConfig.visibility.minOpacity;
        }
        
        // Smooth sphere opacity
        if (this.sphereMesh) {
            this.transitionStates.sphere.opacity = this.lerp(
                this.transitionStates.sphere.opacity,
                this.transitionStates.sphere.targetOpacity,
                speed
            );
            this.sphereMesh.visible = this.transitionStates.sphere.opacity > TransitionConfig.visibility.minOpacity;

            // Control the sphere's light intensity and visibility
            if (this.sphereLight) {
                this.sphereLight.intensity = 2 * this.transitionStates.sphere.opacity;
                this.sphereLight.visible = this.sphereMesh.visible;
            }
        }
        
        // Smooth cubes opacity
        this.cubes.forEach((cube, index) => {
            if (cube) {
                this.transitionStates.cubes.opacity = this.lerp(
                    this.transitionStates.cubes.opacity,
                    this.transitionStates.cubes.targetOpacity,
                    speed
                );
                cube.material.opacity = this.transitionStates.cubes.opacity;
                cube.material.transparent = this.transitionStates.cubes.opacity < 1;
                cube.visible = this.transitionStates.cubes.opacity > TransitionConfig.visibility.minOpacity;
            }
        });
        
        // Smooth particles opacity
        if (this.particles) {
            this.transitionStates.particles.opacity = this.lerp(
                this.transitionStates.particles.opacity,
                this.transitionStates.particles.targetOpacity,
                speed
            );
            this.particles.material.opacity = this.transitionStates.particles.opacity;
            this.particles.visible = this.transitionStates.particles.opacity > TransitionConfig.visibility.minOpacity;
        }
        
        // Smooth point network with lines opacity 
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
    }
    
    updateMorphing(morphData) {
        this.morphData = morphData;
        
        // Apply easing to morph factor using config
        const config = TransitionConfig.shaderMorphing;
        const easedSectionProgress = config.useEasedProgress ? 
            applyEasing(config.easingFunction, morphData.sectionProgress) : 
            morphData.sectionProgress;
        const smoothMorphFactor = this.smoothstep(0, 1, easedSectionProgress);
        
        // Update uniforms for shader morphing with config-based interpolation
        this.uniforms.morphFactor.value = this.lerp(
            this.uniforms.morphFactor.value,
            smoothMorphFactor,
            config.morphFactorLerpSpeed
        );
        this.uniforms.sectionIndex.value = this.lerp(
            this.uniforms.sectionIndex.value,
            morphData.currentSection,
            config.sectionIndexLerpSpeed
        );
        
        // Log debug information
        logTransitionState('SceneManager', {
            morphFactor: this.uniforms.morphFactor.value,
            sectionIndex: this.uniforms.sectionIndex.value,
            currentSection: morphData.currentSection
        });
        
        // Update visibility with smooth transitions
        this.updateVisibility();
    }
    
    update(deltaTime, elapsedTime) {
        if (!this.isInitialized) return;
        
        // Animate vaporwave grid with time-shifting Perlin noise
        if (this.vaporwaveGrid) {
            const { positions, xArr, yArr } = this.vaporwaveGrid;
            const t = elapsedTime * 0.3; // Control animation speed
            
            for (let i = 0; i < positions.count; i++) {
                const x = xArr[i];
                const y = yArr[i];
                // Apply time-based offset to Perlin noise coordinates
                let npos = [x * 0.13 + Math.sin(t) * 0.5, y * 0.13 + Math.cos(t) * 0.5];
                let elevation = this.perlin(npos) * 3.0;
                // Fade elevation toward the front for vaporwave effect
                let fade = (y + 10) / 20;
                fade = Math.max(0, Math.min(1, fade));
                elevation *= fade;
                positions.setZ(i, elevation);
            }
            positions.needsUpdate = true;
        }

        // Update time uniform
        this.uniforms.time.value = elapsedTime;
        
        if (this.sphereMesh) {
            // Rotate sphere slowly
            this.sphereMesh.rotation.y += 0.05
            this.sphereMesh.rotation.x += 0.01;
            this.sphereMesh.rotation.z += 0.03;
            const position = this.sphereMesh.position;
            const original = this.sphereMesh.geometry.attributes.originalPosition;
            for (let i = 0; i < position.count; i++) {
                const ox = original.getX(i);
                const oy = original.getY(i);
                const oz = original.getZ(i);
                const t = elapsedTime * 0.5;
                // Use spherical coordinates for more natural movement
                const r = Math.sqrt(ox * ox + oy * oy + oz * oz);
                const theta = Math.atan2(Math.sqrt(ox * ox + oz * oz), oy);
                const phi = Math.atan2(oz, ox);
                // Use all three coordinates for more organic movement
                const npos = [theta * 2 + Math.sin(t), phi * 2 + Math.cos(t)];
                const elevation = this.perlin([ npos + elapsedTime]) * 0.1;
                position.setXYZ(i, ox + elevation, oy + elevation, oz + elevation);
            }
            position.needsUpdate = true;
        }
        // Update cube rotations and animate vertices
        this.cubes.forEach(cube => {
            if (cube.userData && cube.userData.rotationAxis) {
                cube.rotateOnAxis(cube.userData.rotationAxis, cube.userData.rotationSpeed);
            }
            // Animate vertices with Perlin noise
            const positions = cube.geometry.attributes.position;
            const original = cube.geometry.attributes.originalPosition;
            for (let i = 0; i < positions.count; i++) {
                const ox = original.getX(i);
                const oy = original.getY(i);
                const oz = original.getZ(i);
                const t = elapsedTime * 0.7;
                // Use all three coordinates for more organic movement
                const npos = [ox * 0.7 + Math.sin(t), oy * 0.7 + Math.cos(t)];
                const elevation = this.perlin(npos) * 0.25;
                positions.setXYZ(i, ox + elevation, oy + elevation, oz + elevation);
            }
            positions.needsUpdate = true;
        });

        // Update particle positions
        if (this.particles && this.particles.visible) {
            this.updateParticles(deltaTime);
        }
        
        // Update point network animation
        if (this.pointNetwork && this.pointNetwork.visible) {
            this.updatePointNetwork(elapsedTime);
        }
        
        // Apply smooth transitions continuously
        this.applySmoothVisibility();
    }
    
    updateParticles(deltaTime) {
        const positions = this.particles.geometry.attributes.position.array;
        const velocities = this.particles.geometry.attributes.velocity.array;
        const ages = this.particles.geometry.attributes.age.array;
        const lifetimes = this.particles.geometry.attributes.lifetime.array;
        const count = ages.length;

        for (let i = 0; i < count; i++) {
            const i3 = i * 3;
            // Update age
            ages[i] += deltaTime;
            let fade = 1.0 - (ages[i] / lifetimes[i]);
            fade = Math.max(0, Math.min(1, fade));

            // Update positions based on velocities
            positions[i3] += velocities[i3];
            positions[i3 + 1] += velocities[i3 + 1];

            // If particle is "dead", respawn it
            if (ages[i] >= lifetimes[i]) {
                // Reset to edge
                positions[i3] = (Math.random() - 0.5) * 20;
                positions[i3 + 1] = (Math.random() - 0.5) * 10;
                velocities[i3] = -positions[i3] * 0.01;
                velocities[i3 + 1] = -positions[i3 + 1] * 0.001;
                ages[i] = 0;
                lifetimes[i] = 1.5 + Math.random() * 2.0;
            }
        }
        this.particles.geometry.attributes.position.needsUpdate = true;
        this.particles.geometry.attributes.age.needsUpdate = true;
        this.particles.geometry.attributes.lifetime.needsUpdate = true;
        this.particles.material.uniforms.time.value += deltaTime;
    }
    
    // Update the updatePointNetwork method to animate lines as well
updatePointNetwork(elapsedTime) {
    const positions = this.pointNetwork.geometry.attributes.position.array;
    
    // Add subtle floating animation to points
    for (let i = 0; i < positions.length; i += 3) {
        const originalY = positions[i + 1];
        positions[i + 1] = originalY + Math.sin(elapsedTime + i * 0.1) * 0.1;
    }
    
    this.pointNetwork.geometry.attributes.position.needsUpdate = true;
    
    // Update line connections to follow point movement
    if (this.pointNetworkLines && this.pointNetworkLinesData) {
        const linePositions = this.pointNetworkLines.geometry.attributes.position.array;
        const pointPositions = this.pointNetwork.geometry.attributes.position.array;
        
        // Update line endpoints to match current point positions
        for (let i = 0; i < linePositions.length; i += 6) {
            // Find which points these line endpoints correspond to
            // This is simplified - in a more complex system you'd store point indices
            const startIdx = Math.floor(i / 6) % (pointPositions.length / 3);
            const endIdx = (startIdx + 1) % (pointPositions.length / 3);
            
            const startI3 = startIdx * 3;
            const endI3 = endIdx * 3;
            
            // Update line start point
            linePositions[i] = pointPositions[startI3];
            linePositions[i + 1] = pointPositions[startI3 + 1];
            linePositions[i + 2] = pointPositions[startI3 + 2];
            
            // Update line end point  
            linePositions[i + 3] = pointPositions[endI3];
            linePositions[i + 4] = pointPositions[endI3 + 1];
            linePositions[i + 5] = pointPositions[endI3 + 2];
        }
        
        this.pointNetworkLines.geometry.attributes.position.needsUpdate = true;
        
        // Add pulsing effect to line opacity
        const pulseOpacity = 0.2 + Math.sin(elapsedTime * 2) * 0.1;
        this.pointNetworkLines.material.opacity = pulseOpacity * this.transitionStates.pointNetwork.opacity;
    }
}
    
    onWindowResize(width, height) {
        this.uniforms.resolution.value.set(width, height);
    }
    
    // Methods for handling cube interactions (future implementation)
    onCubeHover(cubeIndex) {
        if (this.cubes[cubeIndex]) {
            // Scale up cube
            this.cubes[cubeIndex].scale.setScalar(1.25);
        }
    }
    
    onCubeUnhover(cubeIndex) {
        if (this.cubes[cubeIndex]) {
            // Reset cube scale
            this.cubes[cubeIndex].scale.setScalar(1);
        }
    }
    
    onCubeClick(cubeIndex) {
        console.log(`Cube ${cubeIndex} clicked`);
        // TODO: Show platform popover for this release
    }
    
    // Utility methods for smooth transitions
    lerp(start, end, factor) {
        return start + (end - start) * factor;
    }
    
    smoothstep(edge0, edge1, x) {
        const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
        return t * t * (3 - 2 * t);
    }
    
    easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    }
}

export { SceneManager };