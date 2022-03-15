import { useState } from "react";
import plus from "./../assets/plus.svg";

function Card({ item, addToBasket }) {
  const [count, setCount] = useState(0);

  const addItem = () => {
    setCount((count) => count + 1);
  };

  const removeItem = () => {
    setCount((count) => count && count - 1);
  };

  return (
    <div className="card">
      <h3>{item.title}</h3>
      <p>{`$${item.price}`}</p>
      <img className="product" src={item.images[0]}></img>
      <div>
        <button onClick={removeItem}>-</button>
        {count}
        <button onClick={addItem}>+</button>
        <br></br>
        <img
          className="plus"
          onClick={() => {
            addToBasket({ ...item, count });
          }}
          src={plus}
        ></img>
      </div>
    </div>
  );
}
export default Card;
