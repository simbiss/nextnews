import Link from 'next/link';
import { useState, ChangeEvent } from 'react';

const HomePage = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className='text-4x1 font-bold text-center my-10'>Next.js Routing</h1>
      <h2 className="text-2xl font-semibold my-4">Routage Statique</h2>
      <Link legacyBehavior href="/about"><a className="text-blue-500 hover:text-blue-700 transition duration-300">Direction Statique</a></Link> 

      <h2 className="text-2xl font-semibold my-4">Routage Dynamique</h2>
      <input
        type="text"
        className="form-input mt-1 block w-full px-3 py-2 text-black"
        value={inputValue}
        onChange={handleInputChange}
        placeholder='Entrez votre nom'
      />
      {inputValue && (
        <Link legacyBehavior href={`/posts/${inputValue}`}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-3">Direction Dynamique</button>
        </Link>
      )}
    </div>
  );
};

export default HomePage;
