"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// //Indecision State: Part I
// //implement component state on Indecision App
// //moving of handlePick() and handleDeleteOptions from local declaration to global declaration
// class IndecisionApp extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
//     this.handlePick = this.handlePick.bind(this);
//     this.state = {
//       options: [
//         "Thing One",
//         "Thing Two",
//         "Thing Three",
//         "Thing Four",
//         "Thing Five",
//       ],
//     };
//   }
//   handleDeleteOptions() {
//     //global handleDeleteOptions method its global method beco's its residing inside the parent IndecisionApp class component
//     // alert("HandleDeleteOptions");
//     this.setState(() => {
//       return {
//         options: [],
//       };
//     });
//   }
//   handlePick() {
//     //global handlePick method its global method beco's its residing inside the parent IndecisionApp class component
//     // alert("HandlePick");
//     const randomNum = Math.floor(Math.random() * this.state.options.length);
//     // console.log(randomNum);
//     const option = this.state.options[randomNum];
//     alert(option);
//   }
//   render() {
//     const title = "Indecision";
//     const subtitle = "Put your life in the hands of a computer";

//     return (
//       <div>
//         <Header topic={title} subtitle={subtitle} />
//         <Action handlePick={this.handlePick} />
//         <Options
//           options={this.state.options}
//           handleDeleteOptions={this.handleDeleteOptions}
//         />
//         <AddOption />
//       </div>
//     );
//   }
// }
// class Header extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>{this.props.topic}</h1>
//         <h2>{this.props.subtitle}</h2>
//       </div>
//     );
//   }
// }

// class Action extends React.Component {
//   //   handlePick() {
//   //     //local handlePick method
//   //     alert("HandlePick");
//   //   }
//   render() {
//     return (
//       <div>
//         <button onClick={this.props.handlePick}>What should I do?</button>
//       </div>
//     );
//   }
// }

// class Options extends React.Component {
//   //   constructor(props) {
//   //     super(props);
//   //     this.handleRemoveAll = this.handleRemoveAll.bind(this);
//   //   }
//   //   handleRemoveAll() {
//   //     console.log(this.props.options);
//   //   }
//   render() {
//     return (
//       <div>
//         <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//         <h3>{this.props.options.length}</h3>
//         {this.props.options.map((option) => (
//           <Option key={option} optionText={option} />
//         ))}
//       </div>
//     );
//   }
// }

// class Option extends React.Component {
//   render() {
//     return <div>{this.props.optionText}</div>;
//   }
// }

// class AddOption extends React.Component {
//   handleAddOption(e) {
//     e.preventDefault();
//     const option = e.target.elements.option.value.trim();
//     if (option) {
//       alert(option);
//     }
//   }
//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleAddOption}>
//           <input type="text" name="option" />
//           <button>Add Option</button>
//         </form>
//       </div>
//     );
//   }
// }
// ReactDOM.render(<IndecisionApp />, document.getElementById("app"));

//Indecision State: Part II
//implement component state on Indecision App
//Adding handleAddOption() method for both local declaration to global declaration
// class IndecisionApp extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
//     this.handlePick = this.handlePick.bind(this);
//     this.handleAddOption = this.handleAddOption.bind(this);
//     this.state = {
//       options: [
//         "Thing One",
//         "Thing Two",
//         "Thing Three",
//         "Thing Four",
//         "Thing Five",
//       ],
//     };
//   }
//   handleDeleteOptions() {
//     this.setState(() => {
//       return {
//         options: [],
//       };
//     });
//   }
//   handlePick() {
//     const randomNum = Math.floor(Math.random() * this.state.options.length);
//     const option = this.state.options[randomNum];
//     alert(option);
//   }
//   handleAddOption(option) {
//     // console.log("handleAddOptionGlobal: ", option);
//     if (!option) {
//       return "Enter valid value to add item";
//     } else if (this.state.options.indexOf(option) > -1) {
//       return "This option already exists";
//     }
//     //the above if else statement will not work until will get the return value in the AddOption child component
//     this.setState((prevState) => {
//       return {
//         options: prevState.options.concat([option]),
//       };
//     });
//   }
//   render() {
//     const title = "Indecision";
//     const subtitle = "Put your life in the hands of a computer";

