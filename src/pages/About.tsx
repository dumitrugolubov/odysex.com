import React from 'react';
import SEO from '../components/SEO';

export default function About() {
  return (
    <>
      <SEO
        title="À propos d'Odyssey Exchange"
        description="Découvrez Odyssey Exchange, la plateforme de trading de cryptomonnaies innovante avec 0% de commission spot et un effet de levier jusqu'à 777x. Leader du trading en France."
        keywords="Odyssey Exchange, trading crypto France, plateforme trading, commission 0%, effet de levier crypto, Ody Exchange"
      />
      <div className="min-h-screen bg-gray-900 pt-24">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-white mb-8">À propos d'Odyssey Exchange</h1>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 text-lg mb-6">
              Odyssey Exchange révolutionne le trading de cryptomonnaies en France avec une approche innovante et des conditions uniques sur le marché.
            </p>
            <p className="text-gray-300 text-lg mb-6">
              Fondée avec la vision de démocratiser l'accès au trading de cryptomonnaies, notre plateforme combine technologie de pointe et conditions de trading exceptionnelles.
            </p>
            <h2 className="text-3xl font-bold text-white mt-8 mb-6">Nos Avantages Uniques</h2>
            <ul className="list-disc list-inside text-gray-300 text-lg mb-6">
              <li>Commission spot 0% pour tous les traders</li>
              <li>Effet de levier jusqu'à 777x pour maximiser vos positions</li>
              <li>Retours de 10% sur les liquidations</li>
              <li>Programme partenaire généreux avec jusqu'à 50% de commission</li>
            </ul>
            <h2 className="text-3xl font-bold text-white mt-8 mb-6">Notre Engagement</h2>
            <p className="text-gray-300 text-lg mb-6">
              Nous nous engageons à fournir une expérience de trading sécurisée, transparente et performante. Notre support client disponible 24/7 et notre infrastructure robuste garantissent une expérience utilisateur optimale.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}