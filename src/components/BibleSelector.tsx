'use client'

import { useState, useEffect } from 'react'
import { fetchBibleVerses } from '@/lib/bible-api'
import { parseBibleReference } from '@/lib/bible-utils'

interface BibleVerse {
  text: string
  book: {
    name: string
  }
}

export default function BibleSelector() {
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [versePreview, setVersePreview] = useState<BibleVerse[] | null>(null)
  const [isLoadingVerse, setIsLoadingVerse] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Busca os versículos quando o input é válido
  useEffect(() => {
    async function loadVerses() {
      if (!input.trim()) {
        setVersePreview(null)
        setError(null)
        return
      }

      const parsed = parseBibleReference(input)

      if (!parsed.book) {
        setError('Livro não encontrado ou formato inválido. Use: "Livro Capítulo:Verso" (ex: "Gênesis 1:1" ou "Gn 1:1")')
        setVersePreview(null)
        return
      }

      if (!parsed.chapter || !parsed.startVerse) {
        setError('Formato inválido. Use: Capítulo:Verso (ex: 1:1)')
        setVersePreview(null)
        return
      }

      setIsLoadingVerse(true)
      setError(null)
      
      try {
        const verses = await fetchBibleVerses(
          parsed.book,
          parsed.chapter,
          parsed.startVerse,
          parsed.endVerse || parsed.startVerse
        )
        setVersePreview(verses)
      } catch (error) {
        console.error('Error loading verse:', error)
        setError('Versículo não encontrado. Verifique se o capítulo e versículo existem.')
        setVersePreview(null)
      } finally {
        setIsLoadingVerse(false)
      }
    }

    const timeoutId = setTimeout(loadVerses, 500)
    return () => clearTimeout(timeoutId)
  }, [input])

  const handleGenerate = async () => {
    if (!input.trim() || !versePreview) return
  
    setIsLoading(true)
    try {
      const response = await fetch('/api/devotionals/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          reference: input.trim()
        }),
      })
  
      if (!response.ok) throw new Error('Falha ao gerar devocional')
  
      const devotional = await response.json()
      window.location.href = `/devotional/${devotional.id}`
    } catch (error) {
      console.error('Erro:', error)
      setError('Ocorreu um erro ao gerar o devocional. Tente novamente.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-surface p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-text-primary">
          Selecionar Versículo
        </h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-text-secondary">
              Referência Bíblica
            </label>
            <input
              type="text"
              placeholder='Ex: "Jo 3:16" ou "Gênesis 1:1-3"'
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full p-2 border-border rounded-lg bg-surface hover:bg-surface-hover focus:border-border-focus"
            />
            {error && (
              <p className="text-red-500 text-sm mt-1">{error}</p>
            )}
          </div>
        </div>
      </div>

      {/* Preview dos Versículos */}
<div className="mt-6 bg-surface p-6 rounded-lg shadow-lg">
  <h3 className="text-lg font-semibold mb-3 text-text-primary">
    Preview dos Versículos
  </h3>
  {isLoadingVerse ? (
    <p className="text-text-secondary">Carregando...</p>
  ) : versePreview && versePreview.length > 0 ? (
    <div className="space-y-4">
      <p className="text-text-secondary">
        {versePreview[0].book.name}
      </p>
      {versePreview.map((verse, index) => {
        const parsed = parseBibleReference(input)
        return (
          <div key={index} className="space-y-1">
            <p>
              <sup>{parsed.startVerse ? parsed.startVerse + index : index}</sup>
              <span className="text-yellow-500">
               {' '} {verse.text}
              </span>
            </p>
          </div>
        )
      })}
    </div>
  ) : (
    <p className="text-text-secondary">
      Digite uma referência bíblica para ver o preview
    </p>
  )}
</div>

      <button
        onClick={handleGenerate}
        disabled={isLoading || !versePreview}
        className="w-full bg-primary hover:bg-primary-hover text-white py-2 rounded-lg disabled:bg-disabled disabled:text-text-disabled mt-4"
      >
        {isLoading ? 'Gerando...' : 'Gerar Devocional'}
      </button>
    </div>
  )
} 