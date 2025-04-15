


const ProductCategories = ({productData, setCurrentCat, currentCat}) => {

    const uniqueCategories = ["All", ...new Set(productData.map((cat) => cat.category))];

    

    const catSelected = (catItems) => {
        setCurrentCat(catItems);
    }

  return (
        <div className='product-cat'>
            
            <ul className="cat-list">          
                {
                    uniqueCategories.map((catItems, i) => (
                        <li key={i} className={`cat-item ${catItems == currentCat ? "active" : ""}`} 
                        onClick={() => catSelected(catItems)}>{catItems}</li>
                    ))
                }
            </ul>
        </div>
  )
}

export default ProductCategories