import * as firebase from 'firebase'; //* as means take all the named export from firebase and store it on variable called firebase beco's firebase don't have default export.
// import * as expensesAction from "../actions/expenses";
// expensesAction.addExpense()

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

//using the two database connected to this app
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//testing our firebase database connection
//- ref() method means references its give us access to specific aspect or part of the firebase database.
//- for instance in sql database we have different tables where we store record.
//- in mongodb we have different collections where documents are stored.

// firebase.database().ref().set({
//   name: "Ola Adebola",
//   age: "13",
// });
//- the created firebase/firebase.js has not being import onto our app as a result the code
//will not be execute to make its work let import { firebase } from "./firebase/firebase"; onto
//app.js file
//- C:\react-course-projects032021\xpensify-app7>npm run dev-server
//- back to firebase.google.com
//- click on Realtime Database to view the data store onto the root of the database.

//Writing to the database
//- firebase can work with different data type like string, boolean, number, object, array.

// const database = firebase.database();
// database.ref().set({
//   name: "Adebola Ola",
//   age: 34,
//   isSingle: false,
//   location: {
//     city: "Lagos",
//     country: "Nigeria",
//   },
// });
//- C:\react-course-projects032021\xpensify-app7>npm run dev-server
//- back to firebase.google.com
//- click on Realtime Database to view the data store onto the root of the database.

//- set() method can take any datatype has an argument and its will override the previous data
// stored on db.
//- ref() using ref() method without any argument will change the root of the database data.
// database.ref().set("this is my data");
// database.ref().set(3023432434);
// database.ref().set(true);
// database.ref().set({ name: "Peter" });

//updating a specific property
// database.ref().set({
//   name: "Adebola Ola",
//   age: 34,
//   isSingle: false,
//   location: {
//     city: "Lagos",
//     country: "Nigeria",
//   },
// });
// database.ref("age").set(50);
// database.ref("location/city").set("Ibadan");

//challenge area
//create object attributes with these properties height: 34inches, weight: 20inches
// database.ref("length").set({ height: "34inches", weight: "20inches" });

//Promises with Firebase
// database
//   .ref()
//   .set({
//     name: "Ola Bola",
//     age: 19,
//     isSingle: true,
//     location: {
//       city: "Ikeja",
//       country: "Nigeria",
//     },
//   })
//   .then(() => {
//     console.log("data is saved");
//   })
//   .catch((err) => {
//     console.log("error: ", err);
//   });
//- let trigger catch block to throw error
//- go to the firebase database to change the rules from true to false like this
// {
//     "rules": {
//       ".read": false,
//       ".write": false
//     }
//   }
//- after seeing the error on the browser console let change the rules setting back to true.

//Challenge area
//- setup then and catch method of promise
//- make sure catch actually works
//- switch rules to true
//- make sure then actually works
//create object attributes with these properties height: 34inches, weight: 20inches
// database.ref("length").set({ height: "34inches", weight: "20inches" });

//Removing Data from Firebase
//- remove part of the database data
// const database = firebase.database();

// database
//   .ref()
//   .set({
//     name: "Ola Bola",
//     age: 19,
//     isSingle: true,
//     location: {
//       city: "Ikeja",
//       country: "Nigeria",
//     },
//   })
//   .then(() => {
//     console.log("data is saved");
//   })
//   .catch((err) => {
//     console.log("error: ", err);
//   });

//remove the whole data in the database
// database
//   .ref()
//   .remove()
//   .then(() => {
//     console.log("remove successfully");
//   })
//   .catch((e) => {
//     console.log("Did not remove: ", e);
//   });

//using set() to remove data from database
// database.ref("isSingle").set(null);

//updating data
// database
//   .ref()
//   .set({
//     name: "Ola Bola",
//     age: 19,
//     isSingle: true,
//     location: {
//       city: "Ikeja",
//       country: "Nigeria",
//     },
//   })
//   .then(() => {
//     console.log("data update");
//   })
//   .catch((err) => {
//     console.log("fail to update: ", err);
//   });

//updating existing properties
// database.ref().update({
//   name: "Adenike Peters",
//   age: 42,
// });

//update at the root level, its does not update the nested object
// database.ref().update({
//   name: "Bola Peters",
//   age: 45,
//   job: "Manager",
//   isSingle: null,
//   location: {
//     city: "Kwara",
//   },
// });

//updating the nested object
// database.ref().update({
//   job: "Software Developer",
//   "location/city": "Lagos Mainland",
// });

//challenge area
// database
//   .ref()
//   .set({
//     name: "Ola Bola",
//     age: 34,
//     isSingle: true,
//     job: { title: "Software Developer", company: "Google" },
//     streetLevel: 6,
//     location: {
//       city: "Ikeja",
//       country: "Nigeria",
//     },
//   })
//   .then(() => {
//     console.log("data update");
//   })
//   .catch((err) => {
//     console.log("fail to update: ", err);
//   });
//- chcange the streetLevel to 9
//- change job.company to Greater Heights
//- change location.city to Abuja

//Fetching data from firebase
//- we can fetch data
//1. a single time and
//2. by subscribing which mean anytime their is changes in db fetch the data.

