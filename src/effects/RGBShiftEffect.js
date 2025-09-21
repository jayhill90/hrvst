import { Effect } from 'postprocessing';

const fragmentShader = /* glsl */`
    uniform float amount;
    uniform float time;

    // Simple pseudo-random noise function
    float rand(vec2 co){
        return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
    }

    void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
        // Create a noisy, time-varying offset
        float noise = rand(sin(uv)s + time) * 2.0 - 1.0; // -1 to 1
        vec2 offset = amount * vec2(cos(time), sin(time)) * noise * 50.0;

        vec4 red = texture2D(inputBuffer, uv + offset);
        vec4 green = texture2D(inputBuffer, uv);
        vec4 blue = texture2D(inputBuffer, uv - offset);

        outputColor = vec4(red.r, green.g, blue.b, 1.0);
    }
`;

export class RGBShiftEffect extends Effect {
    constructor({ amount = 0.0 } = {}) {
        super('RGBShiftEffect', fragmentShader, {
            uniforms: new Map([
                ['amount', { value: amount }],
                ['time', { value: 0.0 }]
            ])
        });
    }

    get amount() {
        return this.uniforms.get('amount').value;
    }

    set amount(value) {
        this.uniforms.get('amount').value = value;
    }
}
