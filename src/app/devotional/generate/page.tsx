import BibleSelector from '@/components/BibleSelector'

export default function DevotionalsPage() {
  return (
    <main className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Gerar Devocional
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Selecione um trecho da Bíblia para gerar sua devocional personalizada
          </p>
        </header>

        <BibleSelector />

        <footer className="mt-8 text-center text-sm text-gray-500">
          <p>
            Usando a tradução NVI (Nova Versão Internacional) da Bíblia
          </p>
        </footer>
      </div>
    </main>
  )
} 