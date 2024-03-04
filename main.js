/**
 * Number 1 : define a initaial state like object
 * Number 2 : dispatch a action , action means you have a increment button  when click this button then action dispatch to reducer
 * Number 3 : reducer , reducer takes a action types and works with action type , for example : action arise in increment then
 *            reducer incremnet ta state value
 */

const { createStore } = require("redux");
// actionType : INCREMENT
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const Add_User = "Add_User";

// state
const initialCountState = {
  count: 0,
};

const initailUser = {
  users: [{ name: "Taufik islam" }],
};

// action is a object . it's take two things , type and payload

// now you can use a funciton for managing action object
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

const AddUser = () => {
  return {
    type: Add_User,
    payload: { name: "masud" },
  };
};

/**
 * NOW makes a Reducer function , Reducer function is pure function , Pure funciton means this funciton must take an input and must gives a
 * output , that's why this function is a pure fucntion
 */

const incrementReducer = (state = initialCountState, action) => {
  switch (action.type) {
    case INCREMENT: {
      return {
        ...state,
        count: state.count + 1,
      };
    }
    case DECREMENT: {
      return {
        ...state,
        count: state.count - 1,
      };
    }
    default: {
      return state;
    }
  }
};

/**
 * Finally We create the store , and this createStore takes a reducer function
 * createStore have some funcitn like dispathch() ,subscribe() and getStore()
 */

const store = createStore(incrementReducer);
store.subscribe(() => {
  console.log(store.getState());
});

// now dispatch the data to reducer
store.dispatch(Increment());
store.dispatch(Increment());
store.dispatch(Increment());
store.dispatch(Increment());
store.dispatch(Increment());
store.dispatch(Decrement());
