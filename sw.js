self.addEventListener("install", event => {
    event.waitUntil(
        caches.open("pchat-cache").then(cache => {
            return cache.addAll([
                "index.html",
                "login.html",
                "contacts.html",
                "chat.html",
                "app.js",
                "firebase-config.js",
                "styles.css"
            ]);
        })
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
