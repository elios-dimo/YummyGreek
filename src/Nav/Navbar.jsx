import styles from './Navbar.module.css';
import orderIcon from './order_icon.png';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

export const Navbar = () => {
  // Access the 'items' state from the Redux store
  const itemsInCart = useSelector((state) => state.order.items);

  // Calculate the total quantity by iterating over the items
  const totalQuantity = Object.values(itemsInCart).reduce(
    (sum, item) => sum + (item.quantity || 0),
    0
  );

  return (
    <nav className={styles.navbar}>
      <Link to='/YummyGreek'>
        <h2 className={styles.name}>
          Yummy<span>Greek</span>
        </h2>
      </Link>
      <div className={styles.cart}>
        <span className={styles.count}>{totalQuantity}</span>
        <Link to='/OrderHistory'>
          <img src={orderIcon} alt='order icon' className={styles.order_icon} />
        </Link>
      </div>
    </nav>
  );
};
