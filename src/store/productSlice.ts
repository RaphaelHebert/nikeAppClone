import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { IProduct, IState, AddCartItem } from "../types/types";
import products from "../assets/data/products";

const initialState: IState = {
  products,
  selectedProduct: products[0],
  cart: {},
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSelectedProduct: (state, action: PayloadAction<IProduct>) => {
      state.selectedProduct = action.payload;
    },
    addItemToCart: (state, action: PayloadAction<AddCartItem>) => {
      const { payload } = action;
      const idKey = payload.product.id + payload.size;
      if (Object.keys(state.cart).includes(idKey)) {
        state.cart[idKey].quantity = state.cart[idKey].quantity + 1;
      } else {
        state.cart[idKey] = {
          quantity: 1,
          size: payload.size,
          product: payload.product,
        };
      }
    },
    removeItemFromCart: (state, action: PayloadAction<AddCartItem>) => {
      const { payload } = action;
      const idKey = payload.product.id + payload.size;
      if (
        Object.keys(state.cart).includes(idKey) &&
        state.cart[idKey].quantity > 0
      ) {
        state.cart[idKey].quantity = state.cart[idKey].quantity - 1;
      }
    },
  },
});

export const { setSelectedProduct, addItemToCart, removeItemFromCart } =
  productsSlice.actions;
export default productsSlice.reducer;
