import React from 'react';

interface CookieConsentProps {
  onAccept: () => void;
}

export default function CookieConsent({ onAccept }: CookieConsentProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 p-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-gray-300 mb-4 md:mb-0">
          Nous utilisons des cookies pour améliorer votre expérience sur notre site. En continuant à naviguer, vous acceptez notre utilisation des cookies.
        </p>
        <div className="flex space-x-4">
          <button
            onClick={onAccept}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Accepter
          </button>
          <a
            href="/privacy"
            className="px-4 py-2 border border-gray-600 text-gray-300 rounded hover:bg-gray-800"
          >
            En savoir plus
          </a>
        </div>
      </div>
    </div>
  );
}