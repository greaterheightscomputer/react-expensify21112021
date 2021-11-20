//- Open webpack.config.js then change the entry point from
//entry: "./src/playground/redux-101.js", to
//entry: "./src/playground/destructuring.js",
//- restart dev-server
// console.log("destructuring.js");

const person = {
  name: "ola",
  age: 20,
  location: {
    city: "Lagos Island",
    temp: 32,
  },
};

//We can print the object property like this
// console.log(`${person.name} is ${person.age}`);
// console.log(`It's ${person.location.temp}oc in ${person.location.city}`);

//Alternative
// const name = person.name;
// const age = person.age;
// console.log(`${name} is ${age}`);

// const temp = person.location.temp;
// const city = person.location.city;
// console.log(`It's ${temp}oc in ${city}`);

//Object Destructuring means converting object properties into variable for the purpose of easy
//access.
// const { name, age } = person;
// console.log(`${name} is ${age}`);
// const { temp, city } = person.location;
// console.log(`It's ${temp}oc in ${city}`);

//changing the local destructuring variable
// const { temp: temperature, city } = person.location;
// console.log(`It's ${temperature}oc in ${city}`);

//creating default value with changing of local destructuring variable
const { name: firstName = "Anonymous", age } = person;
// console.log(`${firstName} is ${age}`);

//challenge area
const book = {
  title: "Ego is the Enemy",
  author: "Ryan Holiday",
  publisher: {
    name: "Pen",
  },
};
//- Print out console.log(publisherName) using object destructuring
//- Add default value on the local destructuring variable called Self-Published if their is no
//publisher name
const { name: publisherName = "Self-Pushlished" } = book.publisher;
// console.log(publisherName);

//ES6 Array Destructuring
//Array destructuring means converting an array item or element into variable for the purpose of easy access.
const address = [
  "1229 Okepopo Street",
  "Lagos Island",
  "Lagos State",
  "Nigeria",
  "+123",
];

//traditional way of access array item or element
// console.log(`You are in ${address[1]}, ${address[2]}`);

// const city = address[1];
// const state = address[2];
// console.log(`You are in ${city}, ${state}`);

//using Array destructuring
const [street, city, state, country, zip] = address; //matching the local variable with its position
console.log(`You are in ${city}, ${state}, with zip code of ${zip}`);

//challenge area
const item = ["coffee (hot)", "N100.00", "N200.00", "N300.00"];
//- print out console.log(`A medium coffee (hot) costs N200.00`)
//- using array destructuring to print out the first item, second item and last item in the
// array of string.
const [itemName, lowerPrice, mediumPrice, highPrice] = item;
console.log(`A low ${itemName} costs ${lowerPrice}`);
console.log(`A medium ${itemName} costs ${mediumPrice}`);
console.log(`A high ${itemName} costs ${highPrice}`);

//Refactoring and Organizing
//- Open webpack.config.js to switch the entry point from
//entry: "./src/playground/destructuring.js", to
//entry: "./src/playground/redux-101.js",
//- restart the dev-server
