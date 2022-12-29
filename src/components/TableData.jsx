import React, { useState } from 'react';
import { Button } from '@mui/material';

import { SearchBar } from './SearchBar';

import { downloadFile } from '../services/utils/downloadFile';

export function TableData({ approvedAdvertisers, host }) {
  const [tableData, setTableData] = useState(approvedAdvertisers);
  const [sortDirection, setSortDirection] = useState('');

  const filterTable = (txt) => {
    const filteredTable = tableData.filter((domain) => {
      let shortDomain = domain[0].split('.')[0];
      return shortDomain.toLowerCase().includes(txt.toLowerCase());
    });
    setTableData(filteredTable);
  };

  const onDownload = () => {
    const flattenedTable = tableData.flat();
    downloadFile(JSON.stringify(flattenedTable), `adsDataOf_${host}.csv`, 'text.csv');
  };

  const sortTable = (column) => {
    const sortedTable = [...tableData].sort((a, b) => {
      if (sortDirection === 'ascending') {
        setSortDirection('descending');
        return a[column] > b[column] ? 1 : -1;
      } else {
        setSortDirection('ascending');
        return a[column] < b[column] ? 1 : -1;
      }
    });
    setTableData(sortedTable);
  };

  return (
    <>
      <div className='table-header'>
        <SearchBar sourceComponent={'tableData'} onSubmit={filterTable} />
        <Button variant='outlined' onClick={() => onDownload()} className='download-btn'>
          Download data
        </Button>
      </div>
      <table className='data-container'>
        <thead>
          <tr>
            <th className='domain' onClick={() => sortTable(0)}>
              Advertiser's domain
            </th>
            <th onClick={() => sortTable(1)}>Count</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((domain) => (
            <tr key={domain[0]}>
              <td className='domain'>{domain[0]}</td>
              <td>{domain[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
