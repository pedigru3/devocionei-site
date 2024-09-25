import Image from "next/image";
import Logo from "@/images/devocionei.png"

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-start items-center mb-8">
      <a href="/" aria-label="Voltar para a página principal">
      <Image
            className="mb-8"
            src={Logo}
            alt="Logo Devocionei"
            width={100}
            height={100}
          />
      </a>
      <p className="text-primary text-3xl font-bold">Devocionei</p>
      </div>
      <h1 className="text-3xl font-bold mb-6">Política de Privacidade</h1>
      <p className="mb-4">
        Esta política de privacidade descreve como o Devocionei coleta, usa, 
        armazena e compartilha suas informações quando você utiliza nosso aplicativo.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-4">Informações que Coletamos</h2>
      <p className="mb-4">
        Coletamos informações quando você se registra, utiliza nosso aplicativo 
        ou se comunica conosco. As informações podem incluir:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li>Nome e sobrenome</li>
        <li>Endereço de e-mail</li>
        <li>Informações de contato</li>
        <li>Dados de uso do aplicativo</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-4">Como Usamos Suas Informações</h2>
      <p className="mb-4">
        Usamos suas informações para:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li>Fornecer e melhorar nossos serviços</li>
        <li>Comunicar sobre atualizações e promoções</li>
        <li>Atender a solicitações de suporte</li>
        <li>Realizar análises para entender o uso do aplicativo</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-4">Compartilhamento de Informações</h2>
      <p className="mb-4">
        Não vendemos suas informações pessoais. Podemos compartilhar suas informações 
        nas seguintes situações:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li>Com prestadores de serviços que nos ajudam a operar o aplicativo</li>
        <li>Para cumprir obrigações legais</li>
        <li>Para proteger nossos direitos e os direitos de outros usuários</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-4">Segurança das Informações</h2>
      <p className="mb-4">
        Adotamos medidas de segurança para proteger suas informações. No entanto, 
        nenhuma transmissão de dados pela internet é totalmente segura, e não podemos 
        garantir a segurança absoluta de suas informações.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-4">Seus Direitos</h2>
      <p className="mb-4">
        Você tem o direito de acessar, corrigir ou excluir suas informações pessoais. 
        Para exercer esses direitos, entre em contato conosco através dos canais fornecidos 
        abaixo.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-4">Contato</h2>
      <p className="mb-4">
        Se você tiver dúvidas sobre esta política de privacidade, entre em contato conosco 
        pelo e-mail: <a href="mailto:contato@devocionei.com">contato@devocionei.com</a>.
      </p>
      
      <p className="mt-6">
        Esta política de privacidade pode ser atualizada periodicamente. Recomendamos 
        que você a revise regularmente para estar ciente de quaisquer alterações.
      </p>

      <div className="mt-16">
        <a href="/" className="text-xl font-bold" >
          Voltar para a página principal
        </a>
      </div>
    </div>
  );
}
