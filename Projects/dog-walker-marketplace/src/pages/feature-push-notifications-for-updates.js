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
          <h1 className="text-5xl font-bold mb-4">"Push Notifications for Updates in Dog Walker Marketplace"</h1>
          <p className="text-2xl opacity-90">"Stay updated with real-time notifications about your dog!"</p>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-white rounded-xl shadow-lg p-8 -mt-20 relative z-10">
          <p className="text-xl text-gray-700 leading-relaxed">"Push notifications keep you informed about your dog's walk status and updates from your walker. Receive timely alerts for any changes or important messages."</p>
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
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Instant Updates"</h3>
            <p className="text-gray-600">"Receive real-time notifications for all important updates."</p>
          </div>\n          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: "#FFCC00" }}>
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Enhanced Communication"</h3>
            <p className="text-gray-600">"Stay connected with walkers through direct notifications."</p>
          </div>\n          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: "#FFCC00" }}>
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Improved Safety"</h3>
            <p className="text-gray-600">"Get alerts about your dog's location and well-being instantly."</p>
          </div>\n          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: "#FFCC00" }}>
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">"User-Friendly Experience"</h3>
            <p className="text-gray-600">"Easily manage notifications for a seamless user experience."</p>
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
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Enable Notifications"</h3>
              <p className="text-gray-600">"Users must enable push notifications in the app settings to receive alerts."</p>
            </div>
          </div>\n          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: "#FFCC00" }}>
              2
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Receive Alerts"</h3>
              <p className="text-gray-600">"Notifications will be sent directly to users\u2019 devices for updates during walks."</p>
            </div>
          </div>\n          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: "#FFCC00" }}>
              3
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Interact with Walkers"</h3>
              <p className="text-gray-600">"Users can respond to notifications or contact walkers through the app for queries."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="max-w-6xl mx-auto px-4 py-16 bg-white">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Use Cases</h2>
        <div className="space-y-6">
          <div className="border-l-4 pl-6 py-4" style={{ borderColor: "#FF5733" }}>
            <h3 className="text-lg font-bold text-gray-900 mb-2">"Real-time Location Updates"</h3>
            <p className="text-gray-600 mb-2">"Get instant alerts when your dog reaches specific locations."</p>
            <p className="text-sm text-gray-500 italic">"Notification when your dog arrives at the park."</p>
          </div>\n          <div className="border-l-4 pl-6 py-4" style={{ borderColor: "#FF5733" }}>
            <h3 className="text-lg font-bold text-gray-900 mb-2">"Emergency Alerts"</h3>
            <p className="text-gray-600 mb-2">"Receive notifications if there are any issues during the walk."</p>
            <p className="text-sm text-gray-500 italic">"Alert if the walker encounters a problem."</p>
          </div>\n          <div className="border-l-4 pl-6 py-4" style={{ borderColor: "#FF5733" }}>
            <h3 className="text-lg font-bold text-gray-900 mb-2">"Schedule Reminders"</h3>
            <p className="text-gray-600 mb-2">"Get reminders about upcoming dog walking appointments."</p>
            <p className="text-sm text-gray-500 italic">"Notification 15 minutes before the scheduled walk."</p>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Technical Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">"Real-time Communication"</h4>
            <p className="text-gray-600 text-sm">"Utilizes WebSocket technology for instant message delivery."</p>
          </div>\n          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">"Device Compatibility"</h4>
            <p className="text-gray-600 text-sm">"Compatible with both Android and iOS devices for seamless notifications."</p>
          </div>\n          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">"User Control"</h4>
            <p className="text-gray-600 text-sm">"Users can customize notification settings according to their preferences."</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4" style={{ backgroundColor: primaryColor }}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">"Stay Informed, Stay Connected!"</h2>
          <button className="bg-white px-8 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105" style={{ color: primaryColor }}>
            "Enable Notifications Now"
          </button>
        </div>
      </section>
    </div>
  );
}
