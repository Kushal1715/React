import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  loading: false,
  error: null,
  currentUser: null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    signInSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.currentUser = action.payload;
    },
    signInFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }
  }

})

export const userActions = userSlice.actions;
const userReducer = userSlice.reducer;
export default userReducer;