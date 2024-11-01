"use client";
import React, { useEffect, useState } from 'react';

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [expandedMealId, setExpandedMealId] = useState(null);
  const [mealDetails, setMealDetails] = useState({});

  const fetchMealIdeas = async (ingredient) => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
      const data = await response.json();
      setMeals(data.meals || []);
    } catch (error) {
      console.error("Error fetching meal ideas:", error);
    }
  };

  const fetchMealDetails = async (idMeal) => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
      const data = await response.json();
      setMealDetails((prevDetails) => ({
        ...prevDetails,
        [idMeal]: data.meals[0],
      }));
    } catch (error) {
      console.error("Error fetching meal details:", error);
    }
  };

  const handleMealClick = (idMeal) => {
    if (expandedMealId === idMeal) {
      setExpandedMealId(null);
    } else {
      setExpandedMealId(idMeal);
      if (!mealDetails[idMeal]) {
        fetchMealDetails(idMeal);
      }
    }
  };

  useEffect(() => {
    if (ingredient) {
      fetchMealIdeas(ingredient);
      setExpandedMealId(null);
    }
  }, [ingredient]);

  return (
    <div className="p-4 bg-orange-500 border border-orange-300 rounded">
      <h2 className="text-xl font-bold mb-4">Here are some meal ideas using "{ingredient}":</h2>
      {meals.length > 0 ? (
        <ul>
          {meals.map((meal) => (
            <li
              key={meal.idMeal}
              className="mb-3"
              onClick={() => handleMealClick(meal.idMeal)}
            >
              <div className="flex items-center cursor-pointer">
                <img src={meal.strMealThumb} alt={meal.strMeal} className="w-16 h-16 mr-4 rounded" />
                <span className="text-lg font-medium">{meal.strMeal}</span>
              </div>
              {expandedMealId === meal.idMeal && mealDetails[meal.idMeal] && (
                <div className="mt-2 pl-6">
                  <h3 className="font-semibold mb-2">Ingredients needed:</h3>
                  <ul className="list-disc pl-4">
                    {Array.from({ length: 20 }, (_, i) => {
                      const ingredient = mealDetails[meal.idMeal][`strIngredient${i + 1}`];
                      const measure = mealDetails[meal.idMeal][`strMeasure${i + 1}`];
                      return ingredient ? (
                        <li key={i}>
                          {ingredient} ({measure})
                        </li>
                      ) : null;
                    })}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>No meal ideas found for this ingredient.</p>
      )}
    </div>
  );
}
