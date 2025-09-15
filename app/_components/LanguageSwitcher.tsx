'use client'

import { useState } from 'react'
import { Button } from './ui/button'
import { useI18n, type Language } from '@/app/_lib/i18n'

interface LanguageSwitcherProps {
  language: Language
  onLanguageChange: (lang: Language) => void
}

export function LanguageSwitcher({ language, onLanguageChange }: LanguageSwitcherProps) {
  const t = useI18n(language)

  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm font-medium">{t.settings.language}:</span>
      <div className="flex rounded-md border border-gray-300">
        <Button
          variant={language === 'fr' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => onLanguageChange('fr')}
          className="rounded-r-none"
        >
          FR
        </Button>
        <Button
          variant={language === 'en' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => onLanguageChange('en')}
          className="rounded-l-none"
        >
          EN
        </Button>
      </div>
    </div>
  )
}
