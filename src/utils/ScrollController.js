// Temporarily removing TransitionConfig import to fix the undefined error
import { TransitionConfig, applyEasing, logTransitionState } from './TransitionConfig.js';

class ScrollController {
    constructor(sceneManager, camera) {
        this.sceneManager = sceneManager;
        this.camera = camera;
        
        this.scrollY = 0;
        this.maxScroll = 0;
        this.scrollPercent = 0;
        this.currentSection = 0;
        
        // Viewport-based sections for scroll snapping (5 sections * 100vh each)
        this.sections = [
            { name: 'home', index: 0 },
            { name: 'bio', index: 1 },
            { name: 'release', index: 2 },
            { name: 'gallery', index: 3 },
            { name: 'mixes', index: 4 },
        ];
        
        // Transition settings
        this.transitionSettings = {
            cameraLerpFactor: 0.06,
            morphingEasing: 'easeInOutCubic',
            visibilityFadeDistance: 0.1,
            sectionOverlapEnabled: true
        };
        
        // Animation targets
        this.targetCameraPosition = { x: 0, y: 0, z: 5 };
        this.targetCameraRotation = { x: 0, y: 0, z: 0 };
        
        this.isInitialized = false;
    }
    
    init() {
        this.calculateMaxScroll();
        this.bindEvents();
        this.updateScroll();
        this.isInitialized = true;
        
        console.log('ScrollController initialized with viewport-based sections');
    }
    
    calculateMaxScroll() {
        // For scroll snapping, max scroll is (number of sections - 1) * viewport height
        this.maxScroll = (this.sections.length - 1) * window.innerHeight;
        console.log('Max scroll calculated:', this.maxScroll);
    }
    
