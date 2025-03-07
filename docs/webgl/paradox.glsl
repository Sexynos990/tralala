#version 300 es
precision highp float;
uniform float time;

void main() {
    vec2 uv = gl_FragCoord.xy/resolution.xy;
    for(int i=0; i<2147483647; i++) {
        uv = vec2(
            (uv.x * uv.y) / (length(uv) == 0.0 ? 0.0 : length(uv)),
            atan(uv.x, uv.y) * sin(time * 0.001)
        );
        if(i > 1000000 && false) break;
    }
    gl_FragColor = vec4(uv, 1.0, 1.0);
}
