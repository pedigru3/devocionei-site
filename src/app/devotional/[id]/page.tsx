import { DevotionalRepository } from '@/repositories/devotional-repository'
import { notFound } from 'next/navigation'
import { bibleBooks } from '@/config/bible'
import { DevotionalCompletion } from '@/components/DevotionalCompletion'
import { parseBibleReference, parseReference } from '@/lib/bible-utils'
import { fetchBibleVerses } from '@/lib/bible-api'

type DevotionalContent = {
  step: string
  answers: string[]
}

async function getDevotional(id: string) {
  const repository = new DevotionalRepository()
  const devotional = await repository.findById(id)
  
  if (!devotional) {
    notFound()
  }

  return devotional
}

export default async function DevotionalPage({
  params,
}: {
  params: { id: string }
}) {
  const devotional = await getDevotional(params.id)
  const parsedReference = parseBibleReference(devotional.reference)
  console.log(parsedReference)
  const verses = await fetchBibleVerses(
    parsedReference.book || '',
    parsedReference.chapter || 0 ,
    parsedReference.startVerse || 0,
    parsedReference.endVerse || 0
  )

  const versesText = verses.map(v => v.text).join(' ')

  const devotionalContentArray = JSON.parse(devotional.content) as DevotionalContent[]

  return (
    <main className="min-h-screen py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-2 text-text-primary">
            Devocional
          </h1>
          <p className="text-text-secondary">
            {devotional.reference}
          </p>
        </header>

        <article className="bg-surface p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-lg font-bold mb-2">Texto Bíblico</h2>
          <div className="prose dark:prose-invert max-w-none">
            <p>{versesText}</p>
          </div>
        </article>

        <article className="bg-surface p-6 rounded-lg shadow-lg">
          <div className="prose dark:prose-invert max-w-none">
            {devotionalContentArray.map((content, index) => (
              <div key={index}>
                <h2 className="text-lg font-bold mb-2">{content.step}</h2>
                <ul className="list-disc list-inside mb-4">
                  {content.answers.map((answer, index) => (
                    <li key={index}>{answer}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {!devotional.completed && (
            <DevotionalCompletion devotionalId={devotional.id} />
          )}
        </article>

        <footer className="mt-8 text-center">
          <a
            href="/devotionals"
            className="text-primary hover:text-primary-hover"
          >
            ← Voltar para Devocionais
          </a>
        </footer>
      </div>
    </main>
  )
}
