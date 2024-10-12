/* eslint-disable @next/next/no-img-element */
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import FeaturedProductsCarousel from "@/components/FeaturedProductsCarousel/FeaturedProductsCarousel";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Substituindo o banner por um carrossel de imagens */}
        <section className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop
            className="h-[70vh]"
          >
            <SwiperSlide>
              <div
                className="h-full w-full bg-cover bg-center flex items-center justify-center"
                style={{
                  backgroundImage: "url('/promotion/banner1.png')",
                }}
              >
                <div className="bg-white bg-opacity-60 p-8 rounded-md text-center">
                  <h2 className="text-4xl font-bold">Toda Brasileira Tem</h2>
                  <p className="mt-2 text-lg">
                    Confira os looks usados no programa
                  </p>
                  <Link
                    href="#"
                    className="mt-4 inline-block bg-black text-white py-2 px-6 rounded-md"
                  >
                    Confira
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="h-full w-full bg-cover bg-center flex items-center justify-center"
                style={{
                  backgroundImage: "url('/promotion/banner2.png')",
                }}
              >
                <div className="bg-white bg-opacity-60 p-8 rounded-md text-center">
                  <h2 className="text-4xl font-bold">Beauty Night</h2>
                  <p className="mt-2 text-lg">15% OFF acima de R$299</p>
                  <Link
                    href="#"
                    className="mt-4 inline-block bg-black text-white py-2 px-6 rounded-md"
                  >
                    Aproveite
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="h-full w-full bg-cover bg-center flex items-center justify-center"
                style={{
                  backgroundImage: "url('/promotion/banner3.png')",
                }}
              >
                <div className="bg-white bg-opacity-60 p-8 rounded-md text-center">
                  <h2 className="text-4xl font-bold">Halloween Collection</h2>
                  <p className="mt-2 text-lg">Looks para criar impacto</p>
                  <Link
                    href="#"
                    className="mt-4 inline-block bg-black text-white py-2 px-6 rounded-md"
                  >
                    Confira
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
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
