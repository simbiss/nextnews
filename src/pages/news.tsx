import Navbar from '../components/navbar';
import SearchBar from '../components/searchbar';
import Footer from '../components/footer';
import { NextPage } from 'next';


const News: NextPage = () => {
    const handleSearch = (query: string, language: string, sortBy: string) => {
      // Ici, vous pouvez appeler votre API de recherche de nouvelles
      console.log(query, language, sortBy);
      // Exemple: fetch(`/api/search?query=${query}&language=${language}&sortBy=${sortBy}`)
    };

    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow container mx-auto px-4 pt-8">
          <SearchBar onSearch={handleSearch} />
          {/* Autres contenus de la page */}
        </div>
        <Footer />
      </div>
    );
  };

  export default News;