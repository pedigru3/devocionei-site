import Image from "next/image";
import Logo from "@/images/devocionei.webp"

export default function Home() {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <header className="text-center mb-4">
        <div className="flex justify-center">

        </div>
        <h1 className="text-4xl font-bold">Devocionei</h1>
        <p className="mt-2 text-lg">Seu devocional personalizado para meditar nas escrituras.</p>
      </header>
      
      <main className="flex flex-col items-center">
        <Image
            className="mb-8"
            src={Logo}
            alt="Logo Devocionei"
            width={250}
            height={250}
            priority
          />
        <p className="text-center mb-6">
          Com o Devocionei, você pode inserir seu versículo e receber perguntas que ajudam na reflexão e aprendizado.
        </p>
        <button
          className="bg-primary mt-4 rounded-full text-background py-2 px-8 hover:bg-blue-700 transition"
        >
          Baixe agora
        </button>
      </main>

      {/* Benefícios Section */}
      <section className="mt-4 py-12 rounded-lg px-8">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Por que usar o Devocionei?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Benefício 1 */}
          <div className="flex flex-col items-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth="1.5" 
              stroke="currentColor" 
              className="w-12 h-12 text-primary"
            >
              {/* Ícone representando o benefício 1 */}
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A48.117 48.117 0 0012 20.5c1.052 0 2.062-.18 3-.512V6.042z" 
              />
            </svg>
            <h3 className="text-xl font-medium mt-4">Reflexão Profunda</h3>
            <p className="text-center mt-2">
              Perguntas cuidadosamente elaboradas para te guiar em uma meditação mais profunda.
            </p>
          </div>

          {/* Benefício 2 */}
          <div className="flex flex-col items-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth="1.5" 
              stroke="currentColor" 
              className="w-12 h-12 text-primary"
            >
              {/* Ícone representando o benefício 2 */}
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125m-1.687 1.688l-1.687 1.688" 
              />
            </svg>
            <h3 className="text-xl font-medium mt-4">Personalizado</h3>
            <p className="text-center mt-2">
              Insira seus próprios versículos e personalize sua experiência devocional.
            </p>
          </div>

          {/* Benefício 3 */}
          <div className="flex flex-col items-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth="1.5" 
              stroke="currentColor" 
              className="w-12 h-12 text-primary"
            >
              {/* Ícone representando o benefício 3 */}
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" 
              />
            </svg>
            <h3 className="text-xl font-medium mt-4">Fácil de Usar</h3>
            <p className="text-center mt-2">
              Interface simples e intuitiva para uma experiência devocional tranquila.
            </p>
          </div>
        </div>
      </section>

      <footer className="mt-12 text-center">
        <a href="/privacy">Política de Privacidade</a>
        <p className="pt-2">© 2023 Devocionei. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}