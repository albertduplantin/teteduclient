'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { Card } from './ui/card'
import { useI18n, type Language } from '@/app/_lib/i18n'

interface CameraViewProps {
  language: Language
  enabled: boolean
  showGlasses: boolean
  showStars: boolean
}

export function CameraView({ language, enabled, showGlasses, showStars }: CameraViewProps) {
  const t = useI18n(language)
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [stream, setStream] = useState<MediaStream | null>(null)
  const [error, setError] = useState<string | null>(null)

  const drawStar = useCallback((ctx: CanvasRenderingContext2D, x: number, y: number, size: number) => {
    const spikes = 5
    const outerRadius = size
    const innerRadius = size * 0.4

    ctx.beginPath()
    for (let i = 0; i < spikes * 2; i++) {
      const angle = (i * Math.PI) / spikes
      const radius = i % 2 === 0 ? outerRadius : innerRadius
      const px = x + Math.cos(angle) * radius
      const py = y + Math.sin(angle) * radius
      
      if (i === 0) {
        ctx.moveTo(px, py)
      } else {
        ctx.lineTo(px, py)
      }
    }
    ctx.closePath()
    ctx.fill()
    ctx.stroke()
  }, [])

  const drawGlasses = useCallback((ctx: CanvasRenderingContext2D, width: number, height: number) => {
    const centerX = width / 2
    const centerY = height / 2
    const glassesSize = Math.min(width, height) * 0.3

    ctx.strokeStyle = '#1f2937'
    ctx.lineWidth = 4
    ctx.fillStyle = 'rgba(31, 41, 55, 0.1)'

    // Verres
    ctx.beginPath()
    ctx.arc(centerX - glassesSize * 0.3, centerY, glassesSize * 0.2, 0, 2 * Math.PI)
    ctx.fill()
    ctx.stroke()

    ctx.beginPath()
    ctx.arc(centerX + glassesSize * 0.3, centerY, glassesSize * 0.2, 0, 2 * Math.PI)
    ctx.fill()
    ctx.stroke()

    // Pont
    ctx.beginPath()
    ctx.moveTo(centerX - glassesSize * 0.1, centerY)
    ctx.lineTo(centerX + glassesSize * 0.1, centerY)
    ctx.stroke()

    // Branches
    ctx.beginPath()
    ctx.moveTo(centerX - glassesSize * 0.5, centerY)
    ctx.lineTo(centerX - glassesSize * 0.7, centerY - glassesSize * 0.1)
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(centerX + glassesSize * 0.5, centerY)
    ctx.lineTo(centerX + glassesSize * 0.7, centerY - glassesSize * 0.1)
    ctx.stroke()
  }, [])

  const drawStars = useCallback((ctx: CanvasRenderingContext2D, width: number, height: number) => {
    const centerX = width / 2
    const centerY = height / 2
    const starSize = Math.min(width, height) * 0.1

    ctx.fillStyle = '#fbbf24'
    ctx.strokeStyle = '#f59e0b'
    ctx.lineWidth = 2

    // Dessine 3 étoiles autour de la tête
    const stars = [
      { x: centerX - starSize * 2, y: centerY - starSize * 1.5 },
      { x: centerX + starSize * 2, y: centerY - starSize * 1.5 },
      { x: centerX, y: centerY + starSize * 2 }
    ]

    stars.forEach(star => {
      drawStar(ctx, star.x, star.y, starSize)
    })
  }, [drawStar])

  useEffect(() => {
    if (!enabled) {
      if (stream) {
        stream.getTracks().forEach(track => track.stop())
        setStream(null)
      }
      return
    }

    const startCamera = async () => {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'user' },
          audio: false
        })
        
        setStream(mediaStream)
        setError(null)
        
        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream
        }
      } catch (err) {
        console.error('Error accessing camera:', err)
        setError(language === 'fr' 
          ? 'Impossible d\'accéder à la caméra. Vérifiez les permissions.'
          : 'Cannot access camera. Please check permissions.'
        )
      }
    }

    startCamera()

    return () => {
      // Cleanup function - ne dépend que de enabled
      if (enabled && stream) {
        stream.getTracks().forEach(track => track.stop())
      }
    }
  }, [enabled, language]) // Supprimé stream des dépendances

  useEffect(() => {
    if (!enabled || !videoRef.current || !canvasRef.current) return

    const video = videoRef.current
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    if (!ctx) return

    const drawOverlays = () => {
      if (video.videoWidth === 0 || video.videoHeight === 0) {
        requestAnimationFrame(drawOverlays)
        return
      }

      canvas.width = video.videoWidth
      canvas.height = video.videoHeight

      // Efface le canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Dessine les lunettes si activées
      if (showGlasses) {
        drawGlasses(ctx, canvas.width, canvas.height)
      }

      // Dessine les étoiles si activées
      if (showStars) {
        drawStars(ctx, canvas.width, canvas.height)
      }

      requestAnimationFrame(drawOverlays)
    }

    drawOverlays()
  }, [enabled, showGlasses, showStars, drawGlasses, drawStars])


  if (!enabled) {
    return (
      <Card className="camera-container h-64 flex items-center justify-center">
        <div className="text-center text-gray-500">
          <svg className="mx-auto h-12 w-12 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <p className="text-sm">{t.cameraNotice}</p>
        </div>
      </Card>
    )
  }

  if (error) {
    return (
      <Card className="camera-container h-64 flex items-center justify-center">
        <div className="text-center text-red-500">
          <svg className="mx-auto h-12 w-12 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
          <p className="text-sm">{error}</p>
        </div>
      </Card>
    )
  }

  return (
    <Card className="camera-container h-64 relative">
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        className="w-full h-full object-cover"
      />
      <canvas
        ref={canvasRef}
        className="overlay-canvas"
      />
    </Card>
  )
}
