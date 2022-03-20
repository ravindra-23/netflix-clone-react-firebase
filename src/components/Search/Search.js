import React, { useState, useRef } from 'react'
import { Search, SearchIcon, SearchInput } from './styles';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const inputField = useRef(null);
    const [searchActive, setSearchActive] = useState(false);
    const [query, setQuery] = useState('');
    
    const navigate = useNavigate()

    const handleSearch = (e) => {
      e.preventDefault();
      navigate(`/search/${query}`)
    }
  return (
    <Search>
        <SearchIcon onClick={() => setSearchActive(!searchActive)}>
            <img src="/images/icons/search.png" alt="Search" />
        </SearchIcon>
        <form onSubmit={handleSearch}>
        <SearchInput
            ref={inputField}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search files and series"
            active={searchActive}
        />
        </form>
    </Search>
  )
}

export default SearchBar