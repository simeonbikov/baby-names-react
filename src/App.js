import React, { useState } from "react";
import ListOfNames from "./components/ListOfNames";
import SearchInput from "./components/SearchInput";
import babyNamesData from "./data/babyNamesData.json";
import "./App.css";

function App() {
  const [targetName, setTargetName] = useState("");
  let allNames = [...babyNamesData];

  // const makeListForMatchingNames = (query) =>
  //   babyNamesData.filter((baby) => contains(baby.name, query));

  const makeListForMatchingNames = (query) => {
    if (query) {
      return allNames.filter((baby) => contains(baby.name, query));
    } else {
      return allNames;
    }
  };

  const contains = (inspectStr, targetStr) => {
    return (
      inspectStr &&
      targetStr &&
      -1 !== inspectStr.toLowerCase().indexOf(targetStr.toLowerCase())
    );
  };

  const handleInputChange = (event) => {
    let filteredNames = makeListForMatchingNames(event.target.value); //
    // setTargetName(event.target.value);
    setTargetName(filteredNames);
  };

  return (
    <div className="App">
      <div className="container">
        <SearchInput handleChange={handleInputChange} />
        {/* <ListOfNames list={targetName} /> */}
        <ListOfNames list={targetName ? targetName : allNames} />
      </div>
    </div>
  );
}

export default App;