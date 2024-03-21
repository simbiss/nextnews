import React, { useState } from 'react';
import Navbar from '../components/navbar';
import SearchBar from '../components/searchbar';
import Footer from '../components/footer';
import ArticleCard from '../components/articlecard';
import { NextPage } from 'next';

const News: NextPage = () => {
  const [articles, setArticles] = useState([]);
  const [totalResults, setTotoalResults] = useState(0);
  const handleSearch = async (query: string, language: string, sortBy: string) => {

    setArticles([]);  //reset articles list
    const apiKey = process.env.NEXT_PUBLIC_NEWSAPI_KEY;
    const encodedQuery = encodeURIComponent(query);
    const languages = language;
    if (language != '') {
      console.log("lang:", language, "query: ", query)
      var url = `https://newsapi.org/v2/everything?q=${encodedQuery}&languages=${languages}&apiKey=${apiKey}`;
    } else {
      console.log("lang:", language,"query: ", query)
      var url = `https://newsapi.org/v2/everything?q=${encodedQuery}&apiKey=${apiKey}`;
    }
    
    try {
      const response = await fetch(url);
      const data = await response.json();
      setArticles(data.articles); // Update the articles state with the fetched data
      setTotoalResults(data.totalResults)
    } catch (error) {
      console.error('Fetching news failed', error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow container mx-auto px-4 pt-8">
        <SearchBar onSearch={handleSearch} totalResults={totalResults} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {articles.map((article:any, index) => (
            <ArticleCard
              key={index}
              urlToImage={article.urlToImage}
              title={article.title}
              description={article.description}
              url={article.url}
              publishedAt={article.publishedAt}
            />
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default News;