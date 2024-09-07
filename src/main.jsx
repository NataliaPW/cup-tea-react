import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.jsx';
//import './index.css'
import './scss/index.scss';
//import { Provider } from 'react-redux';
import { BrowserRouter} from 'react-router-dom';
import { ProductProvider } from './context/productsContext.jsx';
import { CartProvider } from './context/cartContext.jsx';
import { OrderProvider } from './context/orderContext.jsx';
//import { ProductProvider } from './context/ProductContext.jsx';
//import { ProductProvider } from './context/ProductContext.jsx';
//import store from './redux/store.js';
//<Provider store={store}></Provider>

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <ProductProvider>
         <CartProvider>
            <OrderProvider>
               <BrowserRouter>
                  <App />
               </BrowserRouter>
            </OrderProvider>
         </CartProvider>
     </ProductProvider>
   </React.StrictMode>,
);
