const Breadcrum = ({ product }) => {
  console.log(product.name);

  return (
    <div className="breadcrum">
      HOME/SHOP/{product.category}/{product.name}
    </div>
  );
};

export default Breadcrum;
