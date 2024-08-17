import { useContext } from "react";
import { ShopContext } from "../ShopContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
const Cart = () => {
  const { cartData } = useContext(ShopContext);
  return (
    <div className="cart main container">
      <div className="cart-format">
        <div>Products</div>
        <div>Title</div>
        <div>Price</div>
        <div>Quantity</div>
        <div>Total</div>
        <idv>Remove</idv>
      </div>
      <hr />
      {cartData.map((item) => {
        return (
          <div className="cartItems-format cart-format">
            <img src={item.image} alt="" />
            <p>{item.name}</p>
            <p>${item.new_price}</p>
            <button>{item.quantity}</button>
            <p>{item.new_price * item.quantity}</p>
            {/* <div onClick={RemoveItem(item.id)}> */}
            <FontAwesomeIcon icon={faX} />
            {/* </div> */}
          </div>
        );
      })}
      <hr />
    </div>
  );
};

export default Cart;
