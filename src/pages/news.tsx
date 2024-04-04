import React, { useState } from 'react';
import Navbar from '../components/navbar';
import SearchBar from '../components/searchbar';
import Footer from '../components/footer';
import ArticleCard from '../components/articlecard';
import Pagination from '../components/pagination';
import { NextPage } from 'next';

const News: NextPage = () => {
  const [articles, setArticles] = useState([]);
  const [totalResults, setTotoalResults] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const ariclePerPage = 20;

  const [searchQuery, setSearchQuery] = useState('');
  const [searchLanguage, setSearchLanguage] = useState('');
  const [searchSortBy, setSearchSortBy] = useState('');

  const handleSearch = async (query: string, language: string, sortBy: string) => {

    setSearchQuery(query);
    setSearchLanguage(language);
    setSearchSortBy(sortBy);

    //setArticles([]);  //reset articles list
    const apiKey = process.env.NEXT_PUBLIC_NEWSAPI_KEY;
    const encodedQuery = encodeURIComponent(query);
    let url = `https://newsapi.org/v2/everything?q=${encodedQuery}&pageSize=${ariclePerPage}&page=${currentPage}&apiKey=${apiKey}`;

    if (language) {
      console.log("lang:", language, "query: ", query)
      url += `&language=${language}`;
    } if (sortBy) {
      console.log("sortBy:", sortBy, "query: ", query)
      url += `&sortBy=${sortBy}`;
    }

    try {
      const response = await fetch(url);
      const data = await response.json();
      setArticles(data.articles);
      setTotoalResults(data.totalResults)
    } catch (error) {
      console.error('Fetching news failed', error);
    }
  };

  const paginate = (pageNumber: number) => {
    if (pageNumber > 5) return;
    setCurrentPage(pageNumber);
    handleSearch(searchQuery, searchLanguage, searchSortBy);
  }

  const totalPages = Math.ceil(totalResults / ariclePerPage);


  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow container mx-auto px-4 pt-8">
        <SearchBar onSearch={handleSearch} totalResults={totalResults} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {articles.map((article: any, index) => (
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

        <p className="text-base text-center text-orange-400 mt-20 mb-20">
          Attention! Cette fonctionnalité fonctionne seulement en localhost à cause de l'imitation d'api. Pour ce faire, veuillez cloner le projet et exécuter le serveur local avec la commande suivante: npm run dev
        </p>

        <Pagination totalPages={totalPages} currentPage={currentPage} paginate={paginate} />
        <Footer />
      </div>
    </div>
  );
};

export default News;