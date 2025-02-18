import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  products: [
    { id: 1, name: "Велосипед", quantity: 5 },
    { id: 2, name: "Самокат", quantity: 4 },
    { id: 3, name: "Гантели", quantity: 7 },
    { id: 4, name: "Ракетки", quantity: 1 }
  ]
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    increment: (state, action) => {
      const product = state.products.find((p) => p.id === action.payload);
      if (product) product.quantity++;
    },
    decrement: (state, action) => {
      const product = state.products.find((p) => p.id === action.payload);
      if (product && product.quantity > 0) product.quantity--;
    },
    addProduct: (state, action) => {
      state.products.push({
        id: Date.now(),
        name: action.payload,
        quantity: 1
      });
    }
  }
});

export const { increment, decrement, addProduct } = productSlice.actions;
export const store = configureStore({ reducer: productSlice.reducer });