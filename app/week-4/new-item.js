'use client';

import { useState } from 'react';

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity((prevQuantity) => Math.min(prevQuantity + 1, 20));
  };

  const decrement = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Quantity: ${quantity}`);
    setQuantity(1); 
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow-md rounded-lg ">
      <div className="flex items-center space-x-4">
        <button
          type="button"
          onClick={decrement}
          disabled={quantity === 1}
          className={`px-3 py-2 text-white ${quantity === 1 ? 'bg-orange-300' : 'bg-orange-500'} `}
        >
          -
        </button>
        <span className="text-lg font-semibold">{quantity}</span>
        <button
          type="button"
          onClick={increment}
          disabled={quantity === 20}
          className={`px-3 py-2 text-white ${quantity === 20 ? 'bg-gray-300' : 'bg-black'} `}
        >
          +
        </button>
      </div>
      <button
        type="submit"
        className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
      >
        Submit
      </button>
    </form>
  );
}