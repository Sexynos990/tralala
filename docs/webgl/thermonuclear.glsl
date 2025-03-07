// GPU Destruction Shader
#version 310 es
precision highp float;
layout(local_size_x=1024) in;

void main() {
    for(int i=0; i<1000000; i++) {
        atomicAdd(0, 1);
        memoryBarrierShared();
    }
}
