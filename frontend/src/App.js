import React from 'react'
import "./App.css";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {LoginPage,SignupPage,Home,CreateProduct,MyProducts,Cart} from "./routes/routes.js";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignupPage/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<CreateProduct/>}/>
        <Route path='/myproducts' element={<MyProducts/>}/>
        <Route path="/create-product/:id" element={<CreateProduct />} />
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
