import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Entrar no Grupo - BibleRats`,
    description: `Junte-se ao grupo de devocionais no BibleRats. Faça devocionais e suba no Ranking.`,
    openGraph: {
      title: `Entrar no Grupo - BibleRats`,
      description: `Junte-se ao grupo de devocionais no BibleRats. Faça devocionais e suba no Ranking.`,
      type: 'website',
    },
    robots: {
      index: false,
      follow: true,
    }
  };
} 