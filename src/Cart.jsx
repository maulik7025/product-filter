import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router";
import { decrementItem, incrementItem, removeItem } from "./utils/cartSlice";
import toast, { Toaster } from "react-hot-toast";
// import { useState } from "react";


const Cart = () => {

   const cartItems = useSelector((store) => store.cart.items) || [];

   const dispatch = useDispatch();

   const totalQty = cartItems.reduce((prevTotal, newQty) => prevTotal + newQty.quantity , 0);
   const totalPrice = cartItems.reduce((prevPrice, newPrice) => prevPrice + newPrice.price*newPrice.quantity , 0);


   
   const DeleteItemNotfy = () => toast.error('Item deleted.', {
      style: {
         background: 'red',
         color: 'white'
      },
    });

  return (
   <>  
      <Toaster/>
      <div className="container">
         <div className="cart-container">
         

            {
               cartItems.length === 0 ? 
               <div className="empty-msg">
                  <h2>Your cart is empty </h2>
                  <p>You can go to home page to view more restaurants</p>
                  <Link to="/" className="btn">Go to Shop page</Link>
               </div>
            : 
               
                  <div className="cart-data">
                  <h2> Shopping Cart</h2>
                  <table>
                     <thead>
                        <tr>
                              <th width="400px">Product</th>
                              <th width="200px">Price</th>
                              <th width="200px">Quantity</th>
                              <th width="200px">Total</th>
                              <th width="200px">Action</th>
                        </tr>
                     </thead>
                     <tbody>
                  
   
                        {
                           cartItems.map((item) => 
                              <tr key={item.id}>
                                 <td style={{ textAlign: "left" }}>
                                    <Link to={`/product/${item.id}`} state={{product:item}}>{item.title}</Link>
                                    </td>
                                 <td>$ {item.price}</td>
                                 <td>
                                    <button className="quantity-btn" onClick={()=> item.quantity > 1 ? dispatch(decrementItem(item)):item.quantity=0}>-</button>
                                    <span>{item.quantity}</span>
                                    
                                    {/* <input type="text" value={quantity}  /> */}
                                    <button onClick={() => dispatch(incrementItem(item))} className="quantity-btn">+</button>
                                 </td>
                                 <td>$ {item.price * item.quantity}</td>
                                 <td><button className="quantity-btn remove-btn" 
                                 onClick={() => {dispatch(removeItem(item.id)); DeleteItemNotfy()}}>Remove</button></td>
                              </tr>
                           )
                           
                        }
                        <tr>
                           <td colSpan={2} ></td>
                           <td style={{ textAlign: "center" }}>Total Quantity: <b>{totalQty}</b></td>
                           <td style={{ textAlign: "center" }}>Total Price: <b>$ {totalPrice}</b></td>
                           <td> </td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            }


         
         </div>
      </div>
   </>

  
  )
}

export default Cart

