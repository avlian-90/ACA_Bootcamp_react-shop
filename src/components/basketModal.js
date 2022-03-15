import close from "./../assets/close.svg";
import deleteBtn from "./../assets/deleteBtn.svg";

function BasketModal({ basketItems, setBasketItems, hideModal }) {
  let totalPrice = basketItems.reduce((acc, item) => {
    return acc + item.price * item.count;
  }, 0);

  const removeFromBasket = (item) => {
    setBasketItems(prev => prev.filter(e => e.id !== item.id));
  }

  return (
    <div className="basketModal">
      <img className="close" src={close} alt="" onClick={hideModal}></img>
      {basketItems.map((item) => {
        return (
          <div key={item.id} className="basketItems">
            <h3>Product-Name: {item.title}</h3>
            <p>Price: {`$${item.price}`}</p>
            <p>{item.count}</p>
            {console.log(item.count)}
            <img className="deleteBtn" onClick={() => {removeFromBasket(item)}} src={deleteBtn} alt=""></img>
          </div>
        );
      })}
      <h2>Total Price: {`$${totalPrice}`}</h2>
    </div>
  );
}

export default BasketModal;
