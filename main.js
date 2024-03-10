/**
 * async actions --api calling
 * api url :https://jsonplaceholder.typicode.com/todos
 * middleware : redux thunk
 * axios api
 */

const { createStore, applyMiddleware } = require("redux");
const { thunk } = require("redux-thunk");
const axios = require("axios");
/**
 * todo1 : 1st make a initail state
 * todo2 : 2nd of all makes a action
 * todo3 : 3rd of all makes a all reducer fucntion to works with each acitons
 * todo4 : 4th of all makes a stroe
 */

// CONSTAINSTS

const GET_TODO_REQUEST = "GET_TODO_REQUEST";
const GET_TODO_SUCESS = "GET_TODO_SUCESS";
const GET_TODO_FAIED = "GET_TODO_FAIED";
const API_URL = "https://jsonplaceholder.typicode.com/todos";

// initails state of todos
const initailTodoStates = {
  todo: [],
  isLoading: false,
  error: null,
};

// actions
const getTodoRequest = () => {
  return {
    type: GET_TODO_REQUEST,
  };
};

const getTodoSucess = (data) => {
  return {
    type: GET_TODO_SUCESS,
    payload: data,
  };
};

const getTodoFailed = (err) => {
  return {
    type: GET_TODO_FAIED,
    payload: err,
  };
};

// make a todos reducer for every actions
const todoReducer = (state = initailTodoStates, action) => {
  switch (action.type) {
    case GET_TODO_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_TODO_SUCESS: {
      return {
        ...state,
        isLoading: false,
        todo: action.payload,
      };
    }
    case GET_TODO_FAIED: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    }

    default:
      return state;
  }
};

// store
const store = createStore(todoReducer, applyMiddleware(thunk));
store.subscribe(() => {
  console.log(store.getState());
});

// now fetching the data with the help of axios

const fetchData = () => {
  return (dispatch) => {
    dispatch(getTodoRequest());
    axios
      .get(API_URL)
      .then((res) => {
        const data = res.data;
        const allTitle = data.map((item) => item.title);
        return allTitle;
      })
      .then((data) => {
        // console.log(data[0]);
        dispatch(getTodoSucess(data));
      })
      .catch((err) => {
        dispatch(getTodoFailed(err.message));
      });
  };
};

store.dispatch(fetchData());
/**
 * when call fetchData then store.dispatch get a middleware function . this function called by thunk
 * middleware , this middleware pass the dispatch function then we call the all action using this dispatch
 * function
 */
