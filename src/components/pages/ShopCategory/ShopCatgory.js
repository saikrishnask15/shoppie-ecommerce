import { useContext } from "react";
import Item from "../../Item/item";
import { ShopContext } from "../../ShopContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  console.log(all_product);
  return (
    <div className="shop-category container">
      <img className="ShopCategory-banner" src={props.banner} alt="" />
      <div className="ShopCategory-indexSort">
        <p>
          <span>Showing 1-12</span> Out of 36 products
        </p>
      <div className="ShopCategory-sort">
        Sort by <FontAwesomeIcon icon={faChevronDown} />
      </div>
      </div>
      <div className="ShopCategory-products">
        {all_product.map((item, key) => {
          if (props.category === item.category) {
            return (
              <Item
                key={key}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="ShopCategory-loadmore">
       <p>Explore More</p>
      </div>
    </div>
  );
};

export default ShopCategory;
