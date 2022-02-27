import {
  startAddExpense,
  editExpense,
  removeExpense,
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import configurateMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123ddifsdfs' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123ddifsdfs',
  });
});

test('should setup edit expense action object', () => {
  const action = editExpense('12sdderrr', {
    note: 'I bought new corei7 window laptop',
  });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '12sdderrr',
    updates: { note: 'I bought new corei7 window laptop' },
  });
});

// test('should setup add expense action object with provided values', () => {
//   const expenseData = {
//     description: 'Rent',
//     note: 'This was last month rent',
//     amount: 83000,
//     createdAt: 1222000000,
//   };
//   const action = addExpense(expenseData);
//   expect(action).toEqual({
//     type: 'ADD_EXPENSE',
//     expense: {
//       ...expenseData,
//       id: expect.any(String), //expect.any(String) can be a expect.any(Number) its use to generate a dynamic number or string value
//     },
//   });
// });
//- is not the responsibility of above test case to setup default values
//anymore, its the responsibility of startAddExpense() Async Action function
//to setup the default value now.

//Setup asynchronous test case
//we are testing to make sure that the data actually store on firebase and redux store
//- this below code is what we are actually testing from actions/expenses.js file
// return database.ref("expenses").push(expense).then((ref) => {
//         dispatch(addExpense({id: ref.key, ...expense, }));
//       });
//- install mock or fake redux store like this
//C:\react-course-projects032021\xpensify-app7>npm install redux-mock-store@1.2.3
//- import configurateMockStore from "redux-mock-store";
//- import thunk from "redux-thunk"; onto expenses.test.js file and use it
//- import startAddExpense()

//setup fake redux store configuration like this
const createMockStore = configurateMockStore([thunk]);

test('should add expense to database and redux store', (done) => {
  //we add done onto callback function as an argument becos its async test case, its will
  //force the async request to complete before making assertion which is expect() method.
  const store = createMockStore({});
  const expenseData = {
    description: 'Rent',
    amount: 8900,
    createdAt: 1200000,
    note: 'this was last month rent',
  };
  store
    .dispatch(startAddExpense(expenseData)) //we have already insert expenseData onto firebase and redux store
    .then(() => {
      const actions = store.getActions(); //return an array of action dispatch to redux store
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseData,
        },
      });

      //fetch data from firebase by id
      //- import database from "../../firebase/firebase"; onto this file
      // database
      //   .ref(`expenses/${action[0].expense.id}`)
      //   .once('value')
      //   .then((snapshot) => {
      //     expect(snapshot.val()).toEqual(expenseData);
      //     done();
      //   });
      //Or
      //fetch data from firebase by id using promise chaining
      return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    });
});
//- startup the jest test suit with internet connection becos it is asynchronous function

//challenge area
test('should add expense with default values to database and redux store', (done) => {
  const store = createMockStore({});
  const expenseData = {
    description: '',
    amount: 0,
    createdAt: 0,
    note: '',
  };
  store
    .dispatch(startAddExpense(expenseData))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseData,
        },
      });

      //fetch data from firebase by id using promise chaining
      return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    });
});
//- startup the jest test suit with internet connection becos it is asynchronous function
