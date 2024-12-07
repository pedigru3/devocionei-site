import { auth } from '@clerk/nextjs/server'
import { DevotionalList } from '@/components/DevotionalList'
import { redirect } from 'next/navigation'

export default async function DevotionalsPage() {
  const { userId } = await auth()
  
  if (!userId) {
    redirect('/sign-in')
  }

  return (
    <main className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-text-primary">
            Meus Devocionais
          </h1>
          <p className="text-text-secondary">
            Acompanhe seus devocionais e reflexões
          </p>
        </header>
        
        <div className="flex justify-end mb-6">
          <a
            href="/devotional/generate"
            className="bg-primary hover:bg-primary-hover text-white px-6 py-2 rounded-lg transition-colors"
          >
            Novo Devocional
          </a>
        </div>
        {/* adicionar um seletor de devocionais e uma lixeirinha do lado */}

        <DevotionalList userId={userId} />
      </div>
    </main>
  )
}
