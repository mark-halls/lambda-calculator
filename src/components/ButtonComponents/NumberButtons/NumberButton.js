import React from "react";

const NumberButton = props => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}

      <button
        className={`number-button button ${props.zero ? `zero-button` : ""}`}
      >
        {props.button}
      </button>
    </>
  );
};

export default NumberButton;
