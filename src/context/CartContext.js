import { createContext, useEffect, useReducer } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // get cart items from user localstorage
  const getCartItems = JSON.parse(localStorage.getItem("cart"));

  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_FROM_LOCALSTORAGE":
        return [...action.payload];
      case "ADD":
        const tempState = state.filter((item) => action.payload.id === item.id);
        if (tempState.length > 0) {
          return state;
        } else {
          return [...state, action.payload];
        }
      case "INCREASE":
        const quantityIncreaseState = state.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
        return quantityIncreaseState;
      case "DECREASE":
        const quantityDecreaseState = state.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
        return quantityDecreaseState;
      case "REMOVE":
        const RemoveState = state.filter(
          (item) => action.payload.id !== item.id
        );
        return RemoveState;

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, []);
  const info = { state, dispatch };

  useEffect(() => {
    dispatch({ type: "ADD_FROM_LOCALSTORAGE", payload: getCartItems || [] });
  }, []);

  return <CartContext.Provider value={info}>{children}</CartContext.Provider>;
};
