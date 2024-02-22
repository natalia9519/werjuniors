import React, { useState } from 'react';
import PropTypes from 'prop-types';
import lupaIcon from '../../assets/busqueda.svg'; 
import './searchbar.css'; 

const SearchBar = ({ onSearch }) => {
  const [valueSearch, setValueSearch] = useState('');

  const onSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(valueSearch); // Llama a la función onSearch del padre con el término de búsqueda
    setValueSearch('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearchSubmit(e);
    }
  };

  return (
    <form onSubmit={onSearchSubmit} className="search-container">
      <div className="search-input-container">
        <input
          type="search"
          name="valueSearch"
          value={valueSearch}
          onChange={(e) => setValueSearch(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Buscar nombre de Junior"
          className="search-input"
          style={{
            backgroundImage: `url(${lupaIcon})`,
            backgroundPosition: '10px 50%',
            backgroundSize: '20px 20px',
            backgroundRepeat: 'no-repeat',
            paddingLeft: '40px', 
          }}
        />
      </div>
    </form>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
