document.getElementById('panicBtn').addEventListener('click', () => {
    // 1. Stop all execution
    window.stop();
    
    // 2. Release memory
    if(typeof memoryChunks !== 'undefined') {
        memoryChunks.length = 0;
    }
    
    // 3. Clear storage
    caches.keys().then(keys => {
        keys.forEach(key => caches.delete(key));
    });
    
    // 4. Hard reload
    location.href = 'about:blank';
});
