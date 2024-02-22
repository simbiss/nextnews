import { useRouter } from 'next/router';
import Link from 'next/link';

const PostPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center my-6">Post {id}</h1>
      <p className="text-lg my-4">Bienvenue à un routage Dynamique, {id}.</p>
      <Link legacyBehavior href="/">
        <a className="text-blue-500 hover:text-blue-700 transition duration-300">Retour à l'accueil</a></Link>
    </div>
  );
};

export default PostPage;
