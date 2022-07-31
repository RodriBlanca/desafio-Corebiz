import React from 'react';
import searchIcon from '../../assets/magnifying-glass.png';

const Search = () => {
  return (
    <div className='search'>
        <input className='search--input' placeholder='¿Qué estás buscando?' />
        <img src={searchIcon} alt="Search" className='search--image' />
    </div>
  )
}

export default Search;