//     return (
//       <div>
//         <Header topic={title} subtitle={subtitle} />
//         <Action handlePick={this.handlePick} />
//         <Options
//           options={this.state.options}
//           handleDeleteOptions={this.handleDeleteOptions}
//         />
//         <AddOption handleAddOption={this.handleAddOption} />
//       </div>
//     );
//   }
// }
// class Header extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>{this.props.topic}</h1>
//         <h2>{this.props.subtitle}</h2>
//       </div>
//     );
//   }
// }

// class Action extends React.Component {
//   render() {
//     return (
//       <div>
//         <button onClick={this.props.handlePick}>What should I do?</button>
//       </div>
//     );
//   }
// }

// class Options extends React.Component {
//   render() {
//     return (
//       <div>
//         <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//         <h3>{this.props.options.length}</h3>
//         {this.props.options.map((option) => (
//           <Option key={option} optionText={option} />
//         ))}
//       </div>
//     );
//   }
// }

// class Option extends React.Component {
//   render() {
//     return <div>{this.props.optionText}</div>;
//   }
// }

// class AddOption extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleAddOption = this.handleAddOption.bind(this);
//     this.state = {
//       error: undefined,
//     };
//   }

//   handleAddOption(e) {
//     //local handleAddOption method
//     e.preventDefault();
//     const option = e.target.elements.option.value.trim();
//     // if (option) {
//     //   alert("handleAddOptionLocal: ", option);
//     //   this.props.handleAddOption(option); //if option contain value then pass it to the global handleAddOption method which is residing inside IndecisionApp Parent class component
//     // }
//     const error = this.props.handleAddOption(option); //its will handle the error return from Parent IndecisionApp Parent component by creating component state inside AddOption constructor function inorder to update the error to the AddOption form tags
//     // console.log(error);
//     this.setState(() => {
//       return {
//         error,
//       };
//     });
//   }
//   render() {
//     return (
//       <div>
//         {this.state.error && <h1>{this.state.error}</h1>}
//         <form onSubmit={this.handleAddOption}>
//           <input type="text" name="option" />
//           <button>Add Option</button>
//         </form>
//       </div>
//     );
//   }
// }
// ReactDOM.render(<IndecisionApp />, document.getElementById("app"));

//Summary component props vs component state
//props is an object using passing data from one component to the other while state is an also
//an object using in storing data onto an object properties.

//Similarity between props and state
//props                                           state
//1. An object.                                   An object
//2. Can be used when rendering a component.      Can be used when rendering a component.
//3. Changes cause component re-render.           Changes cause component re-render.

//Difference between props and state
//props                                                state
//1. Comes from above component.                       Defined in component itself.
//2. Can't be change by the component its passed to.   Can be changed by component.

//Brand new way of creating React Component
//Stateless Functional Components or Functional Components
//They are just function. Functional component does not allow state but its allow props.
//Functional component are fast than class based component becos the don't inherit super component React.Component
// const User = (props) => {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//     </div>
//   );
// };

// ReactDOM.render(<User name="ola" age={23} />, document.getElementById("app"));

// //Let implement stateless function on some of the IndecisionApp nested component
// //Any component that does not have state will be converted to functional component
// class IndecisionApp extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
//     this.handlePick = this.handlePick.bind(this);
//     this.handleAddOption = this.handleAddOption.bind(this);
//     this.state = {
//       options: [
//         "Thing One",
//         "Thing Two",
//         "Thing Three",
//         "Thing Four",
//         "Thing Five",
//       ],
//     };
//   }
//   handleDeleteOptions() {
//     this.setState(() => {
//       return {
//         options: [],
//       };
//     });
//   }
//   handlePick() {
//     const randomNum = Math.floor(Math.random() * this.state.options.length);
//     const option = this.state.options[randomNum];
//     alert(option);
//   }
//   handleAddOption(option) {
//     if (!option) {
//       return "Enter valid value to add item";
//     } else if (this.state.options.indexOf(option) > -1) {
//       return "This option already exists";
//     }

