'use client'

import { useState } from 'react'
import { Slider } from './ui/slider'
import { useI18n, type Language } from '@/app/_lib/i18n'

interface BiasSlidersProps {
  language: Language
  onBiasChange: (biases: { halo: number; herd: number; lucky: number }) => void
}

export function BiasSliders({ language, onBiasChange }: BiasSlidersProps) {
  const t = useI18n(language)
  const [biases, setBiases] = useState({
    halo: 50,
    herd: 50,
    lucky: 50
  })

  const handleBiasChange = (bias: keyof typeof biases, value: number[]) => {
    const newBiases = { ...biases, [bias]: value[0] }
    setBiases(newBiases)
    onBiasChange(newBiases)
  }

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-center">
        {language === 'fr' ? 'Ajustez les biais' : 'Adjust the biases'}
      </h3>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">
            {t.biasHalo}: {biases.halo}%
          </label>
          <Slider
            value={[biases.halo]}
            onValueChange={(value) => handleBiasChange('halo', value)}
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
            onValueChange={(value) => handleBiasChange('herd', value)}
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
            onValueChange={(value) => handleBiasChange('lucky', value)}
            max={100}
            step={1}
            className="w-full"
          />
        </div>
      </div>
    </div>
  )
}
