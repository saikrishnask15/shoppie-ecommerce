import dataProducts from './assests/data';
import Item from './item';
const RelativeProduct = () => {
    return ( 
        <div className="relativeProduct">
            <div className='relativeProduct-text'>
            <h1>Related Products</h1>
            <hr/>
            </div>
                
                <div className="relativeProduct-items">
                        {dataProducts.map((item,key)=>{
                            return <Item
                            key={key}
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            new_price={item.new_price}
                            old_price={item.old_price}
                          />
                        })}
                </div>
        </div>
     );
}
 
export default RelativeProduct;