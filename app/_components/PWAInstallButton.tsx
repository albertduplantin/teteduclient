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
      <Button
        onClick={handleInstall}
        disabled={isInstalling}
        className="shadow-lg"
        size="sm"
      >
        {isInstalling ? (
          <>
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            {language === 'fr' ? 'Installation...' : 'Installing...'}
          </>
        ) : (
          <>
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            {language === 'fr' ? 'Installer l\'app' : 'Install app'}
          </>
        )}
      </Button>
    </div>
  )
}
