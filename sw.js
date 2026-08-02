const CACHE = "tv-companion-v1";
const SHELL = ["./index.html", "./manifest.json", "./icon-192.png", "./icon-512.png"];

self.addEventListener("install", e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL)));
  self.skipWaiting();
});

self.addEventListener("activate", e=>{
  e.waitUntil(
    caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener("fetch", e=>{
  const url = new URL(e.request.url);
  // Don't cache TMDB API calls or images — always go live for those
  if(url.hostname.includes("themoviedb.org")){
    return;
  }
  e.respondWith(
    caches.match(e.request).then(cached=>cached || fetch(e.request))
  );
});
