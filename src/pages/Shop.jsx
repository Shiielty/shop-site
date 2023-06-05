import Card from "../components/Card";
import Footer from "../components/Footer";
import "./Shop.css";

export default function Shop() {
  return (
    <div className="shop">
      <section className="shop-header">
        <h2>Our Products</h2>
        <p>
          Made with <i className="fa-solid fa-heart"></i>
        </p>
        <div className="bg-tint"></div>
      </section>
      <section className="product-wrapper">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
      <Footer />
    </div>
  );
}
