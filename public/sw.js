// Service Worker pour tete-du-client
const CACHE_NAME = 'tete-du-client-v2'
const OFFLINE_URL = '/offline.html'

// Ressources à mettre en cache
const CACHE_URLS = [
  '/',
  '/about',
  '/legal',
  '/offline.html',
  '/manifest.webmanifest',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png'
]

// Installation du Service Worker
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...')
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Caching files')
        return cache.addAll(CACHE_URLS)
      })
      .then(() => {
        console.log('Service Worker: Installation complete')
        return self.skipWaiting()
      })
      .catch((error) => {
        console.error('Service Worker: Installation failed', error)
      })
  )
})

// Activation du Service Worker
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating...')
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              console.log('Service Worker: Deleting old cache', cacheName)
              return caches.delete(cacheName)
            }
          })
        )
      })
      .then(() => {
        console.log('Service Worker: Activation complete')
        return self.clients.claim()
      })
  )
})

// Interception des requêtes
self.addEventListener('fetch', (event) => {
  // Ignore les requêtes non-GET
  if (event.request.method !== 'GET') {
    return
  }

  // Ignore les requêtes de caméra et autres APIs
  if (event.request.url.includes('blob:') || 
      event.request.url.includes('data:') ||
      event.request.url.includes('chrome-extension:') ||
      event.request.url.includes('moz-extension:')) {
    return
  }

  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        // Retourne la réponse mise en cache si disponible
        if (cachedResponse) {
          console.log('Service Worker: Serving from cache', event.request.url)
          return cachedResponse
        }

        // Sinon, fait la requête réseau
        return fetch(event.request)
          .then((response) => {
            // Vérifie si la réponse est valide
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response
            }

            // Clone la réponse pour la mettre en cache
            const responseToCache = response.clone()

            // Met en cache les ressources statiques
            if (event.request.url.includes('/_next/static/') ||
                event.request.url.includes('/icons/') ||
                event.request.url.endsWith('.js') ||
                event.request.url.endsWith('.css') ||
                event.request.url.endsWith('.png') ||
                event.request.url.endsWith('.jpg') ||
                event.request.url.endsWith('.webp')) {
              
              caches.open(CACHE_NAME)
                .then((cache) => {
                  cache.put(event.request, responseToCache)
                })
            }

            return response
          })
          .catch((error) => {
            console.log('Service Worker: Network request failed', error)
            
            // Si c'est une requête de page, retourne la page offline
            if (event.request.destination === 'document') {
              return caches.match(OFFLINE_URL)
            }
            
            // Pour les autres ressources, retourne une réponse d'erreur
            return new Response('Ressource non disponible hors ligne', {
              status: 503,
              statusText: 'Service Unavailable'
            })
          })
      })
  )
})

// Gestion des messages du client
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting()
  }
})

// Gestion des notifications push (pour futures fonctionnalités)
self.addEventListener('push', (event) => {
  // Pas de notifications pour cette application
  console.log('Service Worker: Push event received')
})

// Gestion des clics sur les notifications
self.addEventListener('notificationclick', (event) => {
  event.notification.close()
  
  event.waitUntil(
    clients.openWindow('/')
  )
})
