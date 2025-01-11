import React from 'react';
import SEO from '../components/SEO';

export default function GDPR() {
  return (
    <>
      <SEO
        title="Conformité RGPD"
        description="Découvrez notre conformité RGPD et comment nous protégeons vos données personnelles chez Odyssey Exchange, en accord avec la législation européenne."
        keywords="RGPD crypto, protection données trading, conformité RGPD exchange, Odyssey Exchange RGPD, Ody Exchange protection données"
      />
      <div className="min-h-screen bg-gray-900 pt-24">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-white mb-8">Conformité RGPD</h1>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-6">
              Conformément au Règlement Général sur la Protection des Données (RGPD), nous nous engageons à protéger vos données personnelles.
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Vos Droits</h2>
            <p className="text-gray-300 mb-4">
              Vous disposez des droits suivants concernant vos données personnelles :
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-6">
              <li>Droit d'accès</li>
              <li>Droit de rectification</li>
              <li>Droit à l'effacement</li>
              <li>Droit à la portabilité</li>
              <li>Droit d'opposition</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Exercer vos Droits</h2>
            <p className="text-gray-300 mb-6">
              Pour exercer vos droits ou pour toute question concernant le traitement de vos données, contactez notre délégué à la protection des données à odyexchange@gmail.com.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Conservation des Données</h2>
            <p className="text-gray-300 mb-6">
              Nous conservons vos données uniquement pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}