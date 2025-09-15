'use client'

import { Switch } from './ui/switch'
import { useI18n, type Language } from '@/app/_lib/i18n'

interface SettingsBarProps {
  language: Language
  cameraEnabled: boolean
  glassesEnabled: boolean
  starsEnabled: boolean
  soundEnabled: boolean
  vibrationEnabled: boolean
  onCameraToggle: (enabled: boolean) => void
  onGlassesToggle: (enabled: boolean) => void
  onStarsToggle: (enabled: boolean) => void
  onSoundToggle: (enabled: boolean) => void
  onVibrationToggle: (enabled: boolean) => void
}

export function SettingsBar({
  language,
  cameraEnabled,
  glassesEnabled,
  starsEnabled,
  soundEnabled,
  vibrationEnabled,
  onCameraToggle,
  onGlassesToggle,
  onStarsToggle,
  onSoundToggle,
  onVibrationToggle
}: SettingsBarProps) {
  const t = useI18n(language)

  return (
    <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
      <h3 className="text-lg font-semibold">{t.settings.title}</h3>
      
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium">{t.settings.camera}</label>
          <Switch
            checked={cameraEnabled}
            onCheckedChange={onCameraToggle}
          />
        </div>
        
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium">{t.settings.glasses}</label>
          <Switch
            checked={glassesEnabled}
            onCheckedChange={onGlassesToggle}
            disabled={!cameraEnabled}
          />
        </div>
        
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium">{t.settings.stars}</label>
          <Switch
            checked={starsEnabled}
            onCheckedChange={onStarsToggle}
            disabled={!cameraEnabled}
          />
        </div>
        
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium">{t.settings.sound}</label>
          <Switch
            checked={soundEnabled}
            onCheckedChange={onSoundToggle}
          />
        </div>
        
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium">{t.settings.vibration}</label>
          <Switch
            checked={vibrationEnabled}
            onCheckedChange={onVibrationToggle}
          />
        </div>
      </div>
    </div>
  )
}
