'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'

const TextEditor = dynamic(() => import('./TextEditor'), {
  ssr: false,
  loading: () => <p>Carregando editor...</p>
})

interface DevotionalCompletionProps {
  devotionalId: string
}

export function DevotionalCompletion({ devotionalId }: DevotionalCompletionProps) {
  const [reflection, setReflection] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()
  const maxChars = 500

  // Função simplificada para contar caracteres
  const getCharCount = (html: string) => {
    return html.replace(/<[^>]*>/g, '').trim().length
  }

  const handleEditorChange = (newContent: string) => {
    console.log('Editor changed:', newContent) // Debug
    setReflection(newContent)
  }

  const charCount = getCharCount(reflection)

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

      router.refresh()
      router.push('/devotionals')
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
      <TextEditor value={reflection} onChange={handleEditorChange} />
      <p className="text-sm text-text-secondary">
        {charCount}/{maxChars} caracteres
      </p>
      {error && (
        <p className="mt-2 text-red-500 text-sm">
          {error}
        </p>
      )}
      <button
        onClick={handleComplete}
        disabled={isSubmitting || charCount > maxChars}
        className="mt-4 bg-primary hover:bg-primary-hover text-white px-6 py-2 rounded-lg disabled:bg-disabled disabled:text-text-disabled transition-colors"
      >
        {isSubmitting ? 'Salvando...' : 'Marcar como Concluído'}
      </button>
    </div>
  )
} 