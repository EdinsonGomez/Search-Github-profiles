import React, { useContext, useState } from "react";
import AppContext from "../store/context";
import { changeSearchValue } from "../store/actions";
import "../styles/searchBar.scss";

const SearchBar = () => {
  const { state, dispatch } = useContext(AppContext);
  const [searchValue, setSearchValue] = useState(state.search_value);

  const handleClick = ({ target }) => {
    setSearchValue(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(changeSearchValue(searchValue));
  }

  return (
    <form className="searchBar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Escriba nombre de usuario"
        value={searchValue}
        onChange={handleClick}
      />
      
      <button type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
