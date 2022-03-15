import { useState, useEffect, useRef } from "react";
import Card from "./components/card";
import Header from "./components/header";
import BasketModal from "./components/basketModal";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [basketItems, setBasketItems] = useState([]);
  const [isModalShown, setModalShown] = useState(false);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.products);
        setItems(data.products);
      });
  }, []);

  const showModal = () => {
    setModalShown(!isModalShown);
  };

  const hideModal = () => {
    setModalShown(!isModalShown);
  };

  const addToBasket = (obj) => {
    console.log(obj);
    basketItems.findIndex((e) => e.id === obj.id) !== -1
      ? setBasketItems((prev) =>
          prev.map((e) => (e.id === obj.id ? { ...e, count: obj.count } : e))
        )
      : setBasketItems((prev) => [...prev, obj]);
  };
  
  return (
    <div className="App">
      {isModalShown && (
        <BasketModal
          basketItems={basketItems}
          setBasketItems={setBasketItems}
          hideModal={hideModal}
        />
      )}
      <Header basketItems={basketItems} showModal={showModal} />
      <div className="cards">
        {items.map((item) => {
          return <Card key={item.id} item={item} addToBasket={addToBasket} />;
        })}
      </div>
    </div>
  );
}

export default App;
