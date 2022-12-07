import React, { useState } from "react";
import ListOfNames from "./components/ListOfNames";
import SearchInput from "./components/SearchInput";
import babyNamesData from "./data/babyNamesData.json";
import "./App.css";

function App() {
  const [targetName, setTargetName] = useState("");


    const makeListForMatchingNames = (query) =>
      babyNamesData.filter((baby) => contains(baby.name, query));
    // const filteredNames = babyNamesData.filter((baby) => contains(baby.name, query));
    // console.log(filteredNames);
    // makePageForShows(filtered);
    // return filtered;
    // };

    const contains = (inspectStr, targetStr) => {
      return (
        inspectStr &&
        targetStr &&
        -1 !== inspectStr.toLowerCase().indexOf(targetStr.toLowerCase())
      );
    };

  // let filteredNames = babyNamesData;

  // const SearchInput = () => {
    
  //   const handleInputChange = (event) => {
  //     setTargetName(event.target.value);
  //     makeListForMatchingNames(event.target.value); //
  //   };
  //   return (
  //     <input
  //       type="text"
  //       placeholder="Search name ..."
  //       value={targetName}
  //       onChange={handleInputChange}
  //     />
  //   );
  // };

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
        <ListOfNames list={targetName ? targetName : babyNamesData} />
      </div>
    </div>
  );
}

export default App;
