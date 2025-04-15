import { useEffect, useState } from "react";
import ProductGrid from "./component/ProductGrid";
import ProductCategories from "./component/ProductCategories";
import Pagination from "./component/Pagination";
import Shimmer from "./component/Shimmer";
import { useSelector } from "react-redux";



const Product = () => {
  
  const [productData, setProdusctData] = useState([]);

  const [currentCat, setCurrentCat] = useState("All");

  const themeMode = useSelector((store) => store.theme.theme);


  // console.log(productData)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/data.json");
      const result = await response.json();
      setProdusctData(result?.products || []);
    };
    fetchData();
  }, []);

  //   category filter
  const filteredProducts =
    currentCat === "All"
      ? productData
      : productData.filter((product) => product.category === currentCat);

  // Pagination
  const [currentpage, setCurrentPage] = useState(1);
  const perPage = 9;
  const totalProducts = filteredProducts.length;
  const totalPage = Math.ceil(totalProducts / perPage);

  const indexOfLast = currentpage * perPage; 
  const indexofFirst = indexOfLast - perPage; 

  const currentProduct = filteredProducts.slice(indexofFirst, indexOfLast);




  return productData.length === 0 ? 
    <Shimmer />
   : 
    <div className={`product-area ${themeMode ==="dark" ? "dark-theme" : ""}`} >
      <div className="container">
        <div className="produc-heading">
          <h2>Products</h2>
        </div>

        <ProductCategories
          productData={productData}
          setCurrentCat={setCurrentCat}
          currentCat={currentCat}
        />

        <ProductGrid currentProduct={currentProduct} />

        <Pagination
          perPage={perPage}
          totalProducts={totalProducts}
          totalPage={totalPage}
          setCurrentPage={setCurrentPage}
          currentpage={currentpage}
        />
      </div>
    </div>
  
};

export default Product;
