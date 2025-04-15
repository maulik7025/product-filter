
const Pagination = ({totalPage, setCurrentPage, currentpage}) => {

    const pageNumber = [];

    for(let i=1; i<=totalPage; i++){
        pageNumber.push(i);
    }

    const selectedPage = (n) => {
        setCurrentPage(n)
    }

    const prevPage = () => {
        setCurrentPage (currentpage - 1)
    }

    const nextPage = () => {
        setCurrentPage (currentpage + 1)
    }

  return (
    <div className="pagination">
        {
            pageNumber.length > 1 && 

            <ul className="page-items">
            
                {
                    <li className={`pageNumber ${currentpage ===1 ? "disable" : ""}`} onClick={() => prevPage()}>
                    <button>Prev</button></li>  
                }
                
                {
                
                    pageNumber.map((n,i)=> <li key={i} className={`pageNumber ${n === currentpage ? "active" : ""}`} 
                    onClick={() => selectedPage(n)}><button>{n}</button></li> )
                }

                {
                    <li className={`pageNumber ${currentpage === totalPage ? "disable" : ""}`} 
                    onClick={nextPage}>
                    <button>Next</button></li> 
                }
                
            </ul>
        }
      
    </div>
  )
}

export default Pagination