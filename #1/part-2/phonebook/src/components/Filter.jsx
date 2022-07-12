import React from "react";

export const Filter = ({ value, onChange }) => {
  return (
    <p>
      filter shown with
      <input value={value} onChange={onChange} />
    </p>
  );
};
