/**
 * Todo 1 : payload experiment
 */

// user State State , it is a object
const initialuser = {
  user: [{ name: "taufik" }],
};

// Now make a action action is an object also

// for user
const ADDUSER = "ADDUSER";

// make a user Action funciton

const User = (user) => {
  return {
    type: ADDUSER,
    payload: user,
  };
};

const UserReducer = (userState = initialuser, action) => {
  switch (action.type) {
    case ADDUSER:
      return {
        ...userState, // {user: [ {name: "taufik"}]} make this type of object
        user: [...userState.user, action.payload], // user : [...userstate.user , action.paylod]  --> make {name:"taufik"}  action.paylod--> another object lilke {name : "islam"}
      };

    default:
      return userState;
  }
};

/**
 * Now time to make a store , store takes a reducer
 * store have servaral method like subscribe() , dispatch() and  getState()
 */

const { createStore } = require("redux");

const store = createStore(UserReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(User({ name: "islam" }));
store.dispatch(User({ name: "sorna" }));
store.dispatch(User({ name: "Mithila" }));
store.dispatch(User({ name: "Sarmin" }));
store.dispatch(User({ name: "Nabila" }));
store.dispatch(User({ name: "Dola" }));
