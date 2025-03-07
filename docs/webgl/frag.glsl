// Adaptive fragment shader
precision highp float;
uniform float time;

void main() {
    vec2 uv = gl_FragCoord.xy/resolution.xy;
    for(int i=0; i<${isLowEnd ? '1000' : '10000'}; i++) {
        uv = abs(uv * 1.2 - 0.6);
        uv.x += sin(time + uv.y * 10.0) * 0.1;
    }
    gl_FragColor = vec4(uv, sin(time), 1.0);
}
