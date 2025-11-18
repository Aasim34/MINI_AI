import React from 'react';
import Link from 'next/link';

export default function FeatureDetail() {
  const primaryColor = "#FFCC00";
  const secondaryColor = "#007BFF";
  const accentColor = "#FF5733";
  
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
          <h1 className="text-5xl font-bold mb-4">"Real-time GPS Tracking for Dog Walkers"</h1>
          <p className="text-2xl opacity-90">"Track your dog's walk in real-time for peace of mind."</p>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-white rounded-xl shadow-lg p-8 -mt-20 relative z-10">
          <p className="text-xl text-gray-700 leading-relaxed">"Our real-time GPS tracking feature allows pet owners to monitor their dog's walks live. Enjoy peace of mind knowing exactly where your furry friend is at all times."</p>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Key Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: "#FFCC00" }}>
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Enhanced Safety"</h3>
            <p className="text-gray-600">"Keep your dog safe by tracking their location during walks."</p>
          </div>\n          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: "#FFCC00" }}>
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Live Updates"</h3>
            <p className="text-gray-600">"Receive instant updates about your dog's route and status."</p>
          </div>\n          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: "#FFCC00" }}>
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Peace of Mind"</h3>
            <p className="text-gray-600">"Know your dog is in good hands while you're away."</p>
          </div>\n          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: "#FFCC00" }}>
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Transparent Service"</h3>
            <p className="text-gray-600">"View the exact path taken by the walker for added transparency."</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">How It Works</h2>
        <div className="space-y-8">
          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: "#FFCC00" }}>
              1
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Select a Dog Walker"</h3>
              <p className="text-gray-600">"Choose a qualified dog walker from our marketplace and schedule a walk."</p>
            </div>
          </div>\n          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: "#FFCC00" }}>
              2
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Track in Real-Time"</h3>
              <p className="text-gray-600">"Once the walk starts, you can monitor your dog's location on the map via the app."</p>
            </div>
          </div>\n          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: "#FFCC00" }}>
              3
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Receive Notifications"</h3>
              <p className="text-gray-600">"Get live notifications about your dog's walk, including duration and route taken."</p>
            </div>
          </div>\n          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: "#FFCC00" }}>
              4
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Review the Walk"</h3>
              <p className="text-gray-600">"After the walk, review the GPS data and provide feedback on the walker."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="max-w-6xl mx-auto px-4 py-16 bg-white">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Use Cases</h2>
        <div className="space-y-6">
          <div className="border-l-4 pl-6 py-4" style={{ borderColor: "#FF5733" }}>
            <h3 className="text-lg font-bold text-gray-900 mb-2">"Busy Professionals"</h3>
            <p className="text-gray-600 mb-2">"Perfect for professionals needing reassurance during work hours."</p>
            <p className="text-sm text-gray-500 italic">"Monitor your dog while you're at the office."</p>
          </div>\n          <div className="border-l-4 pl-6 py-4" style={{ borderColor: "#FF5733" }}>
            <h3 className="text-lg font-bold text-gray-900 mb-2">"Traveling Pet Owners"</h3>
            <p className="text-gray-600 mb-2">"Ideal for owners who are away and want to keep an eye on their pet."</p>
            <p className="text-sm text-gray-500 italic">"Check your dog's walk while on vacation."</p>
          </div>\n          <div className="border-l-4 pl-6 py-4" style={{ borderColor: "#FF5733" }}>
            <h3 className="text-lg font-bold text-gray-900 mb-2">"New Pet Owners"</h3>
            <p className="text-gray-600 mb-2">"Great for first-time dog owners wanting to ensure safety."</p>
            <p className="text-sm text-gray-500 italic">"Feel secure while your new puppy is being walked."</p>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Technical Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">"GPS Accuracy"</h4>
            <p className="text-gray-600 text-sm">"Utilizes advanced GPS technology to provide precise location tracking."</p>
          </div>\n          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">"User Interface"</h4>
            <p className="text-gray-600 text-sm">"Easy-to-use interface that displays live tracking on a map."</p>
          </div>\n          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">"Data Security"</h4>
            <p className="text-gray-600 text-sm">"All location data is encrypted to ensure privacy and security."</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4" style={{ backgroundColor: primaryColor }}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">"Start Tracking Your Dog's Walk Today!"</h2>
          <button className="bg-white px-8 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105" style={{ color: primaryColor }}>
            "Find a Walker"
          </button>
        </div>
      </section>
    </div>
  );
}
