import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 import Shop from './pages/Shop'; 
import Main from './pages/Main';  import Account from './pages/Account.js'; 
// import Search from './pages/Search.js'; 
 import Cart from './pages/Cart.js'; 
import SignUp from './pages/SignUp.js';
import SignIn from './pages/SignIn.js';
import SellWithUs from './pages/SellWithUs.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} /> 
         <Route path="/shop" element={<Shop />} />
         <Route path="/cart" element={<Cart />} />  
         <Route path="/signup" element={<SignUp />} />
        <Route path="/account" element={<Account />} /> 
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/sell' element={<SellWithUs/>}/>
        {/*<Route path="/search" element={<Search />} />  
         */}
      </Routes>
    </Router>
  );
}

export default App;
