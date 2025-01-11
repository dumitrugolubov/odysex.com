import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-4">Odyssey Exchange</h3>
            <p className="text-sm">La plateforme de trading de cryptomonnaies nouvelle génération</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-white">À propos</Link></li>
              <li><Link to="/features" className="hover:text-white">Fonctionnalités</Link></li>
              <li><Link to="/partners" className="hover:text-white">Programme Partenaires</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Légal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy" className="hover:text-white">Politique de confidentialité</Link></li>
              <li><Link to="/terms" className="hover:text-white">Conditions d'utilisation</Link></li>
              <li><Link to="/gdpr" className="hover:text-white">RGPD</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>odyexchange@gmail.com</li>
            </ul>
          </div>
        </div>
        <div className="mt-12">
          <a
            href="/exchange"
            className="block w-full py-4 text-center text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 text-white"
          >
            Commencer à trader sur Odyssey Exchange
          </a>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Odyssey Exchange. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}