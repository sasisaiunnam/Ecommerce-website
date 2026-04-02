import React from 'react'
import { BrowserRouter, Routes, Route,  } from 'react-router-dom'
import LogIn from './Components/LogIn';
import SignUp from './Components/SignUp';
import Home from './Components/Home/Products';
import ProtectedRoute from './Components/ProtectedRoute';
import { useLocation } from 'react-router-dom';
import ProductDetails from './Components/ProductDetails';
import AddProduct from './Components/AddProduct';
import Layout from './Components/Layout';
import CartContextProvider from './context/cartContext';
import Cart from './Components/cart/cart';

function App() {
  const location = useLocation()
  return (
    <div>

      
      {/* {location.pathname !== '/login'?<Home/>:null} */}
      

       <CartContextProvider>
        <Routes>
          <Route path='/' element={<LogIn />} />

          <Route element={<Layout/>} >
          <Route path='/Home' element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path='/product/:id' element={<ProductDetails />}/>
          <Route path='/add' element={<AddProduct/>}/>
          <Route path='/cart' element={<Cart />}/>
          </Route>

        </Routes>
        </CartContextProvider>
      
    </div>
  )
}

export default App
