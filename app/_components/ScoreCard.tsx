'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { useI18n, type Language } from '@/app/_lib/i18n'
import { computeScore } from '@/app/_lib/rng'
import { useAudio } from '@/app/_lib/audio'
import { useVibration } from '@/app/_lib/vibration'

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
    
    // Génère le score
    const result = computeScore(biases)
    setScore({ score: result.score, phrase: result.phrase })
    
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
          {language === 'fr' ? 'Délibération' : 'Deliberation'}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {!score ? (
          <div className="text-center">
            <Button 
              onClick={handleDeliberate}
              size="lg"
              className="w-full"
            >
              {t.deliberate}
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className={`text-center transition-all duration-300 ${isAnimating ? 'animate-ta-da' : ''}`}>
              <div className="text-6xl font-bold text-blue-600 mb-2">
                {score.score}
              </div>
              <div className="text-lg text-gray-600">
                {t.score} {t.outOf}
              </div>
            </div>
            
            <div className="text-center p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <p className="text-sm font-medium text-yellow-800">
                "{score.phrase}"
              </p>
            </div>
            
            <div className="flex space-x-2">
              <Button 
                onClick={handleRedeliberate}
                variant="outline"
                className="flex-1"
              >
                {t.redeliberate}
              </Button>
              <Button 
                onClick={() => {/* TODO: Afficher les biais */}}
                variant="secondary"
                className="flex-1"
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
