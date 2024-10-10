import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Cart } from "@/components/Cart/Cart";
import { JSX, SVGProps, useState, useEffect, useRef } from "react";

function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState(3); // Contagem de itens no carrinho
  const cartRef = useRef(null); // Ref para o contêiner do carrinho

  // Desabilitar o scroll horizontal quando o carrinho estiver aberto
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflowX = "hidden";
    } else {
      document.body.style.overflowX = "auto";
    }
    return () => {
      document.body.style.overflowX = "auto"; // Limpar o estilo ao desmontar
    };
  }, [isCartOpen]);

  // Fechar o carrinho ao clicar fora dele
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsCartOpen(false); // Fecha o carrinho se clicar fora
      }
    };

    if (isCartOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Limpa o evento ao desmontar
    };
  }, [isCartOpen]);

  return (
    <header className="bg-background border-b shadow-sm">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-14 md:h-16">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-lg"
          prefetch={false}
        >
          <MountainIcon className="h-8 w-8" />
          <span className="text-2xl font-bold">Kippos</span>
        </Link>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#"
              className="text-sm font-medium hover:underline"
              prefetch={false}
            >
              Entrar
            </Link>
            <Button
              variant="outline"
              className="relative"
              onClick={() => setIsCartOpen(!isCartOpen)}
            >
              Carrinho ({cartItems})
            </Button>
          </div>
        </div>
      </div>
      <nav className="bg-background py-2">
        <div className="container mx-auto px-4 md:px-6 flex justify-center gap-8 text-sm font-medium">
          <Link href="#" className="hover:underline" prefetch={false}>
            Promoções
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Alianças
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Correntes
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Anéis
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Pingentes
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Brincos
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Pulseiras
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Coleções
          </Link>
        </div>
      </nav>
      {isCartOpen && (
        <div
          ref={cartRef}
          className="fixed top-16 right-0 w-[28rem] max-w-full h-screen overflow-y-auto bg-gray-900 text-gray-200 shadow-lg z-50 p-8"
        >
          <Cart onClose={() => setIsCartOpen(false)} />
        </div>
      )}
    </header>
  );
}

function MountainIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

export default Header;
