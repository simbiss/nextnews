import React from 'react';

interface ArticleCardProps {
  urlToImage?: string;
  title: string;
  description: string;
  url: string;
  publishedAt: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ urlToImage, title, description, url, publishedAt }) => {

  const formatDate = (dateStr: string): string => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <div className="article-card my-4 p-3 rounded shadow-lg flex flex-col bg-white">
      {urlToImage && (
        <img
          className="rounded-t-lg object-cover h-48 w-full"
          src={urlToImage}
          alt="Article Visual"
        />
      )}
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-xl font-bold text-xl mb-2">{title}</h2>
        <p className="text-gray-700 text-base flex-grow">{description}</p>
        <p className="text-gray-600 text-xs">{formatDate(publishedAt)}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block bg-blue-500 text-white text-sm font-bold py-2 px-4 rounded"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default ArticleCard;