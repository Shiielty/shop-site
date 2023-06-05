/* eslint-disable react/prop-types */
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import "./Shop.css";

export default function Shop({ coffeeData }) {
  return (
    <div className="shop">
      <section className="shop-header">
        <h2>Our Products</h2>
        <p>
          Made with <i className="fa-solid fa-heart"></i>
        </p>
        <div className="bg-tint"></div>
      </section>
      <Cards coffeeData={coffeeData} />
      <Footer />
    </div>
  );
}
