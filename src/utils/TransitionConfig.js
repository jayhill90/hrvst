// Centralized configuration for smooth transitions
// This file makes it easy to fine-tune all transition parameters

export const TransitionConfig = {
    // Camera transition settings
    camera: {
        lerpFactor: 0.08,           // Base interpolation speed
        adaptiveThreshold: 1.0,     // Distance threshold for adaptive speed
        adaptiveMultiplier: 1.5,    // Speed multiplier when far from target
        easingFunction: 'easeInOutCubic' // Default easing for camera movement
    },
    
    // Object visibility transitions
    visibility: {
        fadeDistance: 0.5,          // Scroll distance for fade in/out
        transitionSpeed: 0.5,      // Opacity interpolation speed
        minOpacity: 0.2,          // Threshold for hiding objects
        gridMinOpacity: 0.3,       // Minimum opacity for background grid
    },
    
    // Section boundaries and overlaps
    sections: {
        overlapEnabled: true,
        transitionZone: 0.05,       // Overlap zone size
        boundaries: [
            { start: 0.0, end: 0.20, name: 'home' },
            { start: 0.20, end: 0.40, name: 'bio' },
            { start: 0.4, end: 0.6, name: 'release' },
            { start: 0.6, end: 0.8, name: 'gallery' },
            { start: 0.8, end: 1.0, name: 'mixes' }
        ]
    },
    
    // Shader morphing parameters
    shaderMorphing: {
        morphFactorLerpSpeed: 0.1,      // How fast shader morphing catches up
        sectionIndexLerpSpeed: 0.05,    // How fast section changes blend
        useEasedProgress: true,         // Apply easing to section progress
        easingFunction: 'easeInOutCubic'
    },
    
    // UI element transitions
    ui: {
        titleScaleMin: 0.3,            // Minimum scale for HRVST title
        titleOpacityMin: 0.2,          // Minimum opacity for HRVST title
        titleScaleRate: 1.5,           // How fast title scales down
        titleFadeThreshold: 0.4,       // Where title starts fading
        enableCSSTransitions: true,    // Use CSS transitions for extra smoothness
        cssTransitionDuration: '0.1s'
    },
    
    // Performance settings
    performance: {
        maxFrameUpdates: 60,           // Cap update frequency if needed
        enableAdaptiveQuality: false,  // Future: reduce quality during fast scrolling
        debugMode: false               // Enable console logging for debugging
    }
};

// Helper function to get easing functions by name
export const EasingFunctions = {
    linear: (t) => t,
    
    easeInOutCubic: (t) => {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    },
    
    easeInOutQuart: (t) => {
        return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
    },
    
    easeOutExpo: (t) => {
        return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    },
    
    easeInOutBack: (t) => {
        const c1 = 1.70158;
        const c2 = c1 * 1.525;
        return t < 0.5
            ? (Math.pow(2 * t, 2) * ((c2 + 1) * 2 * t - c2)) / 2
            : (Math.pow(2 * t - 2, 2) * ((c2 + 1) * (t * 2 - 2) + c2) + 2) / 2;
    },
    
    smoothstep: (edge0, edge1, x) => {
        const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
        return t * t * (3 - 2 * t);
    }
};

// Utility function to apply easing by name
export function applyEasing(easingName, t) {
    const easingFn = EasingFunctions[easingName] || EasingFunctions.linear;
    return easingFn(t);
}

// Debug helper for logging transition states
export function logTransitionState(component, data) {
    if (TransitionConfig.performance.debugMode) {
        console.log(`[${component}]`, data);
    }
}