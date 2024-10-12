import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Cart } from "@/components/Cart/Cart";
import Login from "@/components/Login/Login"; // Componente de Login
import Register from "@/components/SignUp/Register"; // Componente de Cadastro

function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false); // Estado para Login
  const [isRegisterOpen, setIsRegisterOpen] = useState(false); // Estado para Cadastro
  const cartRef = useRef(null); // Ref para o contêiner do carrinho
  const modalRef = useRef(null); // Ref para os modais de Login e Cadastro

  // Fechar modais e carrinho ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Fechar o carrinho se clicar fora
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsCartOpen(false);
      }
      // Fechar o modal de login se clicar fora
      if (
        isLoginOpen &&
        modalRef.current &&
        !modalRef.current.contains(event.target)
      ) {
        setIsLoginOpen(false);
      }
      // Fechar o modal de cadastro se clicar fora
      if (
        isRegisterOpen &&
        modalRef.current &&
        !modalRef.current.contains(event.target)
      ) {
        setIsRegisterOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isCartOpen, isLoginOpen, isRegisterOpen]);

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
            {/* Botão para abrir o modal de login */}
            <button
              onClick={() => setIsLoginOpen(true)}
              className="text-sm font-medium hover:underline"
            >
              Entrar
            </button>
            <Button
              variant="outline"
              className="relative"
              onClick={() => setIsCartOpen(!isCartOpen)}
            >
              Carrinho (3)
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

      {/* Modal de Login */}
      {isLoginOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div
            ref={modalRef}
            className="relative bg-white rounded-lg shadow-lg w-full max-w-md p-6"
          >
            <button
              onClick={() => setIsLoginOpen(false)} // Fechar modal de login
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            {/* Componente de Login */}
            <Login
              onRegisterClick={() => {
                setIsLoginOpen(false); // Fechar modal de Login
                setIsRegisterOpen(true); // Abrir modal de Cadastro
              }}
            />
          </div>
        </div>
      )}

      {/* Modal de Cadastro */}
      {isRegisterOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div
            ref={modalRef}
            className="relative bg-white rounded-lg shadow-lg w-full max-w-md p-6"
          >
            <button
              onClick={() => setIsRegisterOpen(false)} // Fechar modal de cadastro
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            {/* Componente de Cadastro */}
            <Register />
          </div>
        </div>
      )}

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

function MountainIcon(props) {
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
