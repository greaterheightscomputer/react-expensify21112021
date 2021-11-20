import React from "react";
import { shallow } from "enzyme";
import ExpenseForm from "../../components/ExpenseForm";
import expenses from "../fixtures/expenses";
import moment from "moment";

test("should render ExpenseForm correctly", () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
  //- the 1st time we run jest test suite its will work fine but when re-run the jest test suite
  //its will fail beco's of the date props pass onto <SingleDatePicker/> component will keep on
  //change everytime we run jest test suite.
  //- to solve the above issue we need to create mock of moment instance which is a fake moment
  //instance which will always return a moment at a particular point in time.
  //- create folder called __mocks__ inside src/tests folder.
  //- create a file called __mocks__/moment.js and set it up.
  //- re-run jest test suite then press u to update the snapshot file.
  //- anytime you run the jest test suite the date will always start at a specific point in time.
});

test("should render ExpenseForm correctly with expense data", () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[2]} />);
  expect(wrapper).toMatchSnapshot();
  //open ExpenseForm.test.js.snap file to view the newly add expenses dummy data
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

//exploring spies mock function
// test("should call submit prop for valid form submission", () => {
//   const onSubmitSpy = jest.fn();
//   onSubmitSpy();
//   expect(onSubmitSpy).toHaveBeenCalled();
// });
// test("should call submit prop for valid form submission", () => {
//   const onSubmitSpy = jest.fn();
//   onSubmitSpy("Ola", "Lagos Island");
//   expect(onSubmitSpy).toHaveBeenCalledWith("Ola", "Lagos Island");
// });

//the below block of codes is what we are testing which is from ExpenseForm.js file
// else {
//   this.setState(() => ({ error: "" }));

//   //onSubmitForm is a props from AddExpensePage to store user data inorder to dispatch it on AddExpensePage.js
//   this.props.onSubmitForm({
//     description: this.state.description,
//     amount: parseFloat(this.state.amount),
//     createdAt: this.state.createdAt.valueOf(), //valueOf() convert moment data to minseconds
//     note: this.state.note,
//   });
// }
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

//this is what we are testing on ExpenseForm component
// onDateChange = (createdAt) => {
//   if (createdAt) {
//     this.setState(() => ({ createdAt }));
//   }
// };
test("should set new date on date change", () => {
  const now = moment(); //moment is value store on createdAt property
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("SingleDatePicker").prop("onDateChange")(now);
  expect(wrapper.state("createdAt")).toEqual(now);
});

//this is what we are testing on ExpenseForm component
// onFocusChange = ({ focused }) => {
//   this.setState(() => ({ calenderFocused: focused }));
// };
test("should set calendar focus on change", () => {
  const focused = true;
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("SingleDatePicker").prop("onFocusChange")({ focused });
  expect(wrapper.state("calenderFocused")).toBe(focused);
});
