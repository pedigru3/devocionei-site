"use client";

import { useEffect } from "react";

export default function JoinGroup({ params }: { params: { slug: string } }) {
  const urlScheme = `devocioneiplus://joinGroup/${params.slug}`;

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor;

    const isAndroid = /android/i.test(userAgent);
    const isIOS = /iPhone|iPad|iPod/i.test(userAgent);

    // Tenta abrir o app
    window.location.href = urlScheme;

    // Fallback após 2 segundos
    const timer = setTimeout(() => {
      if (isAndroid) {
        window.location.href = "https://play.google.com/store/apps/details?id=com.sementedigital.devocioneiplus";
      } else if (isIOS) {
        window.location.href = "https://apps.apple.com/app/id6744262439"; 
      } else {
        window.location.href = "https://www.devocionei.com.br";
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [urlScheme]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-4">Abrindo o App Devocionei...</h1>
      <p>Se nada acontecer, <a className="text-blue-500 underline" href={urlScheme}>clique aqui para abrir no app</a>.</p>
    </div>
  );
}
