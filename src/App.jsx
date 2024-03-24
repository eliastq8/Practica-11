import { Button } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from './Views/Register'
import Home from './Views/Home'
import Login from './Views/Login'
import Product from './Views/Product'
import Navbar from './componentes/Navbar'
import Page404 from './Views/others/Page404'
import Products from './Views/Products'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </>
  )
}

export default App