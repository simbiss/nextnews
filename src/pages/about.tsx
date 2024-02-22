import Link from 'next/link';

const AboutPage = () => {
  return (
    <div>
      <h1>À propos</h1>
      <p>Ceci est une page à propos dans une application Next.js.</p>
      <Link legacyBehavior href="/"><a>Accueil</a></Link>
    </div>
  );
};

export default AboutPage;
