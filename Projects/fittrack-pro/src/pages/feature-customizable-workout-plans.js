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
          <h1 className="text-5xl font-bold mb-4">"Customizable Workout Plans in FitTrack Pro"</h1>
          <p className="text-2xl opacity-90">"Tailor your fitness journey with personalized plans!"</p>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-white rounded-xl shadow-lg p-8 -mt-20 relative z-10">
          <p className="text-xl text-gray-700 leading-relaxed">"FitTrack Pro offers customizable workout plans to fit your unique fitness goals. Whether you're a beginner or an advanced athlete, you can create a plan that adapts to your needs."</p>
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
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Personalized Training"</h3>
            <p className="text-gray-600">"Get workouts tailored to your fitness level and goals."</p>
          </div>\n          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: "#4CAF50" }}>
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Flexible Scheduling"</h3>
            <p className="text-gray-600">"Adjust your workout plan based on your availability and preferences."</p>
          </div>\n          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: "#4CAF50" }}>
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Progress Tracking"</h3>
            <p className="text-gray-600">"Easily monitor your progress and make adjustments to your plan."</p>
          </div>\n          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: "#4CAF50" }}>
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Expert Guidance"</h3>
            <p className="text-gray-600">"Receive nutrition tips and professional advice along with your workouts."</p>
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
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Set Your Goals"</h3>
              <p className="text-gray-600">"Begin by defining your fitness goals, whether it's weight loss, muscle gain, or overall fitness."</p>
            </div>
          </div>\n          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: "#4CAF50" }}>
              2
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Choose Your Preferences"</h3>
              <p className="text-gray-600">"Select workout types, durations, and equipment you prefer to use in your training plans."</p>
            </div>
          </div>\n          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: "#4CAF50" }}>
              3
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Receive Your Plan"</h3>
              <p className="text-gray-600">"FitTrack Pro generates a personalized workout plan based on your inputs, ensuring it aligns with your goals."</p>
            </div>
          </div>\n          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: "#4CAF50" }}>
              4
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Track and Adjust"</h3>
              <p className="text-gray-600">"As you progress, use the app to track your workouts and make necessary adjustments to your plan."</p>
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
            <p className="text-gray-600 mb-2">"Create a workout plan that focuses on calorie burning and fat loss."</p>
            <p className="text-sm text-gray-500 italic">"A user sets a goal to lose 10 pounds in 3 months."</p>
          </div>\n          <div className="border-l-4 pl-6 py-4" style={{ borderColor: "#2196F3" }}>
            <h3 className="text-lg font-bold text-gray-900 mb-2">"Muscle Building"</h3>
            <p className="text-gray-600 mb-2">"Design a strength training plan that targets specific muscle groups."</p>
            <p className="text-sm text-gray-500 italic">"An athlete aims to increase their bench press strength."</p>
          </div>\n          <div className="border-l-4 pl-6 py-4" style={{ borderColor: "#2196F3" }}>
            <h3 className="text-lg font-bold text-gray-900 mb-2">"Rehabilitation"</h3>
            <p className="text-gray-600 mb-2">"Develop a low-impact workout plan for recovery from injury."</p>
            <p className="text-sm text-gray-500 italic">"A user recovering from a knee surgery follows a tailored plan."</p>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Technical Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">"User Interface"</h4>
            <p className="text-gray-600 text-sm">"Intuitive design allows users to easily navigate and customize their workout plans."</p>
          </div>\n          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">"Real-Time Adjustments"</h4>
            <p className="text-gray-600 text-sm">"The app utilizes AI to modify workout plans based on user feedback and progress."</p>
          </div>\n          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">"Data Integration"</h4>
            <p className="text-gray-600 text-sm">"Syncs with wearable devices to track metrics like heart rate and calories burned."</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4" style={{ backgroundColor: primaryColor }}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">"Start Your Fitness Journey Today!"</h2>
          <button className="bg-white px-8 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105" style={{ color: primaryColor }}>
            "Create Your Custom Plan"
          </button>
        </div>
      </section>
    </div>
  );
}
