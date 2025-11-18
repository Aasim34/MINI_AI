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
          <h1 className="text-5xl font-bold mb-4">"Financial Analysis Tools for Real Estate Portfolio"</h1>
          <p className="text-2xl opacity-90">"Maximize your investments with our financial insights!"</p>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-white rounded-xl shadow-lg p-8 -mt-20 relative z-10">
          <p className="text-xl text-gray-700 leading-relaxed">"Our financial analysis tools empower users to evaluate and optimize their real estate portfolios. With robust analytics, you can make informed decisions that drive profitability."</p>
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
            <h3 className="text-xl font-bold text-gray-900 mb-2">"In-Depth Insights"</h3>
            <p className="text-gray-600">"Gain detailed insights into your portfolio's performance metrics."</p>
          </div>\n          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: "#4A90E2" }}>
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Investment Forecasting"</h3>
            <p className="text-gray-600">"Predict future performance and cash flow for better planning."</p>
          </div>\n          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: "#4A90E2" }}>
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Risk Assessment"</h3>
            <p className="text-gray-600">"Identify potential risks and develop strategies to mitigate them."</p>
          </div>\n          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: "#4A90E2" }}>
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Custom Reporting"</h3>
            <p className="text-gray-600">"Create tailored reports to visualize and share your findings."</p>
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
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Input Your Data"</h3>
              <p className="text-gray-600">"Enter your property details, including purchase price, expenses, and rental income."</p>
            </div>
          </div>\n          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: "#4A90E2" }}>
              2
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Analyze Performance"</h3>
              <p className="text-gray-600">"Utilize our tools to assess the financial performance and return on investment."</p>
            </div>
          </div>\n          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: "#4A90E2" }}>
              3
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Generate Reports"</h3>
              <p className="text-gray-600">"Create comprehensive reports that summarize your financial analysis and insights."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="max-w-6xl mx-auto px-4 py-16 bg-white">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Use Cases</h2>
        <div className="space-y-6">
          <div className="border-l-4 pl-6 py-4" style={{ borderColor: "#D0021B" }}>
            <h3 className="text-lg font-bold text-gray-900 mb-2">"Portfolio Evaluation"</h3>
            <p className="text-gray-600 mb-2">"Evaluate the overall health of your real estate investments."</p>
            <p className="text-sm text-gray-500 italic">"Assessing cash flow and ROI across multiple properties."</p>
          </div>\n          <div className="border-l-4 pl-6 py-4" style={{ borderColor: "#D0021B" }}>
            <h3 className="text-lg font-bold text-gray-900 mb-2">"Investment Strategy Planning"</h3>
            <p className="text-gray-600 mb-2">"Develop strategies for future property acquisitions or sales."</p>
            <p className="text-sm text-gray-500 italic">"Identifying high-yield properties based on market trends."</p>
          </div>\n          <div className="border-l-4 pl-6 py-4" style={{ borderColor: "#D0021B" }}>
            <h3 className="text-lg font-bold text-gray-900 mb-2">"Performance Benchmarking"</h3>
            <p className="text-gray-600 mb-2">"Compare your portfolio's performance against market standards."</p>
            <p className="text-sm text-gray-500 italic">"Using analytics to measure against local market averages."</p>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Technical Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">"Data Integration"</h4>
            <p className="text-gray-600 text-sm">"Seamlessly integrate with third-party financial platforms for real-time data."</p>
          </div>\n          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">"User Interface"</h4>
            <p className="text-gray-600 text-sm">"Intuitive dashboard that allows for easy navigation and data visualization."</p>
          </div>\n          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">"Security Protocols"</h4>
            <p className="text-gray-600 text-sm">"Robust security measures to protect sensitive financial information."</p>
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
