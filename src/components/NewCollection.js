import new_collections from "./assests/new_collections";
import Item from "./item";
const NewCollection = () => {
  return (
    <div className="new-collection">
      <div className="new-collection-text">
        <h1>new collections</h1>
        <hr />
      </div>
      <div className="new-collection-item">
        {new_collections.map((item, key) => {
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

export default NewCollection;
