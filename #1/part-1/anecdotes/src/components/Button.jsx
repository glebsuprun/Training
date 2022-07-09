import React from "react";

export const Button = ({ text, action }) => {
  const buttonStyle = {
    background: "#fff",
    border: "1px solid gray",
    borderRadius: "5px",
    cursor: "pointer",
    margin: "10px",
  };

  return (
    <button onClick={action} style={buttonStyle}>
      {text}
    </button>
  );
};