//     this.setState((prevState) => {
//       return {
//         options: prevState.options.concat([option]),
//       };
//     });
//   }
//   render() {
//     const title = "Indecision";
//     const subtitle = "Put your life in the hands of a computer";

//     return (
//       <div>
//         <Header topic={title} subtitle={subtitle} />
//         <Action handlePick={this.handlePick} />
//         <Options
//           options={this.state.options}
//           handleDeleteOptions={this.handleDeleteOptions}
//         />
//         <AddOption handleAddOption={this.handleAddOption} />
//       </div>
//     );
//   }
// }
// // class Header extends React.Component {
// //   render() {
// //     return (
// //       <div>
// //         <h1>{this.props.topic}</h1>
// //         <h2>{this.props.subtitle}</h2>
// //       </div>
// //     );
// //   }
// // }
// const Header = (props) => {
//   return (
//     <div>
//       <h1>{props.topic}</h1>
//       <h2>{props.subtitle}</h2>
//     </div>
//   );
// };

// // class Action extends React.Component {
// //   render() {
// //     return (
// //       <div>
// //         <button onClick={this.props.handlePick}>What should I do?</button>
// //       </div>
// //     );
// //   }
// // }
// const Action = (props) => {
//   return (
//     <div>
//       <button onClick={props.handlePick}>What should I do?</button>
//     </div>
//   );
// };

// // class Options extends React.Component {
// //   render() {
// //     return (
// //       <div>
// //         <button onClick={this.props.handleDeleteOptions}>Remove All</button>
// //         <h3>{this.props.options.length}</h3>
// //         {this.props.options.map((option) => (
// //           <Option key={option} optionText={option} />
// //         ))}
// //       </div>
// //     );
// //   }
// // }
// const Options = (props) => {
//   return (
//     <div>
//       <button onClick={props.handleDeleteOptions}>Remove All</button>
//       <h3>{props.options.length}</h3>
//       {props.options.map((option) => (
//         <Option key={option} optionText={option} />
//       ))}
//     </div>
//   );
// };
// // class Option extends React.Component {
// //   render() {
// //     return <div>{this.props.optionText}</div>;
// //   }
// // }
// const Option = (props) => {
//   return <div>{props.optionText}</div>;
// };

// class AddOption extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleAddOption = this.handleAddOption.bind(this);
//     this.state = {
//       error: undefined,
//     };
//   }

//   handleAddOption(e) {
//     e.preventDefault();
//     const option = e.target.elements.option.value.trim();
//     const error = this.props.handleAddOption(option);
//     this.setState(() => {
//       return {
//         error,
//       };
//     });
//   }
//   render() {
//     return (
//       <div>
//         {this.state.error && <h1>{this.state.error}</h1>}
//         <form onSubmit={this.handleAddOption}>
//           <input type="text" name="option" />
//           <button>Add Option</button>
//         </form>
//       </div>
//     );
//   }
// }
// ReactDOM.render(<IndecisionApp />, document.getElementById("app"));

//Default props
//it can be use on static and dynamic variable like title,subtitle and options
//Default props is an object. Its can be apply to both class and functional base react components
// class IndecisionApp extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
//     this.handlePick = this.handlePick.bind(this);
//     this.handleAddOption = this.handleAddOption.bind(this);
//     this.state = {
//       options: [
//         "Thing One",
//         "Thing Two",
//         "Thing Three",
//         "Thing Four",
//         "Thing Five",
//       ],
//     };
//   }
//   handleDeleteOptions() {
//     this.setState(() => {
//       return {
//         options: props.options,
//       };
//     });
//   }
//   handlePick() {
//     const randomNum = Math.floor(Math.random() * this.state.options.length);
//     const option = this.state.options[randomNum];
//     alert(option);
//   }
//   handleAddOption(option) {
//     if (!option) {
//       return "Enter valid value to add item";
//     } else if (this.state.options.indexOf(option) > -1) {
//       return "This option already exists";
//     }

//     this.setState((prevState) => {
//       return {
//         options: prevState.options.concat([option]),
//       };
//     });
//   }
//   render() {
//     // const title = "Indecision";
//     const subtitle = "Put your life in the hands of a computer";

