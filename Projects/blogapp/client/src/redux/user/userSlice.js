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
    },
    updateStart: (state, action) => {
      state.loading = true,
        state.error = null;
    },
    updateSuccess: (state, action) => {
      state.loading = false,
        state.error = null,
        state.currentUser = action.payload
    },
    updateFailure: (state, action) => {
      state.loading = false,
        state.error = action.payload
    },
    deleteUserStart: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    deleteUserSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.currentUser = null;
    },
    deleteUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    signoutSuccess: (state, action) => {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
    }
  }

})

export const userActions = userSlice.actions;
const userReducer = userSlice.reducer;
export default userReducer;