import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import { api } from "./api";

// All Product Initial State
const initialProductsState = {
  status: "idle",
  error: null,
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`.
export const fetchAllProducts = createAsyncThunk(
  "products/fetchAllProducts",
  async () => {
    const response = await fetch(api);
    // The value we return becomes the `fulfilled` action payload
    const data = await response.json();
    return data.data;
  }
);

// All Products Reducer
export const productsReducer = createReducer(
  initialProductsState,
  (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  }
);

// All Products Selectors
export const getStateStatus = (state) => state.products.status;
export const getErorr = (state) => state.products.error;
export const selectAllProduct = (state) => state.products;
