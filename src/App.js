import React from 'react'
import GoTop from './components/GoTopButton/GoTop.jsx'
import Home from './pages/Home.jsx';
import Shop from '../src/pages/Shop.jsx';
import AboutUs from '../src/pages/AboutUs.jsx';
import LoginPage from '../src/pages/Login.jsx';
import { Routes, Route} from 'react-router-dom';
import { CartContextProvider } from './store/CartContext.jsx';
import {UserProgressContextProvider} from './store/UserProgressContext.jsx';
import Cart from './components/Cart.jsx';


function App() {
  return (

  <UserProgressContextProvider>
   <CartContextProvider >
   <GoTop />
   <Cart />

   <Routes>
   <Route path='/' element={<Home />} />
    <Route path='/Pawgo-Service-React2' element={<Home />} />
     <Route path='/home' element={<Home />} />
     <Route path='/shop' element={<Shop />} />
     <Route path='/aboutUs' element={<AboutUs />} />
     <Route path='/login' element={<LoginPage />} />
  
    </Routes>
       
   </CartContextProvider>
   </UserProgressContextProvider>

  );
}

export default App;
