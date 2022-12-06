import React from "react";
// import babyNamesData from "../data/babyNamesData.json";
// import "./App.css";

const ListOfNames = (props) => {
  // const [Gender, setGender] = useState("Boy");
  // const checkGender = (baby) => setIsActive("Girl");  //className={checkGender(baby)}>

  return (
    <div className="container">
      {props.list.map((baby) => {
        return <div key={baby.name}>{baby.name}</div>;
      })}
    </div>
  );
};

export default ListOfNames;
