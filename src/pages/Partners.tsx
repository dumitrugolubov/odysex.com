import React from 'react';
import SEO from '../components/SEO';
import { Users, DollarSign, BarChart, Globe } from 'lucide-react';

export default function Partners() {
  return (
    <>
      <SEO
        title="Programme Partenaires"
        description="Rejoignez le programme partenaires d'Odyssey Exchange et gagnez jusqu'à 50% de commission sur les trades. Programme d'affiliation crypto le plus généreux en France."
        keywords="programme partenaire crypto, affiliation trading crypto, commission trading crypto, Odyssey Exchange partenaires, Ody Exchange affiliation"
      />
      <div className="min-h-screen bg-gray-900 pt-24">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">Programme Partenaires</h1>
          <p className="text-xl text-gray-300 text-center mb-12">
            Rejoignez notre programme partenaire et gagnez jusqu'à 50% de commission sur les trades de vos affiliés.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-800 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-6">Avantages</h2>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-300">
                  <DollarSign className="w-6 h-6 text-green-500 mr-3" />
                  Commissions jusqu'à 50%
                </li>
                <li className="flex items-center text-gray-300">
                  <BarChart className="w-6 h-6 text-blue-500 mr-3" />
                  Tableau de bord détaillé
                </li>
                <li className="flex items-center text-gray-300">
                  <Globe className="w-6 h-6 text-purple-500 mr-3" />
                  Support marketing personnalisé
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-6">Comment ça marche</h2>
              <ol className="space-y-4 list-decimal list-inside text-gray-300">
                <li>Inscrivez-vous au programme partenaire</li>
                <li>Recevez votre lien d'affiliation unique</li>
                <li>Partagez votre lien avec votre communauté</li>
                <li>Gagnez des commissions sur chaque trade</li>
              </ol>
            </div>
          </div>
          
          <div className="text-center">
            <a
              href="/exchange"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
            >
              Devenir Partenaire
              <Users className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}