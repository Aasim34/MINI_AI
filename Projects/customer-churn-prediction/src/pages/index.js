import React, { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const projectName = "Customer Churn Prediction";
  const projectInitial = "C";
  const primaryColor = "#007BFF";
  const secondaryColor = "#FFC107";
  const accentColor = "#28A745";

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setEmail('');
        setSubmitted(false);
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold" style={{ backgroundColor: primaryColor }}>
              {projectInitial}
            </div>
            <h1 className="ml-3 text-2xl font-bold" style={{ color: primaryColor }}>{projectName}</h1>
          </div>
          <div className="hidden md:flex space-x-8 text-gray-700">
            <Link href="#features" className="hover:opacity-70 transition">Features</Link>
            <Link href="/services" className="hover:opacity-70 transition">Services</Link>
            <Link href="/pricing" className="hover:opacity-70 transition">Pricing</Link>
            <Link href="/about" className="hover:opacity-70 transition">About</Link>
            <Link href="/contact" className="hover:opacity-70 transition">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h2 className="text-6xl md:text-7xl font-bold mb-6 leading-tight text-gray-900">
          "Predict Customer Churn Before It Happens"
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          "A full-stack application that predicts customer churn using machine learning algorithms, helping businesses identify at-risk customers and take proactive measures."
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="text-white px-8 py-4 rounded-xl font-bold transition transform hover:scale-105" style={{ backgroundColor: primaryColor }}>
            Get Started Now
          </button>
          <button className="text-white px-8 py-4 rounded-xl font-bold transition" style={{ backgroundColor: secondaryColor }}>
            Learn More
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h3 className="text-5xl font-bold text-center mb-16 text-gray-900">Why Choose Us</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Link href="/feature-data-analysis-dashboard" className="block">
          <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 border border-gray-100 cursor-pointer">
            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 text-white font-bold text-xl" style={{ backgroundColor: '#007BFF' }}>
              ✓
            </div>
            <h3 className="text-xl font-bold mb-3">Data Analysis Dashboard</h3>
            <p className="text-gray-600 leading-relaxed">Discover how data analysis dashboard can transform your workflow with our advanced solution.</p>
            <span className="mt-4 inline-block font-semibold transition" style={{ color: '#007BFF' }}>
              Learn more →
            </span>
          </div>
        </Link>
        <Link href="/feature-churn-prediction-model" className="block">
          <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 border border-gray-100 cursor-pointer">
            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 text-white font-bold text-xl" style={{ backgroundColor: '#007BFF' }}>
              ✓
            </div>
            <h3 className="text-xl font-bold mb-3">Churn Prediction Model</h3>
            <p className="text-gray-600 leading-relaxed">Discover how churn prediction model can transform your workflow with our advanced solution.</p>
            <span className="mt-4 inline-block font-semibold transition" style={{ color: '#007BFF' }}>
              Learn more →
            </span>
          </div>
        </Link>
        <Link href="/feature-customer-segmentation" className="block">
          <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 border border-gray-100 cursor-pointer">
            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 text-white font-bold text-xl" style={{ backgroundColor: '#007BFF' }}>
              ✓
            </div>
            <h3 className="text-xl font-bold mb-3">Customer Segmentation</h3>
            <p className="text-gray-600 leading-relaxed">Discover how customer segmentation can transform your workflow with our advanced solution.</p>
            <span className="mt-4 inline-block font-semibold transition" style={{ color: '#007BFF' }}>
              Learn more →
            </span>
          </div>
        </Link>
        <Link href="/feature-real-time-alerts-for-high-risk-customers" className="block">
          <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 border border-gray-100 cursor-pointer">
            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 text-white font-bold text-xl" style={{ backgroundColor: '#007BFF' }}>
              ✓
            </div>
            <h3 className="text-xl font-bold mb-3">Real-time Alerts for High-Risk Customers</h3>
            <p className="text-gray-600 leading-relaxed">Discover how real-time alerts for high-risk customers can transform your workflow with our advanced solution.</p>
            <span className="mt-4 inline-block font-semibold transition" style={{ color: '#007BFF' }}>
              Learn more →
            </span>
          </div>
        </Link>
        <Link href="/feature-reporting-and-analytics" className="block">
          <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 border border-gray-100 cursor-pointer">
            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 text-white font-bold text-xl" style={{ backgroundColor: '#007BFF' }}>
              ✓
            </div>
            <h3 className="text-xl font-bold mb-3">Reporting and Analytics</h3>
            <p className="text-gray-600 leading-relaxed">Discover how reporting and analytics can transform your workflow with our advanced solution.</p>
            <span className="mt-4 inline-block font-semibold transition" style={{ color: '#007BFF' }}>
              Learn more →
            </span>
          </div>
        </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 rounded-2xl mb-20 text-white text-center" style={{ backgroundColor: primaryColor }}>
        <h3 className="text-4xl font-bold mb-4">Ready to Transform?</h3>
        <p className="text-lg mb-8 opacity-90">Join thousands of users already benefiting from {projectName}</p>
        <button className="text-lg px-8 py-3 rounded-xl font-bold transition transform hover:scale-105" style={{ backgroundColor: accentColor, color: 'white' }}>
          Start Free Trial
        </button>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h3>
          <p className="text-gray-600 mb-8">Subscribe for latest updates and exclusive offers</p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="text-white px-6 py-3 rounded-lg font-bold transition"
              style={{ backgroundColor: primaryColor }}
            >
              {submitted ? 'Thank you!' : 'Subscribe'}
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms</a></li>
                <li><a href="#" className="hover:text-white transition">Cookies</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition">GitHub</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 {projectName}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
