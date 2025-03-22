import { configureStore } from "@reduxjs/toolkit";
import testReducer from "./productsSlice";
export const store = configureStore({
  reducer: { products: testReducer },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
