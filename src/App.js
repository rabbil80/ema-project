import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Review from "./components/Review/Review";
import Inventory from "./components/Inventory/Inventory";
import Notfound from "./components/Notfound/Notfound";
import ProductDetails from "./components/productDetails/ProductDetails";


function App() {
  return (
    <div>
   <Header></Header>
   <Router>
    <Routes>
    <Route path="/shop" element={<Shop></Shop>} />
    <Route path="/review" element={<Review />} />
    <Route path="/inventory" element={<Inventory />} />
    <Route exact path="/" element={<Shop/>} />
    <Route path="/product/:productKey" element={<ProductDetails></ProductDetails>} />
    <Route path="*" element={<Notfound/>} />
      </Routes>
   </Router>
  
    </div>
  );
}

export default App;
