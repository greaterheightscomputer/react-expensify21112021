// import { createStore, combineReducers } from "redux";
// import expensesReducer from "../reducers/expenses";
// import filtersReducer from "../reducers/filters";

// export default () => {
//   const store = createStore(
//     combineReducers({
//       expenses: expensesReducer,
//       filters: filtersReducer,
//     }),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   );
//   return store;
// };

//its enable us to return function in Action Generator Function instead of an object
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import expensesReducer from "../reducers/expenses";
import filtersReducer from "../reducers/filters";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer,
    }),
    composeEnhancers(applyMiddleware(thunk)) //composeEnhancers enable us to keep the Redux tab on the browser
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
