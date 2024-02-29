const Footer: React.FC = () => {
    const year = new Date().getFullYear(); // Dynamiquement obtenir l'année actuelle
  
    return (
      <footer className="bg-gray-800 text-white text-center p-4 mt-8 w-full">
        <div className="container mx-auto">
          <p className="text-sm">
            &copy; {year} NextNews. Tous droits réservés.
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;