"use client";

import React from "react";
import useCartStore from "@/store/cart-store";

function Reserved() {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const addToCart = useCartStore((state) => state.addToCart); // Add this line
  const handleReserve = (product) => {
    addToCart(product); // Add product to cart
  };
  return (
    <div className="w-[100%] sm:w-[80%]  flex justify-center mx-auto mt-8 mb-8">
      <div className="relative overflow-x-auto flex justify-center items-center w-full">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-cyan-500 dark:bg-cyan-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 rounded-s-lg text-white">
                Product name
              </th>
              <th scope="col" className="px-6 py-3 text-white">
                Qty
              </th>
              <th scope="col" className="px-6 py-3 text-white">
                Price
              </th>
              <th scope="col" className="px-6 py-3 rounded-r-lg text-white">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={index} className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.name}
                </th>
                <td className="px-6 py-4">1</td>
                <td className="px-6 py-4">${item.price}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-500 hover:bg-red-400 text-white rounded-md p-1"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="font-semibold text-gray-900 dark:text-white">
              <th scope="row" className="px-6 py-3 text-base">
                Total
              </th>
              <td className="px-6 py-3">{cart.length}</td>
              <td className="px-6 py-3">${total}</td>
              <td className="px-6 py-3">
                <button
                  onClick={clearCart}
                  className="bg-yellow-500 hover:bg-yellow-400 text-white rounded-md p-1"
                >
                  Clear All
                </button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default Reserved;
