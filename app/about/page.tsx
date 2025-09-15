'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../_components/ui/card'
import { Button } from '../_components/ui/button'
import { LanguageSwitcher } from '../_components/LanguageSwitcher'
import { useI18n, type Language } from '../_lib/i18n'

export default function AboutPage() {
  const [language, setLanguage] = useState<Language>('fr')
  const t = useI18n(language)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            {t.about.title}
          </h1>
          <div className="flex justify-center">
            <LanguageSwitcher 
              language={language} 
              onLanguageChange={setLanguage} 
            />
          </div>
        </header>

        {/* Main Content */}
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                {language === 'fr' ? 'Objectif de l\'application' : 'Application objective'}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg leading-relaxed">
                {t.about.content}
              </p>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h3 className="font-semibold text-yellow-800 mb-2">
                  {language === 'fr' ? '⚠️ Important' : '⚠️ Important'}
                </h3>
                <p className="text-yellow-700 text-sm">
                  {language === 'fr' 
                    ? 'Cette application ne fait AUCUNE analyse de visage, ne stocke AUCUNE image et ne collecte AUCUNE donnée personnelle. C\'est purement éducatif et parodique.'
                    : 'This application does NO face analysis, stores NO images and collects NO personal data. It is purely educational and parodic.'
                  }
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                {language === 'fr' ? 'Les biais cognitifs' : 'Cognitive biases'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-3">
                  <h4 className="font-semibold text-lg">👑 {language === 'fr' ? 'Effet Halo' : 'Halo Effect'}</h4>
                  <p className="text-sm text-gray-600">
                    {language === 'fr' 
                      ? 'Tendance à généraliser une première impression positive ou négative à tous les aspects d\'une personne.'
                      : 'Tendency to generalize a first positive or negative impression to all aspects of a person.'
                    }
                  </p>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-lg">🔍 {language === 'fr' ? 'Biais de confirmation' : 'Confirmation bias'}</h4>
                  <p className="text-sm text-gray-600">
                    {language === 'fr' 
                      ? 'Recherche et interprétation d\'informations qui confirment nos préjugés existants.'
                      : 'Searching for and interpreting information that confirms existing prejudices.'
                    }
                  </p>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-lg">✨ {language === 'fr' ? 'Beauté perçue' : 'Beauty premium'}</h4>
                  <p className="text-sm text-gray-600">
                    {language === 'fr' 
                      ? 'Association automatique entre beauté physique et compétences, intelligence ou moralité.'
                      : 'Automatic association between physical beauty and skills, intelligence or morality.'
                    }
                  </p>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-lg">🏷️ {language === 'fr' ? 'Stéréotypes' : 'Stereotypes'}</h4>
                  <p className="text-sm text-gray-600">
                    {language === 'fr' 
                      ? 'Croyances simplifiées et généralisées sur les caractéristiques d\'un groupe social.'
                      : 'Simplified and generalized beliefs about the characteristics of a social group.'
                    }
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                {language === 'fr' ? 'Pourquoi c\'est problématique ?' : 'Why is this problematic?'}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                  <h4 className="font-semibold text-red-800 mb-2">
                    {language === 'fr' ? 'Discrimination' : 'Discrimination'}
                  </h4>
                  <p className="text-sm text-red-700">
                    {language === 'fr' 
                      ? 'L\'évaluation basée sur l\'apparence perpétue les inégalités et renforce les préjugés.'
                      : 'Appearance-based evaluation perpetuates inequalities and reinforces prejudices.'
                    }
                  </p>
                </div>
                
                <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <h4 className="font-semibold text-orange-800 mb-2">
                    {language === 'fr' ? 'Injustice' : 'Injustice'}
                  </h4>
                  <p className="text-sm text-orange-700">
                    {language === 'fr' 
                      ? 'Les compétences et la valeur d\'une personne ne peuvent être jugées sur son apparence.'
                      : 'A person\'s skills and value cannot be judged by their appearance.'
                    }
                  </p>
                </div>
                
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">
                    {language === 'fr' ? 'Non-pertinence' : 'Irrelevance'}
                  </h4>
                  <p className="text-sm text-blue-700">
                    {language === 'fr' 
                      ? 'L\'apparence physique n\'est pas corrélée aux compétences professionnelles ou intellectuelles.'
                      : 'Physical appearance is not correlated with professional or intellectual skills.'
                    }
                  </p>
                </div>
                
                <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-purple-800 mb-2">
                    {language === 'fr' ? 'Aspect légal' : 'Legal aspect'}
                  </h4>
                  <p className="text-sm text-purple-700">
                    {language === 'fr' 
                      ? 'En France, l\'évaluation de visages par IA est interdite par la loi.'
                      : 'In France, AI face evaluation is prohibited by law.'
                    }
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                {language === 'fr' ? 'Comment utiliser l\'application' : 'How to use the application'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                  <p className="text-sm">
                    {language === 'fr' 
                      ? 'Ajustez les sliders de biais pour simuler différents types de préjugés'
                      : 'Adjust the bias sliders to simulate different types of prejudices'
                    }
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  <p className="text-sm">
                    {language === 'fr' 
                      ? 'Cliquez sur "Délibérer" pour générer un score parodique'
                      : 'Click "Deliberate" to generate a parodic score'
                    }
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                  <p className="text-sm">
                    {language === 'fr' 
                      ? 'Activez la caméra pour des effets visuels locaux (optionnel)'
                      : 'Enable camera for local visual effects (optional)'
                    }
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                  <p className="text-sm">
                    {language === 'fr' 
                      ? 'Utilisez le code Konami (↑↑↓↓←→←→BA) pour le mode sérieux'
                      : 'Use Konami code (↑↑↓↓←→←→BA) for serious mode'
                    }
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation */}
        <div className="mt-12 text-center">
          <Button asChild>
            <a href="/">
              {language === 'fr' ? 'Retour à l\'accueil' : 'Back to home'}
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
