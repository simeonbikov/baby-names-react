import React, { useState } from "react";

const SearchInput = () => {
  const [match, setMatch] = useState("");

  const handleChange = (event) => {
    setMatch(event.target.value);
  }

  return (
    // <form>
      <input
        type="text"
        placeholder="Search name ..."
        value={match}
        onChange={handleChange}
      />
    //   <p>Today I need to remember to... {match}</p>
    // </form>
  );
}

export default SearchInput;
