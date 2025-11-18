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
          <h1 className="text-5xl font-bold mb-4">"Churn Prediction Model"</h1>
          <p className="text-2xl opacity-90">"Reduce customer loss with predictive analytics tools."</p>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-white rounded-xl shadow-lg p-8 -mt-20 relative z-10">
          <p className="text-xl text-gray-700 leading-relaxed">"The Churn Prediction Model empowers businesses to identify potential customer churn before it happens. By leveraging advanced analytics, it enables targeted interventions to retain valuable customers."</p>
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
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Proactive Retention"</h3>
            <p className="text-gray-600">"Identify at-risk customers and intervene before they leave."</p>
          </div>\n          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: "#007BFF" }}>
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Data-Driven Decisions"</h3>
            <p className="text-gray-600">"Make informed decisions based on predictive insights for better outcomes."</p>
          </div>\n          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: "#007BFF" }}>
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Increased Revenue"</h3>
            <p className="text-gray-600">"Retaining customers leads to sustained revenue and growth opportunities."</p>
          </div>\n          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: "#007BFF" }}>
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Enhanced Customer Insights"</h3>
            <p className="text-gray-600">"Gain deeper understanding of customer behavior and preferences."</p>
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
              <p className="text-gray-600">"Gather historical customer data including interactions, purchases, and feedback to create a robust dataset."</p>
            </div>
          </div>\n          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: "#007BFF" }}>
              2
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Model Training"</h3>
              <p className="text-gray-600">"Utilize machine learning algorithms to analyze the data and build a predictive model that identifies churn patterns."</p>
            </div>
          </div>\n          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: "#007BFF" }}>
              3
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Prediction Analysis"</h3>
              <p className="text-gray-600">"Apply the trained model on current customer data to predict churn likelihood and focus on at-risk segments."</p>
            </div>
          </div>\n          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: "#007BFF" }}>
              4
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Targeted Interventions"</h3>
              <p className="text-gray-600">"Implement personalized marketing strategies and outreach efforts to engage customers identified as likely to churn."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="max-w-6xl mx-auto px-4 py-16 bg-white">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Use Cases</h2>
        <div className="space-y-6">
          <div className="border-l-4 pl-6 py-4" style={{ borderColor: "#28A745" }}>
            <h3 className="text-lg font-bold text-gray-900 mb-2">"Subscription Services"</h3>
            <p className="text-gray-600 mb-2">"Predict churn in subscription-based models for timely retention efforts."</p>
            <p className="text-sm text-gray-500 italic">"Streaming service identifying users likely to cancel."</p>
          </div>\n          <div className="border-l-4 pl-6 py-4" style={{ borderColor: "#28A745" }}>
            <h3 className="text-lg font-bold text-gray-900 mb-2">"E-commerce Platforms"</h3>
            <p className="text-gray-600 mb-2">"Analyze customer purchasing behavior to prevent abandonment."</p>
            <p className="text-sm text-gray-500 italic">"Identifying customers who haven't shopped in a while."</p>
          </div>\n          <div className="border-l-4 pl-6 py-4" style={{ borderColor: "#28A745" }}>
            <h3 className="text-lg font-bold text-gray-900 mb-2">"Telecommunications"</h3>
            <p className="text-gray-600 mb-2">"Spot potential churn among users based on service usage trends."</p>
            <p className="text-sm text-gray-500 italic">"Mobile carriers targeting customers with limited usage."</p>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Technical Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">"Algorithm Types"</h4>
            <p className="text-gray-600 text-sm">"Utilizes various algorithms such as logistic regression, decision trees, and neural networks."</p>
          </div>\n          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">"Data Sources"</h4>
            <p className="text-gray-600 text-sm">"Integrates multiple data sources including CRM systems, transaction logs, and customer feedback."</p>
          </div>\n          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">"Scalability"</h4>
            <p className="text-gray-600 text-sm">"Designed to scale with business needs, accommodating thousands of customers efficiently."</p>
          </div>\n          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">"Integration"</h4>
            <p className="text-gray-600 text-sm">"Seamlessly integrates with existing analytics tools and platforms for easy access."</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4" style={{ backgroundColor: primaryColor }}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">"Start Predicting Customer Churn Today!"</h2>
          <button className="bg-white px-8 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105" style={{ color: primaryColor }}>
            "Get Started"
          </button>
        </div>
      </section>
    </div>
  );
}
