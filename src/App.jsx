import React from "react";
import Signup from "./routes/signup/Signup";
import Login from "./routes/Login";
import Product from "./routes/Product";
import ProductList from "./routes/ProductList";
import Cart from "./routes/Cart";
import Success from "./routes/Success";
import Home from "./routes/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ProtectedRoutes from "./ProtectedRoutes";

const App = () => {
  const user = useSelector(
    (state) => state.user.currentUser?.payload?.accessToken
  );
  return (
    <>
      <Routes>
        <Route
          path="/signup"
          element={user ? <Navigate exact to="/" /> : <Signup />}
        />
        <Route
          path="/login"
          element={user ? <Navigate exact to="/" /> : <Login />}
        />
        <Route element={<Product />} path="/product/:id" />
        <Route element={<Home />} path="/" />
        <Route element={<ProductList />} path="/products/:category" />
        <Route element={<ProductList />} path="/products" />
        <Route element={<ProtectedRoutes />}>
          <Route element={<Cart />} path="/cart" />
          <Route element={<Success />} path="/success" />
        </Route>
      </Routes>
    </>
  );
};

export default App;
