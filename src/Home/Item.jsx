import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../Store/orderSlice'; // Import your action
import { Link } from 'react-router-dom';
import styles from './Item.module.css';
export const Item = ({ data }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <div className={styles.items_container}>
      <h1>Menu</h1>
      {data.map((item) => (
        <div key={item.id} className={styles.item_card}>
          <h3>{item.name}</h3>
          <p>{item.price}€</p>

          <Link
            to={`/DishDetails/${item.id}/${item.name}/${item.description}/${item.ingredients}/${item.price}`}
          >
            <button className={styles.item_view}>View Dish</button>
          </Link>

          <button
            className={styles.item_order}
            onClick={() => handleAddToCart(item)}
          >
            Order
          </button>
        </div>
      ))}
      <Link to='/OrderHistory'>
        <button className={styles.orders_view}>View Orders</button>
      </Link>
    </div>
  );
};
