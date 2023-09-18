import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './Nav/Navbar';
import { Home } from './Home/Home';
import { OrderHistory } from './OrderHistory/OrderHistory';
import { DishInfo } from './DishInfo/DishInfo';
import './App.css';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/YummyGreek' element={<Home />} />
          <Route path='/OrderHistory' element={<OrderHistory />} />
          <Route
            path='/DishDetails/:id/:name/:description/:ingredients/:price'
            element={<DishInfo />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
