const redux = require('redux');

const initialValue = { number: 0 }
const reducer = (store = initialValue, action) => {
  let newStore = store;
  if (action.type === 'addition') {
    newStore = { number: store.number + action.payload.number1 + action.payload.number2 };
  }
  return newStore;
}

const store = redux.createStore(reducer);

const subscriber = () => {
  let state = store.getState();
  console.log(state);
}

store.subscribe(subscriber);

store.dispatch({
  type: 'addition',
  payload: {
    number1: 3,
    number2: 4
  }
})