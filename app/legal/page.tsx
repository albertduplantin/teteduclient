'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../_components/ui/card'
import { Button } from '../_components/ui/button'
import { LanguageSwitcher } from '../_components/LanguageSwitcher'
import { useI18n, type Language } from '../_lib/i18n'

export default function LegalPage() {
  const [language, setLanguage] = useState<Language>('fr')
  const t = useI18n(language)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            {t.legal.title}
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
                {language === 'fr' ? 'Mentions légales' : 'Legal notice'}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg leading-relaxed">
                {t.legal.content}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                {language === 'fr' ? 'Protection des données personnelles' : 'Personal data protection'}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-800 mb-2">
                  {language === 'fr' ? '✅ Aucune collecte de données' : '✅ No data collection'}
                </h3>
                <ul className="text-green-700 text-sm space-y-1">
                  <li>• {language === 'fr' ? 'Aucune image n\'est enregistrée ou transmise' : 'No images are recorded or transmitted'}</li>
                  <li>• {language === 'fr' ? 'Aucune donnée personnelle n\'est collectée' : 'No personal data is collected'}</li>
                  <li>• {language === 'fr' ? 'Aucun cookie de tracking' : 'No tracking cookies'}</li>
                  <li>• {language === 'fr' ? 'Aucune analyse biométrique' : 'No biometric analysis'}</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                {language === 'fr' ? 'Conformité RGPD' : 'GDPR compliance'}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">
                    {language === 'fr' ? 'Principe de minimisation' : 'Minimization principle'}
                  </h4>
                  <p className="text-sm text-blue-700">
                    {language === 'fr' 
                      ? 'Seules les données strictement nécessaires sont traitées (aucune en l\'occurrence).'
                      : 'Only strictly necessary data is processed (none in this case).'
                    }
                  </p>
                </div>
                
                <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-purple-800 mb-2">
                    {language === 'fr' ? 'Consentement éclairé' : 'Informed consent'}
                  </h4>
                  <p className="text-sm text-purple-700">
                    {language === 'fr' 
                      ? 'L\'utilisateur est clairement informé de l\'absence de collecte de données.'
                      : 'The user is clearly informed of the absence of data collection.'
                    }
                  </p>
                </div>
                
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">
                    {language === 'fr' ? 'Droit à l\'effacement' : 'Right to erasure'}
                  </h4>
                  <p className="text-sm text-green-700">
                    {language === 'fr' 
                      ? 'Aucune donnée n\'étant collectée, ce droit est automatiquement respecté.'
                      : 'Since no data is collected, this right is automatically respected.'
                    }
                  </p>
                </div>
                
                <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <h4 className="font-semibold text-yellow-800 mb-2">
                    {language === 'fr' ? 'Transparence' : 'Transparency'}
                  </h4>
                  <p className="text-sm text-yellow-700">
                    {language === 'fr' 
                      ? 'Tous les traitements sont transparents et documentés.'
                      : 'All processing is transparent and documented.'
                    }
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                {language === 'fr' ? 'Protection des mineurs' : 'Minors protection'}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h3 className="font-semibold text-yellow-800 mb-2">
                  {language === 'fr' ? '⚠️ Public mineur autorisé' : '⚠️ Minors allowed'}
                </h3>
                <p className="text-yellow-700 text-sm mb-2">
                  {language === 'fr' 
                    ? 'Cette application est conçue pour être utilisée par des mineurs dans un cadre éducatif :'
                    : 'This application is designed to be used by minors in an educational context:'
                  }
                </p>
                <ul className="text-yellow-700 text-sm space-y-1">
                  <li>• {language === 'fr' ? 'Contenu éducatif uniquement' : 'Educational content only'}</li>
                  <li>• {language === 'fr' ? 'Aucun contenu inapproprié' : 'No inappropriate content'}</li>
                  <li>• {language === 'fr' ? 'Aucune collecte de données personnelles' : 'No personal data collection'}</li>
                  <li>• {language === 'fr' ? 'Objectif pédagogique clair' : 'Clear educational objective'}</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                {language === 'fr' ? 'Aspect technique' : 'Technical aspect'}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <h4 className="font-semibold text-lg">
                  {language === 'fr' ? 'Caméra et traitement local' : 'Camera and local processing'}
                </h4>
                <p className="text-sm text-gray-600">
                  {language === 'fr' 
                    ? 'L\'accès à la caméra est optionnel et utilisé uniquement pour des effets visuels locaux. Aucune image n\'est capturée, enregistrée ou transmise. Le traitement se fait entièrement côté client.'
                    : 'Camera access is optional and used only for local visual effects. No images are captured, recorded or transmitted. Processing is entirely client-side.'
                  }
                </p>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-lg">
                  {language === 'fr' ? 'Service Worker et PWA' : 'Service Worker and PWA'}
                </h4>
                <p className="text-sm text-gray-600">
                  {language === 'fr' 
                    ? 'L\'application utilise un Service Worker pour la mise en cache et le fonctionnement hors ligne. Aucune donnée personnelle n\'est mise en cache.'
                    : 'The application uses a Service Worker for caching and offline functionality. No personal data is cached.'
                  }
                </p>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-lg">
                  {language === 'fr' ? 'Analytics et tracking' : 'Analytics and tracking'}
                </h4>
                <p className="text-sm text-gray-600">
                  {language === 'fr' 
                    ? 'Aucun système d\'analytics, de tracking ou de cookies n\'est utilisé. L\'application respecte la vie privée des utilisateurs.'
                    : 'No analytics, tracking or cookie system is used. The application respects user privacy.'
                  }
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                {language === 'fr' ? 'Licence' : 'License'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <p className="text-lg font-semibold mb-2">MIT License</p>
                <p className="text-sm text-gray-600">
                  {language === 'fr' 
                    ? 'Cette application est distribuée sous licence MIT. Le code source est disponible et peut être modifié librement.'
                    : 'This application is distributed under MIT license. Source code is available and can be freely modified.'
                  }
                </p>
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
