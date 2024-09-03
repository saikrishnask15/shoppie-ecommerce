import { useContext } from "react";
import { ShopContext } from "../ShopContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
const Cart = () => {
  const { cartData, RemoveItem, totalPrice } = useContext(ShopContext);
  return (
    <div className="cart main container">
      <h1>Cart Items</h1>
      <div className="cart-format cart-heading-format">
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
          <>
            <div className="cartItems-format cart-format">
              <img src={item.image} alt="" />
              <p>{item.name}</p>
              <p>${item.new_price}</p>
              <button>{item.quantity}</button>
              <p>${item.new_price * item.quantity}</p>
              <div onClick={() => RemoveItem(item.id)}>
                <FontAwesomeIcon icon={faX} />
              </div>
            </div>
            <hr />
          </>
        );
      })}
      <div className="cartItems-down">
        <div className="cartItems-total-ctn">
          <h1>Cart Totals</h1>
          <div className="cartItems-subtotal">
            <h5>Subtotal</h5>
            <p>${totalPrice()}</p>
          </div>
          <hr />
          <div className="cartItems-shipping">
            <h5>Shipping Fee</h5>
            <p>Free</p>
          </div>
          <hr />
          <div className="cartItems-total">
            <h5>Total</h5>
            <p>${totalPrice()}</p>
          </div>
          <div className="cart-proceed-btn">
            <button>Proceed To Checkout</button>
          </div>
        </div>
        <div className="cart-promo-ctn">
          <p>if you have a promo code. Enter it here</p>
          <div className="cart-promo-input-item">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
