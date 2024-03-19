import Footer from '@/components/footer';
import Navbar from '../components/navbar';

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow container mx-auto px-4 pt-8">
          <h1 className="text-4xl font-bold text-center mb-6">Bienvenue</h1>
          <p className="text-xl text-gray-700 text-center">
            Ceci est la page d'accueil de notre site. Explorez notre site et les fonctionnalitées qu'elle offre. Plus de fonctionnalitées seront implémenter dans le futures. 
            
          </p>
          </div>
        <Footer />
      </div>
  );
};

export default HomePage;

