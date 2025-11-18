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
          <h1 className="text-5xl font-bold mb-4">"Real-time Alerts for High-Risk Customers"</h1>
          <p className="text-2xl opacity-90">"Stay ahead of churn with instant risk notifications."</p>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-white rounded-xl shadow-lg p-8 -mt-20 relative z-10">
          <p className="text-xl text-gray-700 leading-relaxed">"Real-time alerts empower businesses to identify high-risk customers immediately. This feature enables proactive engagement strategies to retain customers before they churn."</p>
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
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Immediate Insights"</h3>
            <p className="text-gray-600">"Receive alerts as soon as a customer shows signs of risk."</p>
          </div>\n          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: "#007BFF" }}>
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Proactive Engagement"</h3>
            <p className="text-gray-600">"Engage customers with targeted campaigns to reduce churn."</p>
          </div>\n          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: "#007BFF" }}>
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Data-Driven Decisions"</h3>
            <p className="text-gray-600">"Utilize analytics to refine retention strategies effectively."</p>
          </div>\n          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: "#007BFF" }}>
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Increased Retention Rates"</h3>
            <p className="text-gray-600">"Lower churn rates by addressing issues before they escalate."</p>
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
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Monitor Customer Behavior"</h3>
              <p className="text-gray-600">"Continuously analyze customer interactions and behaviors to detect patterns indicative of churn risk."</p>
            </div>
          </div>\n          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: "#007BFF" }}>
              2
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Set Risk Thresholds"</h3>
              <p className="text-gray-600">"Define specific thresholds and criteria that trigger real-time alerts for high-risk customers."</p>
            </div>
          </div>\n          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: "#007BFF" }}>
              3
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Receive Instant Notifications"</h3>
              <p className="text-gray-600">"Get immediate alerts via email or mobile app when a customer is identified as high-risk, enabling timely action."</p>
            </div>
          </div>\n          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: "#007BFF" }}>
              4
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Engage with Tailored Solutions"</h3>
              <p className="text-gray-600">"Implement personalized outreach strategies to address customer concerns and enhance loyalty."</p>
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
            <p className="text-gray-600 mb-2">"Launch campaigns specifically aimed at high-risk customers to improve retention."</p>
            <p className="text-sm text-gray-500 italic">"Offering discounts to customers showing decreased engagement."</p>
          </div>\n          <div className="border-l-4 pl-6 py-4" style={{ borderColor: "#28A745" }}>
            <h3 className="text-lg font-bold text-gray-900 mb-2">"Customer Support Intervention"</h3>
            <p className="text-gray-600 mb-2">"Deploy support teams to reach out and assist customers in distress before they churn."</p>
            <p className="text-sm text-gray-500 italic">"Connecting support specialists with customers who report issues."</p>
          </div>\n          <div className="border-l-4 pl-6 py-4" style={{ borderColor: "#28A745" }}>
            <h3 className="text-lg font-bold text-gray-900 mb-2">"Feedback Collection"</h3>
            <p className="text-gray-600 mb-2">"Solicit feedback from high-risk customers to identify pain points and improve services."</p>
            <p className="text-sm text-gray-500 italic">"Conducting surveys to understand dissatisfaction reasons."</p>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Technical Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">"Real-time Data Processing"</h4>
            <p className="text-gray-600 text-sm">"Utilizes advanced algorithms to process and analyze customer data in real-time."</p>
          </div>\n          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">"Integration Capabilities"</h4>
            <p className="text-gray-600 text-sm">"Seamlessly integrates with existing CRM and analytics tools for comprehensive insights."</p>
          </div>\n          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">"Customizable Alert System"</h4>
            <p className="text-gray-600 text-sm">"Allows businesses to customize alert parameters based on specific industry needs."</p>
          </div>\n          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">"User-friendly Dashboard"</h4>
            <p className="text-gray-600 text-sm">"Features an intuitive dashboard for easy monitoring and management of alerts."</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4" style={{ backgroundColor: primaryColor }}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">"Start Reducing Churn Today!"</h2>
          <button className="bg-white px-8 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105" style={{ color: primaryColor }}>
            "Get Started"
          </button>
        </div>
      </section>
    </div>
  );
}
