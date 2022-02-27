import React from "react";
import { shallow } from "enzyme";
import ExpenseForm from "../../components/ExpenseForm";
import expenses from "../fixtures/expenses";
import moment from "moment";

test("should render ExpenseForm correctly", () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseForm correctly with expense data", () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[2]} />);
  expect(wrapper).toMatchSnapshot();
});

test("should render error for invalid form submission", () => {
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("form").simulate("submit", { preventDefault: () => {} });
  expect(wrapper.state("error").length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test("should set description on input change", () => {
  const value = "Bought new phone";
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("input").at(0).simulate("change", { target: { value } });
  expect(wrapper.state("description")).toBe(value);
  expect(wrapper).toMatchSnapshot();
});

test("should set note on textarea change", () => {
  const value = "Bought new television";
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("textarea").simulate("change", { target: { value } });
  expect(wrapper.state("note")).toBe(value);
  expect(wrapper).toMatchSnapshot();
});

test("should set amount if valid input", () => {
  const value = "23.90";
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("input").at(1).simulate("change", { target: { value } });
  expect(wrapper.state("amount")).toBe(value);
  expect(wrapper).toMatchSnapshot();
});

test("should not set amount if invalid input", () => {
  const value = "23.9090";
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("input").at(1).simulate("change", { target: { value } });
  expect(wrapper.state("amount")).toBe("");
  expect(wrapper).toMatchSnapshot();
});

test("should call submit prop for valid form submission", () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(
    <ExpenseForm expense={expenses[1]} onSubmitForm={onSubmitSpy} />
  );
  wrapper.find("form").simulate("submit", { preventDefault: () => {} });
  expect(wrapper.state("error")).toBe("");
  expect(onSubmitSpy).toHaveBeenCalledWith({
    description: expenses[1].description,
    amount: expenses[1].amount / 100,
    note: expenses[1].note,
    createdAt: expenses[1].createdAt,
  });
});

test("should set new date on date change", () => {
  const now = moment(); //moment is value store on createdAt property
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("SingleDatePicker").prop("onDateChange")(now);
  expect(wrapper.state("createdAt")).toEqual(now);
});

test("should set calendar focus on change", () => {
  const focused = true;
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("SingleDatePicker").prop("onFocusChange")({ focused });
  expect(wrapper.state("calenderFocused")).toBe(focused);
});
