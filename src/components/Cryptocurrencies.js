import millify from 'millify';
import React, { useEffect, useState } from 'react';
import { Rings } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../features/cryptoApi/cryptoApi';

const Cryptocurrencies = () => {
  const [searchCrypto, setSearchCrypto] = useState('');
  const { data: cryptoList, isFetching } = useGetCryptosQuery(100);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const filteredData = cryptoList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchCrypto.toLowerCase())
    );
    setCoins(filteredData);
  }, [searchCrypto, cryptoList]);

  return (
    <div className="w-full my-24 md:mt-0 md:ml-72">
      <div className="flex justify-center mt-5">
        <input
          type="text"
          value={searchCrypto}
          className="pl-4 py-2 w-80 rounded-md bg-gray-200 outline-none border border-transparent focus:border-gray-600 focus:shadow-md focus:shadow-gray-400"
          placeholder="Search Cryptocurrencies"
          onChange={(e) => setSearchCrypto(e.target.value)}
        />
      </div>
      <CryptoCardsList coins={coins} isFetching={isFetching} />
      <div className="pb-10"></div>
    </div>
  );
};

const CryptoCardsList = ({ coins, isFetching }) => {
  return (
    <div className="mx-4 md:mx-10 mt-8">
      {isFetching ? (
        <div className="flex justify-center items-center h-full w-full">
          <Rings color="gray" />
        </div>
      ) : (
        <div className="grid grid-cols-auto-fit-card gap-x-4 gap-y-4">
          {coins?.map((coin, index) => {
            return (
              <div key={index}>
                <CryptoCard coin={coin} index={index} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

const CryptoCard = ({ coin, index }) => {
  return (
    <Link to={`/crypto/${coin.uuid}`}>
      <div className="pb-4 bg-gray-50 border shadow-md shadow-gray-400 rounded-sm cursor-pointer">
        <div className="flex justify-between items-center px-5 py-2 border-b border-gray-300">
          <div className="text-lg">{`${index + 1}. ${coin.name}`}</div>
          <img src={coin.iconUrl} alt={coin.name} className="w-10 h-10" />
        </div>
        <div className="px-5 pt-4">Price: {millify(coin.price)}</div>
        <div className="px-5 pt-2">Symbol: {coin.symbol}</div>
        <div className="px-5 pt-2">Market Cap: {millify(coin.marketCap)}</div>
        <div className="px-5 pt-2">Daily Change: {millify(coin.change)}%</div>
      </div>
    </Link>
  );
};

export default Cryptocurrencies;
