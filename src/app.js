import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
// import "./playground/promises";

// //store
// const store = configureStore();
// const jsx = (
//   <Provider store={store}>
//     <AppRouter />
//   </Provider>
// );
// ReactDOM.render(jsx, document.getElementById('app'));

//- open each file that makeup the expensify app to remove unecessary codes.
//- C:\react-course-projects032021\xpensify-app7>npm run dev-server
//- C:\react-course-projects032021\xpensify-app7>yarn test -- --watch

//Firebase Database
//- performing CRUDE (Creating Updating Deleting) operation with firebase database.

//Getting Firebase
//- go to firebase.google.com to Login or Signup for firebase db.
//- you most sign-up with your google account
//- click on Go to console
//- click on Add project
//- Enter your project name: Expen08012022 and click on Continue button
//- click on Create Project
//- our focus on firebase are Authentication and Realtime Database
//- firebase database is a no sql database that look like a javascript object which contain
//properties and values.
//- click Realtime Database, click on create database button
//- click on Rules tab inorder to change the rules from false to true like this
// {
//   "rules": {
//     ".read": true,
//     ".write": true
//   }
// }
//- click on Publish to save the new rules setting
//- click on Project Overview
//- go to Get started by adding Firebase to your app then click on web </> icon.
//- Register app: expen08012022
//- click on Register app button
//- click on Continue to console
//- click on icon beside Project Overview then click on project setting to view firebase
//configuration settings
//- install firebase like this
//C:\react-course-projects032021\xpensify-app7>npm install firebase@4.2.0
//- create a folder called firebase inside src
//- create firebase.js file inside src/firebase
//- setup firebase.js file by doing the following
//import * as firebase from "firebase";
// const firebaseConfig = {
//   apiKey: "AIzaSyAHkG-q_hJZ6nqtGk2mdy9CqHNdaO8Ccjg",
//   authDomain: "expen08012022.firebaseapp.com",
//   databaseURL: "https://expen08012022-default-rtdb.firebaseio.com",
//   projectId: "expen08012022",
//   storageBucket: "expen08012022.appspot.com",
//   messagingSenderId: "829129085861",
//   appId: "1:829129085861:web:51c7655f39f32ad7014e4c",
//   measurementId: "G-EEJSZJYY8Q",
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

//ES6 Promises
//- Promises allow us to do something after a long running task like storing data onto firebase.
//- create promises.js file inside src/playground folder
//- import "./playground/promises"; onto app.js inorder to view the file on the browser console.

//Promises with Firebase
//- open firebase/firebase.js file to implement promise with firease.

//Removing Data from Firebase
//- open firebase/firebase.js file to implement remove data from firease.

//Updating Data with Firebase
//- open firebase/firebase.js file to implement update data with firease.

//Fetching Data from Firebase
//- open firebase/firebase.js file to implement fetching data with firease.

//Array Data in Firebase: Part I
//- open firebase/firebase.js file to implement array in firebase.

//Array Data in Firebase: Part II
//- open firebase/firebase.js file to implement array in firebase.

//Firebase with Redux
//- inorder to connect firebase with redux store we nee to implement Asynchronous Redux Action
//- when someone dispatch asynchronous action we shall update both redux store and firebase,
// this will update the user interface(UI) as well

//Asynchronous Redux Action
//- integrate all the firebase methods we have learnt onto redux store which are CRUDE operation
//- open src/components/actions/expenses.js inorder to convert the Action Generator functions
//to Asynchronous Action Generation functions
//- install redux-thunk like this
//C:\react-course-projects032021\xpensify-app7>npm install redux-thunk@2.2.0
//- the above redux-thunk library enable us to return function in our local Action Generator
//Function instead of object
//- open src/store/configurateStore.js file for modification
//- import the following onto configureStore.js file
// import { applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";
//- change this window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//to
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//composeEnhancers(applyMiddleware(thunk))
//- open firebase/firebase.js file for exporting some predefined methods for the purpose of use
//in other files like this
// export { firebase, googleAuthProvider, database as default };
//- open action/expenses.js file for setting up the startAddExpense() Asynchronous Action Generator Function
//- open components/AddExpresePage.js component to dispatch startAddExpense() Action Generator
//function instead of addExpense() Action Generator function
//- open firebase database then clear or delete the data inside it.
//- startup dev-server
//- add expense by clicking on Create Expense tab
//- check both the redux and firebase db

