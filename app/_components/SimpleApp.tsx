'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Switch } from './ui/switch'
import { Slider } from './ui/slider'
import { CameraView } from './CameraView'
import { ScoreCard } from './ScoreCard'
import { BiasCards } from './BiasCards'
import { SettingsBar } from './SettingsBar'
import { SeriousModal } from './SeriousModal'
import { useI18n, type Language } from '@/app/_lib/i18n'

export function SimpleApp() {
  const [language, setLanguage] = useState<Language>('fr')
  const [cameraEnabled, setCameraEnabled] = useState(false)
  const [glassesEnabled, setGlassesEnabled] = useState(false)
  const [starsEnabled, setStarsEnabled] = useState(false)
  const [soundEnabled, setSoundEnabled] = useState(true)
  const [vibrationEnabled, setVibrationEnabled] = useState(true)
  const [showBiasCards, setShowBiasCards] = useState(false)
  const [showSerious, setShowSerious] = useState(false)
  const [biases, setBiases] = useState({ halo: 50, herd: 50, lucky: 50 })

  const t = useI18n(language)

  // Désactive les filtres si la caméra est désactivée
  useEffect(() => {
    if (!cameraEnabled) {
      setGlassesEnabled(false)
      setStarsEnabled(false)
    }
  }, [cameraEnabled])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-4 max-w-md mx-auto">
        {/* Header - Mobile optimized */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            {language === 'fr' ? 'Note à la tête du client' : 'Head-of-client Score'}
          </h1>
          <p className="text-sm text-gray-600 px-4">
            {t.disclaimer}
          </p>
        </div>

        {/* Camera View */}
        <div className="mb-6">
          <CameraView
            language={language}
            enabled={cameraEnabled}
            showGlasses={glassesEnabled}
            showStars={starsEnabled}
          />
        </div>

        {/* Bias Controls */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg text-center">
              {language === 'fr' ? 'Ajuster les biais' : 'Adjust Biases'}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">
                {t.biasHalo}: {biases.halo}%
              </label>
              <Slider
                value={[biases.halo]}
                onValueChange={(value) => setBiases(prev => ({ ...prev, halo: value[0] }))}
                max={100}
                step={1}
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">
                {t.biasHerd}: {biases.herd}%
              </label>
              <Slider
                value={[biases.herd]}
                onValueChange={(value) => setBiases(prev => ({ ...prev, herd: value[0] }))}
                max={100}
                step={1}
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">
                {t.biasLucky}: {biases.lucky}%
              </label>
              <Slider
                value={[biases.lucky]}
                onValueChange={(value) => setBiases(prev => ({ ...prev, lucky: value[0] }))}
                max={100}
                step={1}
                className="w-full"
              />
            </div>
          </CardContent>
        </Card>

        {/* Score Card */}
        <div className="mb-6">
          <ScoreCard
            language={language}
            biases={biases}
            soundEnabled={soundEnabled}
            vibrationEnabled={vibrationEnabled}
            showBiasCards={showBiasCards}
            setShowBiasCards={setShowBiasCards}
          />
        </div>

        {/* Bias Cards */}
        {showBiasCards && (
          <div className="mb-6">
            <BiasCards language={language} />
          </div>
        )}

        {/* Settings */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg text-center">
              {t.settings.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">{t.settings.camera}</span>
              <Switch
                checked={cameraEnabled}
                onCheckedChange={setCameraEnabled}
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">{t.settings.glasses}</span>
              <Switch
                checked={glassesEnabled}
                onCheckedChange={setGlassesEnabled}
                disabled={!cameraEnabled}
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">{t.settings.stars}</span>
              <Switch
                checked={starsEnabled}
                onCheckedChange={setStarsEnabled}
                disabled={!cameraEnabled}
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">{t.settings.sound}</span>
              <Switch
                checked={soundEnabled}
                onCheckedChange={setSoundEnabled}
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">{t.settings.vibration}</span>
              <Switch
                checked={vibrationEnabled}
                onCheckedChange={setVibrationEnabled}
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">{t.settings.language}</span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
              >
                {language === 'fr' ? 'English' : 'Français'}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex space-x-2 mb-6">
          <Button
            variant="outline"
            className="flex-1"
            onClick={() => setShowSerious(true)}
          >
            {language === 'fr' ? 'Sérieux' : 'Serious'}
          </Button>
        </div>
      </div>

      {/* Modals */}
      <SeriousModal
        open={showSerious}
        onOpenChange={setShowSerious}
        language={language}
      />
    </div>
  )
}
