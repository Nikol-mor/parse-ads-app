import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

export function SearchBar({ onSubmit, sourceComponent }) {
  const [txt, setTxt] = useState('');

  const handleChange = (ev) => {
    setTxt(ev.target.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    onSubmit(txt);
  };

  return (
    <form onSubmit={handleSubmit} className='form-container'>
      {sourceComponent === 'main' && (
        <TextField
          type='text'
          value={txt}
          onChange={handleChange}
          placeholder='e.g. msn.com'
          label='Search domain '></TextField>
      )}
      {sourceComponent === 'tableData' && (
        <TextField
          type='text'
          value={txt}
          onChange={handleChange}
          label='Filter table by name'></TextField>
      )}
      <button>Search</button>
    </form>
  );
}
