import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = { type: 'REMOVE_EXPENSE', id: expenses[1].id };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expenses if id not found', () => {
  const action = { type: 'REMOVE_EXPENSE', id: '-90900' };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should setup add expense', () => {
  const expense = {
    id: '12333',
    description: 'school fees',
    note: '',
    amount: 32000,
    createdAt: 23390009988990,
  };
  const action = { type: 'ADD_EXPENSE', expense };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test('should setup edit expense', () => {
  const amount = 1500;
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: { amount },
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].amount).toBe(amount);
});

test('should setup edit expense if id not found', () => {
  const amount = 1500;
  const action = {
    type: 'EDIT_EXPENSE',
    id: '1890000',
    updates: { amount },
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
//test for setExpenses Action function
test('should set expenses', () => {
  const action = {
    type: 'SET_EXPENSES',
    expenses: [expenses[1]],
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[1]]);
});
