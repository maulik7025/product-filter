import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
   name: 'cart',
   initialState: {
      items: [],
   },
   reducers: {
      addItem: (state, action) =>  {

         const newItem = action.payload;
         const existingItem = state.items.find((i) => i.id === newItem.id);

         if (existingItem) {
            state.items = state.items.map((i) => i.id === newItem.id ? {...i, quantity: i.quantity + 1} : i)
         
         } else {
         state.items.push({ ...newItem, quantity: 1 });
         }
        
      },
      incrementItem: (state, action)=>{
         state.items = state.items.map((i) => i.id === action.payload.id ? {...i, quantity: i.quantity + 1} : i)
      },
      decrementItem: (state, action)=>{
         state.items = state.items.map((i) => i.id === action.payload.id ? {...i, quantity: i.quantity - 1} : i)
      },
      removeItem: (state, action)=>{
         state.items = state.items.filter((item) => item.id !== action.payload);
      }
   }
})

export const {addItem,incrementItem, decrementItem, removeItem} = cartSlice.actions;

export default cartSlice.reducer;

