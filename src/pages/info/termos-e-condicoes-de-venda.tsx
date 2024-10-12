import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const TermosCondicoesVenda: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto px-4 md:px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
          Termos e Condições de Venda
        </h1>

        <div className="space-y-6 text-justify">
          <h2 className="text-2xl font-semibold">1. Cadastro, Login e Senha</h2>
          <p>
            Para realizar qualquer compra no Site do Brasil, você deverá efetuar
            primeiro seu cadastro. Seu cadastro é livre, facultativo e não
            obrigatório. Ao cadastrar-se no Site do Brasil, você aceita e
            concorda expressamente com os Termos e Condições vigentes à data de
            seu cadastro.
          </p>

          <h2 className="text-2xl font-semibold mt-6">2. Pedidos e Produtos</h2>
          <p>
            Todos os pedidos de compra estão sujeitos a confirmação. Após a
            finalização do pedido de compra, será encaminhada uma mensagem por
            e-mail confirmando ou não a compra realizada.
          </p>

          <h2 className="text-2xl font-semibold mt-6">3. Preços</h2>
          <p>
            Os produtos disponibilizados no Site do Brasil podem apresentar, de
            tempos em tempos, variações de preços. O preço de venda já inclui os
            tributos e impostos conforme a legislação brasileira.
          </p>

          <h2 className="text-2xl font-semibold mt-6">
            4. Custos de Envio e Propriedade dos Produtos
          </h2>
          <p>
            O frete é de responsabilidade do cliente, salvo política em
            contrário disponibilizada no site.
          </p>

          <h2 className="text-2xl font-semibold mt-6">
            5. Envio e Entrega de Produtos
          </h2>
          <p>
            As entregas serão realizadas por empresas terceiras especializadas
            em transporte e logística. Enviaremos os produtos no prazo estimado
            na confirmação do pedido.
          </p>

          <h2 className="text-2xl font-semibold mt-6">
            6. Devoluções e Reembolso
          </h2>
          <p>
            Consulte a nossa Política de Devolução para informações completas
            sobre devolução e restituição de valores.
          </p>

          <h2 className="text-2xl font-semibold mt-6">
            7. Formalização do Contrato
          </h2>
          <p>
            A nossa confirmação do pedido por e-mail, estes Termos e Condições
            de Venda e nossas outras políticas do Site constituem os termos e
            condições finais e definitivos sobre o contrato de compra e venda do
            produto efetuado entre nós e você.
          </p>

          <h2 className="text-2xl font-semibold mt-6">
            8. Legislação e Jurisdição Aplicáveis
          </h2>
          <p>
            O uso de nosso site e os contratos de compra e venda de produtos
            estão em conformidade com a legislação brasileira. Qualquer
            controvérsia será resolvida pelos tribunais brasileiros.
          </p>

          <h2 className="text-2xl font-semibold mt-6">9. Privacidade</h2>
          <p>
            Os termos e condições da nossa Política de Privacidade regulam a
            coleta e tratamento dos seus dados pessoais, coletados em razão do
            acesso, utilização e compra de produtos no Site do Brasil.
          </p>

          <h2 className="text-2xl font-semibold mt-6">10. Força Maior</h2>
          <p>
            Não seremos responsáveis por qualquer atraso ou falha causado por
            circunstâncias além do controle razoável (força maior).
          </p>

          <h2 className="text-2xl font-semibold mt-6">
            11. Erros e Inexatidões
          </h2>
          <p>
            Nosso site pode conter erros tipográficos, imprecisões ou omissões.
            Reservamo-nos o direito de corrigir qualquer erro, imprecisão ou
            omissão a qualquer momento, sem aviso prévio.
          </p>

          <h2 className="text-2xl font-semibold mt-6">
            12. Direitos de Propriedade Intelectual
          </h2>
          <p>
            Toda a propriedade intelectual do conteúdo do site é de nossa
            propriedade ou licenciada por terceiros. Não é permitida a
            reprodução sem autorização.
          </p>

          <h2 className="text-2xl font-semibold mt-6">
            13. Links de Terceiros
          </h2>
          <p>
            O site pode conter links para sites de terceiros. Não nos
            responsabilizamos pelo conteúdo, serviços ou produtos desses sites.
          </p>

          <h2 className="text-2xl font-semibold mt-6">
            14. Esclarecimentos e Dúvidas
          </h2>
          <p>
            Caso tenha alguma dúvida sobre os produtos, processo de compra ou
            devoluções, entre em contato conosco em contato@armani.com.br.
          </p>

          <h2 className="text-2xl font-semibold mt-6">
            15. Sobre a Giorgio Armani Brasil
          </h2>
          <p>
            Giorgio Armani Brasil Comércio, Importação e Exportação Ltda., com
            sede na Alameda Ministro Rocha Azevedo, 456, 3º andar, conjuntos
            301/302, Jardins, São Paulo - SP, CNPJ: 13.180.502/0001-93.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermosCondicoesVenda;
