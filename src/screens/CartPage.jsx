import React, { useContext, useEffect } from "react";
import "../styles/Cart.css";
import { CartContext } from "context/CartContext";
import useToast from "hooks/useHooks";
import ReactIcon from "components/ReactIcon/ReactIcon";

const CartPage = () => {
  const { showToast } = useToast();
  const { state, dispatch } = useContext(CartContext);
  const total = state.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const IncreaseQuantity = (item) => {
    dispatch({ type: "INCREASE", payload: item });
  };

  const DecreaseQuantity = (item) => {
    if (item.quantity > 1) {
      dispatch({ type: "DECREASE", payload: item });
    } else {
      dispatch({ type: "REMOVE", payload: item });
      showToast("Item remove successfully", "success");
    }
  };

  const RemoveItem = (item) => {
    dispatch({ type: "REMOVE", payload: item });
    showToast("Item remove successfully", "success");
  };

  // store cart item in localstorage when aany action performed
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state));
  }, [state]);

  return (
    <div className="cart-container">
      <div className="shopping-cart">
        <div className="cart-title-box">
          <div className="title">Shopping Cart</div>
          <div className="title">Total Items: {state.length}</div>
        </div>

        <div className="cart-item-container">
          {state.map((item, index) => (
            <div className="cart-item" key={index}>
              <div className="cart-left-group">
                <div className="buttons">
                  <button
                    className="plus-btn custom-btn"
                    type="button"
                    name="button"
                    onClick={() => RemoveItem(item)}
                  >
                    <ReactIcon
                      className="fa-times"
                      iconName={"ic:round-close"}
                    />
                  </button>
                </div>

                <div className="image">
                  <img src={item.image} alt="" />
                </div>

                <div className="description">
                  <span>{item.title}</span>
                  <span>{item.category}</span>
                </div>
              </div>
              <div className="quantity">
                <button
                  className="plus-btn custom-btn"
                  type="button"
                  name="button"
                  onClick={() => IncreaseQuantity(item)}
                >
                  <ReactIcon className="fa-times" iconName={"ic:round-plus"} />
                </button>
                <span>{item.quantity}</span>
                <button
                  className="minus-btn custom-btn"
                  type="button"
                  name="button"
                  onClick={() => DecreaseQuantity(item)}
                >
                  <ReactIcon className="fa-times" iconName={"ic:round-minus"} />
                </button>
              </div>

              <div className="total-price">${item.quantity * item.price}</div>
            </div>
          ))}
          {state.length === 0 && (
            <h2 className="no-item">No items in the cart</h2>
          )}
        </div>
      </div>

      <h2 className="title">Total Price: ${state.length > 0 ? total : 0}</h2>
    </div>
  );
};

export default CartPage;
