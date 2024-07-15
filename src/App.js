import React from 'react'
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import GoTop from './components/GoTopButton/GoTop.jsx'
import Home from '../src/pages/Home.jsx';
import Shop from '../src/pages/Shop.jsx';
import AboutUs from '../src/pages/AboutUs.jsx';
import LoginPage from '../src/pages/Login.jsx';
import CheckoutPage from './pages/Checkout.jsx';
import { Routes, Route} from 'react-router-dom';
import { CartContextProvider } from './store/CartContext.jsx';
import {UserProgressContextProvider} from './store/UserProgressContext.jsx';
import Cart from './components/Cart.jsx';


function App() {
  return (
    <>
  
   <CartContextProvider >
<UserProgressContextProvider>
<Cart />
   <GoTop />
   <Header />
   <Routes>
    <Route path='/' element={<Home />} />
     <Route path='/home' element={<Home />} />
     <Route path='/shop' element={<Shop />} />
     <Route path='/aboutUs' element={<AboutUs />} />
     <Route path='/login' element={<LoginPage />} />
     <Route path='/checkout' element={<CheckoutPage />} />
    </Routes>


   <Footer />
   </UserProgressContextProvider>
   </CartContextProvider>
   </>
  );
}

export default App;
