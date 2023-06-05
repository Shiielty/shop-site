/* eslint-disable react/prop-types */
import { useContext } from "react";
import "./Cards.css";
import AmountCartContext from "../AmountCartContext";

export default function Cards({ coffeeData }) {
  const [amountCart, setAmountCart] = useContext(AmountCartContext);

  const handleClick = (id) => {
    const newAmount = [...amountCart];
    newAmount[id].amount += 1;

    setAmountCart(newAmount);
  };

  return (
    <section className="product-wrapper">
      {coffeeData.map((coffee) => (
        <div className="product" key={coffee.key}>
          <img src="" alt="" className="product-img" />
          <div className="product-info">
            <p className="product-name">{coffee.name}</p>
            <p className="product-price">{coffee.price}</p>
            <button type="button" onClick={() => handleClick(coffee.id)}>
              Add to cart | {amountCart[coffee.id].amount}
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}
