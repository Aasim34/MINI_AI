import React from 'react';
import Link from 'next/link';

export default function FeatureDetail() {
  const primaryColor = "#007BFF";
  const secondaryColor = "#FFC107";
  const accentColor = "#28A745";
  
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
          <h1 className="text-5xl font-bold mb-4">"Customer Segmentation for Churn Prediction"</h1>
          <p className="text-2xl opacity-90">"Identify and target at-risk customers effectively."</p>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-white rounded-xl shadow-lg p-8 -mt-20 relative z-10">
          <p className="text-xl text-gray-700 leading-relaxed">"Customer segmentation allows businesses to categorize their users based on various factors. By identifying at-risk segments, companies can tailor strategies to reduce churn."</p>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Key Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: "#007BFF" }}>
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Enhanced Targeting"</h3>
            <p className="text-gray-600">"Focus marketing efforts on specific customer groups for better results."</p>
          </div>\n          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: "#007BFF" }}>
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Improved Retention Strategies"</h3>
            <p className="text-gray-600">"Develop personalized retention strategies based on segment behavior."</p>
          </div>\n          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: "#007BFF" }}>
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Data-Driven Insights"</h3>
            <p className="text-gray-600">"Leverage data analytics to drive decisions and optimize campaigns."</p>
          </div>\n          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: "#007BFF" }}>
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Increased Customer Satisfaction"</h3>
            <p className="text-gray-600">"Address specific needs of different customer segments to boost satisfaction."</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">How It Works</h2>
        <div className="space-y-8">
          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: "#007BFF" }}>
              1
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Data Collection"</h3>
              <p className="text-gray-600">"Gather customer data from various sources to analyze demographics and behaviors."</p>
            </div>
          </div>\n          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: "#007BFF" }}>
              2
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Segmentation Algorithms"</h3>
              <p className="text-gray-600">"Utilize machine learning algorithms to categorize customers into distinct segments."</p>
            </div>
          </div>\n          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: "#007BFF" }}>
              3
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Behavior Analysis"</h3>
              <p className="text-gray-600">"Examine the behaviors of each segment to identify patterns related to churn risk."</p>
            </div>
          </div>\n          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: "#007BFF" }}>
              4
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Strategy Development"</h3>
              <p className="text-gray-600">"Create tailored marketing strategies for each segment to improve retention rates."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="max-w-6xl mx-auto px-4 py-16 bg-white">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Use Cases</h2>
        <div className="space-y-6">
          <div className="border-l-4 pl-6 py-4" style={{ borderColor: "#28A745" }}>
            <h3 className="text-lg font-bold text-gray-900 mb-2">"Targeted Marketing Campaigns"</h3>
            <p className="text-gray-600 mb-2">"Launch campaigns aimed at high-risk segments to reduce churn."</p>
            <p className="text-sm text-gray-500 italic">"Sending personalized offers to customers showing disengagement."</p>
          </div>\n          <div className="border-l-4 pl-6 py-4" style={{ borderColor: "#28A745" }}>
            <h3 className="text-lg font-bold text-gray-900 mb-2">"Customer Feedback Initiatives"</h3>
            <p className="text-gray-600 mb-2">"Solicit feedback from specific segments to understand their needs."</p>
            <p className="text-sm text-gray-500 italic">"Conducting surveys with users who have downgraded their plans."</p>
          </div>\n          <div className="border-l-4 pl-6 py-4" style={{ borderColor: "#28A745" }}>
            <h3 className="text-lg font-bold text-gray-900 mb-2">"Product Development Insights"</h3>
            <p className="text-gray-600 mb-2">"Use segmentation data to inform product improvements that cater to user needs."</p>
            <p className="text-sm text-gray-500 italic">"Developing features requested by a particular customer segment."</p>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Technical Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">"Data Integration"</h4>
            <p className="text-gray-600 text-sm">"Integrate data from CRM, web analytics, and customer feedback tools."</p>
          </div>\n          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">"Machine Learning Models"</h4>
            <p className="text-gray-600 text-sm">"Employ clustering algorithms such as K-means or hierarchical clustering."</p>
          </div>\n          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">"Real-Time Analytics"</h4>
            <p className="text-gray-600 text-sm">"Utilize real-time data processing to keep customer segments updated."</p>
          </div>\n          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">"Visualization Tools"</h4>
            <p className="text-gray-600 text-sm">"Implement dashboards to visualize segment performance and churn risks."</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4" style={{ backgroundColor: primaryColor }}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">"Start Reducing Customer Churn Today!"</h2>
          <button className="bg-white px-8 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105" style={{ color: primaryColor }}>
            "Get Started"
          </button>
        </div>
      </section>
    </div>
  );
}
