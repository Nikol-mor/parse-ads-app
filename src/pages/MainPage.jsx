import React, { useState } from 'react';

import { SearchBar } from '../components/SearchBar';
import { TableData } from '../components/TableData';

import { httpService } from '../services/adsData.service';

export default function MainPage() {
  const [adsData, setAdsData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const getDataBySearchedDomain = async (searchDomain) => {
    setIsLoading(true);
    setAdsData({});
    try {
      let adsData = await httpService.get('adsData', { searchDomain });
      if (adsData.status === 200) setAdsData(adsData);
      else setAdsData(null);
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  };

  return (
    <>
      <SearchBar onSubmit={getDataBySearchedDomain} />
      {isLoading && <span>Loading..</span>}
      {adsData.status === 200 && <TableData approvedAdvertisers={adsData.data} />}
    </>
  );
}
