// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import imageReducer from "./imageSlice";
import orderReducer from "./orderSlice";
import authReducer from "./authSlice";
import chatReducer from "./userChatSlice";

const store = configureStore({
  reducer: {
    image: imageReducer,
    orders: orderReducer,
    auth: authReducer,
    chat: chatReducer,
  },
});

export default store;
