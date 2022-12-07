import React from "react";

const SearchInput = (props) => {
  return (
      <input
        id="searchInput"
        type="text"
        placeholder="Search name ..."
        onChange={props.handleChange}
      />
  );
}

export default SearchInput;
