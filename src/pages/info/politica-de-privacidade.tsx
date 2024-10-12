import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const PoliticaDePrivacidade: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto px-4 md:px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
          Política de Privacidade e de Proteção de Dados
        </h1>
        <p className="text-muted mb-6">Última atualização: 26/03/2024</p>

        <div className="space-y-6 text-justify">
          <p>
            A Política de Privacidade e de Proteção de Dados da Lojas Renner
            S.A. (“Política”), foi criada para demonstrar o compromisso da
            RENNER com a segurança, a privacidade e proteção das informações
            pessoais coletadas acerca dos clientes ou usuários de serviços
            prestados, tanto em ambientes online quanto presencialmente em
            nossas lojas, que são os titulares dos dados pessoais (“Titular” ou
            simplesmente “você”).
          </p>

          <p>
            A Política esclarece as condições gerais de coleta, uso,
            armazenamento e demais formas de tratamento e proteção de dados
            pessoais nos sites, plataformas e aplicativos (“Aplicações de
            Internet”) da RENNER, em conformidade com a legislação brasileira
            atualmente em vigor em matéria de privacidade e proteção de dados
            pessoais no Brasil, em especial a Lei nº 13.709/2018 (Lei Geral de
            Proteção de Dados Pessoais – “LGPD”).
          </p>

          <h2 className="text-2xl font-semibold mt-6">
            1. Finalidade da Coleta dos Dados Pessoais
          </h2>
          <p>
            A coleta de dados é realizada com os seguintes objetivos: (a)
            garantir a eficácia na prestação dos nossos serviços; (b) adequar a
            aparência, organização e logística de nossas lojas, entre outros.
            Estamos comprometidos em preservar a privacidade e a segurança dos
            dados por nós coletados.
          </p>

          <h2 className="text-2xl font-semibold mt-6">
            2. Dados Pessoais Coletados
          </h2>
          <p>
            As informações tratadas podem ter sido fornecidas diretamente por
            você, por terceiros ou coletadas de forma automática através das
            nossas Aplicações de Internet, incluindo dados cadastrais, de
            contato e dados comportamentais.
          </p>

          <h2 className="text-2xl font-semibold mt-6">
            3. Utilização de Cookies
          </h2>
          <p>
            A RENNER utiliza cookies e outras tecnologias similares para
            oferecer a melhor experiência possível nas nossas Aplicações de
            Internet. Ao acessar nossos sites, você concorda com o uso de
            cookies conforme descrito na presente Política.
          </p>

          {/* Continue com o restante do conteúdo da Política de Privacidade conforme necessário */}

          <h2 className="text-2xl font-semibold mt-6">
            13. Lei Aplicável e Foro Competente
          </h2>
          <p>
            Na interpretação da presente Política de Privacidade e de Proteção
            de Dados, aplica-se a legislação brasileira. Quaisquer litígios
            relacionados a esta Política serão da competência exclusiva do Foro
            Central de Porto Alegre, RS, Brasil.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PoliticaDePrivacidade;