//Testing Async Redux Actions 1
//- since we have change the Action Generator Function from addExpress() to startAddExpess()
//which is asynchronous action function we have to modify AddExpensePage.test.js component.
//- startup the jest test suit like this
//C:\react-course-projects032021\xpensify-app7>yarn test -- --watch
//- you will see some file failing becos of the change we deed to src/components/AddExpensePage.js
//file its throw this TypeError:_this.props.startAddExprense is not a function.
//- open src/tests/actions/AddExpensePage.test.js file then change all the addExpense() Action
//function to startAddExpense() Action function
//- open src/tests/actions/expenses.test.js file
//- import expenses from "../fixtures/expenses" onto expenses.test.js file
//- modify this test case "should setup add expense action object with provided values" in
//expenses.test.js file
//- remove this test case "should setup and expense action object with default values"
//- startup jest test suit like this
// C:\react-course-projects032021\xpensify-app7>npm test -- --watch
//- Setup asynchronous test case in expenses.test.js file with these two test cases
//1. test('should add expense to database and redux store',
//2. test('should add expense with default values to database and redux store',

//Creating a Separate Test Database
//- open to see that all the async test case is writing directly to the firebase app database
//and we don't want that we need to create a separate firebase database.
//- install cross-env library for setting environment variable for all operating system like
//this C:\react-course-projects032021\xpensify-app7>npm install --dev cross-env@5.0.5
//- open package.json file to add cross-env environment variable onto test property of scripts
//object from this "test": "jest --config=jest.config.json", to this
//"test": "cross-env NODE_ENV=test jest --config=jest.config.json",
//- the above configuration setting means we are using cross-env NODE_ENV=test environment
//variable for testing purpose only. This environment variable will be set for us by default
//in production on heroku cloud hosting service.
//- let create two environment files in the root of the application; one for testing and the
//second for the development purpose. The files name are .env.test and .env.development.
//- copy all the properties and values inside firebaseConfig object onto the two files like this
// apiKey: "AIzaSyAHkG-q_hJZ6nqtGk2mdy9CqHNdaO8Ccjg",
//   authDomain: "expen08012022.firebaseapp.com",
//   databaseURL: "https://expen08012022-default-rtdb.firebaseio.com",
//   projectId: "expen08012022",
//   storageBucket: "expen08012022.appspot.com",
//   messagingSenderId: "829129085861",
//   appId: "1:829129085861:web:51c7655f39f32ad7014e4c",
//   measurementId: "G-EEJSZJYY8Q",
//convert the above properties and values into this
// FIREBASE_API_KEY= AIzaSyAHkG-q_hJZ6nqtGk2mdy9CqHNdaO8Ccjg
//   FIREBASE_AUTH_DOMAIN= expen08012022.firebaseapp.com
//   FIREBASE_DATABASE_URL= https://expen08012022-default-rtdb.firebaseio.com
//   FIREBASE_PROJECT_ID= expen08012022
//   FIREBASE_STORAGE_BUCKET= expen08012022.appspot.com
//   FIREBASE_MESSAGING_SENDER_ID= 829129085861
//   FIREBASE_APP_ID= 1:829129085861:web:51c7655f39f32ad7014e4c
//   FIREBASE_MEASUREMENT_ID= G-EEJSZJYY8Q
//- copy the content of .env.development file onto .env.test file then change the properties
//values to point to different database.
//- go to firebase.google.com to create a new firebase database for testing purpose.
//- go to firebase Home Page by clicking on Firebase on the sidebar then click on Add Project
//- after creating db, click on Realtime Databse, click on Create Database.
//- click on Rules tab to grant access to all users by changing read and write properties to
//true then click on Publish button.
//- go back to firebase Hom page by clicking on Firebase then click on </> web inorder to copy
//firebase configuration setting and past it on .env.test and set the value onto the properties
//like this
// const firebaseConfig = {
//   apiKey: "AIzaSyAiLRX9YxNTXfM_9usZkkOTmFwNrWWINcg",
//   authDomain: "expensify-test19022022.firebaseapp.com",
//   databaseURL: "https://expensify-test19022022-default-rtdb.firebaseio.com",
//   projectId: "expensify-test19022022",
//   storageBucket: "expensify-test19022022.appspot.com",
//   messagingSenderId: "613243123791",
//   appId: "1:613243123791:web:175b65f4cb97791d40923a",
//   measurementId: "G-Y9BYE509CY"
// };
//- install dotenv library to read the environment file like this
//C:\react-course-projects032021\xpensify-app7>npm install --dev dotenv@4.0.0
//- open webpack.config.js file to use dotenv module like this
// process.env.NODE_ENV = process.env.NODE_ENV || 'development';
// if (process.env.NODE_ENV === 'test') {
//   require('dotenv').config({ path: '.env.test' });
// } else if (process.env.NODE_ENV === 'development') {
//   require('dotenv').config({ path: '.env.development' });
// }
//- const webpack = require('webpack'); onto webpack.config.js file
//- modify plugins property in webpack.config.js file inorder to be able to use the
//firebaseConfig setup in both environment files in bundle.js file like this
// plugins: [
//   CSSExtract,
//   new webpack.DefinePlugin({
//     'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
//     'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
//     'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
//     'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
//     'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
//     'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
//     'process.env.FIREBASE_APP_ID': JSON.stringify(process.env.FIREBASE_APP_ID),
//     'process.env.FIREBASE_MEASUREMENT_ID': JSON.stringify(process.env.FIREBASE_MEASUREMENT_ID),
//   }),
// ],
//- next is to use the above environment variables in firebase/firebase.js file like this
// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.FIREBASE_DATABASE_URL,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.FIREBASE_APP_ID,
//   measurementId: process.env.FIREBASE_MEASUREMENT_ID,
// };
//- open jest.config.json then add this
//- open tests/setupTests.js for modification inorder to allow our test data to work by adding
//this line of code
// import DotEnv from 'dotenv';
// DotEnv.config({ path: '.env.test' });
//- completely delete both develoment and test database data in firebase.
//- startup jest test suit
//- veiw both db, you will see the test db populated with dummy data while the development db
//has not data

