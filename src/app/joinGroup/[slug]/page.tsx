import { redirect } from 'next/navigation';

export default function JoinGroup({ params }: { params: { slug: string } }) {
  // Você pode adicionar lógica aqui para verificar se o usuário está em um dispositivo móvel
  // e redirecionar para o URL Scheme se necessário
  
  // Exemplo de redirecionamento para o URL Scheme
  const urlScheme = `devocioneiplus://devocioneiplus.com/joinGroup/${params.slug}`;
  
  // Redireciona para o URL Scheme
  redirect(urlScheme);
  
  // Se o redirecionamento não funcionar, você pode mostrar uma página com um botão
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-4">Abrir no App Devocionei</h1>
      <a 
        href={urlScheme}
        className="bg-primary text-white px-6 py-3 rounded-full"
      >
        Abrir no App
      </a>
    </div>
  );
}

