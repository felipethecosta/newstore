import { Button } from "@/components/ui/button";
import Link from "next/link";

const Custom404 = () => {
  return (
    <main className="flex flex-1 flex-col items-center justify-center text-center">
      <h1 className="text-3xl font-bold">Página não encontrada</h1>

      <p className="mb-4 max-w-2xl text-gray-600">
        Parece que você está tentando acessar uma página que não existe em nosso
        sistema.
      </p>

      <Button asChild>
        <Link href="/"> Voltar à Página Inicial</Link>
      </Button>
    </main>
  );
};

export default Custom404;
