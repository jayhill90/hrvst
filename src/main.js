import * as THREE from 'three';
import { EffectComposer, RenderPass } from 'postprocessing';
import { SceneManager } from './scenes/SceneManager.js';
import { ScrollController } from './utils/ScrollController.js';
import { DataManager } from './data/DataManager.js';

class HRVSTApp {
    constructor() {
        this.container = document.getElementById('canvas-container');
        this.loadingElement = document.getElementById('loading');
        
        // Core Three.js components
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.composer = null;
        
        // Custom managers
        this.sceneManager = null;
        this.scrollController = null;
        this.dataManager = null;
        
        // Animation
        this.clock = new THREE.Clock();
        this.isInitialized = false;
        
        this.init();
    }
    
    async init() {
        try {
            // Initialize data manager first
            this.dataManager = new DataManager();

            // DEBUG: Force a single render after setup
            if (this.renderer && this.scene && this.camera) {
                console.log('Setup complete, animation loop will handle rendering');
            } else {
                console.warn('Renderer, scene, or camera not ready for debug render');
            }
            await this.dataManager.loadData();
            
            // Setup Three.js
            this.setupThreeJS();
            
            // Setup post-processing
            this.setupPostProcessing();
            
            // Initialize scene manager
            this.sceneManager = new SceneManager(this.scene, this.camera, this.renderer);
            await this.sceneManager.init();
            
            // Initialize scroll controller
            this.scrollController = new ScrollController(this.sceneManager, this.camera);
            this.scrollController.init();
            
            // Populate UI with data
            this.populateUI();
            
            // Setup global event handlers
            this.setupEventHandlers();
            
            // Start the render loop
            this.animate();
            
            // Hide loading screen
            setTimeout(() => {
                this.loadingElement.classList.add('hidden');
                this.isInitialized = true;
            }, 1000);
            
        } catch (error) {
            console.error('Failed to initialize HRVST app:', error);
            this.showError();
        }
    }
    
    setupThreeJS() {
        // Scene
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x000000);

        // Camera: move up and back, look at grid
        this.camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        this.camera.position.set(0, 20, 30);
        this.camera.lookAt(0, 0, 0);

        // Renderer
        this.renderer = new THREE.WebGLRenderer({
            powerPreference: "high-performance",
            antialias: true,
            stencil: false,
            depth: true
        });

        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.outputColorSpace = THREE.SRGBColorSpace;

        this.container.appendChild(this.renderer.domElement);
        // Ensure canvas is not covered
        this.renderer.domElement.style.zIndex = 10;
        this.renderer.domElement.style.position = 'absolute';
        this.renderer.domElement.style.top = 0;
        this.renderer.domElement.style.left = 0;

        // Canvas setup complete


        // Grid creation handled by SceneManager
        // Set camera to vaporwave angle
        this.camera.position.set(0, 15, 30);
        this.camera.lookAt(0, 0, 0);

