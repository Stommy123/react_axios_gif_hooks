import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [searchText, setSearchText] = useState(String());
  const handleInputChange = e => setSearchText(e.target.value);
  const handleSubmit = e => {
    e.preventDefault();
    onSearch && onSearch();
    setSearchText(String());
  };
  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <label className="is-hidden" htmlFor="search">
        Search
      </label>
      <input type="search" onChange={handleInputChange} name="search" value={searchText} placeholder="Search..." />
      <button type="submit" id="submit" className="search-button">
        <i className="material-icons icn-search" />
      </button>
    </form>
  );
};

export default Search;
