import React from 'react';
import { Data } from '../database/Data';
import { Item } from './Item';

export const MenuItems = ({ diatery, price, allergen }) => {
  const filteredData = Data.dishes.filter((item) => {
    const dietaryPreferences = item.tags && item.tags.dietaryPreferences;
    const allergenPreferences = item.tags && item.tags.allergens;

    const Dietary =
      diatery === '' || dietaryPreferences.includes(diatery.toLowerCase());

    const Allergens =
      allergen === '' || allergenPreferences.includes(allergen.toLowerCase());

    const Prices =
      price === '' ||
      (price === 'Under €10' && parseFloat(item.price) < 10) ||
      (price === '€10 - €20' &&
        parseFloat(item.price) >= 10 &&
        parseFloat(item.price) < 20) ||
      (price === '€20 - €30' &&
        parseFloat(item.price) >= 20 &&
        parseFloat(item.price) <= 30) ||
      (price === '€30 - €40' &&
        parseFloat(item.price) >= 30 &&
        parseFloat(item.price) <= 40) ||
      (price === 'Over €40' && parseFloat(item.price) > 40);

    return Dietary && Allergens && Prices;
  });

  return <Item data={filteredData} />;
};
