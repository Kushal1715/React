import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./items";
import fetchingSlice from "./fetching";

const myntraStore = configureStore({
  reducer: {
    items: itemSlice.reducer,
    fetching: fetchingSlice.reducer,
  }
})

export default myntraStore;