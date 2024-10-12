/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Link from "next/link";

interface LoginProps {
  onClose: () => void; // Função para fechar o modal de login
  onRegisterClick: () => void; // Função para abrir o modal de cadastro
}

const Login: React.FC<LoginProps> = ({ onClose, onRegisterClick }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-8 space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Identificação</h2>
          <button
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={onClose} // Fecha o modal ao clicar no "X"
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
        </div>

        {/* Formulário de login */}
        <form className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              *E-mail ou CPF
            </label>
            <input
              type="text"
              id="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
              placeholder="Digite seu e-mail ou CPF"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              *Senha
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                placeholder="Digite sua senha"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
              >
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {showPassword ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12m6 0c0 1.4-.56 2.7-1.57 3.7l-.06.06a5.24 5.24 0 01-7.38 0l-.06-.06A5.24 5.24 0 016 12m6-6a6 6 0 00-6 6"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3l18 18M7 7a6 6 0 0111.66 0M12 18a6 6 0 01-6-6"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          <div className="flex justify-end">
            <Link href="#" className="text-sm text-primary hover:underline">
              Esqueci minha senha
            </Link>
          </div>

          {/* Botão de Login */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Entrar
            </button>
          </div>

          {/* Login com rede social */}
          <div className="flex items-center justify-center mt-4">
            <div className="border-t border-gray-300 w-full"></div>
            <span className="px-2 text-sm text-gray-500">ou</span>
            <div className="border-t border-gray-300 w-full"></div>
          </div>
          <div className="flex justify-center mt-4">
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
              <img
                src="/sociais/google.png"
                alt="Google Login"
                className="w-5 h-5 mr-2"
              />
              Faça seu login com Google
            </button>
          </div>

          {/* Cadastro */}
          <div className="mt-4">
            <button
              type="button"
              onClick={onRegisterClick} // Abre o modal de cadastro
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-800 hover:bg-gray-900"
            >
              Quero me cadastrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
