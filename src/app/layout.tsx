import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Devocionei",
  description: "Conecte-se com sua comunidade através de devocionais compartilhados, rankings de leitura e ferramentas para discipulado em grupo.",
  keywords: ["devocional", "comunidade", "discipulado", "leitura bíblica", "estudos bíblicos", "igreja", "células", "aplicativo cristão"],
  authors: [{ name: "Devocionei" }],
  creator: "Devocionei",
  publisher: "Devocionei",
  openGraph: {
    title: "Devocionei - Conectando comunidades através da Palavra",
    description: "Compartilhe devocionais, participe de desafios e fortaleça sua comunidade com ferramentas de discipulado em grupo.",
    url: "https://devocionei.com.br",
    siteName: "Devocionei",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Devocionei - Seu guia de devocionais em comunidade",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Devocionei - Plataforma de Devocionais Comunitários",
    description: "Conecte-se com sua comunidade através de devocionais compartilhados e ferramentas para discipulado em grupo.",
    images: ["/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://devocionei.com.br",
  },
  icons: {
    icon: [
      { url: '/favicon.webp' }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Adicionar diretamente no head com dangerouslySetInnerHTML */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
              .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
              n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
              (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
              ml('account', '1450197');
            `
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
