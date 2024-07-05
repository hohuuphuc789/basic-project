import { useState } from 'react';
import './App.css';
import { IoIosSearch } from "react-icons/io";

const Searchbar = () => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    (query);
  };

  return (
    <form className="search-form" onSubmit={handleSearch}>
      <input 
        type="text" 
        value={query} 
        onChange={handleInputChange} 
        placeholder="Keywords" 
        className="search-input"
      />
        <button type="submit" className="search-button"><IoIosSearch /></button>
    </form>
  );
};

export default Searchbar;
