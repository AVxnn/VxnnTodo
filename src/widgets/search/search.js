import React from 'react';
import './style.css'
import search from './img/search.png'

const Search = () => {
  return (
    <>
      <section className='search-container'>
        <img className='search-img' src={search} alt="search"/>
        <input className='search' type="text" placeholder='Find your Task, Project'/>
      </section>
    </>
  );
};

export default Search;
