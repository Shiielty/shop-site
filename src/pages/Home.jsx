import { NavLink } from "react-router-dom";
import "./Home.css";

export default function Home() {
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
      <section className="home-info">Test</section>
    </>
  );
}
