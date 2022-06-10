import React from 'react';
import { Rings } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import truncate from 'truncate';
import { useGetNewsQuery } from '../features/newsApi/newsApi';

const News = () => {
  const { data: news, isFetching: fetchingNews } = useGetNewsQuery(25);
  const newsList = news?.value;

  return (
    <div className="w-full mt-24 md:mt-0 md:ml-72">
      <NewsCardsList newsList={newsList} isFetching={fetchingNews} />
      <div className="h-6"></div>
    </div>
  );
};

const NewsCardsList = ({ newsList, isFetching }) => {
  return (
    <div className="mx-4 md:mx-10 mt-2 sm:mt-0 pt-6 sm:pt-10">
      {isFetching ? (
        <div className="flex justify-center items-center h-full w-full">
          <Rings color="gray" />
        </div>
      ) : (
        <div className="grid grid-cols-auto-fit-card gap-x-6 gap-y-6">
          {newsList.map((news, index) => {
            return (
              <div key={index}>
                <NewsCard news={news} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

const NewsCard = ({ news }) => {
  return (
    <a href={`${news.url}`} target="_blank">
      <div className="h-80 pb-4 bg-gray-50 shadow-md shadow-gray-400 rounded-sm cursor-pointer">
        <img
          src={news?.image?.thumbnail.contentUrl}
          alt={news.name}
          className="w-full h-40 rounded-t-sm"
        />
        <div className="px-4 pt-2 font-medium text-lg">
          {truncate(news.name, 40)}
        </div>
        <div className="px-5 pt-2">{truncate(news.description, 80)}</div>
      </div>
    </a>
  );
};

export default News;
