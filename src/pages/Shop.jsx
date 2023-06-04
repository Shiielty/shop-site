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
        <div className="product">
          <img src="" alt="" className="product-img" />
          <div className="product-info">
            <p className="product-name">Black coffee</p>
            <p className="product-price">3$</p>
            <button type="button">Add to cart</button>
          </div>
        </div>
        <div className="product">
          <img src="" alt="" className="product-img" />
          <div className="product-info">
            <p className="product-name">Black coffee</p>
            <p className="product-price">3$</p>
            <button type="button">Add to cart</button>
          </div>
        </div>
        <div className="product">
          <img src="" alt="" className="product-img" />
          <div className="product-info">
            <p className="product-name">Black coffee</p>
            <p className="product-price">3$</p>
            <button type="button">Add to cart</button>
          </div>
        </div>
        <div className="product">
          <img src="" alt="" className="product-img" />
          <div className="product-info">
            <p className="product-name">Black coffee</p>
            <p className="product-price">3$</p>
            <button type="button">Add to cart</button>
          </div>
        </div>
        <div className="product">
          <img src="" alt="" className="product-img" />
          <div className="product-info">
            <p className="product-name">Black coffee</p>
            <p className="product-price">3$</p>
            <button type="button">Add to cart</button>
          </div>
        </div>
        <div className="product">
          <img src="" alt="" className="product-img" />
          <div className="product-info">
            <p className="product-name">Black coffee</p>
            <p className="product-price">3$</p>
            <button type="button">Add to cart</button>
          </div>
        </div>
        <div className="product">
          <img src="" alt="" className="product-img" />
          <div className="product-info">
            <p className="product-name">Black coffee</p>
            <p className="product-price">3$</p>
            <button type="button">Add to cart</button>
          </div>
        </div>
        <div className="product">
          <img src="" alt="" className="product-img" />
          <div className="product-info">
            <p className="product-name">Black coffee</p>
            <p className="product-price">3$</p>
            <button type="button">Add to cart</button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
