// Gestionnaire de vibration pour l'application
class VibrationManager {
  private vibrationEnabled: boolean = true

  constructor() {
    // Vérifie si la vibration est supportée
    if (typeof window !== 'undefined' && 'vibrate' in navigator) {
      this.vibrationEnabled = true
    } else {
      this.vibrationEnabled = false
    }
  }

  setVibrationEnabled(enabled: boolean) {
    this.vibrationEnabled = enabled
  }

  isVibrationEnabled(): boolean {
    return this.vibrationEnabled && 'vibrate' in navigator
  }

  // Vibration courte pour le score
  vibrateScore(): void {
    if (!this.isVibrationEnabled()) return

    try {
      navigator.vibrate(100) // 100ms de vibration
    } catch (error) {
      console.warn('Could not vibrate:', error)
    }
  }

  // Vibration pour les interactions
  vibrateClick(): void {
    if (!this.isVibrationEnabled()) return

    try {
      navigator.vibrate(50) // 50ms de vibration courte
    } catch (error) {
      console.warn('Could not vibrate:', error)
    }
  }

  // Vibration pour les erreurs
  vibrateError(): void {
    if (!this.isVibrationEnabled()) return

    try {
      navigator.vibrate([100, 50, 100]) // Pattern: vibration-pause-vibration
    } catch (error) {
      console.warn('Could not vibrate:', error)
    }
  }

  // Vibration pour le succès
  vibrateSuccess(): void {
    if (!this.isVibrationEnabled()) return

    try {
      navigator.vibrate([50, 25, 50, 25, 100]) // Pattern de succès
    } catch (error) {
      console.warn('Could not vibrate:', error)
    }
  }
}

// Instance singleton
export const vibrationManager = new VibrationManager()

// Hook React pour utiliser le vibration manager
export function useVibration() {
  return {
    vibrateScore: () => vibrationManager.vibrateScore(),
    vibrateClick: () => vibrationManager.vibrateClick(),
    vibrateError: () => vibrationManager.vibrateError(),
    vibrateSuccess: () => vibrationManager.vibrateSuccess(),
    setVibrationEnabled: (enabled: boolean) => vibrationManager.setVibrationEnabled(enabled),
    isVibrationEnabled: () => vibrationManager.isVibrationEnabled(),
  }
}
