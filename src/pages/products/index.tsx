/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import products from "@/lib/table-products.json"; // Atualize o caminho conforme a estrutura do seu projeto

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <nav className="text-sm mb-6">
              <Link href="#" className="text-muted-foreground hover:underline">
                Início
              </Link>
              <span className="mx-2">-</span>
              <Link href="#" className="text-muted-foreground hover:underline">
                Masculino
              </Link>
              <span className="mx-2">-</span>
              <span className="text-primary font-semibold">Camisas</span>
            </nav>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              CAMISAS MASCULINAS
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl mb-8">
              {products.length} produtos
            </p>
            <div className="flex gap-4 mb-6">
              <button className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                MANGA CURTA
              </button>
              <button className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                MANGA LONGA
              </button>
              <button className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                FILTRAR E ORDENAR
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-background rounded-lg shadow-lg overflow-hidden"
                >
                  <Link href="#" className="block" prefetch={false}>
                    <img
                      src={product.image}
                      width={400}
                      height={400}
                      alt={product.title}
                      className="w-full h-96 object-cover"
                      style={{ aspectRatio: "400/400", objectFit: "cover" }}
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold">{product.title}</h3>
                      <p className="text-primary font-bold">{product.price}</p>
                      <p className="text-muted-foreground text-sm">
                        {product.installments}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
