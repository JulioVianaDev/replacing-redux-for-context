import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import ProductsProvider from './context/products-context'
import './index.css';
import App from './App';
import configureStore from './hooks-store/products-store';
const root = ReactDOM.createRoot(document.getElementById('root'));
 
configureStore()
root.render(
  <ProductsProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProductsProvider>,
);

