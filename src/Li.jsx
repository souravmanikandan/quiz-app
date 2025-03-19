import React from "react";

const Li = ({ key, value, index }) => {
  return (
    <li key={key} className="p-3 m-3 gap-2 flex bg-amber-50 text-black">
      <input type="radio" id={key} name={`q${index}`} value={value} />
      <label htmlFor={key}>{value}</label>
    </li>
  );
};

export default Li;
