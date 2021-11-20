const add = (a, b) => a + b;

//test() method is a global meth from jest framework.
//pass in two arguments onto test method 1st argument is the test title and the 2nd argument
//is the block of code which will be execute when runs the jest suite

//test case 1
// test("should add two number", () => {
//   const result = add(3, 4);
// });

// test("should add two number", () => {
//   const result = add(3, 4);
//   //using if statment as a assertion -> means check if a statement is true or not
//   if (result !== 7) {
//     throw new Error(`You added 3 and 4. The result was ${result}. Expect 7`);
//   }
// });

test("should add two number", () => {
  const result = add(3, 4);
  //using expect() global method give to us by jest framework
  expect(result).toBe(7);
});

//- how to run jest in watch mode on the command line

//challenge area
const generateGreeting = (name = "Anonymous") => `Hello ${name}!@`;
//create two test cases with the following titles
//"should generate greeting from name"
//"should generate greeting from no name"
test("should generate greeting from name", () => {
  const result = generateGreeting("Bola");
  expect(result).toBe("Hello Bola!@");
});
test("should generate greeting from no name", () => {
  const result = generateGreeting();
  expect(result).toBe("Hello Anonymous!@");
});
