import Navbar from "components/Navbar/Navbar";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "screens/About";
import CartPage from "screens/CartPage";
import Contact from "screens/Contact";
import Home from "screens/Home";
import ShoppingPage from "screens/ShoppingPage";
import TodosPage from "screens/TodosPage";

const RoutesList = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/todos" element={<TodosPage />} />
          <Route path="/shopping" element={<ShoppingPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default RoutesList;
