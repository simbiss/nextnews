import Link from 'next/link';
import Navbar from '../components/navbar';

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4">
        <main className="my-8">
          <h1 className="text-4xl font-bold text-center mb-6">À propos de nous</h1>
          <div className="bg-white shadow-lg rounded-lg p-8 mb-6">
            <p className="text-xl text-gray-700">
            Ceci est mon projet personnel visant à découvrir le framework Next.js, codé avec TypeScript et utilisant TailwindCSS. Pour le moment, ce site web propose une page de recherche d'actualités où vous pouvez entrer des mots-clés via la barre de recherche.
            </p>
            <p className="text-xl text-gray-700 mt-4">
              Site créer par [Simon Bissonnette] en Janvier 2024 <a href="https://github.com/simbiss/nextnews"></a>
            </p> 
          </div>   
        </main>
      </div>
    </>
  );
};

export default AboutPage;
