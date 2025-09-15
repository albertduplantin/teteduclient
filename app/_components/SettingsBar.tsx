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
    <div className="space-y-4 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
      <h3 className="text-lg font-semibold flex items-center">
        <svg className="w-5 h-5 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        {t.settings.title}
      </h3>
      
      <div className="space-y-3">
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <label className="text-sm font-medium">{t.settings.camera}</label>
          </div>
          <Switch
            checked={cameraEnabled}
            onCheckedChange={onCameraToggle}
          />
        </div>
        
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <label className="text-sm font-medium">{t.settings.glasses}</label>
          </div>
          <Switch
            checked={glassesEnabled}
            onCheckedChange={onGlassesToggle}
            disabled={!cameraEnabled}
          />
        </div>
        
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
            <label className="text-sm font-medium">{t.settings.stars}</label>
          </div>
          <Switch
            checked={starsEnabled}
            onCheckedChange={onStarsToggle}
            disabled={!cameraEnabled}
          />
        </div>
        
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
            <label className="text-sm font-medium">{t.settings.sound}</label>
          </div>
          <Switch
            checked={soundEnabled}
            onCheckedChange={onSoundToggle}
          />
        </div>
        
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <label className="text-sm font-medium">{t.settings.vibration}</label>
          </div>
          <Switch
            checked={vibrationEnabled}
            onCheckedChange={onVibrationToggle}
          />
        </div>
      </div>
    </div>
  )
}
