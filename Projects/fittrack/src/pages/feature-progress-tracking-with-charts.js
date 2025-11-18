import React from 'react';
import Link from 'next/link';

export default function FeatureDetail() {
  const primaryColor = "#4CAF50";
  const secondaryColor = "#FF9800";
  const accentColor = "#2196F3";
  
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
          <h1 className="text-5xl font-bold mb-4">"Progress Tracking with Charts in FitTrack"</h1>
          <p className="text-2xl opacity-90">"Visualize your fitness journey with dynamic charts!"</p>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-white rounded-xl shadow-lg p-8 -mt-20 relative z-10">
          <p className="text-xl text-gray-700 leading-relaxed">"Track your fitness progress visually with interactive charts. FitTrack's charts help you monitor your workouts, nutrition, and overall health trends over time."</p>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Key Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: "#4CAF50" }}>
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Visual Insights"</h3>
            <p className="text-gray-600">"Easily understand your progress through visual representations."</p>
          </div>\n          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: "#4CAF50" }}>
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Goal Monitoring"</h3>
            <p className="text-gray-600">"Set and track fitness goals with real-time updates on your progress."</p>
          </div>\n          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: "#4CAF50" }}>
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Data Comparisons"</h3>
            <p className="text-gray-600">"Compare different metrics over time to optimize your workout routine."</p>
          </div>\n          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: "#4CAF50" }}>
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Motivation Boost"</h3>
            <p className="text-gray-600">"Stay motivated by seeing your achievements and improvements visually."</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">How It Works</h2>
        <div className="space-y-8">
          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: "#4CAF50" }}>
              1
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Input Your Data"</h3>
              <p className="text-gray-600">"Log your workouts, meals, and other health metrics into FitTrack to start tracking."</p>
            </div>
          </div>\n          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: "#4CAF50" }}>
              2
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Generate Charts"</h3>
              <p className="text-gray-600">"FitTrack automatically generates dynamic charts based on your logged data for easy visualization."</p>
            </div>
          </div>\n          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: "#4CAF50" }}>
              3
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Analyze Trends"</h3>
              <p className="text-gray-600">"Review charts to analyze trends and identify areas for improvement in your fitness journey."</p>
            </div>
          </div>\n          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: "#4CAF50" }}>
              4
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Adjust Your Goals"</h3>
              <p className="text-gray-600">"Based on your progress, adjust your fitness goals for continuous improvement and motivation."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="max-w-6xl mx-auto px-4 py-16 bg-white">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Use Cases</h2>
        <div className="space-y-6">
          <div className="border-l-4 pl-6 py-4" style={{ borderColor: "#2196F3" }}>
            <h3 className="text-lg font-bold text-gray-900 mb-2">"Weight Loss Journey"</h3>
            <p className="text-gray-600 mb-2">"Track your weight loss progress with weekly and monthly charts."</p>
            <p className="text-sm text-gray-500 italic">"See how your weight fluctuates and adjust your diet accordingly."</p>
          </div>\n          <div className="border-l-4 pl-6 py-4" style={{ borderColor: "#2196F3" }}>
            <h3 className="text-lg font-bold text-gray-900 mb-2">"Strength Training Progress"</h3>
            <p className="text-gray-600 mb-2">"Monitor strength gains over time with detailed lift charts."</p>
            <p className="text-sm text-gray-500 italic">"Compare bench press weights week by week to ensure progress."</p>
          </div>\n          <div className="border-l-4 pl-6 py-4" style={{ borderColor: "#2196F3" }}>
            <h3 className="text-lg font-bold text-gray-900 mb-2">"Nutrition Tracking"</h3>
            <p className="text-gray-600 mb-2">"Visualize your daily nutritional intake against your goals."</p>
            <p className="text-sm text-gray-500 italic">"Chart your calorie intake and macronutrient distribution."</p>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Technical Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">"Data Integration"</h4>
            <p className="text-gray-600 text-sm">"Seamlessly integrate wearable devices and health apps for comprehensive data collection."</p>
          </div>\n          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">"Real-time Updates"</h4>
            <p className="text-gray-600 text-sm">"Charts are updated in real-time as you log new data, providing immediate feedback."</p>
          </div>\n          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">"User-friendly Interface"</h4>
            <p className="text-gray-600 text-sm">"Designed with a user-friendly interface for easy navigation and data interpretation."</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4" style={{ backgroundColor: primaryColor }}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">"Start Tracking Your Progress Today!"</h2>
          <button className="bg-white px-8 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105" style={{ color: primaryColor }}>
            "Get Started"
          </button>
        </div>
      </section>
    </div>
  );
}
