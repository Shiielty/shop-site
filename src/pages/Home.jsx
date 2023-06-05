import { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";
import Footer from "../components/Footer";
import AmountCartContext from "../AmountCartContext";

export default function Home() {
  const [amountCart] = useContext(AmountCartContext);
  const totalAmount = amountCart.reduce(
    (sum, nextItem) => sum + nextItem.amount,
    0,
  );
  console.log(totalAmount);

  return (
    <>
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-info">
          <div className="hero-text">
            <h2>Midnight</h2>
            <h2>Cappuccino</h2>
            <p>Crafted with Passion</p>
            <p>Discover the Perfect Cup at Our Coffee Shop</p>
          </div>
          <NavLink to="shop" id="hero-btn">
            Check Our Shop
          </NavLink>
        </div>
      </section>
      <Footer />
    </>
  );
}
