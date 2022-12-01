import React from "react";

const Favourits = ({ favNames }) => {
  return (
    <div className="favouritSection">
      <p id="favouritTxt">Favourits:</p>
      {favNames.length === 0 ? (
        <p id="clickFavMsg">
          Click Some names below to add to your shortlist ...
        </p>
      ) : (
        favNames.map((person) => {
          return (
            <p className={person.sex === "m" ? "maleName" : "femaleName"}>
              {person.name}
            </p>
          );
        })
      )}
    </div>
  );
};

export default Favourits;
