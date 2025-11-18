import React from 'react';
import Link from 'next/link';

export default function FeatureDetail() {
  const primaryColor = "#4A90E2";
  const secondaryColor = "#50E3C2";
  const accentColor = "#D0021B";
  
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
          <h1 className="text-5xl font-bold mb-4">"Market Trend Analysis in Real Estate Portfolio"</h1>
          <p className="text-2xl opacity-90">"Stay ahead with insightful market trend analysis!"</p>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-white rounded-xl shadow-lg p-8 -mt-20 relative z-10">
          <p className="text-xl text-gray-700 leading-relaxed">"Our Market Trend Analysis feature empowers users to track and analyze real estate market trends effectively. Gain insights into property values, neighborhood developments, and market shifts to make informed investment decisions."</p>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Key Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: "#4A90E2" }}>
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Data-Driven Insights"</h3>
            <p className="text-gray-600">"Utilize comprehensive data analytics to inform your decisions."</p>
          </div>\n          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: "#4A90E2" }}>
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Competitive Edge"</h3>
            <p className="text-gray-600">"Stay ahead of market shifts to maximize your portfolio's value."</p>
          </div>\n          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: "#4A90E2" }}>
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Customizable Reports"</h3>
            <p className="text-gray-600">"Generate tailored reports to focus on specific trends and areas."</p>
          </div>\n          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: "#4A90E2" }}>
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Real-Time Updates"</h3>
            <p className="text-gray-600">"Receive instant alerts about significant market changes."</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">How It Works</h2>
        <div className="space-y-8">
          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: "#4A90E2" }}>
              1
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Data Collection"</h3>
              <p className="text-gray-600">"Our system gathers data from various real estate sources, including sales records and market reports."</p>
            </div>
          </div>\n          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: "#4A90E2" }}>
              2
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Analysis & Visualization"</h3>
              <p className="text-gray-600">"Advanced algorithms analyze the data and present it in easy-to-understand visual formats, like graphs and charts."</p>
            </div>
          </div>\n          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: "#4A90E2" }}>
              3
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Trend Identification"</h3>
              <p className="text-gray-600">"Identify emerging trends and patterns in the market that can influence your investment strategies."</p>
            </div>
          </div>\n          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: "#4A90E2" }}>
              4
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Actionable Insights"</h3>
              <p className="text-gray-600">"Receive tailored recommendations based on the market analysis to optimize your portfolio performance."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="max-w-6xl mx-auto px-4 py-16 bg-white">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Use Cases</h2>
        <div className="space-y-6">
          <div className="border-l-4 pl-6 py-4" style={{ borderColor: "#D0021B" }}>
            <h3 className="text-lg font-bold text-gray-900 mb-2">"Investment Strategy Development"</h3>
            <p className="text-gray-600 mb-2">"Craft targeted investment strategies based on current market trends."</p>
            <p className="text-sm text-gray-500 italic">"Using trend analysis to invest in up-and-coming neighborhoods."</p>
          </div>\n          <div className="border-l-4 pl-6 py-4" style={{ borderColor: "#D0021B" }}>
            <h3 className="text-lg font-bold text-gray-900 mb-2">"Portfolio Diversification"</h3>
            <p className="text-gray-600 mb-2">"Identify opportunities for diversification based on market dynamics."</p>
            <p className="text-sm text-gray-500 italic">"Analyzing trends to invest in different property types."</p>
          </div>\n          <div className="border-l-4 pl-6 py-4" style={{ borderColor: "#D0021B" }}>
            <h3 className="text-lg font-bold text-gray-900 mb-2">"Property Valuation Insights"</h3>
            <p className="text-gray-600 mb-2">"Understand property value fluctuations to time your buying/selling."</p>
            <p className="text-sm text-gray-500 italic">"Determining the best time to sell a property based on market trends."</p>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Technical Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">"Data Sources"</h4>
            <p className="text-gray-600 text-sm">"Aggregates data from MLS, public records, and economic indicators."</p>
          </div>\n          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">"Analytical Tools"</h4>
            <p className="text-gray-600 text-sm">"Employs machine learning algorithms for predictive analytics."</p>
          </div>\n          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">"User Interface"</h4>
            <p className="text-gray-600 text-sm">"Features an intuitive dashboard for easy navigation and report generation."</p>
          </div>\n          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">"Real-Time Capabilities"</h4>
            <p className="text-gray-600 text-sm">"Utilizes cloud technology to provide real-time data updates and alerts."</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4" style={{ backgroundColor: primaryColor }}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">"Unlock the Power of Market Insights"</h2>
          <button className="bg-white px-8 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105" style={{ color: primaryColor }}>
            "Start Analyzing Now"
          </button>
        </div>
      </section>
    </div>
  );
}
