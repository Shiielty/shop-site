import { useContext } from "react";
import { NavLink } from "react-router-dom";
import AmountCartContext from "../AmountCartContext";
import "./Navbar.css";

function Navbar() {
  const [amountCart] = useContext(AmountCartContext);
  const totalAmount = amountCart.reduce(
    (sum, nextItem) => sum + nextItem.amount,
    0,
  );

  const handleOpenCart = () => {
    const cartBg = document.querySelector(".cart-bg");
    const cart = document.querySelector(".cart");

    cartBg.style.display = "block";
    cart.style.display = "block";
  };

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="shop">Shop</NavLink>
      <div type="button" onClick={handleOpenCart}>
        <i className="fa-solid fa-cart-shopping"></i>
        <span>{totalAmount}</span>
      </div>
    </nav>
  );
}

export default Navbar;
