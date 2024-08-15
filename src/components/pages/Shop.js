import Hero from "../Hero";
import NewCollection from "../NewCollection";
import NewsLetter from "../NewsLetter";
import Offers from "../offers";
import Popular from "../popular";

const Shop = () => {
  return (
    <div>
      <Hero />
      <div className="container">
        <Popular />
        <Offers />
        <NewCollection/>
        <NewsLetter/>
      </div>
    </div>
  );
};

export default Shop;
