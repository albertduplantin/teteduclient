'use client'

import { useI18n, type Language } from '@/app/_lib/i18n'

interface DisclaimerProps {
  language: Language
}

export function Disclaimer({ language }: DisclaimerProps) {
  const t = useI18n(language)

  return (
    <div className="bg-gray-100 border border-gray-300 rounded-lg p-3 mb-4 text-xs text-gray-600">
      <div className="flex items-center">
        <svg className="h-4 w-4 text-gray-500 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
        <p className="text-xs">
          {language === 'fr' 
            ? "Parodie éducative - Aucune analyse réelle. Caméra locale uniquement."
            : "Educational parody - No real analysis. Local camera only."
          }
        </p>
      </div>
    </div>
  )
}
