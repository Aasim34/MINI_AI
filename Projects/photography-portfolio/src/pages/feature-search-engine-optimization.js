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
          <h1 className="text-5xl font-bold mb-4">"Enhance Your Photography Portfolio with SEO"</h1>
          <p className="text-2xl opacity-90">"Boost visibility and attract more clients effortlessly!"</p>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-white rounded-xl shadow-lg p-8 -mt-20 relative z-10">
          <p className="text-xl text-gray-700 leading-relaxed">"Search engine optimization (SEO) is crucial for your photography portfolio. It helps your website rank higher on search engines, ensuring that potential clients discover your stunning work."</p>
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
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Increased Visibility"</h3>
            <p className="text-gray-600">"Rank higher on search engines and attract more visitors."</p>
          </div>\n          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: "#3E4E50" }}>
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Targeted Traffic"</h3>
            <p className="text-gray-600">"Draw in potential clients actively searching for photographers."</p>
          </div>\n          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: "#3E4E50" }}>
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Better User Engagement"</h3>
            <p className="text-gray-600">"Improve user experience, keeping visitors on your site longer."</p>
          </div>\n          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: "#3E4E50" }}>
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Long-term Results"</h3>
            <p className="text-gray-600">"Sustainable growth through ongoing optimization processes."</p>
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
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Keyword Research"</h3>
              <p className="text-gray-600">"Identify relevant keywords that potential clients use to search for photography services."</p>
            </div>
          </div>\n          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: "#3E4E50" }}>
              2
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"On-Page Optimization"</h3>
              <p className="text-gray-600">"Optimize your website content, images, and meta tags to align with targeted keywords for better rankings."</p>
            </div>
          </div>\n          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: "#3E4E50" }}>
              3
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Link Building"</h3>
              <p className="text-gray-600">"Develop backlinks from reputable sites to enhance your site's authority and search engine ranking."</p>
            </div>
          </div>\n          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: "#3E4E50" }}>
              4
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Performance Monitoring"</h3>
              <p className="text-gray-600">"Regularly analyze your website traffic and keyword rankings to refine your SEO strategy."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="max-w-6xl mx-auto px-4 py-16 bg-white">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Use Cases</h2>
        <div className="space-y-6">
          <div className="border-l-4 pl-6 py-4" style={{ borderColor: "#FF6F61" }}>
            <h3 className="text-lg font-bold text-gray-900 mb-2">"Freelance Photographer"</h3>
            <p className="text-gray-600 mb-2">"Attract clients looking for specific photography styles."</p>
            <p className="text-sm text-gray-500 italic">"A wedding photographer gains clients through SEO-targeted blogs."</p>
          </div>\n          <div className="border-l-4 pl-6 py-4" style={{ borderColor: "#FF6F61" }}>
            <h3 className="text-lg font-bold text-gray-900 mb-2">"Photography Studio"</h3>
            <p className="text-gray-600 mb-2">"Draw local clients searching for studio-based photography."</p>
            <p className="text-sm text-gray-500 italic">"A portrait studio appears in local searches for family photos."</p>
          </div>\n          <div className="border-l-4 pl-6 py-4" style={{ borderColor: "#FF6F61" }}>
            <h3 className="text-lg font-bold text-gray-900 mb-2">"Travel Photographer"</h3>
            <p className="text-gray-600 mb-2">"Increase visibility for travel-related photography services."</p>
            <p className="text-sm text-gray-500 italic">"A travel photographer showcases international work to attract tourists."</p>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Technical Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">"Responsive Design"</h4>
            <p className="text-gray-600 text-sm">"Ensure your portfolio is mobile-friendly for better user accessibility."</p>
          </div>\n          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">"Image Optimization"</h4>
            <p className="text-gray-600 text-sm">"Use compressed images with alt tags to enhance loading speed and SEO."</p>
          </div>\n          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">"Site Structure"</h4>
            <p className="text-gray-600 text-sm">"Organize your portfolio with a clear structure for easy navigation and indexing."</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4" style={{ backgroundColor: primaryColor }}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">"Start Optimizing Your Portfolio Today!"</h2>
          <button className="bg-white px-8 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105" style={{ color: primaryColor }}>
            "Get Started"
          </button>
        </div>
      </section>
    </div>
  );
}
