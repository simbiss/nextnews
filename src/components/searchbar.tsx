// components/SearchBar.tsx
import { useState, FormEvent } from 'react';

interface SearchBarProps {
  onSearch: (query: string, language: string, sortBy: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [language, setLanguage] = useState('fr');
  const [sortBy, setSortBy] = useState('publishedAt');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSearch(searchTerm, language, sortBy);
  };

  return (
    <div className="flex flex-col w-full">
      <form onSubmit={handleSubmit} className="flex flex-row mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border border-gray-300 rounded-tl rounded-bl flex-grow"
          placeholder="Rechercher des nouvelles..."
        />
        <button
          type="submit"
          className="p-2 bg-blue-500 text-white rounded-tr rounded-br"
        >
          Recherche
        </button>
      </form>
      <div className="flex justify-between">
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="fr">Français</option>
          <option value="en">Anglais</option>
          <option value="es">Espagnol</option>
          <option value="ar">Arabe</option>

        </select>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="relevancy">Pertinence</option>
          <option value="popularity">Popularité</option>
          <option value="publishedAt">Date de publication</option>
        </select>
      </div>
    </div>
  );
};

export default SearchBar;