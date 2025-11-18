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
          <h1 className="text-5xl font-bold mb-4">"User Profiles for Dog Owners and Walkers"</h1>
          <p className="text-2xl opacity-90">"Connect, trust, and track your dog walking experience!"</p>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-white rounded-xl shadow-lg p-8 -mt-20 relative z-10">
          <p className="text-xl text-gray-700 leading-relaxed">"Our user profiles allow dog owners and walkers to connect seamlessly. With detailed profiles, users can showcase their services and preferences, ensuring a perfect match for every pup."</p>
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
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Enhanced Trust"</h3>
            <p className="text-gray-600">"Build trust through detailed profiles and verified reviews."</p>
          </div>\n          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: "#FFCC00" }}>
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Personalized Experience"</h3>
            <p className="text-gray-600">"Tailor your search based on specific dog and walker needs."</p>
          </div>\n          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: "#FFCC00" }}>
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Real-time Updates"</h3>
            <p className="text-gray-600">"Get real-time GPS tracking during your dog's walks."</p>
          </div>\n          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: "#FFCC00" }}>
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Community Reviews"</h3>
            <p className="text-gray-600">"Read and leave reviews to help others make informed choices."</p>
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
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Create Your Profile"</h3>
              <p className="text-gray-600">"Dog owners and walkers can create detailed profiles highlighting their preferences and services."</p>
            </div>
          </div>\n          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: "#FFCC00" }}>
              2
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Search and Match"</h3>
              <p className="text-gray-600">"Use filters to find the perfect dog walker or owner based on profiles and reviews."</p>
            </div>
          </div>\n          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: "#FFCC00" }}>
              3
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Book and Track"</h3>
              <p className="text-gray-600">"Book a walk and track your dog's journey in real-time through the app."</p>
            </div>
          </div>\n          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: "#FFCC00" }}>
              4
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Leave Feedback"</h3>
              <p className="text-gray-600">"After the walk, both parties can leave reviews to enhance community trust."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="max-w-6xl mx-auto px-4 py-16 bg-white">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Use Cases</h2>
        <div className="space-y-6">
          <div className="border-l-4 pl-6 py-4" style={{ borderColor: "#FF5733" }}>
            <h3 className="text-lg font-bold text-gray-900 mb-2">"Finding a Suitable Walker"</h3>
            <p className="text-gray-600 mb-2">"Easily find a walker who matches your dog's needs and temperament."</p>
            <p className="text-sm text-gray-500 italic">"A nervous dog finds a patient walker through profiles."</p>
          </div>\n          <div className="border-l-4 pl-6 py-4" style={{ borderColor: "#FF5733" }}>
            <h3 className="text-lg font-bold text-gray-900 mb-2">"Dog Walking History"</h3>
            <p className="text-gray-600 mb-2">"Review past walks and feedback to ensure quality service."</p>
            <p className="text-sm text-gray-500 italic">"Check past ratings to choose the best walker."</p>
          </div>\n          <div className="border-l-4 pl-6 py-4" style={{ borderColor: "#FF5733" }}>
            <h3 className="text-lg font-bold text-gray-900 mb-2">"Community Engagement"</h3>
            <p className="text-gray-600 mb-2">"Join a community of dog lovers, sharing experiences and tips."</p>
            <p className="text-sm text-gray-500 italic">"Meet fellow dog owners through shared reviews."</p>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Technical Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">"Profile Verification"</h4>
            <p className="text-gray-600 text-sm">"Profiles undergo a verification process to ensure authenticity."</p>
          </div>\n          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">"Real-time GPS Tracking"</h4>
            <p className="text-gray-600 text-sm">"Utilizes GPS technology to provide live location updates during walks."</p>
          </div>\n          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">"User-Friendly Interface"</h4>
            <p className="text-gray-600 text-sm">"Designed for easy navigation, helping users find and book services quickly."</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4" style={{ backgroundColor: primaryColor }}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">"Join Our Dog Walking Community Today!"</h2>
          <button className="bg-white px-8 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105" style={{ color: primaryColor }}>
            "Create Your Profile"
          </button>
        </div>
      </section>
    </div>
  );
}
