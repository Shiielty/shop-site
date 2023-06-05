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
  console.log(totalAmount);

  return (
    <nav className="bg-orange-700">
      <NavLink to="/">Home</NavLink>
      <NavLink to="shop">Shop</NavLink>
      <NavLink to="cart">Cart | {totalAmount}</NavLink>
    </nav>
  );
}

export default Navbar;
