import database from "../firebase/firebase";

//let recap of what we have being doing with Action Generator Function
//1. component calls action generator.
//2. action generator returns an object.
//3. component dispatch action object.
//4. redux store changes.

//this is what we will be doing with Asynchronous Action Generator Function
//1. component calls action generator.
//2. action generator returns function.
//3. component dispatch action function.
//4. function runs (has the ability to change both firebase and redux store)

//Action Generator
//- Action Generator function for expenses array object are as follows;
//ADD_EXPENSE
// export const addExpense = ({
//   description = "",
//   note = "",
//   amount = 0,
//   createdAt = 0,
// } = {}) => ({
//   type: "ADD_EXPENSE",
//   expense: {
//     id: uuid(),
//     description,
//     note,
//     amount,
//     createdAt,
//   },
// });
//local Action Generator Function
//ADD_EXPENSE
export const addExpense = (expense) => ({
  type: "ADD_EXPENSE",
  expense,
});
//Asynchronous ADD_EXPENSE Action Generator Function
//- We need to do the following inside startAddExpenese() function
//1. create startAddExpense (same call signature as addExpense)
//2. Test startAddExpense with "should add expense to firebase"
//3. Use startAddExpense in AddExpensePage instead of addExpense action generator
//4. Adjust AddExpensePage test

//asynchronous Action Generator Function
export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0,
    } = expenseData;
    const expense = { description, note, amount, createdAt };
    //return keyword beside the database means pass the data return in then() promise method to
    //the test case, without it your test case will not be successful.
    return database
      .ref("expenses")
      .push(expense)
      .then((ref) => {
        console.log(ref);

        //dispatch local Action Generator function to redux store
        dispatch(
          addExpense({
            id: ref.key, //using ref.key which is the id from firebase in place of uuid()
            ...expense,
          })
        );
      });
  };
};

// //REMOVE_EXPENSE
// export const removeExpense = ({ id } = {}) => ({
//   type: "REMOVE_EXPENSE",
//   id,
// });

//local Remove Expense
//REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id,
});

//Asynchronous REMOVE_EXPENSE Action Generator Function
//- We need to do the following inside startRemoveExpenese() function
//1. create removeAddExpense (same call signature as removeExpense)
//2. Test removeAddExpense with "should remove expense from firebase"
//3. Use startRemoveExpense in EditExpensePage instead of removeExpense action generator
//4. Adjust EditExpensePage test

export const startRemoveExpenese = ({ id } = {}) => {
  return (dispatch) => {
    return database
      .ref(`expenses/${id}`)
      .remove()
      .then(() => {
        dispatch(removeExpense({ id }));
      });
  };
};

//EDIT_EXPENSE
// export const editExpense = (id, updates) => ({
//   type: "EDIT_EXPENSE",
//   id,
//   updates,
// });

//local edit expense
//EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates,
});

//Asynchronous EDIT_EXPENSE Action Generator Function
//- We need to do the following inside startEditExpenese() function
//1. create editAddExpense (same call signature as editExpense)
//2. Test editAddExpense with "should edit expense from firebase"
//3. Use startEditExpense in EditExpensePage instead of editExpense action generator
//4. Adjust EditExpensePage test

export const startEditExpense = (id, updates) => {
  return (dispatch) => {
    return database
      .ref(`expenses/${id}`)
      .update(updates)
      .then(() => {
        dispatch(editExpense(id, updates));
      });
  };
};

//Fetching data from both firebase and redux store
//SET_EXPENSES
export const setExpenses = (expenses) => ({
  type: "SET_EXPENSES",
  expenses,
});

//Asynchronous EDIT_EXPENSE Action Generator Function
//- We need to do the following inside startSetExpenese() function
//1. fetch all expense data once
//2. parse that data onto an array
//3. dispatch SET_EXPENSE to redux store

export const startSetExpenses = () => {
  return (dispatch) => {
    return database
      .ref("expenses")
      .once("value")
      .then((snapshot) => {
        const expenses = [];

        snapshot.forEach((childSnapshot) => {
          expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val(),
          });
        });
        dispatch(setExpenses(expenses));
      });
  };
};

