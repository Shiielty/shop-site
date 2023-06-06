/* eslint-disable react/no-unknown-property */
import { useContext } from "react";
import "./Cards.css";
import AmountCartContext from "../AmountCartContext";

export default function Cards({ coffeeData }) {
  const [amountCart, setAmountCart] = useContext(AmountCartContext);

  const handleAdd = (id) => {
    const newAmount = [...amountCart];
    newAmount[id].amount += 1;

    setAmountCart(newAmount);
  };

  const handleRemove = (id) => {
    const newAmount = [...amountCart];
    newAmount[id].amount -= 1;

    setAmountCart(newAmount);
  };

  return (
    <section className="product-wrapper">
      <div className="grid-wrapper">
        {coffeeData.map((coffee) => (
          <div className="product" key={coffee.id}>
            <img
              src={`/${coffee.imgUrl}`}
              alt={coffee.name}
              className="product-img"
            />
            <div className="product-info">
              <p className="product-name">{coffee.name}</p>
              <p className="product-price">{coffee.price}</p>
              {amountCart[coffee.id].amount === 0 ? (
                <button
                  type="button"
                  className="first-add-btn"
                  onClick={() => handleAdd(coffee.id)}
                >
                  Add to cart
                </button>
              ) : (
                <div className="amount-container">
                  <button
                    type="button"
                    className="add-btn"
                    onClick={() => handleRemove(coffee.id)}
                  >
                    <i className="fa-solid fa-minus"></i>
                  </button>
                  <span>{amountCart[coffee.id].amount}</span>
                  <button
                    type="button"
                    className="remove-btn"
                    onClick={() => handleAdd(coffee.id)}
                  >
                    <i className="fa-solid fa-plus"></i>
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
