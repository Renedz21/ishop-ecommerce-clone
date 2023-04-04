import React from "react";
import { Routes, Route } from "react-router-dom";
import { RouterLayout } from "./components/RouterLayout";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Checkout from "./pages/Checkout";
import Products from "./pages/Products";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<RouterLayout />} >
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<div>404</div>} />
        </Routes>
    )
}