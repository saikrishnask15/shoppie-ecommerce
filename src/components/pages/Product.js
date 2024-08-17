import { useContext } from "react";
import {ShopContext} from '../ShopContext';
import { useParams } from "react-router-dom";
import Breadcrum from "../breadcrum";
import ProductDisplay from "../ProductDisplay";
import DescriptionReviewsBox from "../DescriptionReviewsBox";
import RelativeProduct from "../RelativeProduct";
const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === Number(productId))
  console.log(productId);
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