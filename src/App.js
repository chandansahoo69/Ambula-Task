import "./App.css";
import { TodoProvider } from "context/TodoContext";
import Routes from "routes/Routes";
import { Toaster } from "react-hot-toast";
import { CartProvider } from "context/CartContext";
import { ShoppingProvider } from "context/ShoppingContext";

function App() {
  return (
    <TodoProvider>
      <CartProvider>
        <ShoppingProvider>
          <Routes />
          <Toaster position="top-right" />
        </ShoppingProvider>
      </CartProvider>
    </TodoProvider>
  );
}

export default App;
