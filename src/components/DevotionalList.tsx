'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface Devotional {
  id: string
  reference: string
  completed: boolean
  createdAt: string
}

export function DevotionalList({ userId }: { userId: string }) {
  const [devotionals, setDevotionals] = useState<Devotional[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadDevotionals() {
      try {
        const response = await fetch('/api/devotionals')
        const data = await response.json()
        setDevotionals(data)
      } catch (error) {
        console.error('Error loading devotionals:', error)
      } finally {
        setIsLoading(false)
      }
    }

    loadDevotionals()
  }, [])

  if (isLoading) {
    return (
      <div className="text-center py-8 text-text-secondary">
        Carregando devocionais...
      </div>
    )
  }

  if (devotionals.length === 0) {
    return (
      <div className="text-center py-8 bg-surface rounded-lg shadow-lg">
        <p className="text-text-secondary mb-4">
          Você ainda não tem nenhum devocional
        </p>
        <Link 
          href="/devotional/generate"
          className="text-primary hover:text-primary-hover"
        >
          Criar seu primeiro devocional
        </Link>
      </div>
    )
  }

  return (
    <div className="grid gap-4">
      {devotionals.map((devotional) => (
        <Link
          key={devotional.id}
          href={`/devotional/${devotional.id}`}
          className="block bg-surface p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
        >
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold text-text-primary mb-2">
                {devotional.reference}
              </h2>
              <p className="text-text-secondary">
                {new Date(devotional.createdAt).toLocaleDateString('pt-BR')}
              </p>
            </div>
            {devotional.completed ? (
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                Concluído
              </span>
            ) : (
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                Em andamento
              </span>
            )}
          </div>
        </Link>
      ))}
    </div>
  )
} 