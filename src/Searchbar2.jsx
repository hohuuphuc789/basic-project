import { useState } from 'react';
import './App.css';

const Searchbar2 = () => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    (query);
  };

  return (
    <form className="search-form-2" onSubmit={handleSearch}>
      <input 
        type="text" 
        value={query} 
        onChange={handleInputChange} 
        placeholder="Your Email Address"  
        className="search-input-2"
      />
        <button type="submit" className="search-button-2">SUBSCRIBE</button>
    </form>
  );
};

export default Searchbar2;
