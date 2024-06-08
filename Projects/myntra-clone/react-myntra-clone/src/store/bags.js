import { createSlice } from '@reduxjs/toolkit'
const bagSlice = createSlice({
  name: 'bags',
  initialState: [],
  reducers: {
    addBagItems: (state, action) => {
      state.push(action.payload);
    },
    removeBagItems: (state, action) => {
      return state.filter((item) => item != action.payload)
    }
  }
})

export default bagSlice;
export const bagActions = bagSlice.actions;