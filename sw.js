self.addEventListener('install', e => {
    e.waitUntil(
        caches.open('mmust-cache').then(cache => {
            return cache.addAll([
                'index.html',
                'dashboard.html',
                'grades.html',
                'css/styles.css',
                'js/script.js',
                'images/mmust_logo.png'
            ]);
        })
    );
});

self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
});
