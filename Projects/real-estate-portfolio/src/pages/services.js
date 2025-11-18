import React from 'react';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      icon: '🚀',
      title: 'Fast Performance',
      description: 'Lightning-fast loading speeds and optimized performance for the best user experience.'
    },
    {
      icon: '🔒',
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and 99.9% uptime guarantee to keep your data safe.'
    },
    {
      icon: '📱',
      title: 'Mobile Responsive',
      description: 'Perfect on all devices - desktop, tablet, and mobile phones.'
    },
    {
      icon: '🎨',
      title: 'Beautiful Design',
      description: 'Modern, clean interface designed for optimal user engagement and satisfaction.'
    },
    {
      icon: '🔧',
      title: 'Easy Integration',
      description: 'Seamless integration with your existing tools and platforms.'
    },
    {
      icon: '24/7',
      title: '24/7 Support',
      description: 'Round-the-clock support team ready to help whenever you need.'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="text-indigo-600 font-semibold text-lg">← Back</Link>
          <h1 className="text-2xl font-bold text-gray-900">Services</h1>
          <div></div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions designed to help your business grow and succeed in the digital world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
              <button className="mt-6 text-indigo-600 hover:text-indigo-700 font-semibold transition">
                Learn More →
              </button>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-lg mb-8 opacity-90">Choose the plan that works best for you and start today.</p>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
            View Pricing
          </button>
        </div>
      </div>
    </div>
  );
}