//Let add user to the root of ref() to all our Async Action Generator Function inorder to
// change it from .ref("expenses") to .ref(`users/${uid}/expenses`)
//ADD_EXPENSE
// export const addExpense = (expense) => ({
//   type: "ADD_EXPENSE",
//   expense,
// });

// //asynchronous Action Generator Function
// export const startAddExpense = (expenseData = {}) => {
//   //getState() method is to fetch data from redux store
//   return (dispatch, getState) => {
//     const uid = getState().auth.uid; //get the user id from redux store
//     const {
//       description = "",
//       note = "",
//       amount = 0,
//       createdAt = 0,
//     } = expenseData;
//     const expense = { description, note, amount, createdAt };
//     return (
//       database
//         // .ref("expenses")
//         .ref(`users/${uid}/expenses`)
//         .push(expense)
//         .then((ref) => {
//           dispatch(
//             addExpense({
//               id: ref.key,
//               ...expense,
//             })
//           );
//         })
//     );
//   };
// };
// //- let test the app by starting the dev-server then insert data to firebase db to view if its works.
// //- click on Create Expense to add expense
// //- view firebase to see the structure of the current data
// //- you will see the users/7sududisiis89990/expenses/ which is the current data structure for
// // every each individual object will create in our app.

// // //REMOVE_EXPENSE
// // export const removeExpense = ({ id } = {}) => ({
// //   type: "REMOVE_EXPENSE",
// //   id,
// // });

// //local Remove Expense
// //REMOVE_EXPENSE
// export const removeExpense = ({ id } = {}) => ({
//   type: "REMOVE_EXPENSE",
//   id,
// });

// //Asynchronous REMOVE_EXPENSE Action Generator Function
// //- We need to do the following inside startRemoveExpenese() function
// //1. create removeAddExpense (same call signature as removeExpense)
// //2. Test removeAddExpense with "should remove expense from firebase"
// //3. Use startRemoveExpense in EditExpensePage instead of removeExpense action generator
// //4. Adjust EditExpensePage test

// export const startRemoveExpenese = ({ id } = {}) => {
//   return (dispatch) => {
//     return database
//       .ref(`expenses/${id}`)
//       .remove()
//       .then(() => {
//         dispatch(removeExpense({ id }));
//       });
//   };
// };

// //EDIT_EXPENSE
// // export const editExpense = (id, updates) => ({
// //   type: "EDIT_EXPENSE",
// //   id,
// //   updates,
// // });

// //local edit expense
// //EDIT_EXPENSE
// export const editExpense = (id, updates) => ({
//   type: "EDIT_EXPENSE",
//   id,
//   updates,
// });

// //Asynchronous EDIT_EXPENSE Action Generator Function
// //- We need to do the following inside startEditExpenese() function
// //1. create editAddExpense (same call signature as editExpense)
// //2. Test editAddExpense with "should edit expense from firebase"
// //3. Use startEditExpense in EditExpensePage instead of editExpense action generator
// //4. Adjust EditExpensePage test

// export const startEditExpense = (id, updates) => {
//   return (dispatch) => {
//     return database
//       .ref(`expenses/${id}`)
//       .update(updates)
//       .then(() => {
//         dispatch(editExpense(id, updates));
//       });
//   };
// };

// //Fetching data from both firebase and redux store
// //SET_EXPENSES
// export const setExpenses = (expenses) => ({
//   type: "SET_EXPENSES",
//   expenses,
// });

// //Asynchronous EDIT_EXPENSE Action Generator Function
// //- We need to do the following inside startSetExpenese() function
// //1. fetch all expense data once
// //2. parse that data onto an array
// //3. dispatch SET_EXPENSE to redux store

// export const startSetExpenses = () => {
//   return (dispatch) => {
//     return database
//       .ref("expenses")
//       .once("value")
//       .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//           expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val(),
//           });
//         });
//         dispatch(setExpenses(expenses));
//       });
//   };
// };
