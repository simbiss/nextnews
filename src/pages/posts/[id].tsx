import { useRouter } from 'next/router';
import Link from 'next/link';

const PostPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Post {id}</h1>
      <p>Bienvenue à un routage Dynamique, {id}.</p>
      <Link legacyBehavior href="/"><a>Retour à l'accueil</a></Link>
    </div>
  );
};

export default PostPage;
