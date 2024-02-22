import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center my-6">À propos</h1>
      <p className="text-lg my-4">Ceci est une page à propos dans une application Next.js.</p>
      <Link legacyBehavior href="/">
        <a className="text-blue-500 hover:text-blue-700 transition duration-300">Accueil</a></Link>
    </div>
  );
};

export default AboutPage;
