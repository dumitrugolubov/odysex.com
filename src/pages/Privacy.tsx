import React from 'react';
import SEO from '../components/SEO';

export default function Privacy() {
  return (
    <>
      <SEO
        title="Politique de Confidentialité"
        description="Politique de confidentialité d'Odyssey Exchange. Découvrez comment nous protégeons vos données personnelles et respectons votre vie privée."
        keywords="confidentialité crypto, protection données trading, RGPD crypto, Odyssey Exchange confidentialité, Ody Exchange sécurité"
      />
      <div className="min-h-screen bg-gray-900 pt-24">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-white mb-8">Politique de Confidentialité</h1>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-6">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Collecte des Données</h2>
            <p className="text-gray-300 mb-4">
              Nous collectons uniquement les données nécessaires au bon fonctionnement de nos services :
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-6">
              <li>Informations d'identification</li>
              <li>Données de transaction</li>
              <li>Informations de connexion</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Utilisation des Données</h2>
            <p className="text-gray-300 mb-4">
              Vos données sont utilisées pour :
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-6">
              <li>Fournir nos services de trading</li>
              <li>Assurer la sécurité de votre compte</li>
              <li>Respecter nos obligations légales</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Protection des Données</h2>
            <p className="text-gray-300 mb-4">
              Nous mettons en œuvre des mesures de sécurité strictes pour protéger vos données personnelles.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}