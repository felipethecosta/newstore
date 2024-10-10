/* eslint-disable @next/next/no-img-element */
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import FeaturedProductsCarousel from "@/components/FeaturedProductsCarousel/FeaturedProductsCarousel";
import Link from "next/link";

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Ajuste na centralização do conteúdo principal */}
        <section className="bg-gradient-to-r from-[#f0f0f0] to-[#e0e0e0] py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                Discover the Latest Trends in Fashion
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl">
                Explore our curated collection of stylish and high-quality
                products.
              </p>
              <div className="flex justify-center md:justify-start gap-4">
                <Link
                  href="/products"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Shop Now
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="/placeholder.svg"
                width={400}
                height={400}
                alt="Hero Image"
                className="max-w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>
        {/* Novo componente de Featured Products como Carrossel */}
        <FeaturedProductsCarousel />
        {/* Seção de categorias de produtos */}
        <section className="bg-gradient-to-r from-[#f0f0f0] to-[#e0e0e0] py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center">
              <img
                src="/placeholder.svg"
                width={500}
                height={500}
                alt="Category Image"
                className="max-w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Explore Our Product Categories
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl">
                Browse through our wide selection of products across various
                categories.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Clothing
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Accessories
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Shoes
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Home
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
