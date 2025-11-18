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
          <h1 className="text-5xl font-bold mb-4">"Menu Display with Seasonal Specials"</h1>
          <p className="text-2xl opacity-90">"Highlight seasonal flavors to engage customers year-round!"</p>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-white rounded-xl shadow-lg p-8 -mt-20 relative z-10">
          <p className="text-xl text-gray-700 leading-relaxed">"Our seasonal specials feature allows coffee shops to showcase limited-time offerings that reflect seasonal ingredients and themes. This dynamic menu display keeps customers excited and encourages repeat visits."</p>
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
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Increased Customer Engagement"</h3>
            <p className="text-gray-600">"Seasonal specials attract attention and drive foot traffic."</p>
          </div>\n          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: "#6F4C3E" }}>
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Boosted Sales"</h3>
            <p className="text-gray-600">"Highlighting unique items can lead to increased sales and profits."</p>
          </div>\n          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: "#6F4C3E" }}>
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Fresh and Relevant Offerings"</h3>
            <p className="text-gray-600">"Keep the menu fresh and aligned with seasonal trends."</p>
          </div>\n          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: "#6F4C3E" }}>
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Enhanced Brand Image"</h3>
            <p className="text-gray-600">"Showcase creativity and passion for quality ingredients."</p>
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
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Create Seasonal Offerings"</h3>
              <p className="text-gray-600">"Develop a variety of seasonal drinks and food items that align with customer preferences and seasonal ingredients."</p>
            </div>
          </div>\n          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: "#6F4C3E" }}>
              2
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Update Menu Display"</h3>
              <p className="text-gray-600">"Utilize the website's menu management system to easily add, modify, and highlight seasonal specials on the homepage."</p>
            </div>
          </div>\n          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: "#6F4C3E" }}>
              3
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Promote on Social Media"</h3>
              <p className="text-gray-600">"Share visually appealing images and descriptions of seasonal specials on social media to attract more customers."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="max-w-6xl mx-auto px-4 py-16 bg-white">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Use Cases</h2>
        <div className="space-y-6">
          <div className="border-l-4 pl-6 py-4" style={{ borderColor: "#A25B3D" }}>
            <h3 className="text-lg font-bold text-gray-900 mb-2">"Holiday Promotions"</h3>
            <p className="text-gray-600 mb-2">"Feature festive drinks during holidays to attract seasonal crowds."</p>
            <p className="text-sm text-gray-500 italic">"Pumpkin Spice Latte during Fall"</p>
          </div>\n          <div className="border-l-4 pl-6 py-4" style={{ borderColor: "#A25B3D" }}>
            <h3 className="text-lg font-bold text-gray-900 mb-2">"Local Ingredient Sourcing"</h3>
            <p className="text-gray-600 mb-2">"Showcase local ingredients with rotating seasonal specials."</p>
            <p className="text-sm text-gray-500 italic">"Fresh berry smoothies in Summer"</p>
          </div>\n          <div className="border-l-4 pl-6 py-4" style={{ borderColor: "#A25B3D" }}>
            <h3 className="text-lg font-bold text-gray-900 mb-2">"Limited-Time Offers"</h3>
            <p className="text-gray-600 mb-2">"Create urgency by promoting limited-time items to boost sales."</p>
            <p className="text-sm text-gray-500 italic">"Chocolate Peppermint Mocha for Winter"</p>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Technical Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">"Responsive Design"</h4>
            <p className="text-gray-600 text-sm">"The seasonal specials feature is optimized for all devices, ensuring a seamless user experience."</p>
          </div>\n          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">"Content Management System"</h4>
            <p className="text-gray-600 text-sm">"Easily manage menu items, including seasonal specials, through an intuitive backend interface."</p>
          </div>\n          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">"Analytics Integration"</h4>
            <p className="text-gray-600 text-sm">"Track customer engagement and sales performance of seasonal specials through integrated analytics tools."</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4" style={{ backgroundColor: primaryColor }}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">"Start Showcasing Your Seasonal Specials"</h2>
          <button className="bg-white px-8 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105" style={{ color: primaryColor }}>
            "Get Started"
          </button>
        </div>
      </section>
    </div>
  );
}
