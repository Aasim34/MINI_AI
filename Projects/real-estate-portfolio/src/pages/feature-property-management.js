import React from 'react';
import Link from 'next/link';

export default function FeatureDetail() {
  const primaryColor = "#4A90E2";
  const secondaryColor = "#50E3C2";
  const accentColor = "#D0021B";
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link href="/" className="text-indigo-600 font-semibold">← Back to Home</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4" style={{ background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})` }}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl font-bold mb-4">"Property Management Features"</h1>
          <p className="text-2xl opacity-90">"Efficiently manage your real estate portfolio with ease!"</p>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-white rounded-xl shadow-lg p-8 -mt-20 relative z-10">
          <p className="text-xl text-gray-700 leading-relaxed">"The Property Management feature in Real Estate Portfolio simplifies managing multiple properties. Track tenants, monitor expenses, and streamline maintenance requests seamlessly."</p>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Key Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: "#4A90E2" }}>
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Centralized Management"</h3>
            <p className="text-gray-600">"Manage all your properties in one place for better oversight."</p>
          </div>\n          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: "#4A90E2" }}>
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Tenant Tracking"</h3>
            <p className="text-gray-600">"Easily monitor tenant information and lease agreements."</p>
          </div>\n          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: "#4A90E2" }}>
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Maintenance Management"</h3>
            <p className="text-gray-600">"Streamline maintenance requests for quick resolution."</p>
          </div>\n          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: "#4A90E2" }}>
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Financial Insights"</h3>
            <p className="text-gray-600">"Gain valuable insights into property performance and expenses."</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">How It Works</h2>
        <div className="space-y-8">
          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: "#4A90E2" }}>
              1
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Add Properties"</h3>
              <p className="text-gray-600">"Start by adding your properties to the system, including details like location, type, and size."</p>
            </div>
          </div>\n          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: "#4A90E2" }}>
              2
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Manage Tenants"</h3>
              <p className="text-gray-600">"Input tenant information and lease details for effective tracking and management."</p>
            </div>
          </div>\n          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: "#4A90E2" }}>
              3
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Track Expenses"</h3>
              <p className="text-gray-600">"Record and categorize all expenses related to each property for better financial oversight."</p>
            </div>
          </div>\n          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: "#4A90E2" }}>
              4
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Handle Maintenance Requests"</h3>
              <p className="text-gray-600">"Set up a system for tenants to submit maintenance requests and track their resolution."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="max-w-6xl mx-auto px-4 py-16 bg-white">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Use Cases</h2>
        <div className="space-y-6">
          <div className="border-l-4 pl-6 py-4" style={{ borderColor: "#D0021B" }}>
            <h3 className="text-lg font-bold text-gray-900 mb-2">"Vacation Rental Management"</h3>
            <p className="text-gray-600 mb-2">"Perfect for managing short-term rentals and guest bookings."</p>
            <p className="text-sm text-gray-500 italic">"A property manager uses this feature to track bookings, payments, and guest reviews."</p>
          </div>\n          <div className="border-l-4 pl-6 py-4" style={{ borderColor: "#D0021B" }}>
            <h3 className="text-lg font-bold text-gray-900 mb-2">"Long-Term Leasing"</h3>
            <p className="text-gray-600 mb-2">"Ideal for landlords managing multiple long-term lease agreements."</p>
            <p className="text-sm text-gray-500 italic">"An apartment owner monitors renewals and tenant communications effectively."</p>
          </div>\n          <div className="border-l-4 pl-6 py-4" style={{ borderColor: "#D0021B" }}>
            <h3 className="text-lg font-bold text-gray-900 mb-2">"Commercial Property Oversight"</h3>
            <p className="text-gray-600 mb-2">"Manage commercial properties with complex tenant agreements."</p>
            <p className="text-sm text-gray-500 italic">"A commercial real estate firm tracks multiple tenants and their specific needs."</p>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Technical Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">"Data Security"</h4>
            <p className="text-gray-600 text-sm">"All tenant and property data is securely stored with encryption."</p>
          </div>\n          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">"User Interface"</h4>
            <p className="text-gray-600 text-sm">"Intuitive and user-friendly interface for easy navigation and management."</p>
          </div>\n          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">"Integration"</h4>
            <p className="text-gray-600 text-sm">"Seamlessly integrates with finance and maintenance software for enhanced functionality."</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4" style={{ backgroundColor: primaryColor }}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">"Start managing your properties today!"</h2>
          <button className="bg-white px-8 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105" style={{ color: primaryColor }}>
            "Get Started"
          </button>
        </div>
      </section>
    </div>
  );
}
