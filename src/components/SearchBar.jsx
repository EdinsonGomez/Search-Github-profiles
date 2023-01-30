import React, { useContext, useState } from "react";
import AppContext from "../store/context";
import { changeSearchValue } from "../store/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
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
    <div className="searchBar-container">
      <form className="searchBar-form" onSubmit={handleSubmit}>
        <input
          className="searchBar-input"
          type="text"
          placeholder="Buscar nombre de usuario"
          value={searchValue}
          onChange={handleClick}
        />

        <button type="submit" className="searchBar-btn">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
