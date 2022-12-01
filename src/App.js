import "./App.css";
import babyNames from "./babyNamesData";
import SearchBar from "./SearchBar";
import Favourits from "./Favourits";
import NamesBox from "./NamesBox";
import { useState } from "react";

function App() {
  //search input function
  const [searchedNames, setSearchedNames] = useState(babyNames);
  const handleSearch = (e) => {
    let result = searchedNames.filter((person) => {
      return person.name.includes(e.target.value);
    });
    setSearchedNames(result);
    console.log(result);
    if (e.target.value.length === 0) {
      setSearchedNames(babyNames);
    }
    if (e.target.value.length > 0 && searchedNames.length === 0) {
      setSearchedNames(babyNames);
    }
  };
  //buttons function
  //girl button
  const [isGirlBtnClicked, setIsGirlBtnClicked] = useState(false);
  const girlBtnHandel = () => {
    if (isGirlBtnClicked) {
      setSearchedNames(babyNames);
      setIsGirlBtnClicked(false);
    } else {
      let result = searchedNames.filter((person) => {
        return person.sex === "f";
      });
      setSearchedNames(result);
      setIsGirlBtnClicked(true);
    }
  };
  //boy button
  const [isBoyBtnClicked, setIsBoyBtnClicked] = useState(false);
  const boyBtnHandel = () => {
    if (isBoyBtnClicked) {
      setSearchedNames(babyNames);
      setIsBoyBtnClicked(false);
    } else {
      let result = searchedNames.filter((person) => {
        return person.sex === "m";
      });
      setSearchedNames(result);
      setIsBoyBtnClicked(true);
    }
  };
  //all button
  const allBtnHandel = () => {
    setSearchedNames(babyNames);
  };
  // Each name function
  const [favNames, setFavNames] = useState([]);
  const eachNameFunction = (e) => {
    console.log(e.target.id);
    searchedNames.forEach((person) => {
      if (person.name === e.target.id) {
        setFavNames(favNames.concat(person));
      }
    });
  };
  //Favourit List reset button function
  const resetButtonHandel = () => {
    setFavNames([]);
  };
  return (
    <div className="main">
      <SearchBar
        handleSearch={handleSearch}
        girlBtnHandel={girlBtnHandel}
        boyBtnHandel={boyBtnHandel}
        allBtnHandel={allBtnHandel}
        resetButtonHandel={resetButtonHandel}
      />
      <Favourits favNames={favNames} />
      <NamesBox babyNames={searchedNames} eachNameFunction={eachNameFunction} />
    </div>
  );
}

export default App;
