/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRef, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import products from "@/lib/products.json";

const FeaturedProductsCarousel: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      const width = carouselRef.current.offsetWidth;
      carouselRef.current.scrollBy({ left: -width, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const width = carouselRef.current.offsetWidth;
      carouselRef.current.scrollBy({ left: width, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (carouselRef.current) {
      const carousel = carouselRef.current;
      const items = Array.from(carousel.children);
      items.forEach((item) => {
        const cloneA = item.cloneNode(true);
        const cloneB = item.cloneNode(true);
        carousel.appendChild(cloneA);
        carousel.insertBefore(cloneB, carousel.firstChild);
      });
      carousel.scrollLeft = carousel.scrollWidth / 3;
    }
  }, []);

  const handleScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      if (scrollLeft <= 0) {
        carouselRef.current.scrollLeft = scrollWidth / 3;
      } else if (scrollLeft + clientWidth >= scrollWidth) {
        carouselRef.current.scrollLeft = scrollWidth / 3 - clientWidth;
      }
    }
  };

  useEffect(() => {
    if (carouselRef.current) {
      const carousel = carouselRef.current;
      carousel.addEventListener("scroll", handleScroll);
      return () => {
        carousel.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <section className="relative py-12 md:py-16 lg:py-20 w-screen overflow-hidden">
      <div className="w-full px-4 md:px-6">
        <div className="flex flex-col items-center justify-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center">
            Featured Products
          </h2>
          <Link
            href="#"
            className="text-sm font-medium hover:underline"
            prefetch={false}
          >
            View All
          </Link>
        </div>
        <div className="relative w-full">
          <button
            onClick={scrollLeft}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md z-10 hidden md:block"
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-hidden px-8"
            style={{ scrollBehavior: "smooth" }}
          >
            {products.concat(products, products).map((product, index) => (
              <div
                key={index}
                className="bg-background rounded-lg shadow-lg overflow-hidden min-w-[300px] flex-shrink-0"
              >
                <Link href="#" className="block" prefetch={false}>
                  <img
                    src={product.image}
                    width={400}
                    height={400}
                    alt={product.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{product.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {product.price}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <button
            onClick={scrollRight}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md z-10 hidden md:block"
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsCarousel;