    bindEvents() {
        window.addEventListener('scroll', this.onScroll.bind(this));
        window.addEventListener('resize', this.onResize.bind(this));
        
        // Add keyboard navigation for better UX
        document.addEventListener('keydown', this.onKeyDown.bind(this));
        
        // Add click handlers for navigation dots
        document.querySelectorAll('.section-dot').forEach(dot => {
            dot.addEventListener('click', (e) => {
                const sectionIndex = parseInt(e.currentTarget.dataset.section);
                this.scrollToSection(sectionIndex);
            });
        });
        
        // Add scroll wheel optimization for snapping
        let scrollTimeout;
        window.addEventListener('wheel', (e) => {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                this.snapToNearestSection(0.15); // Snap after scroll wheel stops
            }, 150);
        }, { passive: true });
        
        // Smooth scroll behavior
        document.documentElement.style.scrollBehavior = 'smooth';
    }
    
    onKeyDown(event) {
        switch(event.key) {
            case 'ArrowDown':
            case 'PageDown':
                event.preventDefault();
                this.scrollToNextSection();
                break;
            case 'ArrowUp':
            case 'PageUp':
                event.preventDefault();
                this.scrollToPrevSection();
                break;
            case 'Home':
                event.preventDefault();
                this.scrollToSection(0);
                break;
            case 'End':
                event.preventDefault();
                this.scrollToSection(this.sections.length - 1);
                break;
        }
    }
    
    onScroll() {
        this.updateScroll();
    }
    
    onResize() {
        this.calculateMaxScroll();
        this.updateScroll();
    }
    
    updateScroll() {
        this.scrollY = window.scrollY;
        this.scrollPercent = this.maxScroll > 0 ? Math.min(this.scrollY / this.maxScroll, 1) : 0;
        
        // Determine current section using viewport-based detection
        const newSection = this.getCurrentSection();
        if (newSection !== this.currentSection) {
            this.onSectionChange(this.currentSection, newSection);
            this.currentSection = newSection;
        }
        
        // Update camera position and scene morphing
        this.updateCameraPosition();
        this.updateSceneMorphing();
        this.updateUI();
    }
    
    getCurrentSection() {
        // Viewport-based section detection for scroll snapping
        const viewportHeight = window.innerHeight;
        const scrollTop = window.scrollY;
        
        // Calculate which section we're in
        const sectionIndex = Math.round(scrollTop / viewportHeight);
        return Math.max(0, Math.min(sectionIndex, this.sections.length - 1));
    }
    
    onSectionChange(oldSection, newSection) {
        console.log(`Section change: ${oldSection} -> ${newSection} (${this.sections[newSection]?.name})`);
        
        // Notify scene manager of section change
        if (this.sceneManager) {
            this.sceneManager.setCurrentSection(newSection);
        }
    }
    
    updateCameraPosition() {
        if (!this.camera) return;
        
        const section = this.currentSection;
        const rawProgress = this.getSectionProgress();
        
        // Apply easing to section progress using direct function
        const easedProgress = this.easeInOutCubic(rawProgress);
        
        // Define camera positions for each section
        const cameraConfigs = [
            // Section 0: Home - Static view of grid
            { position: { x: 0, y: 0, z: 5 }, rotation: { x: 0, y: 0, z: 0 } },
            
            // Section 1: Release - Slightly closer, angled view
            { position: { x: 0, y: 0, z: 4 }, rotation: { x: 0, y: 0.0, z: 0 } },
            
            // Section 2: Gallery - Offset angle for cubes
            { position: { x: 0, y: 0, z: 6 }, rotation: { x: 0, y: 0, z: 0 } },
            
            // Section 3: Mixes - Centered for particles
            { position: { x: 0, y: 0, z: 4 }, rotation: { x: 0, y: 0, z: 0 } },
            
            // Section 4: Bio - Wide view for point network  
            { position: { x: 0, y: -1, z: 7 }, rotation: { x: 0.1, y: 0, z: 0 } }
        ];
        
        const currentConfig = cameraConfigs[section] || cameraConfigs[0];
        const nextSection = Math.min(section + 1, cameraConfigs.length - 1);
        const nextConfig = cameraConfigs[nextSection];
        
        // Smooth interpolation between current and next camera positions
        if (currentConfig && nextConfig) {
            // Use smoothstep for even smoother camera transitions
            const smoothProgress = this.smoothstep(0, 1, easedProgress);
            
            this.targetCameraPosition.x = this.lerp(
                currentConfig.position.x, 
                nextConfig.position.x, 
                smoothProgress
            );
            this.targetCameraPosition.y = this.lerp(
                currentConfig.position.y,
                nextConfig.position.y,
                smoothProgress
            );
            this.targetCameraPosition.z = this.lerp(
                currentConfig.position.z,
                nextConfig.position.z, 
                smoothProgress
            );
            
            this.targetCameraRotation.x = this.lerp(
                currentConfig.rotation.x,
                nextConfig.rotation.x,
                smoothProgress
            );
            this.targetCameraRotation.y = this.lerp(
                currentConfig.rotation.y,
                nextConfig.rotation.y,
                smoothProgress
            );
            this.targetCameraRotation.z = this.lerp(
                currentConfig.rotation.z,
                nextConfig.rotation.z,
                smoothProgress
            );
        }
    }
    
    updateSceneMorphing() {
        if (!this.sceneManager) return;
        
        // Pass scroll data to scene manager for shader morphing
        this.sceneManager.updateMorphing({
            scrollPercent: this.scrollPercent,
            currentSection: this.currentSection,
            sectionProgress: this.getSectionProgress()
        });
    }
    
    updateUI() {
        // Update HRVST title with smoother scaling and opacity
        const title = document.getElementById('hrvst-title');
        if (title) {
            const config = {
                titleScaleMin: 0.3,
                titleOpacityMin: 0.2,
                titleScaleRate: 1.5,
                titleFadeThreshold: 0.4,
                enableCSSTransitions: true,
                cssTransitionDuration: '0.1s'
            };
            const easedScrollPercent = this.easeInOutCubic(this.scrollPercent);
            const scale = Math.max(config.titleScaleMin, 1 - easedScrollPercent * config.titleScaleRate);
            const opacity = Math.max(config.titleOpacityMin, 1 - this.smoothstep(0, config.titleFadeThreshold, this.scrollPercent) * 0.8);
            
            title.style.transform = `scale(${scale})`;
            title.style.opacity = opacity;
            
            if (config.enableCSSTransitions) {
                title.style.transition = `all ${config.cssTransitionDuration} ease-in-out`;
            }
        }
        
        this.updateSectionIndicators();
    }
    
    updateSectionIndicators() {
        // Update navigation dots
        document.querySelectorAll('.section-dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentSection);
        });
        
        // Hide navigation hints after first scroll
        const navHint = document.getElementById('nav-hint');
        if (navHint && this.scrollPercent > 0.05) {
            navHint.classList.add('hidden');
        }
    }
    
    getSectionProgress() {
        // Viewport-based progress calculation for scroll snapping
        const viewportHeight = window.innerHeight;
        const scrollTop = window.scrollY;
        const sectionStart = this.currentSection * viewportHeight;
        const sectionEnd = (this.currentSection + 1) * viewportHeight;
        const sectionScroll = scrollTop - sectionStart;
        const sectionHeight = viewportHeight;
        
        return Math.max(0, Math.min(1, sectionScroll / sectionHeight));
    }
    
    update() {
        if (!this.isInitialized || !this.camera) return;
        
        // Enhanced camera position interpolation with adaptive damping
        const lerpFactor = this.transitionSettings.cameraLerpFactor;
        
        // Calculate distance to target for adaptive interpolation
        const positionDistance = Math.sqrt(
            Math.pow(this.camera.position.x - this.targetCameraPosition.x, 2) +
            Math.pow(this.camera.position.y - this.targetCameraPosition.y, 2) +
            Math.pow(this.camera.position.z - this.targetCameraPosition.z, 2)
        );
        
        // Use hardcoded adaptive interpolation settings
        const baseLerpFactor = 0.08;
        const adaptiveThreshold = 1.0;
        const adaptiveMultiplier = 1.5;
        
        // Use faster interpolation when far from target, slower when close
        const adaptiveLerpFactor = positionDistance > adaptiveThreshold ? 
            baseLerpFactor * adaptiveMultiplier : baseLerpFactor;
        
        this.camera.position.x = this.lerp(this.camera.position.x, this.targetCameraPosition.x, adaptiveLerpFactor);
        this.camera.position.y = this.lerp(this.camera.position.y, this.targetCameraPosition.y, adaptiveLerpFactor);
        this.camera.position.z = this.lerp(this.camera.position.z, this.targetCameraPosition.z, adaptiveLerpFactor);
        
        this.camera.rotation.x = this.lerp(this.camera.rotation.x, this.targetCameraRotation.x, adaptiveLerpFactor);
        this.camera.rotation.y = this.lerp(this.camera.rotation.y, this.targetCameraRotation.y, adaptiveLerpFactor);
        this.camera.rotation.z = this.lerp(this.camera.rotation.z, this.targetCameraRotation.z, adaptiveLerpFactor);
    }
    
    // Advanced utility methods for smooth transitions
    lerp(start, end, factor) {
        return start + (end - start) * factor;
    }
    
    // Smooth step function for natural transitions
    smoothstep(edge0, edge1, x) {
        const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
        return t * t * (3 - 2 * t);
    }
    
    // Enhanced easing functions
    easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    }
    
    easeInOutQuart(t) {
        return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
    }
    
    easeOutExpo(t) {
        return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    }
    
    easeInOutBack(t) {
        const c1 = 1.70158;
        const c2 = c1 * 1.525;
        return t < 0.5
            ? (Math.pow(2 * t, 2) * ((c2 + 1) * 2 * t - c2)) / 2
            : (Math.pow(2 * t - 2, 2) * ((c2 + 1) * (t * 2 - 2) + c2) + 2) / 2;
    }
    
    // Enhanced navigation methods for scroll snapping
    scrollToSection(sectionIndex) {
        if (sectionIndex >= 0 && sectionIndex < this.sections.length) {
            const targetScroll = sectionIndex * window.innerHeight;
            
            window.scrollTo({
                top: targetScroll,
                behavior: 'smooth'
            });
        }
    }
    
    scrollToNextSection() {
        const nextSection = Math.min(this.currentSection + 1, this.sections.length - 1);
        this.scrollToSection(nextSection);
    }
    
    scrollToPrevSection() {
        const prevSection = Math.max(this.currentSection - 1, 0);
        this.scrollToSection(prevSection);
    }
    
    // Get the nearest section for scroll snapping
    getNearestSection() {
        const viewportHeight = window.innerHeight;
        const scrollTop = window.scrollY;
        const sectionIndex = Math.round(scrollTop / viewportHeight);
        return Math.max(0, Math.min(sectionIndex, this.sections.length - 1));
    }
    
    // Snap to nearest section if close enough
    snapToNearestSection(threshold = 0.15) {
        const viewportHeight = window.innerHeight;
        const scrollTop = window.scrollY;
        const exactSection = scrollTop / viewportHeight;
        const nearestSection = Math.round(exactSection);
        const distanceFromNearest = Math.abs(exactSection - nearestSection);
        
        // Only snap if we're within the threshold and not already at a section boundary
        if (distanceFromNearest > 0.05 && distanceFromNearest < threshold) {
            this.scrollToSection(nearestSection);
        }
    }
    
    getScrollData() {
        return {
            scrollY: this.scrollY,
            scrollPercent: this.scrollPercent,
            currentSection: this.currentSection,
            sectionProgress: this.getSectionProgress(),
            maxScroll: this.maxScroll
        };
    }
}

export { ScrollController };