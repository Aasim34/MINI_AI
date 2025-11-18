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
          <h1 className="text-5xl font-bold mb-4">"Search and Filter Functionality"</h1>
          <p className="text-2xl opacity-90">"Effortlessly find the perfect dog walker for your pup!"</p>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-white rounded-xl shadow-lg p-8 -mt-20 relative z-10">
          <p className="text-xl text-gray-700 leading-relaxed">"Our search and filter functionality allows users to swiftly find dog walkers based on specific criteria. Customize your search with various filters to match your dog's needs and preferences."</p>
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
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Tailored Results"</h3>
            <p className="text-gray-600">"Find walkers that meet your unique requirements quickly."</p>
          </div>\n          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: "#FFCC00" }}>
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Enhanced User Experience"</h3>
            <p className="text-gray-600">"Navigate through options seamlessly for a smoother experience."</p>
          </div>\n          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: "#FFCC00" }}>
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Time-Saving"</h3>
            <p className="text-gray-600">"Filter by distance, ratings, and availability to save time."</p>
          </div>\n          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: "#FFCC00" }}>
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Informed Choices"</h3>
            <p className="text-gray-600">"Make educated decisions with access to detailed reviews."</p>
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
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Access the Search Bar"</h3>
              <p className="text-gray-600">"Open the app and locate the search bar at the top of the marketplace page."</p>
            </div>
          </div>\n          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: "#FFCC00" }}>
              2
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Set Your Filters"</h3>
              <p className="text-gray-600">"Choose filters such as location, price range, and walker ratings to refine your search."</p>
            </div>
          </div>\n          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: "#FFCC00" }}>
              3
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Browse Results"</h3>
              <p className="text-gray-600">"Review the list of available dog walkers that fit your criteria and preferences."</p>
            </div>
          </div>\n          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: "#FFCC00" }}>
              4
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Select and Book"</h3>
              <p className="text-gray-600">"Choose your preferred dog walker and proceed to book a walking session with them."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="max-w-6xl mx-auto px-4 py-16 bg-white">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Use Cases</h2>
        <div className="space-y-6">
          <div className="border-l-4 pl-6 py-4" style={{ borderColor: "#FF5733" }}>
            <h3 className="text-lg font-bold text-gray-900 mb-2">"Finding Local Walkers"</h3>
            <p className="text-gray-600 mb-2">"Easily search for dog walkers in your neighborhood for convenience."</p>
            <p className="text-sm text-gray-500 italic">"A user filters results to show only walkers within a 5-mile radius."</p>
          </div>\n          <div className="border-l-4 pl-6 py-4" style={{ borderColor: "#FF5733" }}>
            <h3 className="text-lg font-bold text-gray-900 mb-2">"Special Needs Walkers"</h3>
            <p className="text-gray-600 mb-2">"Filter for walkers experienced with specific dog breeds or behaviors."</p>
            <p className="text-sm text-gray-500 italic">"A user searches for dog walkers skilled in handling anxious dogs."</p>
          </div>\n          <div className="border-l-4 pl-6 py-4" style={{ borderColor: "#FF5733" }}>
            <h3 className="text-lg font-bold text-gray-900 mb-2">"Budget-Friendly Options"</h3>
            <p className="text-gray-600 mb-2">"Set price range filters to find walkers that fit your budget."</p>
            <p className="text-sm text-gray-500 italic">"A user adjusts filters to show walkers under $15 per walk."</p>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Technical Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">"Search Algorithm"</h4>
            <p className="text-gray-600 text-sm">"Utilizes a robust algorithm to quickly retrieve relevant dog walkers based on filters."</p>
          </div>\n          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">"Real-time Data"</h4>
            <p className="text-gray-600 text-sm">"Integrates real-time availability and location data for accurate search results."</p>
          </div>\n          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">"User Interface"</h4>
            <p className="text-gray-600 text-sm">"Designed with an intuitive interface for easy navigation of search and filter options."</p>
          </div>\n          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">"Scalable Infrastructure"</h4>
            <p className="text-gray-600 text-sm">"Built on a scalable system to handle multiple user queries simultaneously without lag."</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4" style={{ backgroundColor: primaryColor }}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">"Start Your Search for the Perfect Dog Walker!"</h2>
          <button className="bg-white px-8 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105" style={{ color: primaryColor }}>
            "Find Walkers Now"
          </button>
        </div>
      </section>
    </div>
  );
}
