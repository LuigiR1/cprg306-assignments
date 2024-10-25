import React, { useState } from 'react';
import Item from './item';

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState('name');

  // Sort or group items based on the selected sortBy option
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1;
    } else if (sortBy === 'category') {
      return a.category.toLowerCase() < b.category.toLowerCase() ? -1 : 1;
    }
    return 0;
  });

  const groupedItems = items.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div>
      <div className="mb-4">
        <button
          className={`px-4 py-2 ${sortBy === 'name' ? 'bg-orange-400 text-black' : 'bg-slate-400'}`}
          onClick={() => setSortBy('name')}
        >
          Sort by Name
        </button>
        <button
          className={`px-4 py-2 ${sortBy === 'category' ? 'bg-orange-400 text-black' : 'bg-slate-400'}`}
          onClick={() => setSortBy('category')}
        >
          Sort by Category
        </button>
        <button
          className={`px-4 py-2 ${sortBy === 'group' ? 'bg-orange-400 text-black' : 'bg-slate-400'}`}
          onClick={() => setSortBy('group')}
        >
          Group by Category
        </button>
      </div>

      {sortBy === 'group' ? (
        Object.keys(groupedItems).sort().map((category) => (
          <div key={category}>
            <h2 className="capitalize font-bold">{category}</h2>
            {groupedItems[category].map((item) => (
              <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
            ))}
          </div>
        ))
      ) : (
        <ul>
          {sortedItems.map((item) => (
            <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
          ))}
        </ul>
      )}
    </div>
  );
}
