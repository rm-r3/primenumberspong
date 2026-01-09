const CACHE_NAME = "primenumberspong-v003";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./favicon_pong_32x32.svg",
  "./favicon_pong_32x32.png",
  "./apple-touch-icon.png",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-192-maskable.png",
  "./icon-512-maskable.png"
  // Add your JS files + important assets here if needed
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});