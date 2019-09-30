import React from 'react';
import search from './Search.module.css';

const Search = () => {

  let searchInput = React.createRef();

  let initSearch = () => {
    let searchTitle = searchInput.current.value;
    alert(searchTitle);
  };

  return (
    <div className={search.search}>
      <input ref={ searchInput } placeholder='Search'/>
      <img alt='' src=''/>
      <button onClick={ initSearch }>
        Button!
      </button>
    </div>
  );
};

export default Search;