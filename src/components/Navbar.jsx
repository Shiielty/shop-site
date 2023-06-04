import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="bg-orange-700">
      <NavLink to="/">Home</NavLink>
      <NavLink to="shop">Shop</NavLink>
    </nav>
  );
}

export default Navbar;