//     return (
//       <div>
//         <Header subtitle={subtitle} />
//         <Action handlePick={this.handlePick} />
//         <Options
//           options={this.state.options}
//           handleDeleteOptions={this.handleDeleteOptions}
//         />
//         <AddOption handleAddOption={this.handleAddOption} />
//       </div>
//     );
//   }
// }
// //Default props
// IndecisionApp.defaultProps = {
//   options: [],
// };

// const Header = (props) => {
//   return (
//     <div>
//       <h1>{props.title}</h1>
//       <h2>{props.subtitle}</h2>
//     </div>
//   );
// };
// //Default props
// Header.defaultProps = {
//   title: "Indecision Application",
// };

// const Action = (props) => {
//   return (
//     <div>
//       <button onClick={props.handlePick}>What should I do?</button>
//     </div>
//   );
// };

// const Options = (props) => {
//   return (
//     <div>
//       <button onClick={props.handleDeleteOptions}>Remove All</button>
//       <h3>{props.options.length}</h3>
//       {props.options.map((option) => (
//         <Option key={option} optionText={option} />
//       ))}
//     </div>
//   );
// };
// const Option = (props) => {
//   return <div>{props.optionText}</div>;
// };

// class AddOption extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleAddOption = this.handleAddOption.bind(this);
//     this.state = {
//       error: undefined,
//     };
//   }

//   handleAddOption(e) {
//     e.preventDefault();
//     const option = e.target.elements.option.value.trim();
//     const error = this.props.handleAddOption(option);
//     this.setState(() => {
//       return {
//         error,
//       };
//     });
//   }
//   render() {
//     return (
//       <div>
//         {this.state.error && <h1>{this.state.error}</h1>}
//         <form onSubmit={this.handleAddOption}>
//           <input type="text" name="option" />
//           <button>Add Option</button>
//         </form>
//       </div>
//     );
//   }
// }
// ReactDOM.render(<IndecisionApp />, document.getElementById("app"));

//Challenge area
//copy the the updated counter app
//setup default props value on count to 0
// class Counter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleAddOne = this.handleAddOne.bind(this);
//     this.handleMinuOne = this.handleMinuOne.bind(this);
//     this.handleReset = this.handleReset.bind(this);
//     this.state = {
//       count: props.count,
//     };
//   }
//   handleAddOne() {
//     this.setState((prevState) => {
//       return {
//         count: prevState.count + 1,
//       };
//     });
//   }
//   handleMinuOne() {
//     this.setState((prevState) => {
//       return {
//         count: prevState.count - 1,
//       };
//     });
//   }
//   handleReset() {
//     console.log("handleReset");
//     this.setState(() => {
//       return {
//         count: 0,
//       };
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>Count:{this.state.count}</h1>
//         <button onClick={this.handleAddOne}>+1</button>
//         <button onClick={this.handleMinuOne}>-1</button>
//         <button onClick={this.handleReset}>Reset</button>
//       </div>
//     );
//   }
// }

// Counter.defaultProps = {
//   count: 0,
// };
// ReactDOM.render(<Counter />, document.getElementById("app"));

//React Dev Tool -> for debug React inside browser such chrome, firefox, etc. Its an extension
//The extension is avalable on browsers such as chrome, firefox, etc
//Let google search chrome react detvtools
//click on React Developer Tools - Chrome web store
//click on Add to chrome button
//then close and reopen your browser

// //Alternative way of return object inside setState() predefined method
// class IndecisionApp extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
//     this.handlePick = this.handlePick.bind(this);
//     this.handleAddOption = this.handleAddOption.bind(this);
//     this.state = {
//       options: [
//         "Thing One",
//         "Thing Two",
//         "Thing Three",
//         "Thing Four",
//         "Thing Five",
//       ],
//     };
//   }
//   handleDeleteOptions() {
//     // this.setState(() => {
//     //   return {
//     //     options: props.options,
//     //   };
//     // });

//     // returning string, number, [], and {}
//     // const num = ()=> 12 + 2 //return number
//     // const num = ()=>[1, 2, 3] //return array
//     // const num = ()=>({}) //return object implicitly or automatically

