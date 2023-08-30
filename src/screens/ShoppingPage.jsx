import React, { useContext, useEffect } from "react";
import axios from "axios";
import "../styles/ShoppingPage.css";
import { CartContext } from "context/CartContext";
import useToast from "hooks/useHooks";
import { ShoppingContext } from "context/ShoppingContext";
import Loader from "components/Loader/Loader";

const ShoppingPage = () => {
  const { showToast } = useToast();
  const { state, dispatch } = useContext(CartContext);
  const { productState, setProducts } = useContext(ShoppingContext);

  // function to fetch data from api
  const fetchData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setProducts(response.data);
  };

  // fetch the data from API when page load
  useEffect(() => {
    fetchData();

    // clean up to avoid memory leakage
    return () => {
      // removeProducts();
    };
  }, []);

  const AddItemToCart = (item) => {
    // check item is present in cart
    const isItemPresent = state.filter((cartItem) => item.id === cartItem.id);

    if (isItemPresent.length > 0) {
      // if item is alread in the cart
      showToast("Item is alread in Cart", "error");
    } else {
      // if item is not present in the cart
      dispatch({ type: "ADD", payload: item });
      showToast("Item added to Cart", "success");
    }
  };

  // store cart item in localstorage when added in cart
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state));
  }, [state]);

  return (
    <>
      {!productState.loading ? (
        <div className="shopping-container">
          {productState.products.map((item, index) => {
            item.quantity = 1;
            return (
              <div className="shopping-card" key={index}>
                <img src={item.image} alt="" />
                <p>{item.title}</p>
                <h3>$. {item.price}</h3>
                <div
                  onClick={() => AddItemToCart(item)}
                  className="add-to-cart"
                >
                  Add to cart
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <>
          <div
            style={{
              background: "#fff",
              height: "84vh",
              width: "100%",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                margin: "-50px 0 0 -50px",
              }}
            >
              <Loader />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ShoppingPage;
