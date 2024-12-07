import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import { ptBR } from '@clerk/localizations'


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: "Devocionei",
  description: "Seu devocional personalizado para meditar nas escrituras",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider localization={ptBR}>
      <html lang="pt-BR">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <nav className="fixed top-0 right-0 p-4 flex justify-end">
            <SignedOut>
              <SignInButton mode="modal">
                <button className="bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-lg">
                  Entrar
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </nav>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
