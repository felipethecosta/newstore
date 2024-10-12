import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const PoliticaDeCookies: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto px-4 md:px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
          Política de Cookies
        </h1>

        <div className="space-y-6 text-justify">
          <h2 className="text-2xl font-semibold">1. Controlador de Dados</h2>
          <p>
            O uso de cookies pela Giorgio Armani Brasil Comércio, Importação e
            Exportação Ltda., com sede na cidade de São Paulo (denominada “GA
            Brasil”), administradora do site www.armani.com.br (doravante
            denominado “Site”), fornece a você as informações a seguir sobre o
            uso de cookies em nosso site.
          </p>

          <h2 className="text-2xl font-semibold mt-6">
            2. Procedimentos de Aceitação
          </h2>
          <p>
            Conforme especificado no breve aviso indicado no banner, você pode
            dar seu consentimento para o uso de cookies simplesmente clicando na
            tecla. Aceitar todos os Cookies, fechando o banner ou clicando em
            qualquer elemento do conteúdo nas páginas do site.
          </p>

          <h2 className="text-2xl font-semibold mt-6">
            3. O que é um cookie e para que serve?
          </h2>
          <p>
            Um cookie é um pequeno arquivo que é enviado ao navegador e salvo no
            seu dispositivo quando você visita um site como www.armani.com.br.
            Os cookies permitem que o site funcione com eficiência e melhore
            seus serviços.
          </p>

          <h2 className="text-2xl font-semibold mt-6">
            4. Quais cookies utilizamos e para que finalidades?
          </h2>
          <p>
            Nosso site usa vários tipos de cookies primários e cookies de
            terceiros, cada uma com uma função específica. Aqui estão os tipos
            de cookies que usamos:
          </p>
          <ul className="list-disc list-inside">
            <li>
              <strong>Cookies técnicos essenciais de navegação:</strong> São
              necessários para o funcionamento do site e não podem ser
              desativados.
            </li>
            <li>
              <strong>Cookies de funcionalidade:</strong> Ativam funcionalidades
              específicas do site, como lembrar suas preferências de login.
            </li>
            <li>
              <strong>Cookies analíticos:</strong> Nos ajudam a entender como os
              usuários interagem com o site.
            </li>
            <li>
              <strong>Cookies de marketing e de perfil:</strong> Utilizados para
              personalizar a experiência de navegação e publicidade.
            </li>
            <li>
              <strong>Cookies de redes sociais:</strong> Permitem interação com
              as redes sociais, como compartilhar conteúdos diretamente no
              Facebook, Instagram, etc.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6">
            5. Como posso desativar os cookies e gerenciar minhas preferências?
          </h2>
          <p>
            A maioria dos navegadores está configurada para aceitar cookies
            automaticamente, mas você pode alterar as configurações para
            bloquear cookies. Abaixo estão os links de instruções para os
            navegadores mais populares:
          </p>
          <ul className="list-disc list-inside">
            <li>
              <a
                href="http://windows.microsoft.com/en-us/windows7/block-enable-or-allow-cookies"
                target="_blank"
                rel="noopener noreferrer"
              >
                Internet Explorer
              </a>
            </li>
            <li>
              <a
                href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
                target="_blank"
                rel="noopener noreferrer"
              >
                Safari
              </a>
            </li>
            <li>
              <a
                href="https://support.google.com/chrome/answer/95647?hl=en&hlrm=fr&hlrm=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chrome
              </a>
            </li>
            <li>
              <a
                href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences"
                target="_blank"
                rel="noopener noreferrer"
              >
                Firefox
              </a>
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6">
            6. Acesso a Dados e Atendimento ao Cliente
          </h2>
          <p>
            Você pode exercer seus direitos relacionados à política de cookies
            entrando em contato com nosso atendimento ao cliente via e-mail no
            endereço contato@armani.com.br.
          </p>

          <h2 className="text-2xl font-semibold mt-6">
            7. Notificação Web Push
          </h2>
          <p>
            Com o seu consentimento, podemos enviar notificações web push
            relacionadas às promoções e novidades do site. Você pode gerenciar
            ou bloquear as notificações diretamente nas configurações do seu
            navegador.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PoliticaDeCookies;
