'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { useI18n, type Language } from '@/app/_lib/i18n'
import { computeScore } from '@/app/_lib/rng'
import { useAudio } from '@/app/_lib/audio'
import { useVibration } from '@/app/_lib/vibration'
import { phraseCache } from '@/app/_lib/cache'

interface ScoreCardProps {
  language: Language
  biases: { halo: number; herd: number; lucky: number }
  soundEnabled: boolean
  vibrationEnabled: boolean
}

export function ScoreCard({ language, biases, soundEnabled, vibrationEnabled }: ScoreCardProps) {
  const t = useI18n(language)
  const { playTaDa } = useAudio()
  const { vibrateScore } = useVibration()
  const [score, setScore] = useState<{ score: number; phrase: string } | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)

  const handleDeliberate = async () => {
    setIsAnimating(true)

    // Vérifie d'abord le cache
    const cachedResult = phraseCache.getScore(biases)
    if (cachedResult) {
      setScore(cachedResult)
    } else {
      // Génère le score avec les phrases internationalisées
      const result = computeScore(biases, t.absurdPhrases)
      setScore({ score: result.score, phrase: result.phrase })
      
      // Met en cache le résultat
      phraseCache.setScore(biases, { score: result.score, phrase: result.phrase })
    }

    // Effets sonores et vibration
    if (soundEnabled) {
      await playTaDa()
    }

    if (vibrationEnabled) {
      vibrateScore()
    }

    // Arrête l'animation après 600ms
    setTimeout(() => setIsAnimating(false), 600)
  }

  const handleRedeliberate = () => {
    handleDeliberate()
  }

  return (
    <Card className="score-card">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">
          {language === 'fr' ? 'Note à la tête du client' : 'Head-of-client Score'}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {!score ? (
          <div className="text-center">
            <Button 
              onClick={handleDeliberate}
              size="lg"
              className="w-full"
              aria-describedby="deliberate-description"
            >
              {language === 'fr' ? 'Noter' : 'Score'}
            </Button>
            <p id="deliberate-description" className="sr-only">
              {language === 'fr' 
                ? 'Génère un score parodique basé sur les biais sélectionnés'
                : 'Generates a parody score based on selected biases'
              }
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            <div className={`text-center transition-all duration-300 ${isAnimating ? 'animate-ta-da' : ''}`}>
              <div 
                className="text-6xl font-bold text-blue-600 mb-2"
                role="img"
                aria-label={`${t.score}: ${score.score} ${t.outOf}`}
              >
                {score.score}
              </div>
              <div className="text-lg text-gray-600">
                {t.score} {t.outOf}
              </div>
            </div>
            
            <div 
              className="text-center p-4 bg-yellow-50 rounded-lg border border-yellow-200"
              role="region"
              aria-label={language === 'fr' ? 'Phrase absurde générée' : 'Generated absurd phrase'}
            >
              <p className="text-sm font-medium text-yellow-800">
                "{score.phrase}"
              </p>
            </div>
            
            <div className="flex space-x-2">
              <Button 
                onClick={handleRedeliberate}
                variant="outline"
                className="flex-1"
                aria-label={language === 'fr' 
                  ? 'Générer un nouveau score'
                  : 'Generate a new score'
                }
              >
                {language === 'fr' ? 'Re-noter' : 'Re-score'}
              </Button>
              <Button 
                onClick={() => {/* TODO: Afficher les biais */}}
                variant="secondary"
                className="flex-1"
                aria-label={language === 'fr' 
                  ? 'Afficher les cartes de biais cognitifs'
                  : 'Show cognitive bias cards'
                }
              >
                {t.showBiases}
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
