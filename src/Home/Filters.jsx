import styles from './Filters.module.css';
import React, { useState } from 'react';
import { MenuItems } from './MenuItems';

export const Filters = () => {
  const [diatery, setDiatery] = useState('');
  const [price, setPrice] = useState('');
  const [allergen, setAllergen] = useState('');

  const diateryFilter = (e) => {
    setDiatery(e.target.value);
  };

  const priceFilter = (e) => {
    setPrice(e.target.value);
  };

  const allergenFilter = (e) => {
    setAllergen(e.target.value);
  };

  const allButton = () => {
    setDiatery('');
    setPrice('');
    setAllergen('');
  };

  const handleForm = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleForm} className={styles.filters}>
        <div className={styles.options}>
          <button type='button' onClick={allButton} className={styles.all}>
            All
          </button>
        </div>

        <div className={styles.options}>
          <label>Dietary Preferences:</label>
          <select
            id='getValue'
            onChange={diateryFilter}
            value={diatery}
            className={styles.select}
          >
            {diatery === '' && (
              <option value='' disabled>
                Select
              </option>
            )}
            <option value=''>All</option>
            <option value='Vegan'>Vegan</option>
            <option value='Vegetarian'>Vegetarian</option>
            <option value='Gluten-Free'>Gluten-Free</option>
            <option value='Lactose-Free'>Lactose-Free</option>
            <option value='Nut-Free'>Nut-Free</option>
          </select>
        </div>

        <div className={styles.options}>
          <label>Price Range:</label>
          <select
            id='getValue'
            onChange={priceFilter}
            value={price}
            className={styles.select}
          >
            {price === '' && (
              <option value='' disabled>
                Select
              </option>
            )}
            <option value=''>All</option>

            <option value='Under €10'>Under €10</option>
            <option value='€10 - €20'>€10 - €20</option>
            <option value='€20 - €30'>€20 - €30</option>
            <option value='€30 - €40'>€30 - €40</option>
            <option value='Over €40'>Over €40</option>
          </select>
        </div>

        <div className={styles.options}>
          <label>Allergens:</label>
          <select
            id='getValue'
            onChange={allergenFilter}
            value={allergen}
            className={styles.select}
          >
            {allergen === '' && (
              <option value='' disabled>
                Select
              </option>
            )}
            <option value=''>All</option>
            <option value='Contains-Nuts'>Contains-Nuts</option>
            <option value='Contains-Gluten'>Contains-Gluten</option>
            <option value='Contains-Lactose'>Contains-Lactose</option>
            <option value='Other-Allergens'>Other-Allergens</option>
            <option value='Allergen-Free'>Allergen-Free</option>
          </select>
        </div>
      </form>
      <MenuItems diatery={diatery} price={price} allergen={allergen} />
    </div>
  );
};
