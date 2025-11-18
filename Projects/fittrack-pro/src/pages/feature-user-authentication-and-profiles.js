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
          <h1 className="text-5xl font-bold mb-4">"User Authentication and Profiles"</h1>
          <p className="text-2xl opacity-90">"Securely track your fitness journey with personalized profiles."</p>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-white rounded-xl shadow-lg p-8 -mt-20 relative z-10">
          <p className="text-xl text-gray-700 leading-relaxed">"User authentication and profiles allow users to create secure accounts, track progress, and personalize their fitness experience. This feature ensures that all data is protected and tailored to individual goals."</p>
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
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Enhanced Security"</h3>
            <p className="text-gray-600">"Protects user data with secure login and encryption methods."</p>
          </div>\n          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: "#4CAF50" }}>
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Personalized Experience"</h3>
            <p className="text-gray-600">"Customizes workout and nutrition plans based on user preferences."</p>
          </div>\n          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: "#4CAF50" }}>
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Progress Tracking"</h3>
            <p className="text-gray-600">"Enables users to monitor their fitness journey through detailed logs."</p>
          </div>\n          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: "#4CAF50" }}>
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Community Engagement"</h3>
            <p className="text-gray-600">"Connects users with friends and trainers for motivation and support."</p>
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
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Account Creation"</h3>
              <p className="text-gray-600">"Users sign up by providing basic information and setting a strong password to create their profile."</p>
            </div>
          </div>\n          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: "#4CAF50" }}>
              2
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Secure Login"</h3>
              <p className="text-gray-600">"Users can log in securely using their credentials, ensuring their data remains private and protected."</p>
            </div>
          </div>\n          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: "#4CAF50" }}>
              3
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Profile Customization"</h3>
              <p className="text-gray-600">"Once logged in, users can customize their profiles by adding fitness goals, preferences, and meal plans."</p>
            </div>
          </div>\n          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: "#4CAF50" }}>
              4
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Data Synchronization"</h3>
              <p className="text-gray-600">"User progress is automatically saved and synchronized across devices for seamless access."</p>
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
            <p className="text-gray-600 mb-2">"A new user creates a profile to start their fitness journey with tailored plans."</p>
            <p className="text-sm text-gray-500 italic">"John signs up, sets his goals, and receives personalized workouts."</p>
          </div>\n          <div className="border-l-4 pl-6 py-4" style={{ borderColor: "#2196F3" }}>
            <h3 className="text-lg font-bold text-gray-900 mb-2">"Progress Monitoring"</h3>
            <p className="text-gray-600 mb-2">"Users can log workouts and meals to visualize their fitness progress."</p>
            <p className="text-sm text-gray-500 italic">"Sarah tracks her workouts and sees improvements over time."</p>
          </div>\n          <div className="border-l-4 pl-6 py-4" style={{ borderColor: "#2196F3" }}>
            <h3 className="text-lg font-bold text-gray-900 mb-2">"Community Support"</h3>
            <p className="text-gray-600 mb-2">"Users connect with friends to share achievements and stay motivated."</p>
            <p className="text-sm text-gray-500 italic">"Mike invites friends to join challenges and celebrate milestones."</p>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Technical Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">"Data Encryption"</h4>
            <p className="text-gray-600 text-sm">"All user data is encrypted using industry-standard encryption protocols to ensure privacy."</p>
          </div>\n          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">"API Integration"</h4>
            <p className="text-gray-600 text-sm">"Integrates with popular fitness APIs to fetch and sync user data for enhanced features."</p>
          </div>\n          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">"Multi-Factor Authentication"</h4>
            <p className="text-gray-600 text-sm">"Offers multi-factor authentication to add an extra layer of security for user accounts."</p>
          </div>\n          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">"Responsive Design"</h4>
            <p className="text-gray-600 text-sm">"The user authentication interface is designed to be responsive, ensuring usability across devices."</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4" style={{ backgroundColor: primaryColor }}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">"Join FitTrack Pro Today!"</h2>
          <button className="bg-white px-8 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105" style={{ color: primaryColor }}>
            "Create Your Profile"
          </button>
        </div>
      </section>
    </div>
  );
}
