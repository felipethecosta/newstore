import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-muted/40 py-6 text-center">
      {" "}
      {/* Removi a borda e deixei padding mais equilibrado */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Atendimento ao Cliente */}
        <div className="text-center">
          <h3 className="font-bold mb-2">ATENDIMENTO AO CLIENTE</h3>
          <ul className="space-y-1">
            <li>
              <Link href="#" className="hover:underline">
                Contato
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Guia de Tamanhos
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Meu pedido
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Minha conta
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Pagamento
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Nossos serviços
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Autenticidade
              </Link>
            </li>
          </ul>
        </div>

        {/* Entrega & Devoluções */}
        <div className="text-center">
          <h3 className="font-bold mb-2">ENTREGA & DEVOLUÇÕES</h3>
          <ul className="space-y-1">
            <li>
              <Link href="#" className="hover:underline">
                Envio
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Acompanhe seu Pedido
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Devoluções, Trocas e Reembolsos
              </Link>
            </li>
          </ul>
        </div>

        {/* Termos e Políticas */}
        <div className="text-center">
          <h3 className="font-bold mb-2">TERMOS E POLÍTICAS</h3>
          <ul className="space-y-1">
            <li>
              <Link href="#" className="hover:underline">
                Termos e Condições de Venda
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Política de Privacidade
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Política de Cookies
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Segurança de Dados Pessoais (LGPD)
              </Link>
            </li>
          </ul>
        </div>

        {/* Corporativo */}
        <div className="text-center">
          <h3 className="font-bold mb-2">CORPORATIVO</h3>
          <ul className="space-y-1">
            <li>
              <Link href="#" className="hover:underline">
                Encontre uma Loja
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Trabalhe Conosco
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Armani/Values
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* Redes Sociais */}
      <div className="container mx-auto px-4 mt-6 text-center">
        <h3 className="font-bold mb-2">REDES SOCIAIS</h3>
        <div className="flex justify-center gap-6 mb-4">
          <Link href="#">
            <Image
              src="/sociais/facebook.png"
              alt="Facebook"
              width={24}
              height={24}
              className="object-contain"
            />
          </Link>
          <Link href="#">
            <Image
              src="/sociais/instagram.png"
              alt="Instagram"
              width={24}
              height={24}
              className="object-contain"
            />
          </Link>
          <Link href="#">
            <Image
              src="/sociais/youtube.png"
              alt="YouTube"
              width={24}
              height={24}
              className="object-contain"
            />
          </Link>
          <Link href="#">
            <Image
              src="/sociais/tiktok.png"
              alt="TikTok"
              width={24}
              height={24}
              className="object-contain"
            />
          </Link>
        </div>
      </div>
      {/* Métodos de Pagamento */}
      <div className="container mx-auto px-4 text-center">
        <h3 className="font-bold mb-2">MÉTODOS DE PAGAMENTO</h3>
        <div className="flex justify-center gap-6">
          <Image
            src="/cards/visa.png"
            alt="Visa"
            width={32}
            height={18}
            className="object-contain"
          />
          <Image
            src="/cards/mastercard.png"
            alt="Mastercard"
            width={32}
            height={18}
            className="object-contain"
          />
          <Image
            src="/cards/amex.png"
            alt="Amex"
            width={32}
            height={18}
            className="object-contain"
          />
          <Image
            src="/cards/pix.png"
            alt="Pix"
            width={32}
            height={18}
            className="object-contain"
          />
          <Image
            src="/cards/paypal.png"
            alt="Paypal"
            width={32}
            height={18}
            className="object-contain"
          />
          <Image
            src="/cards/elo.png"
            alt="Elo"
            width={32}
            height={18}
            className="object-contain"
          />
          <Image
            src="/cards/hipercard.png"
            alt="Hipercard"
            width={32}
            height={18}
            className="object-contain"
          />
        </div>
      </div>
      {/* Copyright */}
      <div className="container mx-auto px-4 mt-6 text-center">
        <p className="text-xs text-muted-foreground">
          Copyright &copy; 2024 Giorgio Armani Brasil - Todos os Direitos
          Reservados | CNPJ: 13.180.502/0023-07
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="mt-2 text-sm font-medium hover:underline"
        >
          Voltar para o topo
        </button>
      </div>
    </footer>
  );
};

export default Footer;
