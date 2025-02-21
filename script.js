function checkHouse(){
    let indexn = document.getElementById("inum");
    let indexnum = indexn.value;
    console.log(indexnum)
    if (indexnum % 4 == 1) {
        window.alert("Cordowa")
    } else if (indexnum % 4 == 0) {
        window.alert("Nizamiya")
    } else if (indexnum % 4 == 2) {
        window.alert("Al-Zahra")
    } else {
        window.alert("Al-Azhar")
    }
}


if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js");
}

self.addEventListener("install", (e) => {
    console.log("[Service Worker] Install");
});

const cacheName = "checkhouse-v1";
const appShellFiles = [
  "/index.html",
  "/script.js",
  "/style.css",
  "/logo.jpg",
  "/logo.webp",
  "/manifest.json"
];

self.addEventListener("install", (e) => {
    console.log("[Service Worker] Install");
    e.waitUntil(
      (async () => {
        const cache = await caches.open(cacheName);
        console.log("[Service Worker] Caching all: app shell and content");
        await cache.addAll(contentToCache);
      })(),
    );
});

self.addEventListener("fetch", (e) => {
    console.log(`[Service Worker] Fetched resource ${e.request.url}`);
});

self.addEventListener("fetch", (e) => {
    e.respondWith(
      (async () => {
        const r = await caches.match(e.request);
        console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
        if (r) {
          return r;
        }
        const response = await fetch(e.request);
        const cache = await caches.open(cacheName);
        console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
        cache.put(e.request, response.clone());
        return response;
      })(),
    );  
});


  
  
  