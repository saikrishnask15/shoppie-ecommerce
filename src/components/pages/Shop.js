import Hero from "../Hero/Hero";
import NewCollection from "../NewCollection/NewCollection";
import NewsLetter from "../NewsLetter/NewsLetter";
import Offers from "../Offers/offers";
import Popular from "../Popular/popular";

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
