import { useNavigate } from "react-router-dom";
import "./Home.css";
import Footer from "../components/Footer";

export default function Home() {
  const navigate = useNavigate();

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
          <button type="button" onClick={() => navigate("shop")} id="hero-btn">
            Check Our Shop
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
}