//fetching the root data a single time
// database
//   .ref()
//   .once("value")
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((error) => {
//     console.log("err: ", error);
//   });

// //fetching specific part of the database data a single time
// database
//   .ref("location")
//   .once("value")
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((error) => {
//     console.log("err: ", error);
//   });

// //fetching nested object
// database
//   .ref("location/city")
//   .once("value")
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((error) => {
//     console.log("err: ", error);
//   });

//fetching data on subscribing
// database.ref().on(
//   "value",
//   (snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   },
//   (error) => {
//     console.log("error on fetching data: ", error);
//   }
// );
//- we passing snapshot as an argument on a callback function instead of then() of promise
//becos we want to run the function anytime changes occur in the db. Promise run once when it
//resolve or reject.
//- go to firebase then manually alter change in the db to see its re-rendering on your browser
//console.

//its trigger on subscribing fetching of data
// setTimeout(() => {
//   database.ref("age").set(29);
// }, 3500);

// //to unsubcribe
// setTimeout(() => {
//   database.ref().off();
// }, 7000);

// setTimeout(() => {
//   database.ref("age").set(35);
// }, 10500);

//challenge area
//setup data sub -> Ola is a Software Deveploper at Greater Heights
//change the data and make sure it reprints
//go to firebase to manually change the data

// database
//   .ref()
//   .set({
//     name: "Ola Bola",
//     age: 34,
//     isSingle: true,
//     job: { title: "Software Developer", company: "Google" },
//     streetLevel: 6,
//     location: {
//       city: "Ikeja",
//       country: "Nigeria",
//     },
//   })
//   .then(() => {
//     console.log("data update");
//   })
//   .catch((err) => {
//     console.log("fail to update: ", err);
//   });

// //setup data sub -> Ola is a Software Deveploper at Greater Heights
// database.ref().on(
//   "value",
//   (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
//   },
//   (error) => {
//     console.log("error on fetching data: ", error);
//   }
// );

//Array Data in Firebase: Part I
//Firebase does not support array
//- let delete the data in firebase
// const database = firebase.database();
// const notes = [
//   {
//     id: "12900",
//     title: "This is my first note",
//     body: "This is my first body note",
//   },
//   {
//     id: "78990",
//     title: "This is my second note",
//     body: "This is my second body note",
//   },
// ];
//save array of object onto firebase
// database.ref("notes").set(notes);
//we cannot work with the way the above array of object is stored onto db

// const firebaseNotes = {
//   notes: {
//     isppasssa122: {
//       id: "12900",
//       title: "This is my first note",
//       body: "This is my first body note",
//     },
//     isppassw23332: {
//       id: "12900",
//       title: "This is my second note",
//       body: "This is my second body note",
//     },
//   },
// };
//- delete the previous data in the db
//using push() method to store data onto db with the above data structure
// database.ref("notes").push({
//   title: "This is my first note",
//   body: "This is my first note",
// });

//access and manipulate notes child from db
//- copy the id from firebase
// database.ref("notes/-MtXYB67aYc1Iv_3HqPN").update({
//   title: "bought laptop",
// });

//remove the item from db
// database.ref("notes/-MtX_DvKYL1KEYYziIx6").remove();

//using set() method to update existing document
// database.ref("notes/-MtX_aXeQZcySSIFUc-7").set({
//   title: "i am coding",
//   body: "I love coding",
// });
//- remove the date from firebase

//Challenge area
//setup expenses object with three documents with the following properties
//description, note, amount, createdAt

// database.ref("expenses").push({
//   description: "computer school fee",
//   note: "Make payment for school fee",
//   amount: 304555,
//   createdAt: 233999000900,
// });

//Array data in Firebase: Part II
//- fetching data from expenses object from db
// //- using once method to fetch data from firebase
// database
//   .ref("expenses")
//   .once("value")
//   .then((snapshot) => {
//     // console.log(snapshot.val());
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val(),
//       });
//     });
//     console.log(expenses);
//   });

// //- using subscribing method to fetch data from firebase
// database.ref("expenses").on("value", (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val(),
//     });
//   });
//   console.log(expenses);
// });
// //- go to firebase to change data manually

//child_removed event -> its trigger when we delete any child object inside the firebase
// database.ref("expenses").on("child_removed", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
//- go to firebase db then mannually delete a record to see the above event trigger

//challenge area
// //child_changed event -> its trigger when one of the child data changes
// database.ref("expenses").on("child_changed", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
// //- the above event will trigger for already existing data in the db.

//child_added event -> its trigger when we add a new data on db
// database.ref("expenses").on("child_added", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
//- the above event will trigger for already existing data in the db.
//- its will also re-run for any new inserted expense data.
// database.ref("expenses").push({
//   description: "Javascript fee",
//   note: "Make payment for js fee",
//   amount: 45000,
//   createdAt: 100000,
// });
const database = firebase.database();
//firebase Authentication
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
//AuthProvide provide authentication or identifying that a user is a person he/she is. We also
//have Twitter, Git, Facebase providers as well.
export { firebase, googleAuthProvider, database as default };
