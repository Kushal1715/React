import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counterVal: 0
  },
  reducers: {
    increment: (state) => {
      state.counterVal++;
    },
    decrement: (state) => {
      state.counterVal--;
    },
    addition: (state, action) => {
      state.counterVal += action.payload
    },
    subtraction: (state, action) => {
      state.counterVal -= action.payload
    },
  }
})

const privacySlice = createSlice({
  name: 'privacy',
  initialState: false,
  reducers: {
    changePrivacy: (state) => {
      return state = !state
    }
  }

})
const counterStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    privacy: privacySlice.reducer
  }
});

export const counterActions = counterSlice.actions;
export const privacyActions = privacySlice.actions;
export default counterStore;

// const initialValue = {
//   counter: 5,
//   privacy: false
// }
// const reducer = (store = initialValue, action) => {
//   if (action.type === 'increment') {
//     return { counter: store.counter + 1 };
//   }
//   else if (action.type === 'decrement') {
//     return { ...store, counter: store.counter - 1 };
//   } else if (action.type === 'addition') {
//     return { ...store, counter: store.counter + action.payload.number }
//   } else if (action.type === 'subtraction') {
//     return { ...store, counter: store.counter - action.payload.number }
//   } else if (action.type === 'privacy') {
//     return { ...store, privacy: !store.privacy }
//   }
//   return store;
// }