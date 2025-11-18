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
          <h1 className="text-5xl font-bold mb-4">"Customer Reviews and Ratings Feature"</h1>
          <p className="text-2xl opacity-90">"Empower your coffee shop with trusted customer feedback!"</p>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-white rounded-xl shadow-lg p-8 -mt-20 relative z-10">
          <p className="text-xl text-gray-700 leading-relaxed">"Our Customer Reviews and Ratings feature allows patrons to share their experiences. This builds trust and helps improve your coffee shop's offerings."</p>
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
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Build Trust"</h3>
            <p className="text-gray-600">"Encourage new customers by showcasing positive feedback."</p>
          </div>\n          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: "#6F4C3E" }}>
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Enhance Quality"</h3>
            <p className="text-gray-600">"Gain insights from reviews to improve your menu and service."</p>
          </div>\n          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: "#6F4C3E" }}>
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Boost Visibility"</h3>
            <p className="text-gray-600">"Higher ratings can improve your search ranking and attract more visitors."</p>
          </div>\n          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: "#6F4C3E" }}>
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Engage Customers"</h3>
            <p className="text-gray-600">"Interact with customer feedback to foster community and loyalty."</p>
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
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Customers Leave Reviews"</h3>
              <p className="text-gray-600">"Customers can easily submit reviews and ratings for their favorite drinks and snacks through the website."</p>
            </div>
          </div>\n          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: "#6F4C3E" }}>
              2
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Moderation Process"</h3>
              <p className="text-gray-600">"All reviews go through a moderation process to ensure content appropriateness and authenticity."</p>
            </div>
          </div>\n          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: "#6F4C3E" }}>
              3
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Display Reviews"</h3>
              <p className="text-gray-600">"Approved reviews are prominently displayed on your website, helping new customers make informed decisions."</p>
            </div>
          </div>\n          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: "#6F4C3E" }}>
              4
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Respond to Feedback"</h3>
              <p className="text-gray-600">"You can respond to customer reviews, showing that you value their opinions and are committed to improvement."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="max-w-6xl mx-auto px-4 py-16 bg-white">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Use Cases</h2>
        <div className="space-y-6">
          <div className="border-l-4 pl-6 py-4" style={{ borderColor: "#A25B3D" }}>
            <h3 className="text-lg font-bold text-gray-900 mb-2">"New Customer Attraction"</h3>
            <p className="text-gray-600 mb-2">"Potential customers read reviews before deciding to visit your shop."</p>
            <p className="text-sm text-gray-500 italic">"A first-time visitor checks ratings and decides to order a latte."</p>
          </div>\n          <div className="border-l-4 pl-6 py-4" style={{ borderColor: "#A25B3D" }}>
            <h3 className="text-lg font-bold text-gray-900 mb-2">"Menu Improvement Insights"</h3>
            <p className="text-gray-600 mb-2">"Analyze reviews to identify popular items and areas needing improvement."</p>
            <p className="text-sm text-gray-500 italic">"Customers consistently mention a particular pastry as a favorite."</p>
          </div>\n          <div className="border-l-4 pl-6 py-4" style={{ borderColor: "#A25B3D" }}>
            <h3 className="text-lg font-bold text-gray-900 mb-2">"Community Building"</h3>
            <p className="text-gray-600 mb-2">"Create a sense of community by encouraging customers to share their experiences."</p>
            <p className="text-sm text-gray-500 italic">"Regulars post reviews about new seasonal drinks, creating buzz."</p>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Technical Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">"Integration"</h4>
            <p className="text-gray-600 text-sm">"Seamlessly integrates with your existing website framework and database."</p>
          </div>\n          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">"User Interface"</h4>
            <p className="text-gray-600 text-sm">"Intuitive UI for submitting and browsing reviews, ensuring ease of use."</p>
          </div>\n          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">"Analytics"</h4>
            <p className="text-gray-600 text-sm">"Built-in analytics to track review trends and customer sentiment over time."</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4" style={{ backgroundColor: primaryColor }}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">"Start Gathering Feedback Today!"</h2>
          <button className="bg-white px-8 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105" style={{ color: primaryColor }}>
            "Enable Reviews Now"
          </button>
        </div>
      </section>
    </div>
  );
}
