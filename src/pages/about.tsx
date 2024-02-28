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
              Nous sommes une entreprise passionnée par [votre domaine ici]. Notre mission est de [votre mission ici].
            </p>
            <p className="text-xl text-gray-700 mt-4">
              Fondée en [année], notre entreprise [plus de détails ici].
            </p>
          </div>
          <div className="text-center">
            <img
              src="/path-to-your-image.jpg" // Remplacez avec le chemin de votre image
              alt="Image à propos de nous"
              className="inline-block rounded-lg"
            />
          </div>
          {/* Vous pouvez ajouter plus de sections avec des informations supplémentaires ici */}
        </main>
      </div>
    </>
  );
};

export default AboutPage;
