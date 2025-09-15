'use client'

import { useState, useEffect } from 'react'
import { useKonami } from '@/app/_lib/konami'
import { useAudio } from '@/app/_lib/audio'
import { useVibration } from '@/app/_lib/vibration'
import { type Language } from '@/app/_lib/i18n'

interface AppWrapperProps {
  children: (props: {
    soundEnabled: boolean
    vibrationEnabled: boolean
    setSoundEnabled: (enabled: boolean) => void
    setVibrationEnabled: (enabled: boolean) => void
    setShowSeriousModal: (show: boolean) => void
  }) => React.ReactNode
  language: Language
}

export function AppWrapper({ children, language }: AppWrapperProps) {
  const [soundEnabled, setSoundEnabled] = useState(true)
  const [vibrationEnabled, setVibrationEnabled] = useState(true)
  const [showSeriousModal, setShowSeriousModal] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  const { setSoundEnabled: setAudioEnabled } = useAudio()
  const { setVibrationEnabled: setVibEnabled } = useVibration()

  // Easter egg Konami
  useKonami(() => {
    setShowSeriousModal(true)
  })

  // Synchronise les paramètres audio/vibration
  useEffect(() => {
    if (isMounted) {
      setAudioEnabled(soundEnabled)
    }
  }, [soundEnabled, setAudioEnabled, isMounted])

  useEffect(() => {
    if (isMounted) {
      setVibEnabled(vibrationEnabled)
    }
  }, [vibrationEnabled, setVibEnabled, isMounted])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return <div>Loading...</div>
  }

  return (
    <>
      {children({
        soundEnabled,
        vibrationEnabled,
        setSoundEnabled,
        setVibrationEnabled,
        setShowSeriousModal
      })}
    </>
  )
}
