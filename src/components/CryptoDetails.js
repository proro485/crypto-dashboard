import React from 'react';
import parse from 'html-react-parser';
import { Link } from '@mui/icons-material';
import { Rings } from 'react-loader-spinner';
import { useLocation } from 'react-router-dom';
import { useGetCryptoQuery } from '../features/cryptoApi/cryptoApi';
import millify from 'millify';

const CryptoDetails = () => {
  const location = useLocation().pathname;
  const { data, isFetching } = useGetCryptoQuery(location.split('/')[2]);
  const coin = data?.data?.coin;
  console.log(coin);

  if (isFetching) {
    return (
      <div className="flex justify-center items-center w-full mt-24 md:mt-0 md:ml-72">
        <Rings color="gray" />
      </div>
    );
  }

  return (
    <div className="w-full mt-24 md:mt-0 md:ml-72">
      <CoinTitle coin={coin} />
      <CoinDescription coin={coin} />
      <div className="flex flex-wrap mx-4 md:mx-10">
        <CoinStats coin={coin} />
        <CoinInfo coin={coin} />
      </div>
      <div className="h-6"></div>
    </div>
  );
};

const CoinTitle = ({ coin }) => {
  return (
    <div className="flex items-center mx-4 md:mx-10 my-4 md:my-6 mt-8 md:mt-10">
      <img src={coin.iconUrl} alt={coin.name} className="w-10" />
      <div className="text-2xl md:text-3xl font-semibold mx-3">
        {coin.name} ({coin.symbol})
      </div>
      <a href={coin.websiteUrl} target="_blank">
        <Link color="black" fontSize="medium" />
      </a>
    </div>
  );
};

const CoinDescription = ({ coin }) => {
  return (
    <div className="mx-4 md:mx-10 px-4 md:px-10 py-6 md:py-10 bg-gray-50 text-base rounded-md shadow-md shadow-gray-400">
      <div className="text-2xl font-bold mb-1">What is {coin.name}?</div>
      {parse(coin.description)}
    </div>
  );
};

const CoinInfo = ({ coin }) => {
  const getName = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  return (
    <div className="w-full lg:w-1/2 mt-4 md:mt-6 px-4 md:px-10 py-6 md:py-8 bg-gray-50 text-base rounded-md shadow-md shadow-gray-400">
      <div className="pb-3 mb-3 text-2xl font-bold border-b border-gray-300">
        {coin.name} Links
      </div>
      {coin.links.map((data, index) => {
        return (
          <div className="flex justify-between items-center py-2" key={index}>
            <div className="font-semibold">{getName(data.type)}</div>
            <a href={data.url} target="_blank" className="text-blue-900">
              {data.name}
            </a>
          </div>
        );
      })}
    </div>
  );
};

const CoinStats = ({ coin }) => {
  return (
    <div className="w-full lg:w-1/2 mt-4 md:mt-6 px-4 md:px-10 py-6 md:py-8 bg-gray-50 text-base rounded-md shadow-md shadow-gray-400">
      <div className="pb-3 mb-3 text-2xl font-bold border-b border-gray-300">
        {coin.name} Stats
      </div>
      <Stats title="Rank" data={coin.rank} />
      <Stats title="Symbol" data={coin.symbol} />
      <Stats
        title="Price in USD"
        data={`${parseFloat(coin.price).toFixed(2)} USD`}
      />
      <Stats
        title="All Time High"
        data={`${parseFloat(coin.allTimeHigh.price).toFixed(2)} USD`}
      />
      <Stats title="Market Cap" data={millify(coin.marketCap)} />
      <Stats title="Number of Exchanges" data={coin.numberOfExchanges} />
      <Stats title="Number of Markets" data={coin.numberOfMarkets} />
      <Stats title="Total Supply" data={`${millify(coin.supply.total)} USD`} />
      <Stats title="Change" data={`${coin.change}%`} />
    </div>
  );
};

const Stats = ({ title, data }) => {
  return (
    <div className="flex justify-between items-center py-2">
      <div className="text-gray-900">{title}</div>
      <div className="font-semibold">{data}</div>
    </div>
  );
};

export default CryptoDetails;
