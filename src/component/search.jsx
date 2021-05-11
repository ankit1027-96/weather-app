import React, { useState } from "react";

const Search = ({ setValue }) => {
  const [searchValue, setSearchValue] = useState("");

  const space = searchValue.replace(/\s+/g, "+");
  const handleSearchInput = (e) => {
    setSearchValue(e.target.value);
  };

  const resetInput = () => {
    setSearchValue("");
  };
  const callSearch = (e) => {
    e.preventDefault();
    setValue(space);
    resetInput();
  };

  return (
    <form className="search input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Enter City name"
        onChange={handleSearchInput}
        value={searchValue}
      />
      <div className="input-group-append">
        <button
          className="btn btn-outline-secondary"
          type="submit"
          id="button-addon2"
          onClick={callSearch}
        >
          Button
        </button>
      </div>
    </form>
  );
};

export default Search;
