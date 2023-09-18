import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearOrder, decrement } from '../Store/orderSlice';
import styles from './OrderHistory.module.css';
import { Link } from 'react-router-dom';

export const OrderHistory = () => {
  const itemsInCart = useSelector((state) => state.order.items);

  const totalQuantity = Object.values(itemsInCart).reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const totalPrice = Object.values(itemsInCart).reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const dispatch = useDispatch();

  const handleClearOrder = () => {
    dispatch(clearOrder());
  };

  const handleFinalize = () => {
    if (totalQuantity !== 0) {
      alert('Thank you for ordering!');
    } else {
      alert('Please order something first!');
    }
  };

  const handleRemove = (itemId) => {
    dispatch(decrement({ id: itemId }));
  };

  return (
    <div className={styles.order_list}>
      <h1>Order List</h1>

      <ul>
        {Object.values(itemsInCart).map((item) => (
          <li key={item.id} className={styles.ordered_item}>
            <h3>{item.name}</h3>
            <p>Quantity: {item.quantity}</p>
            <p>Price: {item.price * item.quantity}€</p>
            <button
              onClick={() => handleRemove(item.id)}
              className={styles.remove}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      <div className={styles.totals}>
        <p>Total Quantity: {totalQuantity}</p>
        <p>Total Price: {totalPrice.toFixed(2)}€</p>
      </div>

      <div className={styles.but}>
        <Link to='/YummyGreek'>
          <button className={styles.back}>Back</button>
        </Link>
        <button onClick={handleClearOrder} className={styles.clear}>
          Clear
        </button>
        <button onClick={handleFinalize} className={styles.final}>
          Finalize
        </button>
      </div>
    </div>
  );
};
