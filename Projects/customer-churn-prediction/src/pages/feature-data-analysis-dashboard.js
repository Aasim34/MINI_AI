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
          <h1 className="text-5xl font-bold mb-4">"Data Analysis Dashboard for Customer Churn Prediction"</h1>
          <p className="text-2xl opacity-90">"Empower your business with insightful churn analytics."</p>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-white rounded-xl shadow-lg p-8 -mt-20 relative z-10">
          <p className="text-xl text-gray-700 leading-relaxed">"The Data Analysis Dashboard provides real-time insights into customer behavior to predict churn. With powerful visualization tools, you can identify trends and make data-driven decisions to improve retention."</p>
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
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Visual Insights"</h3>
            <p className="text-gray-600">"Transform raw data into intuitive visualizations for better understanding."</p>
          </div>\n          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: "#007BFF" }}>
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Predictive Analytics"</h3>
            <p className="text-gray-600">"Utilize advanced algorithms to forecast potential churn risks accurately."</p>
          </div>\n          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: "#007BFF" }}>
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Custom Reports"</h3>
            <p className="text-gray-600">"Generate tailored reports to focus on key metrics related to customer retention."</p>
          </div>\n          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: "#007BFF" }}>
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">"User-Friendly Interface"</h3>
            <p className="text-gray-600">"Navigate easily through the dashboard with a clean and intuitive design."</p>
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
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Data Integration"</h3>
              <p className="text-gray-600">"Connect your existing databases and data sources to seamlessly pull in customer data."</p>
            </div>
          </div>\n          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: "#007BFF" }}>
              2
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Data Visualization"</h3>
              <p className="text-gray-600">"Utilize various charts and graphs to visualize customer trends and churn probabilities."</p>
            </div>
          </div>\n          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: "#007BFF" }}>
              3
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Churn Prediction"</h3>
              <p className="text-gray-600">"Leverage machine learning models to predict which customers are at risk of churning."</p>
            </div>
          </div>\n          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: "#007BFF" }}>
              4
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Actionable Insights"</h3>
              <p className="text-gray-600">"Receive recommendations based on data analysis to enhance customer retention strategies."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="max-w-6xl mx-auto px-4 py-16 bg-white">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Use Cases</h2>
        <div className="space-y-6">
          <div className="border-l-4 pl-6 py-4" style={{ borderColor: "#28A745" }}>
            <h3 className="text-lg font-bold text-gray-900 mb-2">"Identify At-Risk Customers"</h3>
            <p className="text-gray-600 mb-2">"Pinpoint customers who are likely to churn and take proactive measures."</p>
            <p className="text-sm text-gray-500 italic">"Targeted marketing campaigns to retain high-value customers."</p>
          </div>\n          <div className="border-l-4 pl-6 py-4" style={{ borderColor: "#28A745" }}>
            <h3 className="text-lg font-bold text-gray-900 mb-2">"Monitor Customer Engagement"</h3>
            <p className="text-gray-600 mb-2">"Track engagement metrics to understand factors influencing customer satisfaction."</p>
            <p className="text-sm text-gray-500 italic">"Analyzing usage patterns to improve product features."</p>
          </div>\n          <div className="border-l-4 pl-6 py-4" style={{ borderColor: "#28A745" }}>
            <h3 className="text-lg font-bold text-gray-900 mb-2">"Evaluate Marketing Strategies"</h3>
            <p className="text-gray-600 mb-2">"Assess the impact of marketing initiatives on customer retention rates."</p>
            <p className="text-sm text-gray-500 italic">"Comparing churn rates before and after a marketing campaign."</p>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Technical Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">"Data Sources"</h4>
            <p className="text-gray-600 text-sm">"Integrates with multiple data sources including CRM, social media, and analytics platforms."</p>
          </div>\n          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">"Machine Learning Models"</h4>
            <p className="text-gray-600 text-sm">"Employs state-of-the-art algorithms like logistic regression and random forests for predictions."</p>
          </div>\n          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">"Real-Time Processing"</h4>
            <p className="text-gray-600 text-sm">"Processes data in real-time to provide up-to-date insights and alerts."</p>
          </div>\n          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">"Security Features"</h4>
            <p className="text-gray-600 text-sm">"Ensures data security with encryption and compliance with privacy regulations."</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4" style={{ backgroundColor: primaryColor }}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">"Start Analyzing Your Customer Data Today!"</h2>
          <button className="bg-white px-8 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105" style={{ color: primaryColor }}>
            "Try the Dashboard"
          </button>
        </div>
      </section>
    </div>
  );
}
