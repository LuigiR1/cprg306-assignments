import { useState } from 'react';

export default function NewItem() {
  
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('produce');

  
  const increment = () => {
    setQuantity((prevQuantity) => Math.min(prevQuantity + 1, 20));
  };

  const decrement = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();

    
    const item = { name, quantity, category };

    
    console.log(item);
    alert(`Item: ${name}, Quantity: ${quantity}, Category: ${category}`);

    
    setName('');
    setQuantity(1);
    setCategory('produce');
  };

  return (
    <form onSubmit={handleSubmit} className="p-5 bg-orange-700 rounded-lg">
      
      <div className="mb-3">
        <label className="inline-block w-40 text-black font-mono">Item Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Enter item name"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-orange-300 text-black"
        />
      </div>

      
      <div className="mb-3">
        <label className="inline-block w-40 text-black font-mono">Quantity:</label>
        <div className="flex items-center">
          <button
            type="button"
            onClick={decrement}
            disabled={quantity === 1}
            className={`px-3 py-2 text-white ${quantity === 1 ? 'bg-orange-300' : 'bg-orange-500'} rounded`}
          >
            -
          </button>
          <span className="px-4 font-semibold text-black">{quantity}</span>
          <button
            type="button"
            onClick={increment}
            disabled={quantity === 20}
            className={`px-3 py-2 text-white ${quantity === 20 ? 'bg-gray-300' : 'bg-black'} rounded-md`}
          >
            +
          </button>
        </div>
      </div>

      
      <div className="mb-3">
        <label className="inline-block w-40 text-black font-mono">Category:</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-orange-300 text-black"
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen-foods">Frozen Foods</option>
          <option value="canned-goods">Canned Goods</option>
          <option value="dry-goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>

      
      <div className="mb-3">
        <button
          type="submit"
          className="mt-4 px-6 py-2 bg-orange-300 rounded-md hover:bg-orange-500 text-black font-mono"
        >
          Submit Item
        </button>
      </div>
    </form>
  );
}