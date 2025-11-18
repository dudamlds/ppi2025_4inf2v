import "./styles/theme.css";
import "./styles/global.css";
import { Header } from "./components/Header";
import { ProductList } from "./components/ProductList";
import { Cart } from "./components/Cart";
import { Route, Routes } from "react-router";
import { CartProvider } from "./context/CartContext";
import { ToastContainer } from "react-toastify";
import { Login } from "./components/Login";
<<<<<<< HEAD
=======
import { SessionProvider } from "./context/SessionContext";
>>>>>>> 352ae62 (Desafio)
import { User } from "./components/User";

export default function App() {
  return (
    // React Fragment
    <>
<<<<<<< HEAD
      <ToastContainer />
      <CartProvider>
        <Header />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signin" element={<Login value="signin" />} />
          <Route path="/register" element={<Login value="register" />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </CartProvider>
=======
       <ToastContainer />
      <SessionProvider>
        <CartProvider>
          <Header />
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/user" element={<User />} />
          </Routes>
        </CartProvider>
      </SessionProvider>
>>>>>>> 352ae62 (Desafio)
    </>
  );
}
