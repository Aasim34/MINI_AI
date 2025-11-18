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
          <h1 className="text-5xl font-bold mb-4">"User Reviews and Ratings - Dog Walker Marketplace"</h1>
          <p className="text-2xl opacity-90">"Find trusted dog walkers through real user feedback."</p>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-white rounded-xl shadow-lg p-8 -mt-20 relative z-10">
          <p className="text-xl text-gray-700 leading-relaxed">"User reviews and ratings provide valuable insights into dog walkers. They help pet owners make informed decisions based on real experiences."</p>
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
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Build Trust"</h3>
            <p className="text-gray-600">"User reviews foster trust between dog owners and walkers."</p>
          </div>\n          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: "#FFCC00" }}>
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Make Informed Choices"</h3>
            <p className="text-gray-600">"Ratings help owners select the best walkers for their pets."</p>
          </div>\n          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: "#FFCC00" }}>
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Encourage Quality Service"</h3>
            <p className="text-gray-600">"Feedback motivates walkers to provide top-notch services."</p>
          </div>\n          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: "#FFCC00" }}>
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Community Engagement"</h3>
            <p className="text-gray-600">"Reviews create a vibrant community of dog lovers sharing insights."</p>
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
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Browse Walkers"</h3>
              <p className="text-gray-600">"Users can browse through a list of dog walkers in their area, complete with profiles and ratings."</p>
            </div>
          </div>\n          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: "#FFCC00" }}>
              2
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Read Reviews"</h3>
              <p className="text-gray-600">"Potential clients can read detailed reviews from other dog owners to gauge the quality of service."</p>
            </div>
          </div>\n          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: "#FFCC00" }}>
              3
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Rate Your Experience"</h3>
              <p className="text-gray-600">"After a walk, users are prompted to rate the walker and leave a review based on their experience."</p>
            </div>
          </div>\n          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: "#FFCC00" }}>
              4
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"View Overall Ratings"</h3>
              <p className="text-gray-600">"Users can view aggregated ratings and trends over time to identify reliable walkers."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="max-w-6xl mx-auto px-4 py-16 bg-white">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Use Cases</h2>
        <div className="space-y-6">
          <div className="border-l-4 pl-6 py-4" style={{ borderColor: "#FF5733" }}>
            <h3 className="text-lg font-bold text-gray-900 mb-2">"Choosing a Walker"</h3>
            <p className="text-gray-600 mb-2">"Use reviews to choose a walker who aligns with your dog's needs."</p>
            <p className="text-sm text-gray-500 italic">"A user selects a walker with excellent reviews for anxious dogs."</p>
          </div>\n          <div className="border-l-4 pl-6 py-4" style={{ borderColor: "#FF5733" }}>
            <h3 className="text-lg font-bold text-gray-900 mb-2">"Providing Feedback"</h3>
            <p className="text-gray-600 mb-2">"Share your experience to help others find the right services."</p>
            <p className="text-sm text-gray-500 italic">"A user leaves a glowing review for a walker who went above and beyond."</p>
          </div>\n          <div className="border-l-4 pl-6 py-4" style={{ borderColor: "#FF5733" }}>
            <h3 className="text-lg font-bold text-gray-900 mb-2">"Identifying Trends"</h3>
            <p className="text-gray-600 mb-2">"Spot trends in service quality through aggregated ratings."</p>
            <p className="text-sm text-gray-500 italic">"A user notices a decline in ratings for a previously reliable walker."</p>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Technical Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">"Rating System"</h4>
            <p className="text-gray-600 text-sm">"Our rating system uses a 5-star scale, allowing users to score their experience accurately."</p>
          </div>\n          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">"Review Verification"</h4>
            <p className="text-gray-600 text-sm">"We implement verification processes to ensure that only genuine users can leave reviews."</p>
          </div>\n          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">"Data Analytics"</h4>
            <p className="text-gray-600 text-sm">"We analyze review data to generate insights and improve the service for users and walkers."</p>
          </div>\n          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">"Real-Time Updates"</h4>
            <p className="text-gray-600 text-sm">"Reviews and ratings are updated in real-time, ensuring users see the latest feedback."</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4" style={{ backgroundColor: primaryColor }}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">"Join the Community of Happy Dog Owners!"</h2>
          <button className="bg-white px-8 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105" style={{ color: primaryColor }}>
            "Start Reading Reviews"
          </button>
        </div>
      </section>
    </div>
  );
}
