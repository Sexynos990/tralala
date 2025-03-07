# Kernel Stress Test

Hosted at: https://Sexynos990.github.io/tralala/

## Features
- WASM Memory Exhaustion
- WebGL 2.0 Shader Bomb
- SharedArrayBuffer Thread Flood
- Emergency Kill Switch

## Monitoring
```bash
# Live kernel log monitoring
adb shell 'dmesg -w | grep -E "oom|panic|fault"'