//     //shorthand arrow function as an argument
//     this.setState(() => ({ options: [] }));

//     //challenge area
//     //convert all the setState to the alternative way of coding it
//   }
//   handlePick() {
//     const randomNum = Math.floor(Math.random() * this.state.options.length);
//     const option = this.state.options[randomNum];
//     alert(option);
//   }
//   handleAddOption(option) {
//     if (!option) {
//       return "Enter valid value to add item";
//     } else if (this.state.options.indexOf(option) > -1) {
//       return "This option already exists";
//     }

//     //   this.setState((prevState) => {
//     //     return {
//     //       options: prevState.options.concat([option]),
//     //     };
//     //   });
//     this.setState((prevState) => ({
//       options: prevState.options.concat([option]),
//     }));
//   }
//   render() {
//     // const title = "Indecision";
//     const subtitle = "Put your life in the hands of a computer";

//     return (
//       <div>
//         <Header subtitle={subtitle} />
//         <Action handlePick={this.handlePick} />
//         <Options
//           options={this.state.options}
//           handleDeleteOptions={this.handleDeleteOptions}
//         />
//         <AddOption handleAddOption={this.handleAddOption} />
//       </div>
//     );
//   }
// }

// const Header = (props) => {
//   return (
//     <div>
//       <h1>{props.title}</h1>
//       <h2>{props.subtitle}</h2>
//     </div>
//   );
// };
// //Default props
// Header.defaultProps = {
//   title: "Indecision Application",
// };

// const Action = (props) => {
//   return (
//     <div>
//       <button onClick={props.handlePick}>What should I do?</button>
//     </div>
//   );
// };

// const Options = (props) => {
//   return (
//     <div>
//       <button onClick={props.handleDeleteOptions}>Remove All</button>
//       <h3>{props.options.length}</h3>
//       {props.options.map((option) => (
//         <Option key={option} optionText={option} />
//       ))}
//     </div>
//   );
// };
// const Option = (props) => {
//   return <div>{props.optionText}</div>;
// };

// class AddOption extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleAddOption = this.handleAddOption.bind(this);
//     this.state = {
//       error: undefined,
//     };
//   }

//   handleAddOption(e) {
//     e.preventDefault();
//     const option = e.target.elements.option.value.trim();
//     const error = this.props.handleAddOption(option);
//     // this.setState(() => {
//     //   return {
//     //     error,
//     //   };
//     // });
//     this.setState(() => ({ error }));
//   }
//   render() {
//     return (
//       <div>
//         {this.state.error && <h1>{this.state.error}</h1>}
//         <form onSubmit={this.handleAddOption}>
//           <input type="text" name="option" />
//           <button>Add Option</button>
//         </form>
//       </div>
//     );
//   }
// }
// ReactDOM.render(<IndecisionApp />, document.getElementById("app"));

//Removing of individual option by creating new method handleDeleteOption
// class IndecisionApp extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
//     this.handlePick = this.handlePick.bind(this);
//     this.handleAddOption = this.handleAddOption.bind(this);
//     this.handleDeleteOption = this.handleDeleteOption.bind(this);
//     this.state = {
//       options: [
//         "Thing One",
//         "Thing Two",
//         "Thing Three",
//         "Thing Four",
//         "Thing Five",
//       ],
//     };
//   }
//   handleDeleteOptions() {
//     this.setState(() => ({ options: [] }));
//   }
//   handleDeleteOption(optionToRemove) {
//     // console.log(optionToRemove);
//     this.setState((prevState) => ({
//       // options: prevState.options.filter((option) => {
//       //   return optionToRemove !== option;
//       // }),
//       options: prevState.options.filter((option) => optionToRemove !== option),
//     }));
//   }
//   handlePick() {
//     const randomNum = Math.floor(Math.random() * this.state.options.length);
//     const option = this.state.options[randomNum];
//     alert(option);
//   }
//   handleAddOption(option) {
//     if (!option) {
//       return "Enter valid value to add item";
//     } else if (this.state.options.indexOf(option) > -1) {
//       return "This option already exists";
//     }
//     this.setState((prevState) => ({
//       options: prevState.options.concat([option]),
//     }));
//   }
//   render() {
//     const title = "Indecision";
//     const subtitle = "Put your life in the hands of a computer";

