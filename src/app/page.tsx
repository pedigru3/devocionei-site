import Image from "next/image";
import Logo from "@/images/devocionei.webp"
import Link from "next/link";

export default function Home() {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <header className="text-center mb-4">
        <div className="flex justify-center">

        </div>
        <h1 className="text-4xl font-bold">Devocionei</h1>
        <p className="mt-2 text-lg">Seu guia de devocionais em comunidade</p>
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
          O Devocionei conecta você com sua comunidade através de devocionais compartilhados, 
          rankings de leitura e ferramentas para discipulado em grupo.
        </p>
        <Link
          href="https://app.devocionei.com.br"
          className="bg-primary mt-4 rounded-full text-background py-2 px-8 hover:bg-blue-700 transition"
        >
          Acesse agora
        </Link>
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
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" 
              />
            </svg>
            <h3 className="text-xl font-medium mt-4">Devocionais em Grupo</h3>
            <p className="text-center mt-2">
              Compartilhe reflexões e insights com sua comunidade, fortalecendo laços de fé e amizade.
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
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" 
              />
            </svg>
            <h3 className="text-xl font-medium mt-4">Rankings e Desafios</h3>
            <p className="text-center mt-2">
              Acompanhe seu progresso e participe de desafios motivadores para manter uma rotina consistente de leitura.
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
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" 
              />
            </svg>
            <h3 className="text-xl font-medium mt-4">Ferramentas de Discipulado</h3>
            <p className="text-center mt-2">
              Recursos específicos para líderes guiarem seus grupos em estudos bíblicos e crescimento espiritual conjunto.
            </p>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="mt-8 py-10 w-full bg-gray-50 dark:bg-gray-800 rounded-lg px-8">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Cresça junto com sua comunidade
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="md:w-1/2 max-w-md">
            <h3 className="text-xl font-medium mb-4">Devocionais que conectam</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg className="h-5 w-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                Compartilhe suas reflexões com o grupo
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                Discuta versículos em tempo real
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                Acompanhe o progresso da sua célula ou grupo
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 max-w-md mt-6 md:mt-0">
            <h3 className="text-xl font-medium mb-4">Ferramentas para líderes</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg className="h-5 w-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                Crie planos de leitura personalizados
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                Acompanhe a evolução dos participantes
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                Organize desafios bíblicos em grupo
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link
            href="https://app.devocionei.com.br"
            className="bg-primary mt-4 rounded-full text-background py-2 px-8 hover:bg-blue-700 transition"
          >
            Comece com seu grupo hoje
          </Link>
        </div>
      </section>

      <footer className="mt-12 text-center">
        <a href="/privacy">Política de Privacidade</a>
        <p className="pt-2">© 2023 Devocionei. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}