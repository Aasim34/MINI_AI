import React from 'react';
import Link from 'next/link';

export default function FeatureDetail() {
  const primaryColor = "#4CAF50";
  const secondaryColor = "#FF9800";
  const accentColor = "#2196F3";
  
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
          <h1 className="text-5xl font-bold mb-4">"User Registration and Authentication"</h1>
          <p className="text-2xl opacity-90">"Securely track your fitness journey with ease!"</p>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-white rounded-xl shadow-lg p-8 -mt-20 relative z-10">
          <p className="text-xl text-gray-700 leading-relaxed">"User registration and authentication in FitTrack allows users to create personalized accounts. This feature ensures data security while providing a seamless experience for tracking fitness progress."</p>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Key Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: "#4CAF50" }}>
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Easy Account Setup"</h3>
            <p className="text-gray-600">"Quickly create an account to start tracking your fitness journey."</p>
          </div>\n          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: "#4CAF50" }}>
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Secure Authentication"</h3>
            <p className="text-gray-600">"Safeguard your personal data with robust authentication measures."</p>
          </div>\n          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: "#4CAF50" }}>
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Personalized Experience"</h3>
            <p className="text-gray-600">"Enjoy a tailored fitness experience based on your goals and history."</p>
          </div>\n          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: "#4CAF50" }}>
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Data Synchronization"</h3>
            <p className="text-gray-600">"Access your fitness data across multiple devices seamlessly."</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">How It Works</h2>
        <div className="space-y-8">
          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: "#4CAF50" }}>
              1
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"User Registration"</h3>
              <p className="text-gray-600">"Users can easily register by filling out a simple form with their details and preferences."</p>
            </div>
          </div>\n          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: "#4CAF50" }}>
              2
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Email Verification"</h3>
              <p className="text-gray-600">"Upon registration, users receive a verification email to confirm their account and ensure security."</p>
            </div>
          </div>\n          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: "#4CAF50" }}>
              3
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Login Process"</h3>
              <p className="text-gray-600">"Users can log in using their email and password, or opt for social media integration for quicker access."</p>
            </div>
          </div>\n          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: "#4CAF50" }}>
              4
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Account Management"</h3>
              <p className="text-gray-600">"Users can manage their accounts, update details, and reset passwords through a user-friendly interface."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="max-w-6xl mx-auto px-4 py-16 bg-white">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Use Cases</h2>
        <div className="space-y-6">
          <div className="border-l-4 pl-6 py-4" style={{ borderColor: "#2196F3" }}>
            <h3 className="text-lg font-bold text-gray-900 mb-2">"New User Onboarding"</h3>
            <p className="text-gray-600 mb-2">"A new user registers and sets up their profile to begin tracking workouts."</p>
            <p className="text-sm text-gray-500 italic">"John signs up and customizes his fitness goals."</p>
          </div>\n          <div className="border-l-4 pl-6 py-4" style={{ borderColor: "#2196F3" }}>
            <h3 className="text-lg font-bold text-gray-900 mb-2">"Password Recovery"</h3>
            <p className="text-gray-600 mb-2">"Users can securely recover their passwords if forgotten through email verification."</p>
            <p className="text-sm text-gray-500 italic">"Sarah resets her password via the recovery email link."</p>
          </div>\n          <div className="border-l-4 pl-6 py-4" style={{ borderColor: "#2196F3" }}>
            <h3 className="text-lg font-bold text-gray-900 mb-2">"Social Login Integration"</h3>
            <p className="text-gray-600 mb-2">"Enable users to log in using social media accounts for convenience."</p>
            <p className="text-sm text-gray-500 italic">"Mark logs in using his Facebook account to save time."</p>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Technical Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">"Data Encryption"</h4>
            <p className="text-gray-600 text-sm">"All user data is encrypted both in transit and at rest to ensure maximum security."</p>
          </div>\n          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">"OAuth Integration"</h4>
            <p className="text-gray-600 text-sm">"FitTrack supports OAuth for secure third-party logins, enhancing user convenience."</p>
          </div>\n          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">"API Endpoints"</h4>
            <p className="text-gray-600 text-sm">"Robust API endpoints are in place for registration, authentication, and user management."</p>
          </div>\n          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">"Session Management"</h4>
            <p className="text-gray-600 text-sm">"Automatic session management ensures users stay logged in securely across devices."</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4" style={{ backgroundColor: primaryColor }}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">"Join FitTrack Today!"</h2>
          <button className="bg-white px-8 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105" style={{ color: primaryColor }}>
            "Sign Up Now"
          </button>
        </div>
      </section>
    </div>
  );
}
