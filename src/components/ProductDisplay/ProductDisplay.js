import star_icon from "../assests/star_icon.png";
import stardull_icon from "../assests/star_dull_icon.png";
import { useContext } from "react";
import { ShopContext } from "../ShopContext";
import { Link } from "react-router-dom";
const ProductDisplay = ({ product }) => {
  const { addToCart, user} = useContext(ShopContext);
  const AddtoCart = (product) => {
    if(user){
      addToCart(product);
    }
    else{
      window.location.href = '/Login';
    }
  };
  return (
    <div className="productDisplay">
      <div className="productDisplay-left">
        <div className="productDisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productDisplay-img">
          <div className="productDisplay-main-img">
            <img src={product.image} alt="" />
          </div>
        </div>
      </div>
      <div className="productDisplay-right">
        <div className="productDisplay-name-stars">
          <h1>{product.name}</h1>
          <div className="productDisplay-right-star">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={stardull_icon} alt="" />
            <p>(122)</p>
          </div>
        </div>
        <div className="productDisplay-right-prices">
          <div className="productDisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productDisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productDisplay-right-description">
          a lightweight product Men Green Solid Zippered Full-Zip Slim Fit
          Bomber Jacket
        </div>
        <div className="productDisplay-right-sizes">
          <h4>Select Size</h4>
          <div className="productDisplay-right-size">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
          </div>
        </div>
        <div className="productDisplay-btn">
          <button onClick={() => AddtoCart(product)}>ADD TO CART</button>
          <Link to={'/cart'}><button onClick={() => AddtoCart(product)}>BUY NOW</button></Link>
          
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
