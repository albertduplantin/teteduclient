'use client'

import { useState, useEffect } from 'react'
import { Button } from './ui/button'
import { usePWA } from '../_lib/pwa'
import { useI18n, type Language } from '../_lib/i18n'

interface PWAInstallButtonProps {
  language: Language
}

export function PWAInstallButton({ language }: PWAInstallButtonProps) {
  const { installApp, canInstall, isInstalled } = usePWA()
  const [showInstall, setShowInstall] = useState(false)
  const [isInstalling, setIsInstalling] = useState(false)

  useEffect(() => {
    setShowInstall(canInstall() && !isInstalled())
  }, [canInstall, isInstalled])

  const handleInstall = async () => {
    setIsInstalling(true)
    try {
      const success = await installApp()
      if (success) {
        setShowInstall(false)
      }
    } catch (error) {
      console.error('Installation failed:', error)
    } finally {
      setIsInstalling(false)
    }
  }

  if (!showInstall) {
    return null
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-3 max-w-xs">
        <div className="flex items-center space-x-3">
          <div className="flex-shrink-0">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-semibold text-gray-900 mb-1">
              {language === 'fr' 
                ? '📱 Installer l\'app'
                : '📱 Install the app'
              }
            </h3>
            <p className="text-xs text-gray-600 mb-2">
              {language === 'fr' 
                ? 'Accès instantané depuis votre écran d\'accueil'
                : 'Instant access from your home screen'
              }
            </p>
            <Button
              onClick={handleInstall}
              disabled={isInstalling}
              size="sm"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs"
            >
              {isInstalling ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-3 w-3" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {language === 'fr' ? 'Installation...' : 'Installing...'}
                </>
              ) : (
                <>
                  <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  {language === 'fr' ? 'Installer' : 'Install'}
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
