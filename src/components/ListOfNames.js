import React from "react";
// import babyNamesData from "../data/babyNamesData.json";
// import "./App.css";

const ListOfNames = (props) => {
  // const [Gender, setGender] = useState("Boy");
  // const checkGender = (baby) => setIsActive("Girl");  //className={checkGender(baby)}>

  return (
    <>
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
    </>
  );
};

export default ListOfNames;
