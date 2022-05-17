import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './componets/App';
import { BrowserRouter ,Routes, Route} from 'react-router-dom';
import AllItems from './componets/AllItems';
import HomePage from './componets/HomePage';
import SignUp from './componets/SignUpPage';
import Header from './componets/Header';
import Footer from './componets/Footer';
import AboutPage from './componets/AboutPage';
import PennyBoard from './componets/PennyBoard';
import StreetBoard from './componets/StreetBoards';
import LongBoard from './componets/LongBoards';
import CruiserBoard from './componets/CruiserBoards';
import SingleProduct from './componets/SingleProductPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="Home Page" element={<HomePage />} />
          <Route path="SignUpPage" element={<SignUp />} />
          <Route path="AllItemsPage" element={<AllItems />} />
          <Route path="/items/:id" element={<SingleProduct />} />
          <Route path="AboutPage" element={<AboutPage />} />
          <Route path="PennyBoard" element={<PennyBoard />} />
          <Route path="StreetBoard" element={<StreetBoard />} />
          <Route path="LongBoard" element={<LongBoard />} />
          <Route path="CruiserBoard" element={<CruiserBoard />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  </div>
);


