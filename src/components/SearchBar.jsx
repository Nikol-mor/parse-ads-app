import React, { useState } from 'react';

export function SearchBar({ onSubmit }) {
  const [searchDomain, setSearchDomain] = useState('');

  const handleChange = (ev) => {
    setSearchDomain(ev.target.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log('submitted');
    onSubmit(searchDomain);
  };

  return (
    <form onSubmit={handleSubmit} className='form-container'>
      <input type='text' value={searchDomain} onChange={handleChange}></input>
      <button>Search</button>
    </form>
  );
}
