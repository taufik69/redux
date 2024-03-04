/**
 * Todo 1 : take a one state like count
 * todo 2 : Need a action for every action like increment , decrement , reset
 * todo 3 : Need a reducer function ,
 * todo 4 : Make a store , using the help of redux createStore()
 */

// State , it is a object

const initialCount = {
  count: 0,
};

// Now make a action action is an object also

// Take a action  globally
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

const Increment = () => {
  return {
    type: INCREMENT,
  };
};

const Decrement = () => {
  return {
    type: DECREMENT,
  };
};

const Reset = () => {
  return {
    type: RESET,
  };
};

/**
 * Now Time to make a Reducer Fucntion  , mind it reducer function is a pure Fucntion
 * @param (state , action)  //state can be initial state
 */

const CounterReducer = (state = initialCount, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case RESET:
      return {
        ...state,
        count: (state.count = 0),
      };

    default:
      return state;
  }
};

/**
 * Now time to make a store , store takes a reducer
 * store have servaral method like subscribe() , dispatch() and  getState()
 */

const { createStore } = require("redux");

const store = createStore(CounterReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(Increment());
store.dispatch(Increment());
store.dispatch(Increment());
store.dispatch(Increment());
store.dispatch(Decrement());
store.dispatch(Reset());
