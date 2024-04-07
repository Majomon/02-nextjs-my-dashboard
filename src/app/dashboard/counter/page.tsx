"use client"
import { useState } from "react";

export default function CounterPage() {
  const [count, setCount] = useState(5);
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <span>Productos del carrito</span>
      <span className="text-9xl">{count}</span>
      <div className="flex ">
        <button
          onClick={() => setCount(count + 1)}
          className="w-[100px] flex items-center justify-center p-2 mr-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all"
        >
          +1
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="w-[100px] flex items-center justify-center p-2 mr-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all"
        >
          -1
        </button>
      </div>
    </div>
  );
}
