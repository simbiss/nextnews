import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-semibold">MyWebsite</div>
        <div className="space-x-4">
          <Link href="/">
            <a className="hover:text-gray-200">Home</a>
          </Link>
          <Link href="/about">
            <a className="hover:text-gray-200">À Propos</a>
          </Link>
          <Link href="/news">
            <a className="hover:text-gray-200">Nouvelle</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;