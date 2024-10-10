import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-muted/40 border-t py-2 md:py-4">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-4 gap-2">
        {/* Atendimento ao Cliente */}
        <div className="text-center md:text-left">
          <h3 className="font-bold mb-1">ATENDIMENTO AO CLIENTE</h3>
          <ul className="space-y-1">
            <li>
              <Link href="#">Contato</Link>
            </li>
            <li>
              <Link href="#">Guia de Tamanhos</Link>
            </li>
            <li>
              <Link href="#">Meu pedido</Link>
            </li>
            <li>
              <Link href="#">Minha conta</Link>
            </li>
            <li>
              <Link href="#">Pagamento</Link>
            </li>
            <li>
              <Link href="#">Nossos serviços</Link>
            </li>
            <li>
              <Link href="#">Autenticidade</Link>
            </li>
          </ul>
        </div>

        {/* Entrega & Devoluções */}
        <div className="text-center md:text-left">
          <h3 className="font-bold mb-1">ENTREGA & DEVOLUÇÕES</h3>
          <ul className="space-y-1">
            <li>
              <Link href="#">Envio</Link>
            </li>
            <li>
              <Link href="#">Acompanhe seu Pedido</Link>
            </li>
            <li>
              <Link href="#">Devoluções, Trocas e Reembolsos</Link>
            </li>
          </ul>
        </div>

        {/* Termos e Políticas */}
        <div className="text-center md:text-left">
          <h3 className="font-bold mb-1">TERMOS E POLÍTICAS</h3>
          <ul className="space-y-1">
            <li>
              <Link href="#">Termos e Condições de Venda</Link>
            </li>
            <li>
              <Link href="#">Política de Privacidade</Link>
            </li>
            <li>
              <Link href="#">Política de Cookies</Link>
            </li>
            <li>
              <Link href="#">Segurança de Dados Pessoais (LGPD)</Link>
            </li>
          </ul>
        </div>

        {/* Corporativo */}
        <div className="text-center md:text-left">
          <h3 className="font-bold mb-1">CORPORATIVO</h3>
          <ul className="space-y-1">
            <li>
              <Link href="#">Encontre uma Loja</Link>
            </li>
            <li>
              <Link href="#">Trabalhe Conosco</Link>
            </li>
            <li>
              <Link href="#">Armani/Values</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Redes Sociais */}
      <div className="container mx-auto px-4 md:px-6 mt-3 text-center">
        <h3 className="font-bold mb-1">REDES SOCIAIS</h3>
        <div className="flex justify-center gap-3 mb-3">
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
      <div className="container mx-auto px-4 md:px-6 mt-3 text-center">
        <h3 className="font-bold mb-1">MÉTODOS DE PAGAMENTO</h3>
        <div className="flex justify-center gap-3">
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
      <div className="container mx-auto px-4 md:px-6 mt-3 text-center">
        <p className="text-xs text-muted-foreground">
          Copyright &copy; 2024 Giorgio Armani Brasil - Todos os Direitos
          Reservados | CNPJ: 13.180.502/0023-07
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="mt-1 text-sm font-medium hover:underline"
        >
          Voltar para o topo
        </button>
      </div>
    </footer>
  );
};

export default Footer;
