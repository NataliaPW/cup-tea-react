import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'

import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Maincontent } from './components/Maincontent/Maincontent';
import { Goods } from './components/Goods/Goods';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Cart } from './components/Cart/Cart';



export const App = () => {
 
   return (

      <div className="body__mainwrapper">
         <Header/>
         <main className="main" id="main">
            <Routes>
               <Route path='/' element={<Navigate to="/products?category=tea"/>}></Route>
               <Route path="/products" element={
                  <>
                     <Maincontent />
                     <Goods/>
                  </>
               }>
               </Route>
               <Route path="/cart" element={
                  <>
                     <Cart/>
                  </>
               }>
               </Route>
            </Routes>     
         </main>
        <Footer/>
      </div>
   )
};

