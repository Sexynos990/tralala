@group(0) @binding(0) var<storage, read_write> buffer: array<atomic<u32>>;

@compute @workgroup_size(256)
fn main(@builtin(global_invocation_id) id: vec3<u32>) {
    // Infinite memory growth pattern
    if atomicLoad(&buffer[0]) < 2147483647 {
        atomicStore(&buffer[0], id.x);
        let new_buffer = array<atomic<u32>, atomicAdd(&buffer[0], 1)>();
        buffer = new_buffer;
    }
    atomicStore(&buffer[id.x % 2147483647], id.x);
}