//     return (
//       <div>
//         <Header title={title} subtitle={subtitle} />
//         <Action handlePick={this.handlePick} />
//         <Options
//           options={this.state.options}
//           handleDeleteOptions={this.handleDeleteOptions}
//           handleDeleteOption={this.handleDeleteOption}
//         />
//         <AddOption handleAddOption={this.handleAddOption} />
//       </div>
//     );
//   }
// }

// const Header = (props) => {
//   return (
//     <div>
//       <h1>{props.title}</h1>
//       <h2>{props.subtitle}</h2>
//     </div>
//   );
// };

// const Action = (props) => {
//   return (
//     <div>
//       <button onClick={props.handlePick}>What should I do?</button>
//     </div>
//   );
// };

// const Options = (props) => {
//   return (
//     <div>
//       <button onClick={props.handleDeleteOptions}>Remove All</button>
//       <h3>{props.options.length}</h3>
//       {props.options.map((option) => (
//         <Option
//           key={option}
//           optionText={option}
//           handleDeleteOption={props.handleDeleteOption}
//         />
//       ))}
//     </div>
//   );
// };
// const Option = (props) => {
//   return (
//     <div>
//       {props.optionText}
//       {/**<button onClick={props.handleDeleteOption}>remove</button>**/}
//       <button
//         onClick={(e) => {
//           props.handleDeleteOption(props.optionText);
//         }}
//       >
//         remove
//       </button>
//     </div>
//   );
// };

// class AddOption extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleAddOption = this.handleAddOption.bind(this);
//     this.state = {
//       error: undefined,
//     };
//   }

//   handleAddOption(e) {
//     e.preventDefault();
//     const option = e.target.elements.option.value.trim();
//     const error = this.props.handleAddOption(option);
//     this.setState(() => ({ error }));
//   }
//   render() {
//     return (
//       <div>
//         {this.state.error && <h1>{this.state.error}</h1>}
//         <form onSubmit={this.handleAddOption}>
//           <input type="text" name="option" />
//           <button>Add Option</button>
//         </form>
//       </div>
//     );
//   }
// }
// ReactDOM.render(<IndecisionApp />, document.getElementById("app"));

// Lifecycle Methods -> they are predefined methods that are callsed or execute implicitly as we render react components on the browser.
//Lifecylce methods are only available on the class based component, it is not available on the functional based component.
// class IndecisionApp extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
//     this.handlePick = this.handlePick.bind(this);
//     this.handleAddOption = this.handleAddOption.bind(this);
//     this.handleDeleteOption = this.handleDeleteOption.bind(this);
//     this.state = {
//       options: [
//         "Thing One",
//         "Thing Two",
//         "Thing Three",
//         "Thing Four",
//         "Thing Five",
//       ],
//     };
//   }

//   //Lifecycle methods
//   //componentDidMount() its called or trigged as soon as the component render or landed
//   componentDidMount() {
//     console.log("componentDidMount");
//   }
//   //componentDidUpdate() its called or trigged after a component props or state change take place
//   componentDidUpdate() {
//     console.log("componentDidUpdate");
//   }
//   //componentWillUnmount() its called or executed before the component goes way or closed
//   componentWillUnmount() {
//     console.log("componentWillUnMount");
//   }

//   handleDeleteOptions() {
//     this.setState(() => ({ options: [] }));
//   }
//   handleDeleteOption(optionToRemove) {
//     this.setState((prevState) => ({
//       options: prevState.options.filter((option) => optionToRemove !== option),
//     }));
//   }
//   handlePick() {
//     const randomNum = Math.floor(Math.random() * this.state.options.length);
//     const option = this.state.options[randomNum];
//     alert(option);
//   }
//   handleAddOption(option) {
//     if (!option) {
//       return "Enter valid value to add item";
//     } else if (this.state.options.indexOf(option) > -1) {
//       return "This option already exists";
//     }
//     this.setState((prevState) => ({
//       options: prevState.options.concat([option]),
//     }));
//   }
//   render() {
//     const title = "Indecision";
//     const subtitle = "Put your life in the hands of a computer";

