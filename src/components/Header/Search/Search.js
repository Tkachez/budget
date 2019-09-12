import React from 'react';
import search from './Search.module.css';

const Search = () => {
  return(
    <div className={search.search}>
      <input placeholder='Search'/>
      <img alt='' src=''/>
    </div>
  );
};

export default Search;