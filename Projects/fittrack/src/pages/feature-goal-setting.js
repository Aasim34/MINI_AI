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
          <h1 className="text-5xl font-bold mb-4">"Goal Setting Feature - FitTrack"</h1>
          <p className="text-2xl opacity-90">"Set, track, and achieve your fitness goals with ease!"</p>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-white rounded-xl shadow-lg p-8 -mt-20 relative z-10">
          <p className="text-xl text-gray-700 leading-relaxed">"Goal setting in FitTrack helps users define clear fitness objectives and monitor their progress towards achieving them. With personalized goals, users can stay motivated and accountable throughout their fitness journey."</p>
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
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Personalized Goals"</h3>
            <p className="text-gray-600">"Create tailored fitness goals based on your preferences and abilities."</p>
          </div>\n          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: "#4CAF50" }}>
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Progress Tracking"</h3>
            <p className="text-gray-600">"Monitor your achievements and adjust goals as needed for better results."</p>
          </div>\n          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: "#4CAF50" }}>
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Motivational Reminders"</h3>
            <p className="text-gray-600">"Receive reminders and encouragement to stay on track with your goals."</p>
          </div>\n          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: "#4CAF50" }}>
              <span className="text-white text-2xl">✓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">"Community Support"</h3>
            <p className="text-gray-600">"Connect with others and share your goals for additional motivation."</p>
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
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Define Your Goals"</h3>
              <p className="text-gray-600">"Start by selecting specific and measurable fitness goals that resonate with you."</p>
            </div>
          </div>\n          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: "#4CAF50" }}>
              2
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Set a Timeline"</h3>
              <p className="text-gray-600">"Establish a realistic timeframe for achieving your goals to keep you focused and committed."</p>
            </div>
          </div>\n          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: "#4CAF50" }}>
              3
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Track Your Progress"</h3>
              <p className="text-gray-600">"Utilize FitTrack's intuitive dashboard to log your workouts and track your progress daily."</p>
            </div>
          </div>\n          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: "#4CAF50" }}>
              4
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Adjust as Needed"</h3>
              <p className="text-gray-600">"Evaluate your progress regularly and modify your goals to ensure they remain achievable."</p>
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
            <p className="text-gray-600 mb-2">"Set a weight loss target and track daily calorie intake and workouts."</p>
            <p className="text-sm text-gray-500 italic">"Lose 10 pounds in 3 months by tracking meals and exercise."</p>
          </div>\n          <div className="border-l-4 pl-6 py-4" style={{ borderColor: "#2196F3" }}>
            <h3 className="text-lg font-bold text-gray-900 mb-2">"Training for a 5K"</h3>
            <p className="text-gray-600 mb-2">"Create a plan to gradually increase your running distance leading up to a race."</p>
            <p className="text-sm text-gray-500 italic">"Run a 5K in under 30 minutes in 8 weeks with a structured plan."</p>
          </div>\n          <div className="border-l-4 pl-6 py-4" style={{ borderColor: "#2196F3" }}>
            <h3 className="text-lg font-bold text-gray-900 mb-2">"Strength Building"</h3>
            <p className="text-gray-600 mb-2">"Define strength goals and log workout sessions to monitor improvements."</p>
            <p className="text-sm text-gray-500 italic">"Increase squat weight by 20 pounds over 6 weeks."</p>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Technical Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">"Data Storage"</h4>
            <p className="text-gray-600 text-sm">"User goals and progress are securely stored in the cloud for easy access."</p>
          </div>\n          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">"Notifications"</h4>
            <p className="text-gray-600 text-sm">"Automated reminders are sent through push notifications to keep users engaged."</p>
          </div>\n          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">"Analytics"</h4>
            <p className="text-gray-600 text-sm">"Advanced analytics track user performance and suggest goal adjustments."</p>
          </div>\n          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-1">"User Interface"</h4>
            <p className="text-gray-600 text-sm">"An intuitive interface allows easy navigation and goal management."</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4" style={{ backgroundColor: primaryColor }}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">"Start Achieving Your Fitness Goals Today!"</h2>
          <button className="bg-white px-8 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105" style={{ color: primaryColor }}>
            "Set Your Goals Now"
          </button>
        </div>
      </section>
    </div>
  );
}