        // Ensure canvas is behind UI content
        this.renderer.domElement.style.zIndex = 1;
        this.renderer.domElement.style.pointerEvents = 'none';
    }
    
    setupPostProcessing() {
        // Initialize post-processing composer
        this.composer = new EffectComposer(this.renderer, {
            frameBufferType: THREE.HalfFloatType
        });
        
        // Add render pass - this is essential for rendering the scene
        const renderPass = new RenderPass(this.scene, this.camera);
        this.composer.addPass(renderPass);
    }
    
    populateUI() {
        const data = this.dataManager.getData();
        
        // Latest release info
        const latestRelease = data.latestRelease;
        if (latestRelease) {
            document.getElementById('latest-release-title').textContent = `"${latestRelease.title}"`;
            document.getElementById('latest-release-description').textContent = 
                `Explore the latest sounds from ${latestRelease.artist}`;
            // Insert cover art image
            const coverArtEl = document.getElementById('latest-release-cover');
            if (coverArtEl && latestRelease.coverArt) {
                coverArtEl.src = latestRelease.coverArt;
                coverArtEl.alt = `${latestRelease.title} cover`;
                coverArtEl.style.display = 'block';
            }
        }
        
        // Artist bio
        if (data.artistInfo && data.artistInfo.bio) {
            document.getElementById('artist-bio').innerHTML = data.artistInfo.bio.replace(/\n/g, '<br>');
        }
        // Press kit link
        if (data.artistInfo && data.artistInfo.pressKit) {
            const pressKitLink = document.getElementById('press-kit-link');
            if (pressKitLink) {
                pressKitLink.href = data.artistInfo.pressKit;
            }
            const contactLink = document.getElementById('contact-link');
            if (contactLink) {
                contactLink.href = data.artistInfo.contact.general;
            }
        }
        
        // Render release cards
        this.renderReleaseCards(data.releases);

        // DJ Mix player
        this.setupMixPlayer(data.djMixes);
    }

    renderReleaseCards(releases) {
        const container = document.getElementById('release-cards');
        if (!container || !releases) return;
        container.innerHTML = '';
        releases.forEach(release => {
            const card = document.createElement('div');
            card.className = 'release-card';
            card.innerHTML = `
                <img src="${release.coverArt}" alt="${release.title} cover" />
            `;
            card.addEventListener('click', () => this.showAlbumPopover(release));
            container.appendChild(card);
        });
    }

    showAlbumPopover(release) {
        const popover = document.getElementById('album-popover');
        const art = document.getElementById('album-popover-art');
        const title = document.getElementById('album-popover-title');
        const links = document.getElementById('album-popover-links');
        if (!popover || !art || !title || !links) return;

        art.src = release.coverArt;
        art.alt = `${release.title} cover`;
        title.textContent = release.title + ' on ' + release.recordLabel;
        links.innerHTML = '';

        if (release.platforms) {
            Object.entries(release.platforms).forEach(([platform, url]) => {
                if (url) {
                    const a = document.createElement('a');
                    a.href = url;
                    a.target = '_blank';
                    a.className = 'album-popover-link';
                    a.textContent = platform.charAt(0).toUpperCase() + platform.slice(1);
                    links.appendChild(a);
                }
            });
        }
        popover.classList.add('show');
    }

    closeAlbumPopover() {
        document.getElementById('album-popover').classList.remove('show');
    }
    
    setupMixPlayer(mixData) {
        const playerContainer = document.getElementById('mix-player');
        
        if (mixData && mixData.playlistUrl) {
            // Create SoundCloud embed if URL is from SoundCloud
            if (mixData.playlistUrl.includes('soundcloud.com')) {
                playerContainer.innerHTML = `
                    <iframe width="100%" height="300" scrolling="no" frameborder="no" 
                            allow="autoplay" 
                            src="https://w.soundcloud.com/player/?url=${encodeURIComponent(mixData.playlistUrl)}&color=%23ffffff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
                    </iframe>
                `;
            } else if (mixData.alternateUrl) {
                // Fallback for YouTube or other platforms
                playerContainer.innerHTML = `
                    <p style="text-align: center;">
                        <a href="${mixData.alternateUrl}" target="_blank" class="listen-button">
                            Listen on External Platform
                        </a>
                    </p>
                `;
            }
        } else {
            playerContainer.innerHTML = '<p style="text-align: center;">Mix player coming soon...</p>';
        }
    }
    
    setupEventHandlers() {
        // Window resize
        window.addEventListener('resize', this.onWindowResize.bind(this));
        
        // Listen button for latest release
        document.getElementById('latest-listen-btn').addEventListener('click', () => {
            this.showPlatformPopover(this.dataManager.getData().latestRelease);
        });
        
        // Global click handler for platform popovers
        window.addEventListener('click', (event) => {
            const popover = document.getElementById('platform-popover');
            if (event.target === popover) {
                this.closePlatformPopover();
            }
        });
        
        // Escape key to close popover
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                this.closePlatformPopover();
            }
        });

        // Album popover close
        window.closeAlbumPopover = this.closeAlbumPopover.bind(this);

        // Optional: close popover on outside click or Escape
        window.addEventListener('click', (event) => {
            const popover = document.getElementById('album-popover');
            if (event.target === popover) {
                this.closeAlbumPopover();
            }
        });
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                this.closeAlbumPopover();
            }
        });
    }
    
    showPlatformPopover(releaseData) {
        if (!releaseData || !releaseData.platforms) return;
        
        const popover = document.getElementById('platform-popover');
        const title = document.getElementById('popover-title');
        const linksContainer = document.getElementById('platform-links');
        
        title.textContent = `Choose Your Platform for "${releaseData.title}"`;
        
        // Clear existing links
        linksContainer.innerHTML = '';
        
        // Add platform links
        const platforms = releaseData.platforms;
        Object.keys(platforms).forEach(platform => {
            if (platforms[platform]) {
                const link = document.createElement('a');
                link.href = platforms[platform];
                link.target = '_blank';
                link.className = 'platform-link';
                link.textContent = platform.charAt(0).toUpperCase() + platform.slice(1);
                linksContainer.appendChild(link);
            }
        });
        
        popover.classList.add('show');
    }
    
    closePlatformPopover() {
        document.getElementById('platform-popover').classList.remove('show');
    }
    
    onWindowResize() {
        // Update camera
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        
        // Update renderer
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.composer.setSize(window.innerWidth, window.innerHeight);
        
        // Update scene manager
        if (this.sceneManager) {
            this.sceneManager.onWindowResize(window.innerWidth, window.innerHeight);
        }
    }
    
    animate() {
        requestAnimationFrame(this.animate.bind(this));
        
        if (!this.isInitialized) return;
        
        const deltaTime = this.clock.getDelta();
        const elapsedTime = this.clock.getElapsedTime();
        
        // Update scene manager
        if (this.sceneManager) {
            this.sceneManager.update(deltaTime, elapsedTime);
        }
        
        // Update scroll controller
        if (this.scrollController) {
            this.scrollController.update();
        }
        
        // Render
        this.composer.render();
    }
    
    showError() {
        const loadingText = document.querySelector('.loading-text');
        if (loadingText) {
            loadingText.textContent = 'ERROR LOADING HRVST';
            loadingText.style.color = '#ff4444';
        }
    }
}

// Global functions for HTML event handlers
window.closePlatformPopover = function() {
    document.getElementById('platform-popover').classList.remove('show');
};

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new HRVSTApp();
});

export { HRVSTApp };