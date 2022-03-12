import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let startEditExpense, startRemoveExpenese, history, wrapper; //creating variables for startEditExpense, startRemoveExpenese, history to store fake function for props fro EditExpensePage component

beforeEach(() => {
  startEditExpense = jest.fn();
  startRemoveExpenese = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditExpensePage
      startEditExpense={startEditExpense}
      startRemoveExpenese={startRemoveExpenese}
      history={history}
      expense={expenses[1]}
    />
  );
});

test('should render EditExpensePage', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle startEditExpense on submit', () => {
  wrapper.find('ExpenseForm').prop('onSubmitForm')(expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startEditExpense).toHaveBeenLastCalledWith(
    expenses[1].id,
    expenses[1]
  );
});

test('should handle startRemoveExpenese on removing expense', () => {
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startRemoveExpenese).toHaveBeenLastCalledWith({ id: expenses[1].id });
});
