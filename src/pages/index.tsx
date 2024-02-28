import Link from 'next/link';
import { useState, ChangeEvent } from 'react';
import Navbar from '../components/navbar';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4">
        <main className="my-8">
          <h1 className="text-4xl font-bold text-center mb-6">Bienvenue sur MonSiteWeb</h1>
          <p className="text-xl text-gray-700 text-center">
            Ceci est la page d'accueil de notre site. Explorez notre site pour en savoir plus!
          </p>
          {/* Ajoutez plus de contenu ici selon vos besoins */}
        </main>
      </div>
    </>
  );
};

export default HomePage;

