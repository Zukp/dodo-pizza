import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./basketReducer";

const store = configureStore({
  reducer: {
    card: basketReducer.reducer,
  },
});
export default store;
