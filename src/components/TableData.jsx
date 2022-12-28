import React, { useState } from 'react';

export function TableData({ approvedAdvertisers }) {
  const [tableData, setTableData] = useState(approvedAdvertisers);

  return (
    <>
      <table className='data-container'>
        <thead>
          <tr>
            <th className='domain'>Advertiser's domain</th>
            <th>Count</th>
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
