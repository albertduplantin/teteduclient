// Gestionnaire audio pour l'application
class AudioManager {
  private audioContext: AudioContext | null = null
  private soundEnabled: boolean = true
  private isInitialized: boolean = false

  constructor() {
    // Ne pas initialiser immédiatement pour éviter les problèmes d'hydration
  }

  private async initializeAudioContext() {
    try {
      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
    } catch (error) {
      console.warn('AudioContext not supported:', error)
    }
  }

  setSoundEnabled(enabled: boolean) {
    this.soundEnabled = enabled
  }

  isSoundEnabled(): boolean {
    return this.soundEnabled
  }

  // Joue un son "ta-da" simple généré programmatiquement
  async playTaDa(): Promise<void> {
    if (!this.soundEnabled) return
    
    // Initialise l'audio context si nécessaire
    if (!this.isInitialized && typeof window !== 'undefined') {
      await this.initializeAudioContext()
      this.isInitialized = true
    }
    
    if (!this.audioContext) return

    try {
      // Crée un son "ta-da" simple avec des fréquences harmoniques
      const oscillator = this.audioContext.createOscillator()
      const gainNode = this.audioContext.createGain()
      
      oscillator.connect(gainNode)
      gainNode.connect(this.audioContext.destination)
      
      // Fréquence qui monte puis descend (effet "ta-da")
      oscillator.frequency.setValueAtTime(440, this.audioContext.currentTime) // La
      oscillator.frequency.exponentialRampToValueAtTime(880, this.audioContext.currentTime + 0.1) // La octave
      oscillator.frequency.exponentialRampToValueAtTime(660, this.audioContext.currentTime + 0.3) // Mi
      
      // Enveloppe du volume
      gainNode.gain.setValueAtTime(0, this.audioContext.currentTime)
      gainNode.gain.linearRampToValueAtTime(0.3, this.audioContext.currentTime + 0.05)
      gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.5)
      
      oscillator.start(this.audioContext.currentTime)
      oscillator.stop(this.audioContext.currentTime + 0.5)
      
    } catch (error) {
      console.warn('Could not play sound:', error)
    }
  }

  // Joue un son de clic simple
  async playClick(): Promise<void> {
    if (!this.soundEnabled) return
    
    // Initialise l'audio context si nécessaire
    if (!this.isInitialized && typeof window !== 'undefined') {
      await this.initializeAudioContext()
      this.isInitialized = true
    }
    
    if (!this.audioContext) return

    try {
      const oscillator = this.audioContext.createOscillator()
      const gainNode = this.audioContext.createGain()
      
      oscillator.connect(gainNode)
      gainNode.connect(this.audioContext.destination)
      
      oscillator.frequency.setValueAtTime(800, this.audioContext.currentTime)
      
      gainNode.gain.setValueAtTime(0, this.audioContext.currentTime)
      gainNode.gain.linearRampToValueAtTime(0.1, this.audioContext.currentTime + 0.01)
      gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.1)
      
      oscillator.start(this.audioContext.currentTime)
      oscillator.stop(this.audioContext.currentTime + 0.1)
      
    } catch (error) {
      console.warn('Could not play click sound:', error)
    }
  }
}

// Instance singleton
export const audioManager = new AudioManager()

// Hook React pour utiliser l'audio manager
export function useAudio() {
  return {
    playTaDa: () => audioManager.playTaDa(),
    playClick: () => audioManager.playClick(),
    setSoundEnabled: (enabled: boolean) => audioManager.setSoundEnabled(enabled),
    isSoundEnabled: () => audioManager.isSoundEnabled(),
  }
}
