"use client";

import Link from "next/link";
import React, { useState } from 'react';
import { useUserAuth } from "../_utils/auth-context";
import NewItem from './new-item';
import ItemList from './item-list';
import MealIdeas from './meal-ideas';
import itemsData from './items.json';

export default function ShoppingListPage() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");
  const { user } = useUserAuth();

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleItemSelect = (item) => {
    const cleanedName = item.name.split(",")[0].replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, '').trim();
    setSelectedItemName(cleanedName);
  };

  return (
    <main className="flex">
      {user ? (
        <div className="flex">
          <div>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} onItemSelect={handleItemSelect} />
          </div>
          <MealIdeas ingredient={selectedItemName} />
        </div>
      ) : (
        <div>
          <p>You must be logged in to view this page</p>
          <Link href="/week-9">Click here to return to the sign-in page</Link>
        </div>
      )}
    </main>
  );
}
