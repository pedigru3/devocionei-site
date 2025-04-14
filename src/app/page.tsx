"use client";

import Image from "next/image";
import Logo from "@/images/devocionei.webp"
import Script from "next/script";

export default function Home() {
  // Botão do MailerLite como HTML puro
  const renderMailerLiteButton = (text: string) => {
    return {
      __html: `<button class="ml-onclick-form bg-primary mt-4 rounded-full text-background py-3 px-10 hover:bg-blue-700 transition-all text-lg font-medium" onclick="ml('show', 'RsmHEY', true)">${text}</button>`
    };
  };

  // Botão do MailerLite como HTML puro (versão branca)
  const renderWhiteMailerLiteButton = (text: string) => {
    return {
      __html: `<button class="ml-onclick-form bg-white text-primary font-bold py-3 px-10 rounded-full hover:bg-gray-100 transition-all text-lg" onclick="ml('show', 'RsmHEY', true)">${text}</button>`
    };
  };

  return (
    <>
      {/* O Script do Next.js pode não estar funcionando adequadamente para este caso específico,
         então estamos carregando via useEffect */}
      
      <Script id="schema-org" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Devocionei",
            "applicationCategory": "CommunicationApplication",
            "operatingSystem": "Cross-platform",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "BRL"
            },
            "description": "O Devocionei conecta você com sua comunidade através de devocionais compartilhados, rankings de leitura e ferramentas para discipulado em grupo.",
            "url": "https://devocionei.com.br"
          }
        `}
      </Script>
      
      <Script id="faq-schema" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "O Devocionei é gratuito?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim! O Devocionei oferece um plano gratuito com todas as funcionalidades principais. Existem planos premium com recursos adicionais para igrejas e ministérios maiores."
                }
              },
              {
                "@type": "Question",
                "name": "Preciso ter uma igreja ou grupo para usar o Devocionei?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Não é obrigatório. Você pode usar o Devocionei individualmente, mas a experiência é aprimorada quando utilizada em comunidade com seu grupo, célula ou igreja."
                }
              },
              {
                "@type": "Question",
                "name": "Quantas pessoas posso adicionar ao meu grupo?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No plano gratuito, você pode adicionar até 15 pessoas em um grupo. Para grupos maiores, recomendamos os planos premium que oferecem capacidade ilimitada."
                }
              },
              {
                "@type": "Question",
                "name": "Quais versões da Bíblia estão disponíveis?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "O Devocionei oferece diversas traduções em português como NVI, ARA, NAA, NTLH e outras. Também temos versões em inglês, espanhol e outros idiomas."
                }
              },
              {
                "@type": "Question",
                "name": "Posso usar o Devocionei offline?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim! O aplicativo permite baixar os planos de leitura e conteúdos para acesso offline. As interações com seu grupo serão sincronizadas quando você estiver conectado novamente."
                }
              },
              {
                "@type": "Question",
                "name": "Como faço para criar um plano de leitura personalizado?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Na área de administrador do grupo, selecione &ldquo;Criar Plano&rdquo;, escolha os livros ou capítulos desejados, defina o período e personalize as metas diárias. É simples e rápido!"
                }
              }
            ]
          }
        `}
      </Script>

      <div className="flex flex-col items-center justify-center min-h-screen p-8">
        <header className="text-center mb-6 w-full max-w-4xl">
          <div className="flex justify-center">
            <Image
              className="mb-4"
              src={Logo}
              alt="Logo Devocionei"
              width={120}
              height={120}
              priority
            />
          </div>
          <h1 className="text-5xl font-bold mb-2">Devocionei</h1>
          <p className="mt-2 text-xl md:text-2xl">Seu guia de devocionais em comunidade</p>
        </header>
        
        <main className="flex flex-col items-center w-full max-w-4xl">
          <section className="text-center mb-12 w-full">
            <h2 className="sr-only">Sobre o Devocionei</h2>
            <p className="text-center text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              O Devocionei conecta você com sua comunidade através de devocionais compartilhados, 
              rankings de leitura e ferramentas para discipulado em grupo.
            </p>
            <div dangerouslySetInnerHTML={renderMailerLiteButton("Faça seu pré-cadastro")} />
          </section>

          {/* Video Demo Section */}
          <section className="mt-8 mb-16 w-full">
            <div className="relative w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-xl">
              <div className="relative pb-[56.25%] h-0 bg-gray-100">
                {/* Substitua este placeholder pelo iframe do seu vídeo real do YouTube/Vimeo */}
                <div className="absolute inset-0 w-full h-full bg-gray-800 flex flex-col items-center justify-center p-8 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-primary mb-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                  </svg>
                  <h3 className="text-xl font-medium text-white mb-2">Veja o Devocionei em ação</h3>
                  <p className="text-gray-300">Substitua este placeholder pelo iframe do vídeo demonstrativo do aplicativo</p>
                  
                  {/* 
                  Exemplo de como ficaria com um iframe real:
                  <iframe 
                    className="absolute inset-0 w-full h-full" 
                    src="https://www.youtube.com/embed/seu-video-id" 
                    title="Vídeo demonstrativo do Devocionei"
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                  </iframe> 
                  */}
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-white ml-1">
                    <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="text-center mt-4 text-sm text-gray-500">
              Veja como é fácil compartilhar devocionais e acompanhar o progresso do seu grupo
            </div>
          </section>

          {/* Benefícios Section */}
          <section className="mt-4 py-12 rounded-lg px-8 w-full">
            <h2 className="text-3xl font-semibold text-center mb-12">
              Por que usar o Devocionei?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Benefício 1 */}
              <div className="flex flex-col items-center bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth="1.5" 
                  stroke="currentColor" 
                  className="w-12 h-12 text-primary"
                  aria-hidden="true"
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
              <div className="flex flex-col items-center bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth="1.5" 
                  stroke="currentColor" 
                  className="w-12 h-12 text-primary"
                  aria-hidden="true"
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
              <div className="flex flex-col items-center bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth="1.5" 
                  stroke="currentColor" 
                  className="w-12 h-12 text-primary"
                  aria-hidden="true"
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

          {/* App Screenshots Section */}
          <section className="mt-16 py-12 w-full">
            <h2 className="text-3xl font-semibold text-center mb-8">
              Conheça o Devocionei
            </h2>
            <div className="relative mt-12 mb-16">
              {/* Screenshots do aplicativo - substitua as URLs por imagens reais */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
                <div className="relative">
                  <div className="absolute -inset-1.5 bg-gradient-to-r from-primary/30 to-blue-600/30 rounded-2xl blur-lg"></div>
                  <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-1.5 shadow-xl">
                    <div className="h-[500px] w-[230px] overflow-hidden rounded-xl border-8 border-gray-800 bg-gray-800 relative">
                      <div className="absolute top-0 inset-x-0 h-6 bg-gray-800 z-10"></div>
                      {/* Feed de devocionais */}
                      <Image 
                        src="/screenShot1.PNG" 
                        alt="Tela de feed de devocionais do aplicativo Devocionei" 
                        width={214} 
                        height={486}
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="relative mt-8 md:mt-16">
                  <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600/30 to-primary/30 rounded-2xl blur-lg"></div>
                  <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-1.5 shadow-xl">
                    <div className="h-[500px] w-[230px] overflow-hidden rounded-xl border-8 border-gray-800 bg-gray-800 relative">
                      <div className="absolute top-0 inset-x-0 h-6 bg-gray-800 z-10"></div>
                      {/* Plano de Leitura */}
                      <Image 
                        src="/screenShot2.PNG" 
                        alt="Tela de plano de leitura do aplicativo Devocionei" 
                        width={214} 
                        height={486}
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="relative mt-8 md:mt-28">
                  <div className="absolute -inset-1.5 bg-gradient-to-r from-primary/30 to-indigo-600/30 rounded-2xl blur-lg"></div>
                  <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-1.5 shadow-xl">
                    <div className="h-[500px] w-[230px] overflow-hidden rounded-xl border-8 border-gray-800 bg-gray-800 relative">
                      <div className="absolute top-0 inset-x-0 h-6 bg-gray-800 z-10"></div>
                      {/* Ranking do grupo */}
                      <Image 
                        src="/screenShot13.PNG" 
                        alt="Tela de ranking do grupo do aplicativo Devocionei" 
                        width={214} 
                        height={486}
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-20">
              <h3 className="text-2xl font-semibold text-center mb-12">Como o Devocionei vai transformar sua vida espiritual</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-medium">Para Líderes de Células</h4>
                  </div>
                  <p className="mb-4">
                    Crie planos de leitura personalizados para seu grupo, acompanhe em tempo real quem está participando e engaje sua célula em discussões profundas sobre a Palavra.
                  </p>
                  <ul className="space-y-2 mt-4">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Monitore o engajamento de cada participante</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Envie lembretes e mensagens de encorajamento</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Prepare discussões baseadas nas leituras da semana</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-600 dark:text-green-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-medium">Para Membros da Igreja</h4>
                  </div>
                  <p className="mb-4">
                    Conecte-se com sua comunidade de fé, compartilhe suas experiências devocionais e cresça em comunhão através de planos de leitura e desafios inspiradores.
                  </p>
                  <ul className="space-y-2 mt-4">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Mantenha uma rotina de leitura consistente</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Receba encorajamento da sua comunidade</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Acompanhe seu crescimento espiritual ao longo do tempo</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-purple-600 dark:text-purple-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-medium">Para Pastores e Ministérios</h4>
                  </div>
                  <p className="mb-4">
                    Amplie o alcance do seu ministério com ferramentas que promovem engajamento contínuo e fornecem insights sobre o crescimento espiritual da congregação.
                  </p>
                  <ul className="space-y-2 mt-4">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Crie programas de leitura para toda a igreja</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Obtenha estatísticas de participação e engajamento</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Coordene múltiplos grupos e líderes</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-red-100 dark:bg-red-900 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-600 dark:text-red-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-medium">Para Seu Crescimento Pessoal</h4>
                  </div>
                  <p className="mb-4">
                    Desenvolva um hábito de devoção diária com ferramentas que mantêm você motivado, responsável e conectado com Deus e com outros cristãos.
                  </p>
                  <ul className="space-y-2 mt-4">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Registre suas reflexões e acompanhe seu crescimento</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Receba notificações e lembretes personalizados</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Celebre suas conquistas espirituais</span>
                    </li>
                  </ul>
                </div>
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
                    <svg className="h-5 w-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Compartilhe suas reflexões com o grupo
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Discuta versículos em tempo real
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
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
                    <svg className="h-5 w-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Crie planos de leitura personalizados
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Acompanhe a evolução dos participantes
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Organize desafios bíblicos em grupo
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center mt-8">
              <div dangerouslySetInnerHTML={renderMailerLiteButton("Quero participar do Devocionei")} />
            </div>
          </section>

          {/* Como Funciona Section */}
          <section className="mt-16 py-10 w-full bg-gray-50 dark:bg-gray-800 rounded-lg px-8">
            <h2 className="text-3xl font-semibold text-center mb-12">
              Como Funciona
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary text-white flex items-center justify-center rounded-full text-2xl font-bold mb-4">1</div>
                <h3 className="text-xl font-medium mb-3">Crie sua conta</h3>
                <p>Registre-se gratuitamente e convide sua comunidade ou entre em um grupo existente.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary text-white flex items-center justify-center rounded-full text-2xl font-bold mb-4">2</div>
                <h3 className="text-xl font-medium mb-3">Escolha um plano</h3>
                <p>Selecione entre os planos de leitura disponíveis ou crie um personalizado para seu grupo.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary text-white flex items-center justify-center rounded-full text-2xl font-bold mb-4">3</div>
                <h3 className="text-xl font-medium mb-3">Cresça em comunidade</h3>
                <p>Compartilhe reflexões, interaja com seu grupo e acompanhe o progresso de todos.</p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mt-16 py-12 w-full">
            <h2 className="text-3xl font-semibold text-center mb-12">
              Perguntas Frequentes
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium mb-3">O Devocionei é gratuito?</h3>
                <p>Sim! O Devocionei oferece um plano gratuito com todas as funcionalidades principais. Existem planos premium com recursos adicionais para igrejas e ministérios maiores.</p>
              </div>
              
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium mb-3">Preciso ter uma igreja ou grupo para usar o Devocionei?</h3>
                <p>Não é obrigatório. Você pode usar o Devocionei individualmente, mas a experiência é aprimorada quando utilizada em comunidade com seu grupo, célula ou igreja.</p>
              </div>
              
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium mb-3">Quantas pessoas posso adicionar ao meu grupo?</h3>
                <p>No plano gratuito, você pode adicionar até 15 pessoas em um grupo. Para grupos maiores, recomendamos os planos premium que oferecem capacidade ilimitada.</p>
              </div>
              
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium mb-3">Quais versões da Bíblia estão disponíveis?</h3>
                <p>O Devocionei oferece diversas traduções em português como NVI, ARA, NAA, NTLH e outras. Também temos versões em inglês, espanhol e outros idiomas.</p>
              </div>
              
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium mb-3">Posso usar o Devocionei offline?</h3>
                <p>Sim! O aplicativo permite baixar os planos de leitura e conteúdos para acesso offline. As interações com seu grupo serão sincronizadas quando você estiver conectado novamente.</p>
              </div>
              
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium mb-3">Como faço para criar um plano de leitura personalizado?</h3>
                <p>Na área de administrador do grupo, selecione &ldquo;Criar Plano&rdquo;, escolha os livros ou capítulos desejados, defina o período e personalize as metas diárias. É simples e rápido!</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mt-12 py-12 w-full bg-primary text-white rounded-lg px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Transforme sua experiência devocional hoje
            </h2>
            <p className="mb-8 max-w-2xl mx-auto text-lg">
              Seja um dos primeiros a acessar o Devocionei e transforme sua experiência devocional junto com sua comunidade.
            </p>
            <div dangerouslySetInnerHTML={renderWhiteMailerLiteButton("Fazer pré-cadastro")} />
          </section>
        </main>

        <footer className="mt-12 text-center w-full max-w-4xl py-6">
          <div className="flex justify-center space-x-4 mb-4">
            <a href="/privacy" className="hover:underline">Política de Privacidade</a>
            <a href="/terms" className="hover:underline">Termos de Uso</a>
            <a href="/contact" className="hover:underline">Contato</a>
          </div>
          <p className="pt-2">© {new Date().getFullYear()} Devocionei. Todos os direitos reservados.</p>
        </footer>
      </div>
    </>
  );
}