import millify from 'millify';
import React from 'react';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../features/cryptoApi/cryptoApi';

const Home = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;
  const coins = data?.data?.coins;

  return (
    <div className="w-full bg-gray-50">
      <GlobalStats globalStats={globalStats} isFetching={isFetching} />
      <CryptoCardsList coins={coins} />
    </div>
  );
};

const GlobalStats = ({ globalStats, isFetching }) => {
  return (
    <div className="mx-4 md:mx-10 my-6 md:my-10 px-5 md:px-10 py-5 md:py-10 bg-gray-100 shadow-md shadow-gray-400 rounded-md">
      <div className="mb-5 text-2xl md:text-3xl font-semibold">
        Global Crypto Stats
      </div>
      <div className="grid sm:grid-cols-auto-fit grid-cols-auto-fit-sm gap-2 sm:gap-4">
        <GlobalStatsData
          name="Cryptocurrencies"
          data={isFetching ? '-' : millify(globalStats.total)}
        />
        <GlobalStatsData
          name="Exchanges"
          data={isFetching ? '-' : millify(globalStats.totalExchanges)}
        />
        <GlobalStatsData
          name="Market Cap"
          data={isFetching ? '-' : millify(globalStats.totalMarketCap)}
        />
        <GlobalStatsData
          name="24h Volume"
          data={isFetching ? '-' : millify(globalStats.total24hVolume)}
        />
        <GlobalStatsData
          name="Markets"
          data={isFetching ? '-' : millify(globalStats.totalMarkets)}
        />
      </div>
    </div>
  );
};

const GlobalStatsData = ({ name, data }) => {
  return (
    <div>
      <div className="text-lg lg:text-xl">{name}</div>
      <div className="text-2xl lg:text-3xl font-semibold mt-1">{data}</div>
    </div>
  );
};

const CryptoCardsList = ({ coins }) => {
  console.log(coins);
  return (
    <div className="mx-4 md:mx-10 mt-2 sm:mt-0">
      <div className="flex items-center justify-between mb-4">
        <div className="text-2xl md:text-3xl font-semibold">Top Cryptos</div>
        <Link to="/crypto">
          <div className="text-base sm:text-lg font-semibold text-blue-900">
            Show All
          </div>
        </Link>
      </div>
      <div className="grid grid-cols-auto-fit-card gap-x-4 gap-y-4">
        {coins.map((coin, index) => {
          return (
            <div key={index}>
              <CryptoCard coin={coin} index={index} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const CryptoCard = ({ coin, index }) => {
  return (
    <div className="pb-4 bg-gray-50 border shadow-sm shadow-gray-400 rounded-sm cursor-pointer">
      <div className="flex justify-between items-center px-5 py-2 border-b border-gray-300">
        <div className="text-lg">{`${index + 1}. ${coin.name}`}</div>
        <img src={coin.iconUrl} alt={coin.name} className="w-10 h-10" />
      </div>
      <div className="px-5 pt-4">Price: {millify(coin.price)}</div>
      <div className="px-5 pt-2">Symbol: {coin.symbol}</div>
      <div className="px-5 pt-2">Market Cap: {millify(coin.marketCap)}</div>
      <div className="px-5 pt-2">Daily Change: {millify(coin.change)}%</div>
    </div>
  );
};

export default Home;