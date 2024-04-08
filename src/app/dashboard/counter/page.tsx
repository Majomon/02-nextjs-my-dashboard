import { CartCounter } from "@/shopping-cart";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopping Cart",
  description: "Counter",
};

export default function CounterPage() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <span>Productos del carrito</span>
      <CartCounter value={20} />
    </div>
  );
}
