import React, { useState } from "react";
import "./App.css";
// import "./components/ButtonComponents/ButtonComponents.css";

import Numbers from "./components/ButtonComponents/NumberButtons/Numbers";
import Specials from "./components/ButtonComponents/SpecialButtons/Specials";
import Operators from "./components/ButtonComponents/OperatorButtons/Operators";
import Display from "./components/DisplayComponents/Display";
// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";

function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props
  const initialState = {
    display: "0",
    lastOperator: "",
    previousDisplay: "0"
  };

  const [state, setState] = useState(initialState);

  const updateDisplay = value => {
    if (state.display === "0") {
      setState({ ...state, display: value });
    } else if (state.display.length < 9) {
      setState({ ...state, display: state.display + value });
    }
  };

  const add = () => {
    const total = `${parseInt(state.display) +
      parseInt(state.previousDisplay)}`;
    const previous = state.display;
    setState({
      ...state,
      display: total,
      previousDisplay: previous,
      lastOperator: "+"
    });
  };

  const sub = () => {
    if (state.display !== "0") {
      const total = `${parseInt(state.display) -
        parseInt(state.previousDisplay)}`;
      const previous = state.display;
      setState({
        ...state,
        display: total,
        previousDisplay: previous,
        lastOperator: "-"
      });
    }
  };

  const mult = () => {
    if (state.display !== "0") {
      const total = `${parseInt(state.display) *
        parseInt(state.previousDisplay)}`;
      const previous = state.display;
      setState({
        ...state,
        display: total,
        previousDisplay: previous,
        lastOperator: "*"
      });
    }
  };

  const divide = () => {
    if (state.display !== "0") {
      const total = `${parseInt(state.display) /
        parseInt(state.previousDisplay)}`;
      const previous = state.display;
      setState({
        ...state,
        display: total,
        previousDisplay: previous,
        lastOperator: "/"
      });
    }
  };

  const percent = () => {
    if (state.display !== "0") {
      const total = `${(parseInt(state.display) * 100) /
        parseInt(state.previousDisplay)}`;
      const previous = state.display;
      setState({
        ...state,
        display: total,
        previousDisplay: previous,
        lastOperator: "%"
      });
    }
  };

  const invert = () => {
    const total = `${parseInt(state.display) * -1}`;
    setState({ ...state, display: total });
  };

  const equals = () => {
    setState({ ...state });
  };

  const clear = () => {
    setState(initialState);
  };

  const operators = {
    "+": add,
    "-": sub,
    x: mult,
    "/": divide,
    "=": equals
  };

  const specials = {
    "%": percent,
    "+/-": invert,
    C: clear
  };

  return (
    <div className="container">
      <Logo />
      <div className="App">
        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
        <Display display={state.display} />
        <div className="input">
          <div className="input-col1">
            <div className="input-col1-specials">
              <Specials setSpecials={specials} />
            </div>
            <div className="input-col2-numbers">
              <Numbers updateDisplay={updateDisplay} />
            </div>
          </div>
          <div className="input-operators">
            <Operators setOperators={operators} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
