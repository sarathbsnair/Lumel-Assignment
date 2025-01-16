import React from "react";
import "../App.css";
import CommonRow from "./CommonRow";

const Row = ({ rowData, rowId, tableData, setTable, table }) => {
  const calculateVariance = (prevValue, newValue) => {
    return ((newValue - prevValue) / prevValue) * 100;
  };

  const handleSubmit = (value, id, label, child) => {
    if (child) {
      if (label === "percentage") {
      } else {
        const requiredChild = rowData.children.find(() => child.id === id);
        const childValue = requiredChild?.value;
        const updatedValue = childValue + value;
        const variancePercentage = calculateVariance(childValue, updatedValue);
        const updatedChild = {
          ...requiredChild,
          value: updatedValue,
          variance: variancePercentage,
        };
        setTable(
          table.map((row) => {
            if (row === rowId) {
              return {
                ...row.children,
                children: row.children.map((child) =>
                  child.id === id ? updatedChild : child
                ),
              };
            }
            return row;
          })
        );
      }
    }
  };

  return (
    <>
      <CommonRow
        id={rowData?.id}
        label={rowData?.label}
        value={rowData?.value}
        variance={calculateVariance()}
        handleSubmit={handleSubmit}
        child={false}
      />
      {rowData.children.map((childRow) => (
        <CommonRow
          id={childRow?.id}
          label={childRow?.label}
          value={childRow?.value}
          variance={calculateVariance()}
          handleSubmit={handleSubmit}
          child={true}
        />
      ))}
    </>
  );
};

export default Row;
