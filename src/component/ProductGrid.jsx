import { Link } from "react-router"
import dummyImage from '../assets/dummy.jpg';
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import toast, { Toaster } from 'react-hot-toast';

const itemAddedNotify = () => toast.success('Item added to cart')


const ProductGrid = ({currentProduct}) => {

   const dispatch = useDispatch();

  return (
   <>
      <Toaster/>
      <div className='product-grid'>
         <div className="row">

            {
                  currentProduct.map((product) => 
                     <div className="col-lg-4 col-md-6 mb-20" key={product.id}>
                        <div className="product-item">
                           <div className="product-img">
                              <img
                              src={product.image || dummyImage} alt={product.title}/>
                           </div>
                           <div className="product-content">
                              <h3>{product.title}</h3>  
                              
                              
                              <p>{product.description}</p>
                              <Link to={`/product/${product.id}`} state={{product}}>Read More</Link>
                              <Link onClick={() => {dispatch(addItem({...product, quantity: 1})); itemAddedNotify()}}>Add to cart</Link>
                           </div>
                              {product.popular &&  <span className="tag">Popular</span>}
                              {product.onSale &&  <span className="tag">On Sale</span>}
                        </div>
                     </div>
                  )
            }

            
         </div>
      </div>
   </>
  
  )
}

export default ProductGrid