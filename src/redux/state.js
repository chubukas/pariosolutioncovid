import { configureStore } from "@reduxjs/toolkit";

// import authSlice from "../features/slices/authSlice";
// import { userReducer } from "../features/reducers/userReducer";
import { productsReducer } from "./reducer";

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
