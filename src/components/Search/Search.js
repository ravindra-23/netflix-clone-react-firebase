import React, { useState } from 'react'
import { Search, SearchIcon, SearchInput } from './styles';

const SearchBar = () => {
    const [searchActive, setSearchActive] = useState(false);
  return (
    <Search>
        <SearchIcon onClick={() => setSearchActive(!searchActive)}>
            <img src="/images/icons/search.png" alt="Search" />
        </SearchIcon>
        <SearchInput
            // value={search}
            // onChange={({ target }) => setSearch(target.value)}
            placeholder="Search files and series"
            active={searchActive}
        />
    </Search>
  )
}

export default SearchBar