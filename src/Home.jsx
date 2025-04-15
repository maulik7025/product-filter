import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProductData } from "./utils/productDataSlice";
import dummyImage from '../src/assets/dummy.jpg';
import { addItem } from "./utils/cartSlice";
import { Link } from "react-router";
import { clearAll, filterToggle, setPriceRange } from "./utils/productFilterSlice";


// https://www.youtube.com/watch?v=QqmZf6LID0E&list=PLZ44pviE5AD2uHCmUx9CCiioQfCpkjIna
const Home = () => {

   const productsData = useSelector((state) => state.productData.productData);
   console.log(productsData)

   useEffect( () => {

      const productData = async () => {
         const response = await fetch('/data.json');
         const result = await response.json();
         dispatch(getProductData(result?.products));  
      }
      productData();
   }, []);

   const category = [...new Set(productsData.map((cat)=> cat.category))];
   const brand = [...new Set(productsData.map((brand)=> brand.brand))];
   const color = [...new Set(productsData.map((color)=> color.color))];
   const uniqueColors = [...new Set(color.filter(Boolean).map(color => color.toLowerCase()))];
 
   const dispatch = useDispatch();

   const {selectedCategories, selectedBrand, selectedColor,priceRange } = useSelector((state) => state.productFilter)
  
   const handleMultiSelect = (filterType, value) => {
      dispatch(filterToggle({ filterType, value }));
    };

    const filteredProducts = productsData.filter((product) => {
      return (
        (selectedCategories.length === 0 || selectedCategories.includes(product.category)) &&
        (selectedBrand.length === 0 || selectedBrand.includes(product.brand)) &&
        (selectedColor.length === 0 || selectedColor.includes(product.color)) &&
        product.price >= priceRange[0] &&
        product.price <= priceRange[1]
      );
    });
  return (
    <div className="product-filter">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="filter-area">
              <div className="filter-title">
                <h6>Filter</h6>
                <button onClick={()=>dispatch(clearAll())}>Clear All</button>
              </div> 
              <div className="filter-wrap">
                <h6>Categories</h6>
                <ul>
                  {
                     category.map((cat, i) => <li key={i}>
                     <div className="form-group">
                        <input type="checkbox" id={cat} 
                        checked={selectedCategories.includes(cat)}
                        onChange={() => handleMultiSelect("selectedCategories", cat)}/>
                        <label for={cat}>{cat}</label>
                     </div>
                  </li>)
                  }
                  
                </ul>
              </div>
              <div className="filter-wrap">
              <div className="mb-4">
                  <h6>Price Range: ${priceRange[0]} - ${priceRange[1]}</h6>
                  <input type="range" min="0" max="2000" value={priceRange[0]} onChange={(e) => dispatch(setPriceRange([parseInt(e.target.value), priceRange[1]]))} />
                  <input type="range" min="0" max="2000" value={priceRange[1]} onChange={(e) => dispatch(setPriceRange([priceRange[0], parseInt(e.target.value)]))} />
                  </div>
              </div>
              <div className="filter-wrap">
                <h6>Brand</h6>
                <ul>
                {
                     brand.map((brand, i) => <li key={i}>
                     <div className="form-group">
                        <input type="checkbox" id={brand} 
                         checked={selectedBrand.includes(brand)}
                         onChange={() => handleMultiSelect("selectedBrand", brand)}/>
                        <label for={brand}>{brand}</label>
                     </div>
                  </li>)
                  }
                </ul>
              </div>
              <div className="filter-wrap">
                <h6>Color</h6>
                <ul>
                {
                     uniqueColors.map((color, i) => <li key={i}>
                     <div className="form-group">
                        <input type="checkbox" id={color}  
                         checked={selectedColor.includes(color)}
                         onChange={() => handleMultiSelect("selectedColor", color)}
                        />
                        <label for={color}>{color}</label>
                     </div>
                  </li>)
                  }
                </ul>
              </div>
              
            </div>
          </div>
          <div className="col-lg-9">
            <div className="row">
               {
                   filteredProducts.map((product) => 
                     <div className="col-lg-4 col-md-6 mb-20" key={product.id}>
                        <div className="product-item">
                           <div className="product-img">
                              <img
                              src={product?.image || dummyImage} alt={product.title}/>
                           </div>
                           <div className="product-content">
                              <h3>{product.title}</h3>  
                              
                              <h4>${product.price}</h4>
                              <p>{product.description}</p>
                              <Link to={`/product/${product.id}`} state={{product}}>Read More</Link>
                              <Link onClick={()=>dispatch(addItem(product))}>Add to cart</Link>
                           </div>
                              {product.popular &&  <span className="tag">Popular</span>}
                              {product.onSale &&  <span className="tag">On Sale</span>}
                        </div>
                     </div>
                  )
               }
               
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home