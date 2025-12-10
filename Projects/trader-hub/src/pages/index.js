import React, { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [email, setEmail] = useState('');
  const primaryColor = "#1F2937";
  const secondaryColor = "#3B82F6";
  const accentColor = "#FBBF24";

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert('Thanks for subscribing!');
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="py-20 px-4" style={{ background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})` }}>
        <div className="max-w-6xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Trader Hub</h1>
          <p className="text-xl md:text-2xl mb-4">Trade smart, trade together.</p>
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto">A comprehensive platform for traders to analyze markets and execute trades.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/about" className="px-8 py-4 bg-white rounded-xl hover:bg-gray-100 text-lg font-bold transition-all transform hover:scale-105" style={{ color: primaryColor }}>
              Learn More
            </Link>
            <Link href="/contact" className="px-8 py-4 rounded-xl text-white text-lg font-bold transition-all transform hover:scale-105" style={{ backgroundColor: accentColor }}>
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4" style={{ color: primaryColor }}>Key Features</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">Everything you need to succeed</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
            <div className="w-16 h-16 rounded-xl mb-4 flex items-center justify-center text-white text-2xl font-bold" style={{ backgroundColor: '#FBBF24' }}>
              1
            </div>
            <h3 className="text-2xl font-bold mb-3" style={{ color: '#1F2937' }}>Market analysis tools</h3>
            <p className="text-gray-600">Experience the power of market analysis tools in your workflow.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
            <div className="w-16 h-16 rounded-xl mb-4 flex items-center justify-center text-white text-2xl font-bold" style={{ backgroundColor: '#FBBF24' }}>
              2
            </div>
            <h3 className="text-2xl font-bold mb-3" style={{ color: '#1F2937' }}>Real-time trade execution</h3>
            <p className="text-gray-600">Experience the power of real-time trade execution in your workflow.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
            <div className="w-16 h-16 rounded-xl mb-4 flex items-center justify-center text-white text-2xl font-bold" style={{ backgroundColor: '#FBBF24' }}>
              3
            </div>
            <h3 className="text-2xl font-bold mb-3" style={{ color: '#1F2937' }}>Community discussion forums</h3>
            <p className="text-gray-600">Experience the power of community discussion forums in your workflow.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
            <div className="w-16 h-16 rounded-xl mb-4 flex items-center justify-center text-white text-2xl font-bold" style={{ backgroundColor: '#FBBF24' }}>
              4
            </div>
            <h3 className="text-2xl font-bold mb-3" style={{ color: '#1F2937' }}>Portfolio management</h3>
            <p className="text-gray-600">Experience the power of portfolio management in your workflow.</p>
          </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center bg-white rounded-2xl shadow-xl p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: primaryColor }}>Stay Updated</h2>
          <p className="text-lg text-gray-600 mb-8">Subscribe to our newsletter for the latest updates</p>
          <form onSubmit={handleSubscribe} className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:outline-none"
              style={{ borderColor: primaryColor }}
              required
            />
            <button type="submit" className="px-8 py-3 text-white rounded-xl font-bold hover:opacity-90 transition" style={{ backgroundColor: primaryColor }}>
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 px-4 text-white" style={{ backgroundColor: primaryColor }}>
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-lg">&copy; 2024 Trader Hub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
