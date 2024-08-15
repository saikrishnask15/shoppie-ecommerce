import exclusiveimage from "./assests/exclusive_image.png";
const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Exclusive <br/> Offers For You</h1>
        <p>Only on best sellers products</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={exclusiveimage} alt="" />
      </div>
    </div>
  );
};

export default Offers;
