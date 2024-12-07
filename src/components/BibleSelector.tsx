'use client'

import { useState, useEffect } from 'react'
import { bibleBooks } from '@/config/bible'
import { fetchBibleVerse } from '@/lib/bible-api'

interface BibleVerse {
  text: string
  book: {
    name: string
  }
}

export default function BibleSelector() {
  const [selectedBook, setSelectedBook] = useState('')
  const [chapter, setChapter] = useState(1)
  const [verse, setVerse] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [versePreview, setVersePreview] = useState<BibleVerse | null>(null)
  const [isLoadingVerse, setIsLoadingVerse] = useState(false)

  const selectedBookData = bibleBooks.find(book => book.abbrev.pt === selectedBook)
  const maxChapters = selectedBookData?.chapters || 1

  // Busca o versículo quando o usuário seleciona todos os campos
  useEffect(() => {
    async function loadVerse() {
      if (!selectedBook || !chapter || !verse) {
        setVersePreview(null)
        return
      }

      setIsLoadingVerse(true)
      try {
        const data = await fetchBibleVerse(selectedBook, chapter, verse)
        setVersePreview(data)
      } catch (error) {
        console.error('Error loading verse:', error)
        setVersePreview(null)
      } finally {
        setIsLoadingVerse(false)
      }
    }

    // Debounce para evitar muitas requisições
    const timeoutId = setTimeout(loadVerse, 500)
    return () => clearTimeout(timeoutId)
  }, [selectedBook, chapter, verse])

  const handleGenerate = async () => {
    if (!versePreview) return
    
    setIsLoading(true)
    try {
      const response = await fetch('/api/devotionals/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          book: selectedBook,
          chapter,
          verse,
        }),
      })

      if (!response.ok) throw new Error('Failed to generate devotional')

      const devotional = await response.json()
      window.location.href = `/devotional/${devotional.id}`
    } catch (error) {
      console.error('Error:', error)
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
              Livro
            </label>
            <select 
              className="w-full p-2 border-border rounded-lg bg-surface hover:bg-surface-hover focus:border-border-focus"
              value={selectedBook}
              onChange={(e) => setSelectedBook(e.target.value)}
            >
              <option value="">Selecione um livro</option>
              {bibleBooks.map((book) => (
                <option key={book.abbrev.pt} value={book.abbrev.pt}>
                  {book.name}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-text-secondary">
                Capítulo
              </label>
              <input
                type="number"
                min={1}
                max={maxChapters}
                value={chapter}
                onChange={(e) => setChapter(Number(e.target.value))}
                className="w-full p-2 border-border rounded-lg bg-surface hover:bg-surface-hover focus:border-border-focus"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-text-secondary">
                Versículo
              </label>
              <input
                type="number"
                min={1}
                value={verse}
                onChange={(e) => setVerse(Number(e.target.value))}
                className="w-full p-2 border-border rounded-lg bg-surface hover:bg-surface-hover focus:border-border-focus"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Preview do Versículo */}
      <div className="mt-6 bg-surface p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold mb-3 text-text-primary">
          Preview do Versículo
        </h3>
        {isLoadingVerse ? (
          <p className="text-text-secondary">Carregando...</p>
        ) : versePreview ? (
          <div>
            <p className="text-yellow-500">
              {versePreview.text}
            </p>
          </div>
        ) : (
          <p className="text-text-secondary">
            Selecione um versículo para ver o preview
          </p>
        )}
      </div>

      <button
        onClick={handleGenerate}
        disabled={isLoading || !selectedBook}
        className="w-full bg-primary hover:bg-primary-hover text-white py-2 rounded-lg disabled:bg-disabled disabled:text-text-disabled"
      >
        {isLoading ? 'Gerando...' : 'Gerar Devocional'}
      </button>
    </div>
  )
} 