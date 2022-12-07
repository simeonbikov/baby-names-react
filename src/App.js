import React, { useState } from "react";
import ListNames from "./components/ListNames";
import SearchInput from "./components/SearchInput";
import babyNamesData from "./data/babyNamesData.json";
import "./App.css";

function App() {
  const [targetName, setTargetName] = useState("");

  // const makeListForMatchingNames = (query) =>
  //   babyNamesData.filter((baby) => contains(baby.name, query));

  const sortBabiesNames = (names) =>
    names.sort((b1, b2) => b1.name.localeCompare(b2.name));

  const makeListForMatchingNames = (query) => {
    if (query) {
      return allNames.filter((baby) => contains(baby.name, query));
    } else {
      return allNames;
    }
  };

  const contains = (inspectStr, targetStr) =>
    inspectStr &&
    targetStr &&
    -1 !== inspectStr.toLowerCase().indexOf(targetStr.toLowerCase());

  const handleInputChange = (event) => {
    let filteredNames = makeListForMatchingNames(event.target.value);
    setTargetName(filteredNames);
  };

  let allNames = sortBabiesNames([...babyNamesData]);

  return (
    <div className="App">
      <div className="container">
        <SearchInput handleChange={handleInputChange} />
        <ListNames list={targetName ? targetName : allNames} />
      </div>
    </div>
  );
}

export default App;
