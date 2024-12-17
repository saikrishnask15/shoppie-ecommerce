import { useContext } from "react";
import Item from "../../Item/item";
import { ShopContext } from "../../ShopContext";

const ShopCategory = (props) => {
  const { products, handleSortBy } = useContext(ShopContext);
  console.log(products);

  return (
    <div className="shop-category container">
      <img className="ShopCategory-banner" src={props.banner} alt="" />
      <div className="ShopCategory-indexSort">
        <p>
          <span>Showing 1-12</span> Out of 36 products
        </p>
        <div className="ShopCategory-sort">
          {/* Sort by <FontAwesomeIcon icon={faChevronDown} /> */}
          <select onChange={(e) => handleSortBy(e.target.value)}>
            <option value="">Sort by</option>
            <option value="price-asc">Low to High</option>
            <option value="price-dsc">High to Low</option>
            <option value="Name">Name (A-Z)</option>
          </select>
        </div>
      </div>
      <div className="ShopCategory-products">
        {products.map((item, key) => {
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
