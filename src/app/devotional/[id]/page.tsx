import { DevotionalRepository } from '@/repositories/devotional-repository'
import { notFound } from 'next/navigation'
import { bibleBooks } from '@/config/bible'
import { DevotionalCompletion } from '@/components/DevotionalCompletion'
import { parseReference } from '@/utils/bible-reference'

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
  const parsedReference = parseReference(devotional.reference)
  const book = bibleBooks.find(b => b.abbrev.pt === parsedReference.book)

  return (
    <main className="min-h-screen py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-2 text-text-primary">
            Devocional
          </h1>
          <p className="text-text-secondary">
            {book?.name || parsedReference.book} {parsedReference.chapter}:
            {parsedReference.startVerse}
            {parsedReference.endVerse !== parsedReference.startVerse 
              ? `-${parsedReference.endVerse}` 
              : ''}
          </p>
        </header>

        <article className="bg-surface p-6 rounded-lg shadow-lg">
          <div className="prose dark:prose-invert max-w-none">
            {devotional.content.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
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
