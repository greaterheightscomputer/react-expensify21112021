//Promise is a predefined javascript object

// const promise = new Promise((resolve, reject) => {
//   resolve("this is my resolved data");
// });
//then() method is called when a promise resolve or when a promise is a success case.

// promise.then((data) => {
//   console.log(data);
// });
//- run dev-server and open the browser console to view the promise output

//add a delay before the promise runs
// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("I am coding javascript");
//   }, 5000);
// });

// // console.log("after deley");
// promise1.then((data) => {
//   console.log(data);
// });

// //returning reject() method
// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("Page not found! 404");
//   }, 5000);
// });

// // console.log("after deley");
// promise1
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log("error: ", error);
//   });

//another way of handling error by passing it as the second argument onto then() method
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Something went wrong");
  }, 3000);
});

promise.then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.log(error);
  }
);

//in this project we shall be using then() method of promise to resolve success case
// and catch() method of promise to reject fail case
//- comment or remove the use of import "./playground/promises"; on the app.js file
