import React from "react";

const CommonRow = ({ id, label, value, variance, handleSubmit, child }) => {
  let inputValue = "";
  const handleChange = (e) => {
    inputValue = e.target.value;
  };
  return child ? (
    <tr>
      <td>--{label}</td>
      <td>{value}</td>
      <td>
        <input
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </td>
      <td>
        <button onClick={handleSubmit(inputValue,id, "percentage", child)}>
          Button 1
        </button>
      </td>
      <td>
        <button onClick={handleSubmit(inputValue,id, "value", child)}>Button 2</button>
      </td>
      <td>{variance} %</td>
    </tr>
  ) : (
    <tr>
      <td>{label}</td>
      <td>{value}</td>
      <td>
        <input
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </td>
      <td>
        <button onClick={handleSubmit(inputValue, "percentage")}>
          Button 1
        </button>
      </td>
      <td>
        <button onClick={handleSubmit(inputValue, "value")}>Button 2</button>
      </td>
      <td>{variance} %</td>
    </tr>
  );
};

export default CommonRow;
