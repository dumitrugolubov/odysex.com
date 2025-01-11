import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-900/50 backdrop-blur-sm fixed w-full z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold">Odyssey Exchange</Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/about" className="text-gray-300 hover:text-white">À propos</Link>
            <Link to="/features" className="text-gray-300 hover:text-white">Fonctionnalités</Link>
            <Link to="/partners" className="text-gray-300 hover:text-white">Partenaires</Link>
            <a href="/exchange" className="text-gray-300 hover:text-white">Exchange</a>
          </div>
          <button 
            onClick={toggleMenu}
            className="md:hidden text-gray-300 hover:text-white"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/about"
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                À propos
              </Link>
              <Link
                to="/features"
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Fonctionnalités
              </Link>
              <Link
                to="/partners"
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Partenaires
              </Link>
              <a
                href="/exchange"
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Exchange
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}