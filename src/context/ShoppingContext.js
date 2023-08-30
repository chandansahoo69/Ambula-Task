import { createContext, useEffect, useState } from "react";

export const ShoppingContext = createContext();

export const ShoppingProvider = ({ children }) => {
  const initialState = {
    products: [],
    loading: true,
  };

  const [productState, setProductState] = useState(initialState);

  // load the products from localstorage when page loaded
  useEffect(() => {
    const getProducts = JSON.parse(localStorage.getItem("products"));
    setProducts(getProducts);
  }, []);

  // reducer to set products
  const setProducts = (products) => {
    setProductState({ products: products, loading: false });
    localStorage.setItem("products", JSON.stringify(products));
  };

  // reducer to remove products
  const removeProducts = () => {
    setProductState({ products: [], loading: true });
  };

  return (
    <ShoppingContext.Provider
      value={{ productState, setProducts, removeProducts }}
    >
      {children}
    </ShoppingContext.Provider>
  );
};
