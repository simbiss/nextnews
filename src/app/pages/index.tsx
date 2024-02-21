import { useState } from 'react';
import { fetchNews } from '../pages/api/newsService';
import Head from 'next/head';
import Image from 'next/image';


const HomePage = () => {
  const [country, setCountry] = useState('us');
  const [category, setCategory] = useState('general');
  const [query, setQuery] = useState('');
  const [articles, setArticles] = useState([]);

  const handleSearch = async () => {
    const fetchedArticles = await fetchNews(country, category, query);
    setArticles(fetchedArticles);
  };

  return (
    <div>
      <Head>
        <title>News App</title>
      </Head>
      <main className="p-4">
        <h1 className="text-xl font-bold">Latest News</h1>
        {/* Search Form */}
        <div className="my-4">
          <input
            type="text"
            placeholder="Search news..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <button onClick={handleSearch} className="btn btn-primary">Search</button>
        </div>
        {/* Articles List */}
        <div>
          {articles.map((article, index) => (
            <a href={article.url} key={index} target="_blank" rel="noopener noreferrer" className="block p-4 my-2 border rounded hover:bg-gray-100">
              <h2 className="text-lg font-semibold">{article.title}</h2>
              <p>{article.description}</p>
              {article.urlToImage && (
                <Image src={article.urlToImage} alt="Article Image" width={100} height={100} />
              )}
            </a>
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomePage;