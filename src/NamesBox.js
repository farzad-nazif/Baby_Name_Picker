import React from "react";

const NamesBox = ({ babyNames, eachNameFunction }) => {
  return (
    <div id="namesBox">
      {babyNames.map((item) => {
        return (
          <p
            className={item.sex === "m" ? "maleName" : "femaleName"}
            id={item.name}
            key={item.name}
            onClick={eachNameFunction}
          >
            {item.name}
          </p>
        );
      })}
    </div>
  );
};

export default NamesBox;
