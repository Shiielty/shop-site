/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useContext } from "react";
import AmountCartContext from "../AmountCartContext";
import "./Cart.css";

export default function Cart({ coffeeData }) {
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
    <>
      <div className="cart-bg"></div>
      <section className="cart">
        <h2>Shopping Cart</h2>
        <div className="cart-container">
          {coffeeData
            .filter((coffee) => amountCart[coffee.id].amount > 0)
            .map((coffee) => (
              <div className="cart-item">
                <img src={coffee.imgUrl} alt="" srcset="" />
                <div className="cart-item-info">
                  <p>{coffee.name}</p>
                  <p>{coffee.price * amountCart[coffee.id].amount}</p>
                </div>
                <div className="cart-item-counter">
                  <button
                    type="button"
                    className="add-btn"
                    onClick={() => handleRemove(coffee.id)}
                  >
                    <i class="fa-solid fa-minus"></i>
                  </button>
                  <span>{amountCart[coffee.id].amount}</span>
                  <button
                    type="button"
                    className="remove-btn"
                    onClick={() => handleAdd(coffee.id)}
                  >
                    <i class="fa-solid fa-plus"></i>
                  </button>
                </div>
              </div>
            ))}
        </div>
        {amountCart.some((item) => item.amount > 0) ? (
          <div>
            <p>
              Total:{" "}
              <span>
                {coffeeData.reduce((sum, nextItem) => {
                  return sum + nextItem.price * amountCart[nextItem.id].amount;
                }, 0)}{" "}
              </span>
            </p>
            <button type="button" className="checkout-btn">
              Checkout
            </button>
            <button type="button" className="close-btn">
              Close
            </button>
          </div>
        ) : null}
      </section>
    </>
  );
}
