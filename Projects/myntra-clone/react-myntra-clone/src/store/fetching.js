import { createSlice } from "@reduxjs/toolkit";

const fetchingSlice = createSlice({
  name: 'fetching',
  initialState: {
    loading: false,
  },
  reducers: {
    showLoading: (state) => {
      state.loading = true;

    },
    noLoading: (state) => {
      state.loading = false;
    }
  }
})

export default fetchingSlice;
export const fetchingActions = fetchingSlice.actions;