import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const DevolucoesTrocasReembolsos: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto px-4 md:px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
          Devoluções, Trocas e Reembolsos
        </h1>

        <div className="space-y-6 text-justify">
          <h2 className="text-2xl font-semibold">DEVOLUÇÕES</h2>
          <p>
            Todos os contatos oficiais referentes a solicitações de devolução de
            produtos são enviados exclusivamente por nosso e-mail oficial
            contato@armani.com.br. Não aceite qualquer coleta realizada de forma
            presencial.
          </p>
          <p>
            Para a Devolução de produtos, o prazo é de até 7 (sete) dias
            corridos, contados do recebimento dos Produtos.
          </p>
          <p>
            Solicite a devolução através do e-mail contato@armani.com.br.
            Certifique-se de que o produto de sua devolução está em sua condição
            original, com etiquetas e embalagem incluídas, caso contrário, não
            poderemos aceitar sua devolução e efetuar o reembolso.
          </p>
          <p>
            O tempo médio de análise é de 5 (cinco) dias. O tempo médio de
            transporte é de 10 (dez) dias para ir e 10 (dez) dias para voltar.
          </p>

          <h2 className="text-2xl font-semibold mt-6">
            TROCAS COM VALE PRODUTO
          </h2>
          <p>
            Se você deseja trocar um produto que adquiriu, o tamanho e/ou a cor,
            pode fazê-lo sem custos adicionais solicitando através de nosso
            e-mail contato@armani.com.br. Ao invés de uma troca física, será
            gerado um vale produto em loja correspondente ao valor do pedido.
          </p>
          <p>
            A Troca, via Vale Produto, pode ser feita em até 30 (trinta) dias
            corridos, a partir do seu recebimento. Certifique-se de que o
            produto atenda as condições dispostas nas seções 3 e 4 de nossa
            Política.
          </p>

          <h2 className="text-2xl font-semibold mt-6">TROCA EM LOJA</h2>
          <p>
            Você pode efetuar a troca em uma de nossas lojas físicas, nas mesmas
            condições de troca para compra online. As lojas disponíveis para
            troca são:
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>GIORGIO ARMANI SÃO PAULO</strong>: Shopping Cidade Jardim,
              Piso Térreo, SP
            </li>
            <li>
              <strong>EMPORIO ARMANI SÃO PAULO</strong>: Shopping Iguatemi, Piso
              3, SP
            </li>
            <li>
              <strong>EMPORIO ARMANI CURITIBA</strong>: Shopping Pátio Batel,
              Piso L1, Curitiba, PR
            </li>
            <li>
              <strong>EMPORIO ARMANI GOIÂNIA</strong>: Flamboyant Shopping
              Center, Piso 3, GO
            </li>
            <li>
              <strong>EMPORIO ARMANI RIO DE JANEIRO</strong>: Shopping Village
              Mall, Piso L1, RJ
            </li>
            <li>
              <strong>ARMANI EXCHANGE SÃO PAULO</strong>: Morumbi Shopping, Loja
              112/113-S, SP
            </li>
            <li>
              <strong>ARMANI EXCHANGE RIO DE JANEIRO</strong>: Barra Shopping,
              Piso Lagoa, RJ
            </li>
            <li>
              <strong>ARMANI EXCHANGE SALVADOR</strong>: Salvador Shopping, Piso
              L2, BA
            </li>
            <li>
              <strong>ARMANI EXCHANGE PORTO ALEGRE</strong>: Iguatemi Porto
              Alegre, Loja 21, RS
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6">REEMBOLSOS</h2>
          <p>
            O reembolso varia de acordo com a forma de pagamento utilizada no
            momento da compra. A restituição de valores poderá ocorrer das
            seguintes formas:
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Cartão de crédito:</strong> O valor da restituição pode
              levar até 2 (duas) faturas para constar no cartão, dependendo da
              data de vencimento ou fechamento da fatura.
            </li>
            <li>
              <strong>PIX:</strong> O reembolso será efetuado na conta corrente
              do titular do pedido, no prazo máximo de até 10 (dez) dias úteis.
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DevolucoesTrocasReembolsos;
