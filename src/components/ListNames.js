import React from "react";
// import babyNamesData from "../data/babyNamesData.json";

const ListNames = (props) => {
  return (
    <div className="section">
      {props.list.map((baby) => {
        return (
          <div
            key={baby.name}
            className={`${"name-wrapper"} ${
              baby.sex === "m" ? "blue-bg" : "pink-bg"
            }`}
          >
            {baby.name}
          </div>
        );
      })}
    </div>
  );
};

export default ListNames;
