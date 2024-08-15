import data_product from "./assests/data";
import Item from "./item";
const Popular = () => {
  return (
    <div className="popular">
      <div className="popular-text">
        <h1>Popular in women</h1>
        <hr />
      </div>

      <div className="popular-item">
        {data_product.map((item, key) => {
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
        })}
      </div>
    </div>
  );
};

export default Popular;
