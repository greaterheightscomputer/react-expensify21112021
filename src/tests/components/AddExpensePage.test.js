import React from "react";
import { shallow } from "enzyme";
import { AddExpensePage } from "../../components/AddExpensePage";
import expenses from "../fixtures/expenses";

//this is what we are testing on AddExpensePage component
// onSubmit = (expense) => {
//     this.props.addExpense(expense);
//     this.props.history.push("/");
//   };

// test("should render AddExpensePage correctly", () => {
//   const addExpense = jest.fn();
//   const history = { push: jest.fn() };
//   const wrapper = shallow(
//     <AddExpensePage addExpense={addExpense} history={history} />
//   );
//   expect(wrapper).toMatchSnapshot();
// });

// test("should handle onSubmit", () => {
//   const addExpense = jest.fn();
//   const history = { push: jest.fn() };
//   const wrapper = shallow(
//     <AddExpensePage addExpense={addExpense} history={history} />
//   );
//   wrapper.find("ExpenseForm").prop("onSubmitForm")(expenses[2]);
//   expect(history.push).toHaveBeenLastCalledWith("/");
//   expect(addExpense).toHaveBeenLastCalledWith(expenses[2]);
//   expect(wrapper).toMatchSnapshot();
// });

//creating a global variable instead of repeat each variable on each test cases like this
let addExpense, history, wrapper;

//beforeEach() method means this method beforeEach() should run before each test cases are executed or run.
beforeEach(() => {
  addExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <AddExpensePage addExpense={addExpense} history={history} />
  );
});

test("should render AddExpensePage correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should handle onSubmit", () => {
  wrapper.find("ExpenseForm").prop("onSubmitForm")(expenses[2]);
  expect(history.push).toHaveBeenLastCalledWith("/");
  expect(addExpense).toHaveBeenLastCalledWith(expenses[2]);
  expect(wrapper).toMatchSnapshot();
});
