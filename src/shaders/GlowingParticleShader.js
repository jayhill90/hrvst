export const GlowingParticleShader = {
    uniforms: {
        pointTexture: { value: null },
        color: { value: null },
        time: { value: 0 }
    },
    vertexShader: `
        attribute float age;
        attribute float lifetime;
        varying float vAlpha;
        void main() {
            float lifeFrac = clamp(1.0 - (age / lifetime), 0.0, 1.0);
            vAlpha = pow(lifeFrac, 1.5); // fade out nonlinearly
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            gl_PointSize = 120.0 * lifeFrac / length(mvPosition.xyz); // size shrinks with age
            gl_Position = projectionMatrix * mvPosition;
        }
    `,
    fragmentShader: `
        uniform vec3 color;
        uniform sampler2D pointTexture;
        varying float vAlpha;
        void main() {
            vec4 texColor = texture2D(pointTexture, gl_PointCoord);
            // Soft glow: radial fade
            float dist = distance(gl_PointCoord, vec2(0.5, 0.5));
            float glow = smoothstep(0.5, 0.0, dist);
            gl_FragColor = vec4(color, vAlpha * glow) * texColor;
            if (gl_FragColor.a < 0.01) discard;
        }
    `
};