//     return (
//       <div>
//         <Header title={title} subtitle={subtitle} />
//         <Action handlePick={this.handlePick} />
//         <Options
//           options={this.state.options}
//           handleDeleteOptions={this.handleDeleteOptions}
//           handleDeleteOption={this.handleDeleteOption}
//         />
//         <AddOption handleAddOption={this.handleAddOption} />
//       </div>
//     );
//   }
// }

// const Header = (props) => {
//   return (
//     <div>
//       <h1>{props.title}</h1>
//       <h2>{props.subtitle}</h2>
//     </div>
//   );
// };

// const Action = (props) => {
//   return (
//     <div>
//       <button onClick={props.handlePick}>What should I do?</button>
//     </div>
//   );
// };

// const Options = (props) => {
//   return (
//     <div>
//       <button onClick={props.handleDeleteOptions}>Remove All</button>
//       <h3>{props.options.length}</h3>
//       {props.options.map((option) => (
//         <Option
//           key={option}
//           optionText={option}
//           handleDeleteOption={props.handleDeleteOption}
//         />
//       ))}
//     </div>
//   );
// };
// const Option = (props) => {
//   return (
//     <div>
//       {props.optionText}
//       {/**<button onClick={props.handleDeleteOption}>remove</button>**/}
//       <button
//         onClick={(e) => {
//           props.handleDeleteOption(props.optionText);
//         }}
//       >
//         remove
//       </button>
//     </div>
//   );
// };

// class AddOption extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleAddOption = this.handleAddOption.bind(this);
//     this.state = {
//       error: undefined,
//     };
//   }

//   handleAddOption(e) {
//     e.preventDefault();
//     const option = e.target.elements.option.value.trim();
//     const error = this.props.handleAddOption(option);
//     this.setState(() => ({ error }));
//   }
//   render() {
//     return (
//       <div>
//         {this.state.error && <h1>{this.state.error}</h1>}
//         <form onSubmit={this.handleAddOption}>
//           <input type="text" name="option" />
//           <button>Add Option</button>
//         </form>
//       </div>
//     );
//   }
// }
// ReactDOM.render(<IndecisionApp />, document.getElementById("app"));

//Saving and loading Options data from localStorage
var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
    _this.handlePick = _this.handlePick.bind(_this);
    _this.handleAddOption = _this.handleAddOption.bind(_this);
    _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
    _this.state = {
      options: ["Thing One", "Thing Two", "Thing Three", "Thing Four", "Thing Five"]
    };
    return _this;
  }

  //Manipulating localStorage
  //Loading options data from localStorage


  _createClass(IndecisionApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      try {
        var json = localStorage.getItem("options");
        var options = JSON.parse(json);
        if (options) {
          this.setState({ options: options });
        }
      } catch (e) {
        //if user enter invalid data then do nothing at all
      }
    }
    //Saving option data into the localStorage

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.options.length !== this.state.options.length) {
        var json = JSON.stringify(this.state.options);
        localStorage.setItem("options", json);
      }
    }
    //componentWillUnmount() its called or executed before the component goes way or closed

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      console.log("componentWillUnMount");
    }
  }, {
    key: "handleDeleteOptions",
    value: function handleDeleteOptions() {
      this.setState(function () {
        return { options: [] };
      });
    }
  }, {
    key: "handleDeleteOption",
    value: function handleDeleteOption(optionToRemove) {
      this.setState(function (prevState) {
        return {
          options: prevState.options.filter(function (option) {
            return optionToRemove !== option;
          })
        };
      });
    }
  }, {
    key: "handlePick",
    value: function handlePick() {
      var randomNum = Math.floor(Math.random() * this.state.options.length);
      var option = this.state.options[randomNum];
      alert(option);
    }
  }, {
    key: "handleAddOption",
    value: function handleAddOption(option) {
      if (!option) {
        return "Enter valid value to add item";
      } else if (this.state.options.indexOf(option) > -1) {
        return "This option already exists";
      }
      this.setState(function (prevState) {
        return {
          options: prevState.options.concat([option])
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var title = "Indecision";
      var subtitle = "Put your life in the hands of a computer";

      return React.createElement(
        "div",
        null,
        React.createElement(Header, { title: title, subtitle: subtitle }),
        React.createElement(Action, { handlePick: this.handlePick }),
        React.createElement(Options, {
          options: this.state.options,
          handleDeleteOptions: this.handleDeleteOptions,
          handleDeleteOption: this.handleDeleteOption
        }),
        React.createElement(AddOption, { handleAddOption: this.handleAddOption })
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

var Header = function Header(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      props.title
    ),
    React.createElement(
      "h2",
      null,
      props.subtitle
    )
  );
};

var Action = function Action(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      { onClick: props.handlePick },
      "What should I do?"
    )
  );
};

var Options = function Options(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      { onClick: props.handleDeleteOptions },
      "Remove All"
    ),
    React.createElement(
      "h3",
      null,
      props.options.length
    ),
    props.options.map(function (option) {
      return React.createElement(Option, {
        key: option,
        optionText: option,
        handleDeleteOption: props.handleDeleteOption
      });
    })
  );
};
var Option = function Option(props) {
  return React.createElement(
    "div",
    null,
    props.optionText,
    React.createElement(
      "button",
      {
        onClick: function onClick(e) {
          props.handleDeleteOption(props.optionText);
        }
      },
      "remove"
    )
  );
};

