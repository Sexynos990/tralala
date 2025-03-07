// Memory Bomb
const memory = new WebAssembly.Memory({ initial: 1000, maximum: 0xffff });
const buffer = new Uint8Array(memory.buffer);

// GPU Stress
const gl = document.getElementById('glCanvas').getContext('webgl');
const shader = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(shader, `
    void main() {
        for(int i=0; i<100000; i++) {
            gl_FragColor = vec4(sin(float(i)), 0.0, 0.0, 1.0);
        }
    }
`);
gl.compileShader(shader);

// Crash reporting
window.addEventListener('error', e => {
    fetch(`https://api.github.com/issues/${YOUR_REPO_ID}/comments`, {
        method: 'POST',
        body: JSON.stringify({body: `CRASH: ${e.message}`})
    });
});
