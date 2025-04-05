"use client";

import { useEffect } from "react";

export default function JoinGroup({ params }: { params: { slug: string } }) {
  const urlScheme = `devocioneiplus://joinGroup/${params.slug}`;

  useEffect(() => {
    window.location.href = urlScheme;
  }, [urlScheme]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-4">Abrir no App Devocionei</h1>
      <a href={urlScheme} className="bg-primary text-white px-6 py-3 rounded-full">
        Abrir no App
      </a>
    </div>
  );
}