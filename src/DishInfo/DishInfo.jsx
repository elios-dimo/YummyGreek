import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './DishInfo.module.css';
import { Link } from 'react-router-dom';

export const DishInfo = () => {
  const { id, name, description, ingredients, price } = useParams();

  return (
    <div className={styles.info}>
      <h1 className={styles.det}>Dish Details</h1>
      {/* <p>Dish id: {id}</p> */}
      <h3> {name}</h3>
      <p className={styles.desc}> {description}</p>
      <h3> Ingredients:</h3>
      <p className={styles.ing}>{ingredients}</p>
      <div className={styles.price}>
        <h3> Price: </h3>
        <p> {price}€</p>
      </div>
      <Link to='/YummyGreek'>
        <button className={styles.back}>Back</button>
      </Link>
    </div>
  );
};
