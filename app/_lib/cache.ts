// Cache intelligent pour l'application
interface CacheItem<T> {
  data: T
  timestamp: number
  ttl: number // Time to live en millisecondes
}

class SmartCache {
  private cache = new Map<string, CacheItem<any>>()
  private maxSize = 100 // Taille maximale du cache

  // Met en cache une donnée avec TTL
  set<T>(key: string, data: T, ttl: number = 5 * 60 * 1000): void {
    // Nettoie le cache si nécessaire
    this.cleanup()

    // Supprime les anciennes entrées si le cache est plein
    if (this.cache.size >= this.maxSize) {
      const oldestKey = this.cache.keys().next().value
      if (oldestKey) {
        this.cache.delete(oldestKey)
      }
    }

    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      ttl
    })
  }

  // Récupère une donnée du cache
  get<T>(key: string): T | null {
    const item = this.cache.get(key)
    
    if (!item) {
      return null
    }

    // Vérifie si l'item a expiré
    if (Date.now() - item.timestamp > item.ttl) {
      this.cache.delete(key)
      return null
    }

    return item.data
  }

  // Vérifie si une clé existe et n'a pas expiré
  has(key: string): boolean {
    return this.get(key) !== null
  }

  // Supprime une entrée du cache
  delete(key: string): boolean {
    return this.cache.delete(key)
  }

  // Vide tout le cache
  clear(): void {
    this.cache.clear()
  }

  // Nettoie les entrées expirées
  private cleanup(): void {
    const now = Date.now()
    const keysToDelete: string[] = []
    
    this.cache.forEach((item, key) => {
      if (now - item.timestamp > item.ttl) {
        keysToDelete.push(key)
      }
    })
    
    keysToDelete.forEach(key => this.cache.delete(key))
  }

  // Retourne les statistiques du cache
  getStats() {
    return {
      size: this.cache.size,
      maxSize: this.maxSize,
      keys: Array.from(this.cache.keys())
    }
  }
}

// Instance singleton
export const smartCache = new SmartCache()

// Cache spécialisé pour les phrases absurdes
export const phraseCache = {
  // Cache les phrases avec un TTL de 1 heure
  setPhrases: (phrases: string[]) => {
    smartCache.set('absurd-phrases', phrases, 60 * 60 * 1000)
  },

  getPhrases: (): string[] | null => {
    return smartCache.get('absurd-phrases')
  },

  // Cache les scores calculés avec un TTL de 30 minutes
  setScore: (biases: {halo: number, herd: number, lucky: number}, result: {score: number, phrase: string}) => {
    const key = `score-${biases.halo}-${biases.herd}-${biases.lucky}`
    smartCache.set(key, result, 30 * 60 * 1000)
  },

  getScore: (biases: {halo: number, herd: number, lucky: number}): {score: number, phrase: string} | null => {
    const key = `score-${biases.halo}-${biases.herd}-${biases.lucky}`
    return smartCache.get(key)
  }
}

// Cache pour les préférences utilisateur
export const userPrefsCache = {
  setLanguage: (language: string) => {
    smartCache.set('user-language', language, 24 * 60 * 60 * 1000) // 24h
  },

  getLanguage: (): string | null => {
    return smartCache.get('user-language')
  },

  setSettings: (settings: any) => {
    smartCache.set('user-settings', settings, 24 * 60 * 60 * 1000) // 24h
  },

  getSettings: (): any | null => {
    return smartCache.get('user-settings')
  }
}

// Hook React pour utiliser le cache
export function useSmartCache() {
  return {
    cache: smartCache,
    phraseCache,
    userPrefsCache
  }
}
