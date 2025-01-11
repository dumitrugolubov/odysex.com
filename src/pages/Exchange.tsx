import React, { useEffect } from 'react';
import SEO from '../components/SEO';

export default function Exchange() {
  useEffect(() => {
    window.location.href = 'https://www.odyssey.trade/en_US/register?inviteCode=EAATH';
  }, []);

  return (
    <>
      <SEO
        title="Redirection vers Odyssey Exchange"
        description="Redirection vers la plateforme de trading Odyssey Exchange"
        noindex={true}
      />
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Redirection en cours...</h1>
          <p className="text-gray-300">
            Vous allez être redirigé vers la plateforme Odyssey Exchange.
          </p>
        </div>
      </div>
    </>
  );
}