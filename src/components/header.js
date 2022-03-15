import shopping from "./../assets/shopping.svg";

function Header({basketItems, showModal}) {
  

  let basketItemsCount = basketItems.reduce((acc, val) => {
    return acc + val.count;
  }, 0);

 
  return (
    <div className="header">
      <div className="basketCount" onClick={showModal}>
        <img className="plus" src={shopping}></img>
        <span>{basketItemsCount}</span>
      </div>
    </div>
  );
}

export default Header;
