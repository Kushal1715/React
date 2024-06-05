import { createStore } from "redux";

const initialValue = {
  counter: 5,
  privacy: false
}
const reducer = (store = initialValue, action) => {
  if (action.type === 'increment') {
    return { counter: store.counter + 1 };
  }
  else if (action.type === 'decrement') {
    return { ...store, counter: store.counter - 1 };
  } else if (action.type === 'addition') {
    return { ...store, counter: store.counter + action.payload.number }
  } else if (action.type === 'subtraction') {
    return { ...store, counter: store.counter - action.payload.number }
  } else if (action.type === 'privacy') {
    return { ...store, privacy: !store.privacy }
  }

  return store;
}

const counterStore = createStore(reducer);

export default counterStore;