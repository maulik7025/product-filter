// import { NavLink } from "react-router"

import { Link } from "react-router";
import useOnlineStatus from "./custom-hook/useOnlineStatus"
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../utils/themeSlice";

const Nav = () => {
  

  const onlineStatus = useOnlineStatus();

  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const themeMode = useSelector((store) => store.theme.theme)
  

  return (

    <nav className={themeMode === "dark" ? "dark-theme" : ""}>

      <div className="header container">
        <div className="status">
            <h5>Internet status : {onlineStatus ? "Online" : "Offline"}</h5>
        </div>
        <div className="main-nav">
          <ul>
            <li className="nav-item"><Link to="/product">Product</Link></li>
            <li className="nav-item"><Link to="/cart">Cart({cartItems.length})</Link></li>
            <li><button onClick={() => dispatch(toggleTheme())}>Click for <b>Dark</b> Theme</button></li>
          </ul>
          
          
        </div>
      </div>
        
        
    </nav>
  )
}

export default Nav