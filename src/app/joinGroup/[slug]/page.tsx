"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function JoinGroup({ params }: { params: { slug: string } }) {
  const urlScheme = `bibleRats://joinGroup/${params.slug}`;
  const [isMobile, setIsMobile] = useState(false);
  const [, setIsAndroid] = useState(false);
  const [, setIsIOS] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor;
    const mobile = /android|iPhone|iPad|iPod/i.test(userAgent);
    const android = /android/i.test(userAgent);
    const ios = /iPhone|iPad|iPod/i.test(userAgent);

    setIsMobile(mobile);
    setIsAndroid(android);
    setIsIOS(ios);

    if (mobile) {
      // Tenta abrir o app
      window.location.href = urlScheme;

      // Fallback após 2 segundos
      const timer = setTimeout(() => {
        if (android) {
          window.location.href = "https://play.google.com/store/apps/details?id=com.sementedigital.devocioneiplus";
        } else if (ios) {
          window.location.href = "https://apps.apple.com/app/id6744262439"; 
        }
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [urlScheme]);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-br from-[#92A3FD] to-[#9DCEFF]">
      <article className="text-center max-w-2xl bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-lg">
        <Link href="/">
          <Image
            src="/bibleRats.png"
            alt="Logo BibleRats"
            width={200}
            height={80}
            className="mx-auto mb-8"
          />
        </Link>
        <h1 className="text-3xl font-bold mb-4 text-[#92A3FD]">Abrindo o App BibleRats</h1>
        
        {isMobile ? (
          <>
            <p className="text-lg mb-6">Você está sendo redirecionado para o aplicativo BibleRats para participar do grupo de devocionais.</p>
            <p className="mb-4">Se o aplicativo não abrir automaticamente, <a className="text-[#92A3FD] underline hover:text-[#9DCEFF] transition-colors" href={urlScheme}>clique aqui para abrir no app</a>.</p>
            <p className="text-sm text-gray-600">Não tem o app? Você será redirecionado para a loja de aplicativos em alguns segundos.</p>
          </>
        ) : (
          <div className="space-y-8">
            <p className="text-lg mb-6">Para participar do grupo, você precisa baixar o aplicativo BibleRats.</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 border border-[#92A3FD]/20 rounded-lg hover:shadow-md transition-all hover:border-[#92A3FD]/40 bg-white/50">
                <h2 className="text-xl font-semibold mb-4 text-[#92A3FD]">Download para Android</h2>
                <a 
                  href="https://play.google.com/store/apps/details?id=com.sementedigital.devocioneiplus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Image
                    src="/google-play-badge.png"
                    alt="Disponível no Google Play"
                    width={200}
                    height={80}
                    className="mx-auto"
                  />
                </a>
              </div>

              <div className="p-6 border border-[#92A3FD]/20 rounded-lg hover:shadow-md transition-all hover:border-[#92A3FD]/40 bg-white/50">
                <h2 className="text-xl font-semibold mb-4 text-[#92A3FD]">Download para iOS</h2>
                <a 
                  href="https://apps.apple.com/app/id6744262439"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Image
                    src="/app-store-badge.png"
                    alt="Baixe na App Store"
                    width={200}
                    height={80}
                    className="mx-auto"
                  />
                </a>
              </div>
            </div>

            <p className="text-sm text-gray-600 mt-4">
              Após instalar o app, volte aqui e clique no link para entrar no grupo.
            </p>
          </div>
        )}
      </article>
    </main>
  );
}
