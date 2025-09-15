'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog'
import { useI18n, type Language } from '@/app/_lib/i18n'

interface SeriousModalProps {
  language: Language
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function SeriousModal({ language, open, onOpenChange }: SeriousModalProps) {
  const t = useI18n(language)

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl text-red-600">
            {t.serious.title}
          </DialogTitle>
          <DialogDescription className="text-base">
            {language === 'fr' 
              ? 'Mode sérieux activé - Informations pédagogiques importantes'
              : 'Serious mode activated - Important educational information'
            }
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="parody-warning">
            <p className="font-medium mb-2">
              {language === 'fr' ? '⚠️ Attention' : '⚠️ Warning'}
            </p>
            <p>{t.serious.content}</p>
          </div>
          
          <div className="space-y-3 text-sm">
            <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
              <h4 className="font-medium text-blue-800 mb-1">
                {language === 'fr' ? 'Problèmes éthiques' : 'Ethical issues'}
              </h4>
              <ul className="list-disc list-inside text-blue-700 space-y-1">
                <li>{language === 'fr' ? 'Discrimination basée sur l\'apparence' : 'Appearance-based discrimination'}</li>
                <li>{language === 'fr' ? 'Renforcement des stéréotypes' : 'Reinforcement of stereotypes'}</li>
                <li>{language === 'fr' ? 'Injustice et inégalité' : 'Injustice and inequality'}</li>
              </ul>
            </div>
            
            <div className="p-3 bg-green-50 rounded-lg border border-green-200">
              <h4 className="font-medium text-green-800 mb-1">
                {language === 'fr' ? 'Aspects légaux' : 'Legal aspects'}
              </h4>
              <ul className="list-disc list-inside text-green-700 space-y-1">
                <li>{language === 'fr' ? 'Interdiction en France de l\'évaluation de visages par IA' : 'Prohibition in France of AI face evaluation'}</li>
                <li>{language === 'fr' ? 'Protection des mineurs' : 'Protection of minors'}</li>
                <li>{language === 'fr' ? 'Respect du RGPD' : 'GDPR compliance'}</li>
              </ul>
            </div>
            
            <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
              <h4 className="font-medium text-yellow-800 mb-1">
                {language === 'fr' ? 'Objectif pédagogique' : 'Educational objective'}
              </h4>
              <p className="text-yellow-700">
                {language === 'fr' 
                  ? 'Cette parodie vise à sensibiliser aux dangers des systèmes d\'évaluation basés sur l\'apparence et à promouvoir des pratiques plus équitables.'
                  : 'This parody aims to raise awareness of the dangers of appearance-based evaluation systems and promote more equitable practices.'
                }
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
