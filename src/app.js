import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';
// import "./playground/promises";

//store
const store = configureStore();
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
ReactDOM.render(jsx, document.getElementById('app'));

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
//- change this window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//to
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//composeEnhancers(applyMiddleware(thunk))
//- open firebase/firebase.js file for exporting some predefined methods for the purpose of use
//in other files like this
// export { firebase, googleAuthProvider, database as default };
//- open action/expenses.js file for setting up the Asynchronous Action Generator Function
//- open components/AddExpresePage.js component to dispatch startAddExpense() Action Generator
//function instead of addExpense() Action Generator function
//- open firebase database then clear or delete the data inside it.
//- startup dev-server
//- add expense by clicking on Create Expense tab
//- check both the redux and firebase db

//Testing Async Redux Actions 1
//- since we have change the Action Generator Function from addExpress() to startAddExpess()
//which is asynchronous action function we have to modify AddExpensePage.js component.
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

//Testing Async Redux Action 2
//- still on setting up asynchronous test case in tests/actions/expenses.test.js file
//"should add expense with default values to database and redux store"

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
//- open tests/setupTests.js for modification inorder to allow our test data to work by adding
//this line of code
// import DotEnv from 'dotenv';
// DotEnv.config({ path: '.env.test' });
//- completely delete both develoment and test database data.
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
