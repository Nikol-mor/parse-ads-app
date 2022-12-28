import React, { useState } from 'react';

export function SearchBar({ onSubmit, sourceComponent }) {
  // const [searchDomain, setSearchDomain] = useState('');
  const [txt, setTxt] = useState('');

  const handleChange = (ev) => {
    // setSearchDomain(ev.target.value);
    setTxt(ev.target.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    // onSubmit(searchDomain);
    onSubmit(txt);
  };

  return (
    <form onSubmit={handleSubmit} className='form-container'>
      {/* <input type='text' value={searchDomain} onChange={handleChange}></input> */}
      <input type='text' value={txt} onChange={handleChange}></input>
      <button>Search</button>
    </form>
  );
}
