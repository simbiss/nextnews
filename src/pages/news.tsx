import Navbar from '../components/navbar';
import SearchBar from '../components/searchbar';
import { NextPage } from 'next';


const News: NextPage = () => {
    const handleSearch = (query: string, language: string, sortBy: string) => {
      // Ici, vous pouvez appeler votre API de recherche de nouvelles
      console.log(query, language, sortBy);
      // Exemple: fetch(`/api/search?query=${query}&language=${language}&sortBy=${sortBy}`)
    };

    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 pt-8">
            <SearchBar onSearch={handleSearch} />
        </div>
      </>
    );
  };

  export default News;