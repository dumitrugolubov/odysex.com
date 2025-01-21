import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { ArrowRight, Rocket, Shield, Users } from 'lucide-react';
import CookieConsent from './components/CookieConsent';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';
import Features from './pages/Features';
import Partners from './pages/Partners';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import GDPR from './pages/GDPR';
import Exchange from './pages/Exchange';
import SEO from './components/SEO'; // Assuming SEO component is defined in this file

function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <main className="relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/hero-bg.webp)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-900/90 to-gray-900/80"></div>
        <div className="container mx-auto px-4 py-32 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
              La Révolution du Trading de Cryptomonnaies
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-gray-300">
              Commission spot 0% • Effet de levier jusqu'à 777x • Retours de 10% sur les liquidations
            </p>
            <a
              href="/exchange"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
            >
              Commencer à trader
              <ArrowRight className="ml-2" />
            </a>
          </div>
        </div>
      </main>

      {/* Features */}
      <section className="py-20 bg-gray-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl">
              <div className="bg-blue-500/10 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Rocket className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Commission 0%</h3>
              <p className="text-gray-400">Tradez sans frais sur tous les marchés spot</p>
            </div>
            <div className="text-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl">
              <div className="bg-purple-500/10 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Shield className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Levier jusqu'à 777x</h3>
              <p className="text-gray-400">Maximisez vos positions avec notre effet de levier</p>
            </div>
            <div className="text-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl">
              <div className="bg-pink-500/10 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Users className="w-8 h-8 text-pink-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Programme Partenaires</h3>
              <p className="text-gray-400">Gagnez jusqu'à 50% de commission</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function NotFoundPage() {
  const location = useLocation();
  const removedPages = ['/birthday-party-gangbang'];
  
  useEffect(() => {
    if (removedPages.includes(location.pathname)) {
      const meta = document.createElement('meta');
      meta.httpEquiv = 'status';
      meta.content = '410 Gone';
      document.head.appendChild(meta);
    }
  }, [location]);

  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you are looking for does not exist."
        noindex={true}
      />
      <div className="min-h-screen bg-gray-900 pt-24">
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">404 - Page Not Found</h1>
          <p className="text-gray-300 mb-8">The page you are looking for does not exist.</p>
          <a
            href="/"
            className="inline-flex items-center px-6 py-3 text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
          >
            Return Home
          </a>
        </div>
      </div>
    </>
  );
}

function App() {
  const [showCookieConsent, setShowCookieConsent] = useState(true);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/gdpr" element={<GDPR />} />
          <Route path="/exchange" element={<Exchange />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
      {showCookieConsent && (
        <CookieConsent onAccept={() => setShowCookieConsent(false)} />
      )}
    </div>
  );
}

export default App;