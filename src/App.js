import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Category from './sheets/Category';
import Product from './sheets/Product';
import Products from './sheets/Products';
import Homepage from './sheets/Homepage';
import Signup from './sheets/Signup';
import Login from './sheets/Login';
import Cart from './sheets/Cart';
import Blank from './sheets/Blank.js';


function App() {
  const user = true;
  return (
    <div className="App">
      <Routes>
          <Route path="/cheqout" element={<Cart />} />
          <Route path="/login" element={user? <Navigate to="/" /> : <Login />} />
          <Route path="/new" element={user? <Navigate to="/" /> : <Signup />} />
          <Route path="/products/:category" element={<Products />} />
          <Route path="/catg" element={<Category />} />
          <Route path="/prod/:id" element={<Product />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<Blank />} />
       </Routes>
    </div>
  );
}

export default App;
