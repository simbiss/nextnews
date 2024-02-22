import Link from 'next/link';
import { useState, ChangeEvent } from 'react';

const HomePage = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h1>Next.js Routing</h1>
      <h2>Routage Statique</h2>
      <Link legacyBehavior href="/about"><a>À propos</a></Link> |

      <h2>Routage Dynamique</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder='Entrez votre nom'
      />
      {inputValue && (
        <Link legacyBehavior href={`/posts/${inputValue}`}>
          <button type='button'>Direction Dynamique</button>
        </Link>
      )}
    </div>
  );
};

export default HomePage;
