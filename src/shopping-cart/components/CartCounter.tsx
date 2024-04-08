"use client";
import { useAppDispatch, useAppSelector } from "@/store";
import { addOne, substractOne } from "@/store/counter/counterSlice";
import { useState } from "react";

interface Props {
  value?: number;
}
export const CartCounter = ({ value = 0 }: Props) => {
  const count = useAppSelector((state) => state.counter.count);
  const dispath = useAppDispatch();
  // const [count, setCount] = useState(value);

  return (
    <>
      <span className="text-9xl">{count}</span>

      <div className="flex ">
        <button
          onClick={() => dispath(addOne())}
          className="w-[100px] flex items-center justify-center p-2 mr-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all"
        >
          +1
        </button>
        <button
          onClick={() => dispath(substractOne())}
          className="w-[100px] flex items-center justify-center p-2 mr-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all"
        >
          -1
        </button>
      </div>
    </>
  );
};
