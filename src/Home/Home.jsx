import styles from './Home.module.css';
import { Filters } from './Filters';

export const Home = () => {
  return (
    <>
      <div className={styles.home_container}>
        <Filters />
      </div>
    </>
  );
};