//Heroku Environment Variable
//- we have already setup environment variable on testing and development.
//- next is to setup environment variable in production on heroku command line.
//NODE_ENV is automatically set to product on heroku
//- we need to take all the variable setup in .env.development and set it up on heroku for the
//purpose of production.
//- C:\react-course-projects032021\xpensify-app7>heroku config -a react-expensify-182021
//the above command print out all the environment variables on heroku but currently we don't
//have any environment variables, make sure your internet is on while executing the above command.
//- setup firebaseConfig on heroku like this
// C:\react-course-projects032021\xpensify-app7>heroku config:set -a react-expensify-182021
// FIREBASE_API_KEY=AIzaSyAHkG-q_hJZ6nqtGk2mdy9CqHNdaO8Ccjg
// FIREBASE_AUTH_DOMAIN=expen08012022.firebaseapp.com
// FIREBASE_DATABASE_URL=https://expen08012022-default-rtdb.firebaseio.com
// FIREBASE_PROJECT_ID=expen08012022
// FIREBASE_STORAGE_BUCKET=expen08012022.appspot.com
// FIREBASE_MESSAGING_SENDER_ID=829129085861
// FIREBASE_APP_ID=1:829129085861:web:51c7655f39f32ad7014e4c
// FIREBASE_MEASUREMENT_ID=G-EEJSZJYY8Q
//make sure to add space within each property and value then press enter when you are done.
//- push to both local and remote github repository
//- C:\react-course-projects032021\xpensify-app7>git status
//you will see some files that you don't want to push to github, they are .env.test and
//.env.development
//- open gitignore file to ignore those two files from github, then run git status again.
//- C:\react-course-projects032021\xpensify-app7>git add .
//- C:\react-course-projects032021\xpensify-app7>git commit -m "Setup test database environment variables"
//- C:\react-course-projects032021\xpensify-app7>git push
//the above command will push to remote git repository
//- C:\react-course-projects032021\xpensify-app7>git push heroku master
//the above command will redeploy your app to heroku web hosting site
//- C:\react-course-projects032021\xpensify-app7>heroku open
//the above command will open your web app on this url->
//https://react-expensify-182021.herokuapp.com/
//- startup the development server like this web app
//C:\react-course-projects032021\xpensify-app7>npm run dev-server

//Fetching Expenses: Part I
//- currently if you refresh the browser on the development app and the deployed app the data
//inserted on db will not re-render, that is why we need to fetch data from db for the purpose
//of re-rendering.
//- open src/tests/actions/expenses.test.js file write this life cycle method at the top of the
//test cases in expenses.tes.js file
// beforeEach((done) => {
//   const expensesData = {};
//   expenses.forEach(({ id, description, note, amount, createdAt }) => {
//     expensesData[id] = { description, note, amount, createdAt };
//   });

