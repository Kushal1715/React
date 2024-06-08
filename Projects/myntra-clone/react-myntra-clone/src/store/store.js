import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./items";
import fetchingSlice from "./fetching";
import bagSlice from "./bags";

const myntraStore = configureStore({
  reducer: {
    items: itemSlice.reducer,
    fetching: fetchingSlice.reducer,
    bags: bagSlice.reducer
  }
})

export default myntraStore;