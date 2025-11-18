import React from 'react';
import Link from 'next/link';

export default function FeatureDetail() {
  const primaryColor = "#6F4C3E";
  const secondaryColor = "#D9BBA0";
  const accentColor = "#A25B3D";
  
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
          <h1 className="text-5xl font-bold mb-4">"User Authentication and Profiles"</h1>
          <p className="text-2xl opacity-90">"Secure access and personalized experiences for coffee lovers!"</p>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-white rounded-xl shadow-lg p-8 -mt-20 relative z-10">
          <p className="text-xl text-gray-700 leading-relaxed">"Our user authentication feature ensures secure access to your profile on the Coffee Shop Website. Users can create and manage their personal accounts, allowing for a customized experience while ordering coffee."</p>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Key Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: "#6F4C3E" }}>
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Enhanced Security"</h3>
            <p className="text-gray-600">"Protect user data with secure authentication protocols."</p>
          </div>\n          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: "#6F4C3E" }}>
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Personalized Experience"</h3>
            <p className="text-gray-600">"Users receive tailored recommendations based on their preferences."</p>
          </div>\n          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: "#6F4C3E" }}>
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Easy Account Management"</h3>
            <p className="text-gray-600">"Simple interface for users to manage their profiles effortlessly."</p>
          </div>\n          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: "#6F4C3E" }}>
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Seamless Checkout"</h3>
            <p className="text-gray-600">"Quick and easy checkout process for returning users."</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">How It Works</h2>
        <div className="space-y-8">
          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: "#6F4C3E" }}>
              1
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"User Registration"</h3>
              <p className="text-gray-600">"Users can sign up using their email and a secure password, creating a unique profile."</p>
            </div>
          </div>\n          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: "#6F4C3E" }}>
              2
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Login Process"</h3>
              <p className="text-gray-600">"Returning users log in with their credentials to access their personalized profiles."</p>
            </div>
          </div>\n          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: "#6F4C3E" }}>
              3
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Profile Customization"</h3>
              <p className="text-gray-600">"Users can customize their profiles by adding favorite drinks and preferences."</p>
            </div>
          </div>\n          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: "#6F4C3E" }}>
              4
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Secure Logout"</h3>
              <p className="text-gray-600">"Users can log out securely to protect their information when using shared devices."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="max-w-6xl mx-auto px-4 py-16 bg-white">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Use Cases</h2>
        <div className="space-y-6">
          <div className="border-l-4 pl-6 py-4" style={{ borderColor: "#A25B3D" }}>
            <h3 className="text-lg font-bold text-gray-900 mb-2">"User Profile Management"</h3>
            <p className="text-gray-600 mb-2">"Users can update their information and preferences at any time."</p>
            <p className="text-sm text-gray-500 italic">"A user changes their favorite coffee drink in their profile."</p>
          </div>\n          <div className="border-l-4 pl-6 py-4" style={{ borderColor: "#A25B3D" }}>
            <h3 className="text-lg font-bold text-gray-900 mb-2">"Order History Access"</h3>
            <p className="text-gray-600 mb-2">"Users can view their past orders for easy reordering."</p>
            <p className="text-sm text-gray-500 italic">"A user checks their previous coffee orders to reorder."</p>
          </div>\n          <div className="border-l-4 pl-6 py-4" style={{ borderColor: "#A25B3D" }}>
            <h3 className="text-lg font-bold text-gray-900 mb-2">"Personalized Promotions"</h3>
            <p className="text-gray-600 mb-2">"Users receive promotions based on their preferences and purchase history."</p>
            <p className="text-sm text-gray-500 italic">"A user gets a discount for their favorite drink on their birthday."</p>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Technical Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">"Authentication Protocols"</h4>
            <p className="text-gray-600 text-sm">"Utilizes OAuth2 and JWT for secure user authentication and session management."</p>
          </div>\n          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">"Data Encryption"</h4>
            <p className="text-gray-600 text-sm">"All user data is encrypted using industry-standard AES-256 encryption."</p>
          </div>\n          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">"User Interface"</h4>
            <p className="text-gray-600 text-sm">"Designed with user experience in mind, ensuring easy navigation and accessibility."</p>
          </div>\n          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">"Error Handling"</h4>
            <p className="text-gray-600 text-sm">"Robust error handling to provide users with clear feedback on authentication issues."</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4" style={{ backgroundColor: primaryColor }}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">"Join Our Coffee Community Today!"</h2>
          <button className="bg-white px-8 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105" style={{ color: primaryColor }}>
            "Create Your Account"
          </button>
        </div>
      </section>
    </div>
  );
}
