import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("should setup remove expense action object", () => {
  const action = removeExpense({ id: "123ddifsdfs" });
  //assert
  //   expect(action).toBe({
  //     type: "REMOVE_EXPENSE",
  //     id: "123ddifsdfs",
  //   }); //using toBe() method on object or array will throw error but it is ok on string, number or boolean
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123ddifsdfs",
  });
});

test("should setup edit expense action object", () => {
  const action = editExpense("12sdderrr", {
    note: "I bought new corei7 window laptop",
  });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "12sdderrr",
    updates: { note: "I bought new corei7 window laptop" },
  });
});

test("should setup add expense action object with provided values", () => {
  const expenseData = {
    description: "Rent",
    note: "This was last month rent",
    amount: 83000,
    createdAt: 1222000000,
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      id: expect.any(String), //expect.any(String) can be a expect.any(Number) its use to generate a dynamic number or string value
    },
  });
});

test("should setup add expense action object with default values", () => {
  const expenseData = {
    description: "",
    note: "",
    amount: 0,
    createdAt: 0,
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      id: expect.any(String),
    },
  });
});
