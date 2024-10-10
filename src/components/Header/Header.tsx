/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { JSX, SVGProps } from "react";

function Header() {
  return (
    <header className="bg-background border-b shadow-sm">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-14 md:h-16">
        <Link
          href="#"
          className="flex items-center gap-2 font-semibold text-lg"
          prefetch={false}
        >
          <MountainIcon className="h-6 w-6" />
          <span>Kippos</span>
        </Link>
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="#"
            className="text-sm font-medium hover:underline"
            prefetch={false}
          >
            Shop
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline"
            prefetch={false}
          >
            Contact
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <img
                  src="/placeholder.svg"
                  width="36"
                  height="36"
                  alt="User Avatar"
                  className="rounded-full"
                  style={{ aspectRatio: "36/36", objectFit: "cover" }}
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Orders</DropdownMenuItem>
              <DropdownMenuItem>Wishlist</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="md:hidden">
          <Button variant="ghost" size="icon">
            <MenuIcon className="h-6 w-6" />
          </Button>
        </div>
      </div>
      <nav className="bg-background py-2">
        <div className="container mx-auto px-4 md:px-6 flex justify-center gap-4 text-sm font-medium">
          <Link href="#" className="hover:underline" prefetch={false}>
            Ofertas
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Novidades
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Feminino
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Masculino
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Infantil
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Beleza
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Básicos
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Jeans
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Acessórios
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Calçados
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Esportivo
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Moda Praia
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Moda Íntima
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Lojas Parceiras
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Ashua
          </Link>
        </div>
      </nav>
    </header>
  );
}

function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
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
