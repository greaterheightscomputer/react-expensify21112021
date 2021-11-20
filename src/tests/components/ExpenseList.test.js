import React from "react";
import { shallow } from "enzyme";
import { ExpenseList } from "../../components/ExpenseList";
import expenses from "../fixtures/expenses";

test("should render ExpenseList with expenses", () => {
  const wrapper = shallow(<ExpenseList expenses={expenses} />);
  expect(wrapper).toMatchSnapshot();

  //- after executing the jest test suite open
  //src/tests/components/_snapshots_/ExpenseList.test.js.snap file to view the expenses array
  //object dummy data.
  //- go to ExpenseList.js file to remove <h1>Expense List</h1> and save it, the re-run jest
  //test suit, you need to press u key for update of what you just remove in ExpenseList
  //component on the terminal.
  //- go back to ExpenseList.js file then render the component using ternary operator
});

test("should render ExpenseList with empty message", () => {
  const wrapper = shallow(<ExpenseList expenses={[]} />);
  expect(wrapper).toMatchSnapshot();
  //- open ExpenseList.test.js.snap to view the empty message in the file.
});
