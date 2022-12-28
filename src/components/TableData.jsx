import React, { useState } from 'react';

export function TableData({ approvedAdvertisers }) {
  const [tableData, setTableData] = useState(approvedAdvertisers);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Advertiser's domain</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((domain) => (
            <tr key={domain[0]}>
              <td>{domain[0]}</td>
              <td>{domain[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
