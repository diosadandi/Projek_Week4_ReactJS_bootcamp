import { useState } from 'react'
import './App.css'
import Login from './Pages/LoginPages/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {AuthtenticationProvider} from './Context/AuthtenticationContext'
import CatalogProduct from './Pages/ProductPages/CatalogProduct'
import AddProduct from './Pages/ProductPages/AddProduct';

const App = () => {
  return (
    <AuthtenticationProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path='/CatalogProduct' element={<CatalogProduct/>}/>
          <Route path="/AddProduct" element={<AddProduct />} />
          {/* <Route path="*" element={<PageNotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </AuthtenticationProvider>
  );
};

export default App
