import React from "react";

// const makeListForMatchingNames = (event) => {
//   const query = document.getElementById("showsSearchInput").value;
//   const filtered = allShows.filter((show) => tvShowMatchesQuery(show, query));
//   makePageForShows(filtered);
// };

const ListOfNames = (props) => {

  return (
    <div className="section">
      {props.list.sort((b1, b2) => b1.name.localeCompare(b2.name)).map((baby) => {
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

export default ListOfNames;
