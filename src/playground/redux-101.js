// console.log("redux-101");

import { createStore } from "redux";

// const store = createStore((state = { count: 0 }) => {
//   return state;
// });

// // How to fetch value from redux store
// console.log(store.getState());

// // Passing Actions object as the 2nd argument of the redux store like this
// const store = createStore((state = { count: 0 }, action) => {
//   if (action.type === "INCREMENT") {
//     return {
//       //returning new state object
//       count: state.count + 1,
//     };
//   } else {
//     return state;
//   }
// });
// console.log(store.getState());

// //How to dispatch Action object to redux store like this
// store.dispatch({
//   //Action object
//   type: "INCREMENT",
// });
// store.dispatch({
//   type: "INCREMENT",
// });
// store.dispatch({
//   type: "INCREMENT",
// });
// store.dispatch({
//   type: "INCREMENT",
// });
// store.dispatch({
//   type: "INCREMENT",
// });
// console.log(store.getState());

// //let switch the if statement to switch case
// const store = createStore((state = { count: 0 }, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return {
//         count: state.count + 1,
//       };
//     case "DECREMENT":
//       return {
//         count: state.count - 1,
//       };
//     case "RESET":
//       return {
//         count: 0,
//       };
//     default:
//       return state;
//   }
// });
// console.log(store.getState());

// //How to dispatch Action object to redux store like this
// store.dispatch({
//   //Action object
//   type: "INCREMENT",
// });
// store.dispatch({
//   type: "INCREMENT",
// });
// store.dispatch({
//   type: "DECREMENT",
// });
// store.dispatch({
//   type: "INCREMENT",
// });
// store.dispatch({
//   type: "RESET",
// });
// console.log(store.getState());

//Subscribing and Dynamic Actions
//-Subscribe is use to watch for changes in the store
// const store = createStore((state = { count: 0 }, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return {
//         count: state.count + 1,
//       };
//     case "DECREMENT":
//       return {
//         count: state.count - 1,
//       };
//     case "RESET":
//       return {
//         count: 0,
//       };
//     default:
//       return state;
//   }
// });

//subscribe function
// store.subscribe(() => {
//   console.log(store.getState());
// });

// const unsubscribe = store.subscribe(() => {
//   console.log(store.getState());
// });

// //How to dispatch Action object to redux store like this
// store.dispatch({
//   type: "INCREMENT",
// });
// store.dispatch({
//   type: "INCREMENT",
// });
// store.dispatch({
//   type: "DECREMENT",
// });
// // unsubscribe();
// store.dispatch({
//   type: "INCREMENT",
// });
// store.dispatch({
//   type: "RESET",
// });

// //Dispatch Dynamic Actions
// const store = createStore((state = { count: 0 }, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       const incrementBy =
//         typeof action.incrementBy === "number" ? action.incrementBy : 1;
//       return {
//         count: state.count + incrementBy,
//       };
//     case "DECREMENT":
//       const decrementBy =
//         typeof action.decrementBy === "number" ? action.decrementBy : 1;
//       return {
//         count: state.count - decrementBy,
//       };
//     case "RESET":
//       return {
//         count: 0,
//       };
//     default:
//       return state;
//   }
// });

// // //subscribe function
// store.subscribe(() => {
//   console.log(store.getState());
// });

// // //How to dispatch Action object to redux store like this
// store.dispatch({
//   type: "INCREMENT",
//   incrementBy: 9,
// });
// store.dispatch({
//   type: "INCREMENT",
// });
// store.dispatch({
//   type: "DECREMENT",
//   decrementBy: 10,
// });
// store.dispatch({
//   type: "INCREMENT",
// });
// store.dispatch({
//   type: "RESET",
// });

//ES6 Destructuring
//ES6 Destructuring - its will allow us to work with array and object.
//- let create another file inside src/playgrounding folder called destructuring.js

//Refactoring and Organizing
// //- Action generator -> are functions that returns action objects.
// const incrementCount = ()=>{//explicitly return of object
//   return{
//     type: "INCREMENT",
//   }
// }

//implicityly return of object
//pass object as argument without destructuring
// const incrementCount = (payload = {})=>({
//   type: "INCREMENT",
//   incrementBy: typeof payload.incrementBy === "number"? payload.incrementBy : 1,
// })

//destructuring Action generator
//pass object as argument with destructuring
// const incrementCount = ({ incrementBy = 1 } = {}) => ({
//   type: "INCREMENT",
//   incrementBy,
// });

// const decrementCount = ({ decrementBy = 1 } = {}) => ({
//   type: "DECREMENT",
//   decrementBy,
// });

// const resetCount = () => ({
//   type: "RESET",
// });

// const setCount = ({ count } = {}) => ({
//   type: "SET",
//   count,
// });

// const store = createStore((state = { count: 0 }, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return {
//         count: state.count + action.incrementBy,
//       };
//     case "DECREMENT":
//       return {
//         count: state.count - action.decrementBy,
//       };
//     case "RESET":
//       return {
//         count: 0,
//       };
//     case "SET":
//       return {
//         count: action.count,
//       };
//     default:
//       return state;
//   }
// });

// // //subscribe function
// store.subscribe(() => {
//   console.log(store.getState());
// });

// // //inline Action object
// store.dispatch({
//   type: "INCREMENT",
//   incrementBy: 5,
// });
// store.dispatch(incrementCount({ incrementBy: 34 }));
// store.dispatch(decrementCount({ decrementBy: 2 }));
// store.dispatch(resetCount());
// store.dispatch(setCount({ count: 120 }));

//Reducers
//Meaning of Reducer
//1. Reducers are pure functions -> they are function which the output depend purely on the
//input which are state and action, its doesn't use anything outside of its function scope.
//example of non-pure function
// let a = 10;
// const add = (b) => {
//   return a + b;
// };
//2. Never change the state or action -> just want to read the state or action and return new
//object that represent the state.
//3. Reducers use the Action object to manipulate the state object which will lead to returing
//of new state object that will make changes to redux store.

//Reducer
const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy,
      };
    case "DECREMENT":
      return {
        count: state.count - action.decrementBy,
      };
    case "RESET":
      return {
        count: 0,
      };
    case "SET":
      return {
        count: action.count,
      };
    default:
      return state;
  }
};

//Action generator
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy,
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy,
});

const resetCount = () => ({
  type: "RESET",
});

const setCount = ({ count } = {}) => ({
  type: "SET",
  count,
});

// store
const store = createStore(countReducer);

//subscribe function
store.subscribe(() => {
  console.log(store.getState());
});

//dispatch function
store.dispatch(incrementCount({ incrementBy: 39 }));
store.dispatch(decrementCount({ decrementBy: 5 }));
store.dispatch(resetCount());
store.dispatch(setCount({ count: 120 }));

//create new file called redux-expensify.js inside playground folder
