// Gestionnaire PWA pour l'application
export class PWAManager {
  private deferredPrompt: any = null
  private isInstalled = false

  constructor() {
    if (typeof window !== 'undefined') {
      this.init()
    }
  }

  private init() {
    // Écoute l'événement beforeinstallprompt
    window.addEventListener('beforeinstallprompt', (e) => {
      console.log('PWA: Install prompt available')
      e.preventDefault()
      this.deferredPrompt = e
    })

    // Écoute l'événement appinstalled
    window.addEventListener('appinstalled', () => {
      console.log('PWA: App installed')
      this.isInstalled = true
      this.deferredPrompt = null
    })

    // Enregistre le service worker
    this.registerServiceWorker()
  }

  private async registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js')
        console.log('PWA: Service Worker registered', registration)
        
        // Vérifie les mises à jour
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                // Nouvelle version disponible
                console.log('PWA: New version available')
                this.showUpdateNotification()
              }
            })
          }
        })
      } catch (error) {
        console.error('PWA: Service Worker registration failed', error)
      }
    }
  }

  private showUpdateNotification() {
    // Affiche une notification de mise à jour (optionnel)
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification('Mise à jour disponible', {
        body: 'Une nouvelle version de l\'application est disponible. Rechargez la page.',
        icon: '/icons/icon-192x192.png'
      })
    }
  }

  // Propose l'installation de l'application
  async installApp(): Promise<boolean> {
    if (!this.deferredPrompt) {
      return false
    }

    try {
      this.deferredPrompt.prompt()
      const { outcome } = await this.deferredPrompt.userChoice
      console.log('PWA: Install prompt outcome', outcome)
      
      this.deferredPrompt = null
      return outcome === 'accepted'
    } catch (error) {
      console.error('PWA: Install failed', error)
      return false
    }
  }

  // Vérifie si l'application peut être installée
  canInstall(): boolean {
    return this.deferredPrompt !== null
  }

  // Vérifie si l'application est installée
  isAppInstalled(): boolean {
    return this.isInstalled || 
           (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) ||
           (window.navigator as any).standalone === true
  }

  // Vérifie si l'application fonctionne hors ligne
  isOffline(): boolean {
    return !navigator.onLine
  }

  // Gère la reconnexion
  onOnline(callback: () => void) {
    window.addEventListener('online', callback)
  }

  // Gère la déconnexion
  onOffline(callback: () => void) {
    window.addEventListener('offline', callback)
  }
}

// Instance singleton
export const pwaManager = new PWAManager()

// Hook React pour utiliser le PWA manager
export function usePWA() {
  return {
    installApp: () => pwaManager.installApp(),
    canInstall: () => pwaManager.canInstall(),
    isInstalled: () => pwaManager.isAppInstalled(),
    isOffline: () => pwaManager.isOffline(),
    onOnline: (callback: () => void) => pwaManager.onOnline(callback),
    onOffline: (callback: () => void) => pwaManager.onOffline(callback),
  }
}
