self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('fox-store').then((cache) => cache.addAll([
      '/komibase/',
      '/komibase/index.html',
      '/komibase/index.js',
      '/komibase/style.css',
      '/komibase/images/fox1.jpg',
      '/komibase/images/fox2.jpg',
      '/komibase/images/fox3.jpg',
      '/komibase/images/fox4.jpg',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
