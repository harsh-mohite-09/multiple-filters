import "./styles.css";

import { Routes, Route, NavLink } from "react-router-dom";

import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import { useAppContext } from "./context/AppContextProvider";

export default function App() {
  const { cart } = useAppContext();
  const getActiveStyle = ({ isActive }) => {
    return {
      color: isActive ? "orangered" : ""
    };
  };
  return (
    <div className="App">
      <nav className="nav-container">
        <NavLink style={getActiveStyle} to="/">
          Home
        </NavLink>
        <NavLink style={getActiveStyle} to="/menu">
          Menu
        </NavLink>
        <NavLink style={getActiveStyle} to="/cart">
          Cart({cart.length})
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}
