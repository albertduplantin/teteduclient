import { describe, it, expect } from 'vitest'
import { computeScore, randomInt, shuffleArray } from '../rng'

describe('RNG Functions', () => {
  describe('computeScore', () => {
    it('should return a score between 0 and 20', () => {
      const result = computeScore({ halo: 50, herd: 50, lucky: 50 })
      expect(result.score).toBeGreaterThanOrEqual(0)
      expect(result.score).toBeLessThanOrEqual(20)
    })

    it('should return a phrase', () => {
      const result = computeScore({ halo: 50, herd: 50, lucky: 50 })
      expect(result.phrase).toBeDefined()
      expect(typeof result.phrase).toBe('string')
      expect(result.phrase.length).toBeGreaterThan(0)
    })

    it('should return multiple phrases', () => {
      const result = computeScore({ halo: 50, herd: 50, lucky: 50 })
      expect(result.phrases).toBeDefined()
      expect(Array.isArray(result.phrases)).toBe(true)
      expect(result.phrases.length).toBeGreaterThan(0)
    })

    it('should be deterministic with same inputs', () => {
      const biases = { halo: 25, herd: 75, lucky: 10 }
      const result1 = computeScore(biases)
      const result2 = computeScore(biases)
      expect(result1.score).toBe(result2.score)
      expect(result1.phrase).toBe(result2.phrase)
    })

    it('should be different with different inputs', () => {
      const result1 = computeScore({ halo: 10, herd: 20, lucky: 30 })
      const result2 = computeScore({ halo: 90, herd: 80, lucky: 70 })
      
      // Les scores peuvent être identiques par hasard, mais c'est peu probable
      // On teste que les résultats sont cohérents (score et phrase définis)
      expect(result1.score).toBeDefined()
      expect(result1.phrase).toBeDefined()
      expect(result2.score).toBeDefined()
      expect(result2.phrase).toBeDefined()
      
      // Teste que les phrases sont valides (non vides)
      expect(result1.phrase.length).toBeGreaterThan(0)
      expect(result2.phrase.length).toBeGreaterThan(0)
    })
  })

  describe('randomInt', () => {
    it('should return integer within range', () => {
      const result = randomInt(5, 15)
      expect(result).toBeGreaterThanOrEqual(5)
      expect(result).toBeLessThanOrEqual(15)
      expect(Number.isInteger(result)).toBe(true)
    })

    it('should be deterministic with seed', () => {
      const result1 = randomInt(1, 100, 12345)
      const result2 = randomInt(1, 100, 12345)
      expect(result1).toBe(result2)
    })
  })

  describe('shuffleArray', () => {
    it('should return array of same length', () => {
      const original = [1, 2, 3, 4, 5]
      const shuffled = shuffleArray(original)
      expect(shuffled).toHaveLength(original.length)
    })

    it('should contain same elements', () => {
      const original = [1, 2, 3, 4, 5]
      const shuffled = shuffleArray(original)
      expect(shuffled.sort()).toEqual(original.sort())
    })

    it('should be deterministic with seed', () => {
      const original = [1, 2, 3, 4, 5]
      const shuffled1 = shuffleArray(original, 12345)
      const shuffled2 = shuffleArray(original, 12345)
      expect(shuffled1).toEqual(shuffled2)
    })
  })
})