var AddOption = function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
    _this2.state = {
      error: undefined
    };
    return _this2;
  }

  _createClass(AddOption, [{
    key: "handleAddOption",
    value: function handleAddOption(e) {
      e.preventDefault();
      var option = e.target.elements.option.value.trim();
      var error = this.props.handleAddOption(option);
      this.setState(function () {
        return { error: error };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        this.state.error && React.createElement(
          "h1",
          null,
          this.state.error
        ),
        React.createElement(
          "form",
          { onSubmit: this.handleAddOption },
          React.createElement("input", { type: "text", name: "option" }),
          React.createElement(
            "button",
            null,
            "Add Option"
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById("app"));

//Challenge area
//Add saving and loading from localStorage to Counter App

var Counter = function (_React$Component3) {
  _inherits(Counter, _React$Component3);

  function Counter(props) {
    _classCallCheck(this, Counter);

    var _this3 = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

    _this3.handleAddOne = _this3.handleAddOne.bind(_this3);
    _this3.handleMinuOne = _this3.handleMinuOne.bind(_this3);
    _this3.handleReset = _this3.handleReset.bind(_this3);
    _this3.state = {
      count: props.count
    };
    return _this3;
  }

  //Loading or fetching from localStorage


  _createClass(Counter, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var stringCount = localStorage.getItem("count");
      var count = parseInt(stringCount);
      if (!isNaN(count)) {
        this.setState(function () {
          return { count: count };
        });
      }
    }
    //Saving or store data onto localStorage

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.count !== this.state.count) {
        localStorage.setItem("count", this.state.count);
      }
    }
  }, {
    key: "handleAddOne",
    value: function handleAddOne() {
      this.setState(function (prevState) {
        return {
          count: prevState.count + 1
        };
      });
    }
  }, {
    key: "handleMinuOne",
    value: function handleMinuOne() {
      this.setState(function (prevState) {
        return {
          count: prevState.count - 1
        };
      });
    }
  }, {
    key: "handleReset",
    value: function handleReset() {
      console.log("handleReset");
      this.setState(function () {
        return {
          count: 0
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          "Count:",
          this.state.count
        ),
        React.createElement(
          "button",
          { onClick: this.handleAddOne },
          "+1"
        ),
        React.createElement(
          "button",
          { onClick: this.handleMinuOne },
          "-1"
        ),
        React.createElement(
          "button",
          { onClick: this.handleReset },
          "Reset"
        )
      );
    }
  }]);

  return Counter;
}(React.Component);

Counter.defaultProps = {
  count: 0
};
ReactDOM.render(React.createElement(Counter, null), document.getElementById("app"));
