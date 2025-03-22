import { productType } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  products: productType[];
  productInCart: productType[];
}

const initialState: CounterState = {
  products: [],
  productInCart: [],
};

export const counterSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addNewProduct: (state, action) => {
      state.products.push(action.payload);
    },
    addNewProductToCart: (state, action) => {
      state.productInCart.push(action.payload);
    },
  },
});

export const { addNewProduct, addNewProductToCart } = counterSlice.actions;

export default counterSlice.reducer;
