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
          <h1 className="text-5xl font-bold mb-4">"Image Gallery with Categories Feature"</h1>
          <p className="text-2xl opacity-90">"Organize your photos effortlessly and showcase them beautifully."</p>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-white rounded-xl shadow-lg p-8 -mt-20 relative z-10">
          <p className="text-xl text-gray-700 leading-relaxed">"The Image Gallery with Categories feature allows you to organize your photography portfolio into distinct categories. This enhances user experience by enabling visitors to explore your work based on specific themes or styles."</p>
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
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Enhanced Organization"</h3>
            <p className="text-gray-600">"Categorize your photos for easy navigation and access."</p>
          </div>\n          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: "#3E4E50" }}>
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Improved User Engagement"</h3>
            <p className="text-gray-600">"Visitors can quickly find what they are looking for, increasing interaction."</p>
          </div>\n          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: "#3E4E50" }}>
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Visual Appeal"</h3>
            <p className="text-gray-600">"Create a stunning visual layout that highlights your best work."</p>
          </div>\n          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: "#3E4E50" }}>
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Flexible Customization"</h3>
            <p className="text-gray-600">"Easily customize categories to fit your unique photography style."</p>
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
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Create Categories"</h3>
              <p className="text-gray-600">"Begin by setting up various categories that represent the different styles or themes of your photography."</p>
            </div>
          </div>\n          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: "#3E4E50" }}>
              2
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Upload Images"</h3>
              <p className="text-gray-600">"Upload your photographs and assign them to the respective categories for organized display."</p>
            </div>
          </div>\n          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: "#3E4E50" }}>
              3
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Customize Layout"</h3>
              <p className="text-gray-600">"Choose from various layout options to present your categories and images in a visually appealing manner."</p>
            </div>
          </div>\n          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: "#3E4E50" }}>
              4
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Publish Your Gallery"</h3>
              <p className="text-gray-600">"Once everything is set up, publish your gallery and share your stunning work with the world."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="max-w-6xl mx-auto px-4 py-16 bg-white">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Use Cases</h2>
        <div className="space-y-6">
          <div className="border-l-4 pl-6 py-4" style={{ borderColor: "#FF6F61" }}>
            <h3 className="text-lg font-bold text-gray-900 mb-2">"Showcasing Events"</h3>
            <p className="text-gray-600 mb-2">"Categorize photos from different events to highlight your range as a photographer."</p>
            <p className="text-sm text-gray-500 italic">"Wedding, Corporate Events, Family Gatherings"</p>
          </div>\n          <div className="border-l-4 pl-6 py-4" style={{ borderColor: "#FF6F61" }}>
            <h3 className="text-lg font-bold text-gray-900 mb-2">"Thematic Portfolios"</h3>
            <p className="text-gray-600 mb-2">"Create portfolios based on themes like Nature, Portraits, or Architecture."</p>
            <p className="text-sm text-gray-500 italic">"Nature, Urban, Abstract Photography"</p>
          </div>\n          <div className="border-l-4 pl-6 py-4" style={{ borderColor: "#FF6F61" }}>
            <h3 className="text-lg font-bold text-gray-900 mb-2">"Client Specific Galleries"</h3>
            <p className="text-gray-600 mb-2">"Create private galleries for clients, making it easy for them to review their photos."</p>
            <p className="text-sm text-gray-500 italic">"Client galleries for easy viewing and selection"</p>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Technical Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">"Responsive Design"</h4>
            <p className="text-gray-600 text-sm">"The gallery adapts seamlessly to various screen sizes, ensuring a great viewing experience on any device."</p>
          </div>\n          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">"SEO Optimization"</h4>
            <p className="text-gray-600 text-sm">"Each category can be optimized for search engines to improve visibility and attract more visitors."</p>
          </div>\n          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">"User Analytics"</h4>
            <p className="text-gray-600 text-sm">"Track visitor engagement and interactions with different categories to optimize your portfolio."</p>
          </div>\n          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">"Fast Loading Times"</h4>
            <p className="text-gray-600 text-sm">"Images are optimized for fast loading, improving user experience and retention."</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4" style={{ backgroundColor: primaryColor }}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">"Start Showcasing Your Work Today!"</h2>
          <button className="bg-white px-8 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105" style={{ color: primaryColor }}>
            "Create Your Gallery"
          </button>
        </div>
      </section>
    </div>
  );
}