//   database.ref("expenses").set(expensesData).then(() => done());
// });
//- the above beforeEach() method will run before each asynchronous test cases.
//- run jest test suite and open your test db immediately to see how the db data changes.
//- you will see that the dummy expenses array object will be inserted first before asynchronous
//test cases.
//- open src/actions/expenses.js for writing code to fetch data from redux store which is
//setExpenses() Action function.
//- write test case for setExpenses Action function in tests/actions/expenses.test.js
//- startup jest test suite
//- open src/reducers/expenses.js file with its test file counterpart to setup setExpenses
//Action function

//Fetching Expenses: Part II
//- open src/actions/expenses.js for writing code to fetch data from firebase which function is
//startSetExpenses() Async Action function
//- import { startSetExpenses } from './actions/expenses'; onto app.js file
//- using startSetExpenses function to fetch data from firebase on app.js file like this

// //store
// const store = configureStore();
// const jsx = (
//   <Provider store={store}>
//     <AppRouter />
//   </Provider>
// );
// //- render loading on the browser while the data is stall fetching from firebase
// ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));
// store.dispatch(startSetExpenses()).then(() => {
//   ReactDOM.render(jsx, document.getElementById('app')); //once the data is fetched then render the app
// });
//- startup dev-server
//- add test case for startSetExpenses() function inside tests/actions/expenses.test.js file
//- startup jest test suite

//- push to both local and remote github repository
//- C:\react-course-projects032021\xpensify-app7>git status
//- C:\react-course-projects032021\xpensify-app7>git commit -am "Get firebase expenses on start"
//- C:\react-course-projects032021\xpensify-app7>git push
//the above command will push to remote git repository
//- C:\react-course-projects032021\xpensify-app7>git push heroku master
//the above command will redeploy your app to heroku web hosting site
//- C:\react-course-projects032021\xpensify-app7>heroku open
//the above command will open your web app on this url->
//https://react-expensify-182021.herokuapp.com/

//Remove Expense
//- create startRemoveExpense Async Action function inside src/actions/expenses.js file
//- write the test case for startRemoveExpense Async Action function inside
//tests/actions/expenses.test.js file and import startRemoveExpense onto expenses.test.js.
//- startup jest test suite
//- implement startRemoveExpense onto the EditExpensePage component by opening EditExpensePage.js
//file using startRemoveExpense Async Action function in place of removeExpense Action function.
//- open tests/components/EditExpensePage.test.js file inorder to use startRemoveExpense Async
//Action function in place of removeExpense Action function
//- startup dev-server inorder to actually delete one data on firebase db.

//- push to both local and remote github repository
//- C:\react-course-projects032021\xpensify-app7>git status
//- C:\react-course-projects032021\xpensify-app7>git commit -am "Setup startRemoveExpense"
//- C:\react-course-projects032021\xpensify-app7>git push
//or
//C:\react-course-projects032021\xpensify-app7>git push --set-upstream git@github.com:greaterheightscomputer/react-expensify21112021.git master
//the above command will push to remote git repository
//- C:\react-course-projects032021\xpensify-app7>git push heroku master
//the above command will redeploy your app to heroku web hosting site
//- C:\react-course-projects032021\xpensify-app7>heroku open
//the above command will open your web app on this url->
//https://react-expensify-182021.herokuapp.com/

//Update Expense
//- create startEditExpense Async Action Function inside src/actions/expenses.js file.
//- write the test case for startEditExpense Async Action Function inside
//tests/actions/expenses.test.js file and import startEditExpense onto expenses.test.js file
//- startup jest test suite
// C:\react-course-projects032021\xpensify-app7>npm test -- --watch
//- implement startEditExpense onto EditExpensePage component by opening EditExpensePage.js
//file using startEditExpense Async Action Function in place of editExpense Action Function.
//- open tests/components/EditExpensePage.test.js file inorder to use startEditExpense Async
//Action Function in place of editExpense Action Function.
//- startup jest test suite
//- startup dev-server inorder to actually edit one data on firebase db.

//- push to both local and remote github repository
//- C:\react-course-projects032021\xpensify-app7>git status
//- C:\react-course-projects032021\xpensify-app7>git commit -am "Add startEditExpense"
//- C:\react-course-projects032021\xpensify-app7>git push
//or
//C:\react-course-projects032021\xpensify-app7>git push --set-upstream git@github.com:greaterheightscomputer/react-expensify21112021.git master
//the above command will push to remote git repository
//- C:\react-course-projects032021\xpensify-app7>git push heroku master
//the above command will redeploy your app to heroku web hosting site
//- C:\react-course-projects032021\xpensify-app7>heroku open
//the above command will open your web app on this url->
//https://react-expensify-182021.herokuapp.com/

