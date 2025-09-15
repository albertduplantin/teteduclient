'use client'

import { useState, useEffect } from 'react'
import { Disclaimer } from './_components/Disclaimer'
import { LanguageSwitcher } from './_components/LanguageSwitcher'
import { CameraView } from './_components/CameraView'
import { BiasSliders } from './_components/BiasSliders'
import { ScoreCard } from './_components/ScoreCard'
import { BiasCards } from './_components/BiasCards'
import { SettingsBar } from './_components/SettingsBar'
import { useI18n, type Language } from './_lib/i18n'

export default function HomePage() {
  const [language, setLanguage] = useState<Language>('fr')
  const [cameraEnabled, setCameraEnabled] = useState(false)
  const [glassesEnabled, setGlassesEnabled] = useState(false)
  const [starsEnabled, setStarsEnabled] = useState(false)
  const [soundEnabled, setSoundEnabled] = useState(true)
  const [vibrationEnabled, setVibrationEnabled] = useState(true)
  const [showBiasCards, setShowBiasCards] = useState(false)
  const [biases, setBiases] = useState({ halo: 50, herd: 50, lucky: 50 })
  const [isMounted, setIsMounted] = useState(false)

  const t = useI18n(language)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Désactive les filtres si la caméra est désactivée
  useEffect(() => {
    if (!cameraEnabled) {
      setGlassesEnabled(false)
      setStarsEnabled(false)
    }
  }, [cameraEnabled])

  if (!isMounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-4 max-w-md mx-auto">
        {/* Header - Mobile optimized */}
        <header className="text-center mb-6 sticky top-0 bg-white/80 backdrop-blur-sm z-10 py-4 -mx-4 px-4">
          <h1 className="text-2xl font-bold text-gray-800 mb-1">
            {language === 'fr' ? 'tete-du-client' : 'head-of-client'}
          </h1>
          <p className="text-sm text-gray-600 mb-3">
            {language === 'fr' 
              ? 'Notation parodique basée sur l\'apparence'
              : 'Parody appearance-based scoring'
            }
          </p>
          <LanguageSwitcher 
            language={language} 
            onLanguageChange={setLanguage} 
          />
        </header>

        {/* Disclaimer - Mobile discrete */}
        <Disclaimer language={language} />

        {/* Mobile-first vertical layout */}
        <div className="space-y-6">
          {/* Camera View - Full width on mobile */}
          <CameraView
            language={language}
            enabled={cameraEnabled}
            showGlasses={glassesEnabled}
            showStars={starsEnabled}
          />
          
          {/* Score Card - Prominent on mobile */}
          <ScoreCard
            language={language}
            biases={biases}
            soundEnabled={soundEnabled}
            vibrationEnabled={vibrationEnabled}
          />

          {/* Bias Sliders - Touch-friendly */}
          <BiasSliders
            language={language}
            onBiasChange={setBiases}
          />
          
          {/* Settings - Collapsible on mobile */}
          <SettingsBar
            language={language}
            cameraEnabled={cameraEnabled}
            glassesEnabled={glassesEnabled}
            starsEnabled={starsEnabled}
            soundEnabled={soundEnabled}
            vibrationEnabled={vibrationEnabled}
            onCameraToggle={setCameraEnabled}
            onGlassesToggle={setGlassesEnabled}
            onStarsToggle={setStarsEnabled}
            onSoundToggle={setSoundEnabled}
            onVibrationToggle={setVibrationEnabled}
          />
        </div>

        {/* Bias Cards Section */}
        {showBiasCards && (
          <div className="mt-12">
            <BiasCards language={language} />
          </div>
        )}

        {/* Navigation */}
        <nav className="mt-12 text-center">
          <div className="flex justify-center space-x-4">
            <a 
              href="/about" 
              className="text-blue-600 hover:text-blue-800 underline"
            >
              {t.navigation.about}
            </a>
            <a 
              href="/legal" 
              className="text-blue-600 hover:text-blue-800 underline"
            >
              {t.navigation.legal}
            </a>
          </div>
        </nav>

        {/* Footer */}
        <footer className="mt-12 text-center text-sm text-gray-500">
          <p>
            {language === 'fr' 
              ? 'Application éducative - Aucune donnée personnelle collectée'
              : 'Educational application - No personal data collected'
            }
          </p>
          <p className="mt-2">
            {language === 'fr' 
              ? 'Code Konami (↑↑↓↓←→←→BA) pour le mode sérieux'
              : 'Konami code (↑↑↓↓←→←→BA) for serious mode'
            }
          </p>
        </footer>
      </div>
    </div>
  )
}