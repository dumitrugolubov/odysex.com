import React from 'react';
import SEO from '../components/SEO';

export default function Terms() {
  return (
    <>
      <SEO
        title="Conditions d'Utilisation"
        description="Conditions d'utilisation d'Odyssey Exchange. Informations importantes sur nos services de trading de cryptomonnaies et vos responsabilités."
        keywords="conditions trading crypto, termes utilisation exchange, Odyssey Exchange conditions, Ody Exchange règlement"
      />
      <div className="min-h-screen bg-gray-900 pt-24">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-white mb-8">Conditions d'Utilisation</h1>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-6">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
            </p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Acceptation des Conditions</h2>
            <p className="text-gray-300 mb-6">
              En utilisant Odyssey Exchange, vous acceptez ces conditions d'utilisation dans leur intégralité.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Services de Trading</h2>
            <p className="text-gray-300 mb-6">
              Nous fournissons une plateforme de trading de cryptomonnaies avec les caractéristiques suivantes :
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-6">
              <li>Trading spot avec 0% de commission</li>
              <li>Trading avec effet de levier jusqu'à 777x</li>
              <li>Retours de 10% sur les liquidations</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Risques</h2>
            <p className="text-gray-300 mb-6">
              Le trading de cryptomonnaies comporte des risques significatifs. Ne tradez que ce que vous pouvez vous permettre de perdre.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}