//Firebase Authentication
//- we shall use Authentication to make user to login onto the app before they can use the app.
//An expenses created by user A will not be visible by user B.

//Login Page and Googel Authentication
//- Challenge area
//1. Create LoginPage component with "Login" button
//2. Add snapshot test for LoginPage.
//3. Show Login component at root of app -> /
//4. Show ExpenseDashboardPage after login -> /dashboard
//- create LoginPage.js in src/components folder and set it up.
//- create LognPage.test.test.js in src/tests/components/ folder and set it up
//- startup jest test suite
//- startup dev-server
//- open routers/AppRouter.js inorder to change the root app from ExpenseDashboardPage
//component to LoginPage component.
//- import LoginPage from '../components/LoginPage'; onto routers/AppRouter.js file
//- change the root route from ExpenseDashboardPage to LoginPage like this
// <Route path="/" component={LoginPage} exact={true} />
// <Route path="/dashboard" component={ExpenseDashboardPage} exact />
//- startup dev-server
//- go http://localhost:8080/dashboard its redirect you to the app
//- go to firebase.google.com to enable firebase Authentication
//- click on Authentication, click on Get Started, click on Sign-in method, click on Google,
// click on Enable.
//- open firebase/firebase.js file to setup Authentication configuration and export it as a
//named export.
//- Tracking of Authentication by import { firebase } from './firebase/firebase'; onto app.js file
//auth() -> use to geting Authentication related functionalities
//onAuthStateChanged() -> its fired whent he state of authentication changes, meaning when user
//get authenticated its fired and when user is unauthenticated its fired as well.
// firebase.auth().onAuthStateChanged((user) => {
//   if (user) {
//     console.log('login');
//   } else {
//     console.log('logout');
//   }
// });
//- create file auth.js inside src/actions folder for setting up authentication then create
//startLogin Async Action Function
//- import { firebase, googleAuthProvider } from '../firebase/firebase'; onto actions/auth.js
//- reopen the LoginPage.js file to connect to the component to redux store and use startLogin()
//Async Action Function
//- import the following onto LoginPage.js file
// import React from 'react';
// import { connect } from 'react-redux';
// import { startLogin } from '../actions/auth';
//- open AppRouter.js file to change the LoginPage from named export to default export like this
// import {LoginPage} from '../components/LoginPage'; to
//import LoginPage from '../components/LoginPage'; becos we are importing the connected component.
//- startup dev-server, refresh the browser and open the browser console you will view logout
//on the browser console.
//- click on Login botton, its will render a dialogue box for you to pick the google account
//you want to login with, then it will change the authentication status from logout to login.
//- if you are seeing the above login on browser console its means you have already setup the
//authentication but we are not using yet. If you refresh the browser again you will still see
//login.

//LogOut
//- src/components/Header.js to add the LogOut button
//- open src/actions/auth.js file to create startLogout Async Action Function for logging out
//the user from the app.
//- remember to export the Header unconnected component becos of testing.
//- startup dev-server
//- click on Logout button to logout out of the app
//- open tests/components/Header.test.js file for creating test case
//- change the Header import on Header.test.js from defaul export to named export becos we
//cannot test the connected Header component.
//- modify the test case in Header.test.js file.
//- startup jest suite
//- open tests/components/LoginPage.test.js to add new test case with title of
//"should call startLogin on button click"

//Redirecting Login or Logout
//- install history library like this
// C:\react-course-projects032021\xpensify-app7>npm i history@4.7.2
//the above library will enable us to redirect to any page.
//- import createHistory from "history/createBrowserHistory"; and use it on AppRouter.js file
//like this by creating
// export const history = createHistory();
//switching from <BrowserRouter> to <Router history={history}> with history as a props
//- import AppRouter, { history } from './routers/AppRouter';
//- use history inside onAuthStateChanged() method like this
// firebase.auth().onAuthStateChanged((user) => {
//   if (user) {
//     console.log('user: ', user);
//     console.log('Log in');
//   } else {
//     // console.log('Log out');
//     history.push('/'); // '/' is the LoginPage component
//   }
// });
//- startup dev-server
//- click on Login, manually go to http:/localhost:8080/dashboard then click on Logout button
//it will take you to HomePage.
//- is to make sure that is already existing user that there expenses are fetched from db by
//doing the following
//store
// const store = configureStore();
// const jsx = (
//   <Provider store={store}>
//     <AppRouter />
//   </Provider>
// );
// ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

