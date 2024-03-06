/**
 * Product initialization
 */
const { createStore, combineReducers } = require("redux");
const GETPRODUCT = "GETPRODUCT";
const ADDPRODUCT = "ADDPRODUCT";

const ADDTOCART = "ADDTOCART";
const initailCart = {
  product: [],
  count: 0,
};

const INITIALPRODUCT = {
  product: ["hello ", "world", "pritibi"],
  count: 3,
};
const getProduct = () => {
  return {
    type: GETPRODUCT,
  };
};

const AddProduct = (payload) => {
  return {
    type: ADDPRODUCT,
    payload: payload,
  };
};

//Make a Action for Add to cart
const AddtoCart = (payload) => {
  return {
    type: ADDTOCART,
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
    case GETPRODUCT:
      return {
        product: [...state.product],
      };

    default:
      return state;
  }
};

// make another reducer
const CartReducer = (state = initailCart, action) => {
  switch (action.type) {
    case ADDTOCART:
      return {
        ...state,
        product: [...state.product, action.payload],
        count: state.count + 1,
      };

    default:
      return state;
  }
};

// make a store

// combine all reducer
const rootReducer = combineReducers({
  productR: ProductReducer,
  cartR: CartReducer,
});
const store = createStore(rootReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(AddProduct("taufik"));
store.dispatch(AddProduct("taufik1"));
store.dispatch(AddProduct("taufik2"));
store.dispatch(AddProduct("taufik3"));
store.dispatch(AddtoCart("Mango"));
