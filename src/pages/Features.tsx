import React from 'react';
import SEO from '../components/SEO';
import { Rocket, Shield, Users } from 'lucide-react';

export default function Features() {
  return (
    <>
      <SEO
        title="Fonctionnalités"
        description="Découvrez les fonctionnalités uniques d'Odyssey Exchange : commission 0%, effet de levier 777x, programme partenaires avantageux et sécurité maximale."
        keywords="trading crypto sans commission, effet de levier crypto, programme partenaire crypto, Odyssey Exchange fonctionnalités, Ody Exchange trading"
      />
      <div className="min-h-screen bg-gray-900 pt-24">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-white mb-12 text-center">Fonctionnalités</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="bg-blue-500/10 p-4 rounded-full w-16 h-16 mb-6 flex items-center justify-center">
                <Rocket className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Commission 0%</h3>
              <p className="text-gray-300">Tradez sans frais sur tous les marchés spot, maximisez vos profits.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="bg-purple-500/10 p-4 rounded-full w-16 h-16 mb-6 flex items-center justify-center">
                <Shield className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Levier 777x</h3>
              <p className="text-gray-300">Profitez d'un effet de levier puissant pour maximiser vos positions.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="bg-pink-500/10 p-4 rounded-full w-16 h-16 mb-6 flex items-center justify-center">
                <Users className="w-8 h-8 text-pink-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Programme Partenaires</h3>
              <p className="text-gray-300">Gagnez jusqu'à 50% de commission en tant que partenaire.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}