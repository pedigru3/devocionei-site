'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface DevotionalCompletionProps {
  devotionalId: string
}

export function DevotionalCompletion({ devotionalId }: DevotionalCompletionProps) {
  const [reflection, setReflection] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleComplete = async () => {
    if (!reflection.trim()) {
      setError('Por favor, escreva uma reflexão antes de concluir.')
      return
    }

    setIsSubmitting(true)
    setError('')

    try {
      const response = await fetch(`/api/devotionals/${devotionalId}/complete`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ reflection }),
      })

      if (!response.ok) {
        throw new Error('Falha ao marcar como concluído')
      }

      router.refresh() // Atualiza os dados da página
      router.push('/devotionals') // Redireciona para a lista
    } catch (error) {
      console.error('Error completing devotional:', error)
      setError('Ocorreu um erro ao marcar como concluído. Tente novamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="mt-8 border-t border-border pt-6">
      <h2 className="text-xl font-semibold mb-4 text-text-primary">
        Sua Reflexão
      </h2>
      <textarea
        className="w-full p-3 bg-surface-secondary border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
        rows={4}
        placeholder="Escreva aqui suas reflexões sobre este devocional..."
        value={reflection}
        onChange={(e) => setReflection(e.target.value)}
        disabled={isSubmitting}
      />
      {error && (
        <p className="mt-2 text-red-500 text-sm">
          {error}
        </p>
      )}
      <button
        onClick={handleComplete}
        disabled={isSubmitting}
        className="mt-4 bg-primary hover:bg-primary-hover text-white px-6 py-2 rounded-lg disabled:bg-disabled disabled:text-text-disabled transition-colors"
      >
        {isSubmitting ? 'Salvando...' : 'Marcar como Concluído'}
      </button>
    </div>
  )
} 