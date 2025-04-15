import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './cartSlice';
import themeSlice from './themeSlice';
import ProductDataSlice from './productDataSlice';
import productFilterSlice from './productFilterSlice';

const appStore = configureStore({
   reducer: {
      cart: cartSlice,
      theme: themeSlice,
      productData: ProductDataSlice,
      productFilter: productFilterSlice,
   },
})

export default appStore;