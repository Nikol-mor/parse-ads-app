import React, { useState } from 'react';
import { SearchBar } from './SearchBar';
import { downloadFile } from '../services/utils/downloadFile';

export function TableData({ approvedAdvertisers, host }) {
  const [tableData, setTableData] = useState(approvedAdvertisers);
  const [sortDirection, setSortDirection] = useState('');

  const filterTable = (txt) => {
    console.log('txt', txt);
    const filteredTable = tableData.filter((domain) => {
      let shortDomain = domain[0].split('.')[0];
      return shortDomain.toLowerCase().includes(txt.toLowerCase());
    });
    console.log('filtered tabel', filteredTable);
    setTableData(filteredTable);
  };

  const onDownload = () => {
    console.log('download clciked');
    const d = tableData.flat();

    // let csvRows = [];
    // const obj = Object.fromEntries(tableData);
    // const headers = Object.keys(obj);
    // csvRows.push(headers.join(','));
    // const values = Object.values(obj).join(',');
    // csvRows.push(values);
    // let csvData = csvRows.join('\n');

    // console.log(csvData);
    console.log(d);
    downloadFile(JSON.stringify(d), `adsDataOf_${host}.csv`, 'text.csv');
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
      <SearchBar sourceComponent={'tableData'} onSubmit={filterTable} />
      <button onClick={() => onDownload()}>Download data</button>
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
