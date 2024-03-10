/**
 * Product initialization
 */
const { applyMiddleware, createStore } = require("redux");
const { logger } = require("redux-logger");
const ADDPRODUCT = "ADDPRODUCT";

const INITIALPRODUCT = {
  product: ["hello ", "world", "pritibi"],
  count: 3,
};
const addProduct = (payload) => {
  return {
    type: ADDPRODUCT,
    payload: payload,
  };
};

// make a reducer function to make action

const ProductReducer = (state = INITIALPRODUCT, action) => {
  switch (action.type) {
    case ADDPRODUCT:
      return {
        ...state,
        count: state.count + 1,
        product: [...state.product, action.payload],
      };

    default:
      return state;
  }
};

// make a store

const store = createStore(ProductReducer, applyMiddleware(logger));

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addProduct("taufik"));
