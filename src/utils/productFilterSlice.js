import { createSlice } from "@reduxjs/toolkit";

 const productFilterSlice = createSlice({
   name: 'productFilter',
   initialState: {
      selectedCategories: [],
      selectedBrand: [],
      selectedColor: [],
      priceRange: [0, 2000],
   },
   reducers: {
      filterToggle: (state, action) => {
         const { filterType, value } = action.payload;
         if (state[filterType].includes(value)) {
           state[filterType] = state[filterType].filter((item) => item !== value);
         } else {
           state[filterType].push(value);
         }
       },
       setPriceRange: (state, action) => {
         state.priceRange = action.payload;
       },
       clearAll: (state) => {
         state.selectedCategories = [],
         state.selectedBrand = [],
         state.selectedColor = [],
         state.priceRange= [0, 2000]
       }
   }
 })

 export const {filterToggle, clearAll, setPriceRange} = productFilterSlice.actions;
 export default productFilterSlice.reducer;