import React, { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [email, setEmail] = useState('');

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
      <div className="py-20 px-4 bg-gradient-to-br from-primary-light to-primary">
        <div className="max-w-6xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">An Mi Laptop Website</h1>
          <p className="text-xl md:text-2xl mb-4">Find your perfect laptop match!</p>
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto">A dedicated platform for browsing and comparing laptops tailored for personal needs.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/about" className="px-8 py-4 bg-white rounded-xl hover:bg-gray-100 text-lg font-bold transition-all transform hover:scale-105 text-primary">
              Learn More
            </Link>
            <Link href="/contact" className="px-8 py-4 rounded-xl text-white text-lg font-bold transition-all transform hover:scale-105 bg-primary-dark">
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">Key Features</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">Everything you need to succeed</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
            <div className="w-16 h-16 rounded-xl mb-4 flex items-center justify-center text-white text-2xl font-bold bg-primary-dark">
              1
            </div>
            <h3 className="text-2xl font-bold mb-3 text-primary">Laptop comparison tool</h3>
            <p className="text-gray-600">Experience the power of laptop comparison tool in your workflow.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
            <div className="w-16 h-16 rounded-xl mb-4 flex items-center justify-center text-white text-2xl font-bold bg-primary-dark">
              2
            </div>
            <h3 className="text-2xl font-bold mb-3 text-primary">User reviews and ratings</h3>
            <p className="text-gray-600">Experience the power of user reviews and ratings in your workflow.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
            <div className="w-16 h-16 rounded-xl mb-4 flex items-center justify-center text-white text-2xl font-bold bg-primary-dark">
              3
            </div>
            <h3 className="text-2xl font-bold mb-3 text-primary">Personalized recommendations</h3>
            <p className="text-gray-600">Experience the power of personalized recommendations in your workflow.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
            <div className="w-16 h-16 rounded-xl mb-4 flex items-center justify-center text-white text-2xl font-bold bg-primary-dark">
              4
            </div>
            <h3 className="text-2xl font-bold mb-3 text-primary">Latest deals and offers</h3>
            <p className="text-gray-600">Experience the power of latest deals and offers in your workflow.</p>
          </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center bg-white rounded-2xl shadow-xl p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Stay Updated</h2>
          <p className="text-lg text-gray-600 mb-8">Subscribe to our newsletter for the latest updates</p>
          <form onSubmit={handleSubscribe} className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 border border-primary rounded-xl focus:ring-2 focus:outline-none"
              required
            />
            <button type="submit" className="px-8 py-3 text-white rounded-xl font-bold hover:opacity-90 transition bg-primary">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 px-4 text-white bg-primary">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-lg">&copy; 2024 An Mi Laptop Website. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
