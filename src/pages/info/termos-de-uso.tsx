import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const TermosDeUso: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto px-4 md:px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
          Termos de Uso
        </h1>
        <div className="space-y-6 text-justify">
          <p>
            Os presentes Termos de Uso regulam as condições gerais de utilização
            dos sites, plataformas e aplicações de Internet da [Nome da
            Empresa], em conformidade com a Lei 12.965/2014 (Marco Civil da
            Internet).
          </p>
          <p>
            Ao utilizar os sites, plataformas ou aplicações de Internet da [Nome
            da Empresa] você concorda expressa e integralmente com os presentes
            Termos de Uso.
          </p>
          <p>
            Recomendamos aos usuários que, previamente à utilização dos sites,
            plataformas ou aplicações de Internet da [Nome da Empresa], realizem
            atenta leitura dos presentes TERMOS DE USO.
          </p>

          <h2 className="text-2xl font-semibold mt-6">1. Objeto</h2>
          <p>
            Através dos seus sites, plataformas e aplicações de Internet, a
            [Nome da Empresa] disponibiliza o acesso a diversos conteúdos e
            serviços, permitindo maior interação com seus clientes e
            possibilitando a realização de compras online. Os presentes Termos
            de Uso regulam a utilização desses sites, plataformas e aplicações
            de Internet.
          </p>

          <h2 className="text-2xl font-semibold mt-6">
            2. Da Política de Privacidade e Segurança
          </h2>
          <p>
            A proteção dos dados pessoais do Usuário é levada a sério pela [Nome
            da Empresa] e por isso nos submetemos ao cumprimento dos deveres e
            obrigações referentes à proteção de dados pessoais conforme disposto
            na nossa Política de Privacidade e Segurança, tratando os dados
            pessoais do Usuário de acordo com a legislação vigente aplicável.
          </p>

          {/* Continue adicionando o restante do texto conforme necessário */}

          <h2 className="text-2xl font-semibold mt-6">
            11. Lei Aplicável e Foro Competente
          </h2>
          <p>
            Na interpretação da presente Política de Privacidade e Segurança,
            aplica-se a legislação brasileira. Quaisquer litígios relacionados a
            esta Política de Privacidade e Segurança serão da competência
            exclusiva do Foro Central de Porto Alegre, RS, Brasil.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermosDeUso;