// firebase.auth().onAuthStateChanged((user) => {
//   if (user) {
//     store.dispatch(startSetExpenses()).then(() => {
//       ReactDOM.render(jsx, document.getElementById('app'));
//     });
//   } else {
//     ReactDOM.render(jsx, document.getElementById('app'));
//     history.push('/');
//   }
// });

//Avoid duplicate ReactDOM.render(jsx, document.getElementById("app"));
// //store
// const store = configureStore();
// const jsx = (
//   <Provider store={store}>
//     <AppRouter />
//   </Provider>
// );

// let hasRendered = false;
// const renderApp = () => {
//   if (!hasRendered) {
//     ReactDOM.render(jsx, document.getElementById('app'));
//     hasRendered = true;
//   }
// };
// ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

// firebase.auth().onAuthStateChanged((user) => {
//   if (user) {
//     store.dispatch(startSetExpenses()).then(() => {
//       renderApp();
//       if (history.location.pathname === '/') {
//         history.push('/dashboard');
//       }
//     });
//   } else {
//     renderApp();
//     history.push('/');
//   }
// });
//- test your app by startup dev-server

//The Auth Reducer
//- if user logout, the user still have access to Create Expense tab on the app in the browser
//to avoid this we need to store some information related to user authentication to redux store
//inorder to keep track wheither the user is login or not by storing userId onto redux store.
//- We have access to user id from the user argument pass to onAuthStateChanged() method like this
// //store
// const store = configureStore();
// const jsx = (
//   <Provider store={store}>
//     <AppRouter />
//   </Provider>
// );

// let hasRendered = false;
// const renderApp = () => {
//   if (!hasRendered) {
//     ReactDOM.render(jsx, document.getElementById('app'));
//     hasRendered = true;
//   }
// };
// ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

// firebase.auth().onAuthStateChanged((user) => {
//   if (user) {
//     console.log('uid', user.uid);
//     store.dispatch(startSetExpenses()).then(() => {
//       renderApp();
//       if (history.location.pathname === '/') {
//         history.push('/dashboard');
//       }
//     });
//   } else {
//     renderApp();
//     history.push('/');
//   }
// });
//- Login onto app, open browser console to view the user id like this
// uid f53zASBpo6fPS7O35zlfyn7W7LW2
//we shall use the user id to check wheither user is login or not.
//- create reducer for authentication
//- create auth.js file inside src/reducers folder for setting up user authentication.
//- create login and logout Action Generator function onto src/actions/auth.js
//- connect the authReducer to redux store by opening src/store/configureStore.js file
//- import authReducer from '../reducers/auth'; onto store for use
//- add authReducer onto combineReducers like this
// combineReducers({
//   expenses: expensesReducer,
//   filters: filtersReducer,
//   auth: authReducer,
// }),

//- let dispatch login and logout action generator function in app.js file
//dispatch login action generator when the user login and dispatch logout when the user logout
//on app.js file.
//- import { login, logout } from './actions/auth'; onto app.js file for dispatching to redux
//store
const store = configureStore();
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};
ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // console.log('uid', user.uid);
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if (history.location.pathname === '/') {
        history.push('/dashboard');
      }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});
//let startup dev-ser and user Redux dev tool in the browser tab to track the changes.
//- let write test cases for login Action function , logout Action function and authReducer
//function.
//- create auth.test.js file inside tests/reducers folder
//- import authReducer from '../../reducers/auth'; onto auth.test.js file
//- setup the test case
//- startup jest test suite
//- create auth.test.js inside tests/actions folder
//- import { login, logout } from '../../actions/auth'; onto tests/action/auth.test.js file

// Private Only Routes
//- we are going to modify routers/AppRouter.js inorder to allow only those who are login to
//navigate on the routes by using PrivateRoute component.
//- create PrivateRoute.js inside src/routers/folder
//- setup PrivateRoute.js component
//- open routers/AppRouter.js file for modification
//- import PrivateRoute from './PrivateRoute'; onto AppRouter.js file
//- using the imported PrivateRoute component, change these Route components from
// <Route path="/dashboard" component={ExpenseDashboardPage} exact />
// <Route path="/create" component={AddExpensePage} exact />
// <Route path="/edit/:id" component={EditExpensePage} exact />
//to these
// <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} exact />
// <PrivateRoute path="/create" component={AddExpensePage} exact />
// <PrivateRoute path="/edit/:id" component={EditExpensePage} exact />

//push to both local and remote github repository
//- C:\react-course-projects032021\xpensify-app7>git status
