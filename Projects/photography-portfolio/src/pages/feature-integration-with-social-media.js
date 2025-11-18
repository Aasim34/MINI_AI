import React from 'react';
import Link from 'next/link';

export default function FeatureDetail() {
  const primaryColor = "#3E4E50";
  const secondaryColor = "#F4F4F9";
  const accentColor = "#FF6F61";
  
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
          <h1 className="text-5xl font-bold mb-4">"Social Media Integration for Your Photography Portfolio"</h1>
          <p className="text-2xl opacity-90">"Seamlessly connect and showcase your work on social media."</p>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-white rounded-xl shadow-lg p-8 -mt-20 relative z-10">
          <p className="text-xl text-gray-700 leading-relaxed">"Integrate your photography portfolio with popular social media platforms to enhance your visibility. Share your work instantly and engage with your audience through social channels."</p>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Key Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: "#3E4E50" }}>
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Increased Exposure"</h3>
            <p className="text-gray-600">"Extend your reach by sharing your portfolio across various platforms."</p>
          </div>\n          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: "#3E4E50" }}>
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Easy Sharing"</h3>
            <p className="text-gray-600">"Quickly post your latest photos to social media with one click."</p>
          </div>\n          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: "#3E4E50" }}>
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Engagement Tracking"</h3>
            <p className="text-gray-600">"Monitor interactions and feedback directly from your social media posts."</p>
          </div>\n          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: "#3E4E50" }}>
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Brand Consistency"</h3>
            <p className="text-gray-600">"Maintain a cohesive brand image across all your social platforms."</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">How It Works</h2>
        <div className="space-y-8">
          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: "#3E4E50" }}>
              1
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Connect Your Accounts"</h3>
              <p className="text-gray-600">"Link your social media accounts to your photography portfolio for seamless integration."</p>
            </div>
          </div>\n          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: "#3E4E50" }}>
              2
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Select Photos to Share"</h3>
              <p className="text-gray-600">"Choose specific photos or albums from your portfolio that you want to showcase."</p>
            </div>
          </div>\n          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: "#3E4E50" }}>
              3
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Customize Your Post"</h3>
              <p className="text-gray-600">"Add captions, hashtags, and tags to enhance engagement and visibility of your posts."</p>
            </div>
          </div>\n          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: "#3E4E50" }}>
              4
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Publish with One Click"</h3>
              <p className="text-gray-600">"Share your selected photos directly to your social media feeds with a single click."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="max-w-6xl mx-auto px-4 py-16 bg-white">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Use Cases</h2>
        <div className="space-y-6">
          <div className="border-l-4 pl-6 py-4" style={{ borderColor: "#FF6F61" }}>
            <h3 className="text-lg font-bold text-gray-900 mb-2">"Promoting a New Collection"</h3>
            <p className="text-gray-600 mb-2">"Share your latest photography collection on platforms like Instagram."</p>
            <p className="text-sm text-gray-500 italic">"Post a teaser for your new series on Instagram."</p>
          </div>\n          <div className="border-l-4 pl-6 py-4" style={{ borderColor: "#FF6F61" }}>
            <h3 className="text-lg font-bold text-gray-900 mb-2">"Engaging with Followers"</h3>
            <p className="text-gray-600 mb-2">"Interact with your audience by sharing behind-the-scenes content."</p>
            <p className="text-sm text-gray-500 italic">"Share a story of your photoshoot on Facebook."</p>
          </div>\n          <div className="border-l-4 pl-6 py-4" style={{ borderColor: "#FF6F61" }}>
            <h3 className="text-lg font-bold text-gray-900 mb-2">"Building a Community"</h3>
            <p className="text-gray-600 mb-2">"Create discussions around your work by sharing posts on Twitter."</p>
            <p className="text-sm text-gray-500 italic">"Host a Q&A session about your photography on Twitter."</p>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Technical Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">"API Integration"</h4>
            <p className="text-gray-600 text-sm">"Utilizes social media APIs for secure and fast data sharing."</p>
          </div>\n          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">"OAuth Authentication"</h4>
            <p className="text-gray-600 text-sm">"Employs OAuth for secure connections to user social media accounts."</p>
          </div>\n          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">"Responsive Design"</h4>
            <p className="text-gray-600 text-sm">"Ensures that shared content displays correctly on all devices."</p>
          </div>\n          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">"Analytics Dashboard"</h4>
            <p className="text-gray-600 text-sm">"Provides tracking of post performance and engagement metrics."</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4" style={{ backgroundColor: primaryColor }}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">"Elevate Your Photography Portfolio Today!"</h2>
          <button className="bg-white px-8 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105" style={{ color: primaryColor }}>
            "Connect Your Social Media"
          </button>
        </div>
      </section>
    </div>
  );
}
