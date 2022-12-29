import React, { useState } from 'react';
import { ScaleLoader } from 'react-spinners';

import { SearchBar } from '../components/SearchBar';
import { TableData } from '../components/TableData';

import { httpService } from '../services/adsData.service';

export default function MainPage() {
  const [adsData, setAdsData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [searchedDomain, setSearchedDomain] = useState('');

  const getDataBySearchedDomain = async (searchDomain) => {
    setSearchedDomain(searchDomain);
    setIsLoading(true);
    setAdsData({});
    try {
      let adsData = await httpService.get('adsData', { searchDomain });
      if (adsData.status === 200) setAdsData(adsData);
      else setAdsData(null);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  return (
    <>
      <SearchBar onSubmit={getDataBySearchedDomain} sourceComponent={'main'} />
      <ScaleLoader className='loader' loading={isLoading} />
      {adsData.status === 200 && (
        <TableData approvedAdvertisers={adsData.data} host={searchedDomain} />
      )}
    </>
  );
}
