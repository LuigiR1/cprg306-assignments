"use client";

import Link from "next/link";
import React, { useState, useEffect } from 'react';
import { useUserAuth } from "../_utils/auth-context";
import NewItem from './new-item';
import ItemList from './item-list';
import MealIdeas from './meal-ideas';
import { getItems, addItem } from "../_services/shopping-list-service";

export default function ShoppingListPage() {
  const [items, setItems] = useState([]); 
  const [selectedItemName, setSelectedItemName] = useState("");
  const { user } = useUserAuth();

  const handleAddItem = async (newItem) => {
    if (!user?.uid) return;
    try {
      const newItemId = await addItem(user.uid, newItem);
      // setItems([...items, { id: newItemId, ...newItem }]);
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  const handleItemSelect = (item) => {
    const cleanedName = item.name.split(",")[0].replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, '').trim();
    setSelectedItemName(cleanedName);
  };

  async function loadItems() {
    if (!user?.uid) return;
    const fetchedItems = await getItems(user.uid);
    console.log("Fetched items from Firestore:", fetchedItems); 
    setItems(fetchedItems);
  }

  useEffect(() => {
    loadItems();
  }, [user]);

  return (
    <main className="flex">
      {user ? (
        <div className="flex">
          <div>
            <NewItem onAddItem={handleAddItem} reloadItemsFunc={loadItems} />
            <ItemList items={items} onItemSelect={handleItemSelect} />
          </div>
          <MealIdeas ingredient={selectedItemName} />
        </div>
      ) : (
        <div>
          <p>You must be logged in to view this page</p>
          <Link href="/week-10">Click here to return to the sign-in page</Link>
        </div>
      )}
    </main>
  );
}
