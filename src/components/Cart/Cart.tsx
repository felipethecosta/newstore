/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Trash } from "lucide-react";

export function Cart({ onClose }) {
  const [cart, setCart] = useState([
    {
      name: "Cozy Blanket",
      price: 29.99,
      color: "black",
      size: "M",
      quantity: 1,
    },
    {
      name: "Autumn Mug",
      price: 12.99,
      color: "white",
      size: "S",
      quantity: 2,
    },
    {
      name: "Fall Fragrance Candle",
      price: 16.99,
      color: "red",
      size: "L",
      quantity: 1,
    },
  ]);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleRemoveItem = (index: number) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  return (
    <div className="text-gray-200">
      {" "}
      {/* Texto mais suave */}
      <div className="grid gap-6 w-full">
        <div className="grid gap-4">
          {cart.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-[80px_1fr_auto] items-center gap-4"
            >
              <img
                src="/placeholder.svg"
                alt={item.name}
                width={80}
                height={80}
                className="rounded-md object-cover"
                style={{ aspectRatio: "80/80", objectFit: "cover" }}
              />
              <div className="grid gap-1">
                <div className="font-medium">{item.name}</div>
                <div className="text-sm text-muted-foreground">
                  Color: {item.color} | Size: {item.size} | Qty: {item.quantity}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="font-medium">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleRemoveItem(index)}
                >
                  <Trash className="w-4 h-4 text-gray-400" />{" "}
                  {/* Ícone suavizado */}
                </Button>
              </div>
            </div>
          ))}
        </div>
        <Separator />
        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <div className="font-medium">Subtotal</div>
            <div className="font-medium">${total.toFixed(2)}</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="font-medium">Shipping</div>
            <div className="font-medium">Free</div>
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">Total</div>
            <div className="text-2xl font-bold">${total.toFixed(2)}</div>
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <Button className="bg-gray-700 text-white">
            {" "}
            {/* Botão suavizado */}
            Continue Shopping
          </Button>
          <Button className="bg-red-500 text-white hover:bg-red-400">
            {" "}
            {/* Vermelho suavizado */}
            Proceed to Checkout
          </Button>
        </div>
      </div>
    </div>
  );
}
