// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import imageReducer from "./imageSlice";
import orderReducer from "./orderSlice";

const store = configureStore({
  reducer: {
    image: imageReducer,
    orders: orderReducer,
  },
});

export default store;
