const CACHE_NAME = 'akinahs-cache-v1';
const ASSETS_TO_CACHE = [
    '/',
    '/index.html',
    '/src/main.tsx',
    '/manifest.json', // If it exists
];

const IMAGE_CACHE_NAME = 'akinahs-images-v1';

// Install event - cache critical assets
self.addEventListener('install', (event: any) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
    (self as any).skipWaiting();
});

// Activate event - cleanup old caches
self.addEventListener('activate', (event: any) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME && cacheName !== IMAGE_CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    (self as any).clients.claim();
});

// Fetch event - cache-first for images, stale-while-revalidate for others
self.addEventListener('fetch', (event: any) => {
    const url = new URL(event.request.url);

    // Handle Images (External & Internal)
    if (
        event.request.destination === 'image' ||
        url.hostname.includes('pexels.com') ||
        url.hostname.includes('unsplash.com') ||
        url.hostname.includes('supabase.co')
    ) {
        event.respondWith(
            caches.open(IMAGE_CACHE_NAME).then((cache) => {
                return cache.match(event.request).then((cachedResponse) => {
                    const fetchPromise = fetch(event.request).then((networkResponse) => {
                        cache.put(event.request, networkResponse.clone());
                        return networkResponse;
                    });
                    return cachedResponse || fetchPromise;
                });
            })
        );
        return;
    }

    // Stale-while-revalidate for everything else
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            const fetchPromise = fetch(event.request).then((networkResponse) => {
                // Only cache successful GET requests
                if (event.request.method === 'GET' && networkResponse.ok) {
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, networkResponse.clone());
                    });
                }
                return networkResponse;
            });
            return cachedResponse || fetchPromise;
        })
    );
});
