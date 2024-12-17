import { useContext } from "react";
import {ShopContext} from '../ShopContext';
import { useParams } from "react-router-dom";
import Breadcrum from "../BreadCrum/breadcrum";
import ProductDisplay from "../ProductDisplay/ProductDisplay";
import DescriptionReviewsBox from "../DescriptionReview/DescriptionReviewsBox";
import RelativeProduct from "../RelativeProducts/RelativeProduct";
const Product = () => {
  const {products} = useContext(ShopContext);
  const {productId} = useParams();
  const product = products.find((e)=> e.id === Number(productId))
  console.log(products);
    if(!product) {
      return <div>Product not found</div>;
    }
  
    return (
        <div className="container main">
           <Breadcrum product={product}/>
           <ProductDisplay product={product}/>
           <DescriptionReviewsBox/>
           <RelativeProduct/>
        </div>
      );
}
 
export default Product;