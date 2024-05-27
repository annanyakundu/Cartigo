import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { store } from './redux/store';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import About from './Pages/About';
import Cart from './Pages/Cart';
import Shop from './Pages/Shop';
import Checkout from './Pages/Checkout';
import SProduct from './Components/SProduct';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
<BrowserRouter>
<Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/shop" element={<Shop/>} />
    <Route path="/blog" element={<Blog/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/cart" element={<Cart/>} />
    <Route path="/checkout" element={<Checkout/>} />
    <Route path="/single" element={<SProduct/>} />
</Routes>
</BrowserRouter>
  </Provider>
);


