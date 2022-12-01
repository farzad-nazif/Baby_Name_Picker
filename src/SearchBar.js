import React from "react";

const SearchBar = ({
  handleSearch,
  girlBtnHandel,
  boyBtnHandel,
  allBtnHandel,
  resetButtonHandel,
}) => {
  return (
    <div id="searchBar">
      <div>
        <input
          type="text"
          id="searchBox"
          placeholder="Search for a name ..."
          onChange={handleSearch}
        />
        <button id="allBtn" onClick={allBtnHandel}>
          All
        </button>
        <button id="girlsBtn" onClick={girlBtnHandel}>
          Girls
        </button>
        <button id="boysBtn" onClick={boyBtnHandel}>
          Boys
        </button>
        <button id="favListReset" onClick={resetButtonHandel}>
          Reset Favourit List
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
