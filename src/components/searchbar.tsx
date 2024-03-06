import { useState, FormEvent } from 'react';

interface SearchBarProps {
  onSearch: (query: string, language: string, sortBy: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [language, setLanguage] = useState('fr');
  const [sortBy, setSortBy] = useState('publishedAt');
  const [results, setResults] = useState(1); // Simule le nombre de résultats
  const [isAdvancedSearchVisible, setIsAdvancedSearchVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Ajout d'un état de chargement

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setIsLoading(true); // Déclenche le chargement
    onSearch(searchTerm, language, sortBy);
    setIsLoading(false); // Termine le chargement après la recherche
  };

  const toggleAdvancedSearch = () => {
    setIsAdvancedSearchVisible(!isAdvancedSearchVisible);
  };

  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center">
        <div className="flex flex-row items-center flex-grow mb-4 md:mb-0">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow p-2 border border-r-0 border-gray-300 rounded-l-lg focus:ring-blue-500 focus:border-blue-500 text-black"
            placeholder="Search..."
            aria-label="Search"
          />
          <button
            type="submit"
            className={`bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={isLoading}
            aria-label="Submit search"
          >
            🔍
          </button>
        </div>
        <span className="text-gray-600 ml-4 mb-4 md:mb-0">{results} results</span>
      </form>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <button
          type="button"
          onClick={toggleAdvancedSearch}
          className="text-blue-600 text-decoration-line: underline text-sm mb-2 focus:outline-none"
          aria-label="Toggle advanced search"
        >
          Recherche Avancée
        </button>
        {isAdvancedSearchVisible && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4 transition-opacity duration-200 ease-in-out" style={{ opacity: isAdvancedSearchVisible ? 1 : 0 }}>
            <select
              className="block w-full p-2 border border-gray-300 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              aria-label="Select language"
            >
              <option value="fr">Français</option>
              <option value="en">Anglais</option>
              <option value="es">Espagnol</option>
              <option value="ar">Arabe</option>
            </select>
            <select
              className="block w-full p-2 border border-gray-300 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              aria-label="Sort by"
            >
              <option value="relevancy">Pertinence</option>
              <option value="popularity">Popularité</option>
              <option value="publishedAt">Date de publication</option>
            </select>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;