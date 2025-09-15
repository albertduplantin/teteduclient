'use client'

import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { useI18n, type Language } from '@/app/_lib/i18n'

interface BiasCardsProps {
  language: Language
}

export function BiasCards({ language }: BiasCardsProps) {
  const t = useI18n(language)

  const biasCards = [
    {
      key: 'halo' as const,
      icon: '👑',
      title: t.biasCards.halo.title,
      description: t.biasCards.halo.description
    },
    {
      key: 'confirmation' as const,
      icon: '🔍',
      title: t.biasCards.confirmation.title,
      description: t.biasCards.confirmation.description
    },
    {
      key: 'beauty' as const,
      icon: '✨',
      title: t.biasCards.beauty.title,
      description: t.biasCards.beauty.description
    },
    {
      key: 'stereotypes' as const,
      icon: '🏷️',
      title: t.biasCards.stereotypes.title,
      description: t.biasCards.stereotypes.description
    },
    {
      key: 'authority' as const,
      icon: '👔',
      title: t.biasCards.authority.title,
      description: t.biasCards.authority.description
    }
  ]

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-center">
        {language === 'fr' ? 'Les biais cognitifs' : 'Cognitive biases'}
      </h3>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {biasCards.map((bias) => (
          <Card key={bias.key} className="bias-card">
            <CardHeader className="pb-2">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">{bias.icon}</span>
                <CardTitle className="text-base">{bias.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                {bias.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
