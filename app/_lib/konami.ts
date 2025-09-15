// Détecteur de code Konami pour l'easter egg
export class KonamiDetector {
  private sequence: number[] = []
  private konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65] // ↑↑↓↓←→←→BA
  private onSuccess: () => void
  private isActive: boolean = true

  constructor(onSuccess: () => void) {
    this.onSuccess = onSuccess
    this.bindEvents()
  }

  private bindEvents() {
    if (typeof window === 'undefined') return

    // Écoute des touches clavier
    window.addEventListener('keydown', this.handleKeyDown.bind(this))
    
    // Écoute des touches tactiles (mobile)
    let touchSequence: number[] = []
    let lastTouchTime = 0
    
    window.addEventListener('touchstart', (e) => {
      const now = Date.now()
      if (now - lastTouchTime > 1000) {
        touchSequence = [] // Reset si trop de temps entre les touches
      }
      lastTouchTime = now
      
      const touch = e.touches[0]
      const x = touch.clientX
      const y = touch.clientY
      const centerX = window.innerWidth / 2
      const centerY = window.innerHeight / 2
      
      // Détermine la direction basée sur la position
      let direction = 0
      if (x < centerX - 50) direction = 37 // ←
      else if (x > centerX + 50) direction = 39 // →
      else if (y < centerY - 50) direction = 38 // ↑
      else if (y > centerY + 50) direction = 40 // ↓
      else return // Pas de direction claire
      
      touchSequence.push(direction)
      this.checkSequence(touchSequence)
    })
  }

  private handleKeyDown(event: KeyboardEvent) {
    if (!this.isActive) return

    // Ignore les touches si l'utilisateur tape dans un input
    if (event.target instanceof HTMLInputElement || 
        event.target instanceof HTMLTextAreaElement) {
      return
    }

    this.sequence.push(event.keyCode)
    this.checkSequence(this.sequence)
  }

  private checkSequence(sequence: number[]) {
    // Garde seulement les 10 dernières touches
    if (sequence.length > this.konamiCode.length) {
      sequence.shift()
    }

    // Vérifie si la séquence correspond au code Konami
    if (sequence.length === this.konamiCode.length) {
      let matches = true
      for (let i = 0; i < this.konamiCode.length; i++) {
        if (sequence[i] !== this.konamiCode[i]) {
          matches = false
          break
        }
      }

      if (matches) {
        this.onSuccess()
        this.reset()
      }
    }
  }

  private reset() {
    this.sequence = []
  }

  setActive(active: boolean) {
    this.isActive = active
  }

  destroy() {
    if (typeof window === 'undefined') return
    window.removeEventListener('keydown', this.handleKeyDown.bind(this))
  }
}

// Import React pour le hook
import React from 'react'

// Hook React pour utiliser le détecteur Konami
export function useKonami(onSuccess: () => void) {
  const [detector, setDetector] = React.useState<KonamiDetector | null>(null)

  React.useEffect(() => {
    const newDetector = new KonamiDetector(onSuccess)
    setDetector(newDetector)

    return () => {
      newDetector.destroy()
    }
  }, [onSuccess])

  return {
    setActive: (active: boolean) => detector?.setActive(active),
  }
}
