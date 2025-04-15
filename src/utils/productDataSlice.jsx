import { createSlice } from "@reduxjs/toolkit";

const ProductDataSlice = createSlice({
   name: 'productData',
   initialState: {
      productData: [],
   },
   reducers: {
      getProductData: (state, action) => {
         state.productData = action.payload;
      }
   }
})

export const {getProductData} = ProductDataSlice.actions;
export default ProductDataSlice.reducer;