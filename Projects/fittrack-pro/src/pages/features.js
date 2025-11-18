import React from 'react';
import Link from 'next/link';

export default function Features() {
  const primaryColor = "#4CAF50";
  
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link href="/" className="text-indigo-600 font-semibold">← Back to Home</Link>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">"Features"</h1>
        <p className="text-xl text-gray-600 mb-12">"FitTrack Pro is your ultimate fitness companion, designed to help you achieve your health and wellness goals with personalized workout plans and nutrition guidance."</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="w-16 h-16 rounded-lg mb-6 flex items-center justify-center" style={{ backgroundColor: "#4CAF50" }}>
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 3.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM2 10a8 8 0 1116 0 8 8 0 01-16 0z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">"Personalized Workout Plans"</h3>
            <p className="text-gray-600 mb-6">"Get customized workout regimens based on your fitness level, goals, and preferences to maximize results."</p>
            <ul className="space-y-2">
              <li className="flex items-start"><svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span className="text-gray-700">"Tailored to your individual needs"</span></li> <li className="flex items-start"><svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span className="text-gray-700">"Adaptable as you progress"</span></li> <li className="flex items-start"><svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span className="text-gray-700">"Keeps you motivated and engaged"</span></li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="w-16 h-16 rounded-lg mb-6 flex items-center justify-center" style={{ backgroundColor: "#4CAF50" }}>
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 3.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM2 10a8 8 0 1116 0 8 8 0 01-16 0z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">"Nutrition Guidance"</h3>
            <p className="text-gray-600 mb-6">"Receive meal plans and nutritional advice to fuel your workouts and enhance recovery, promoting overall wellness."</p>
            <ul className="space-y-2">
              <li className="flex items-start"><svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span className="text-gray-700">"Improves energy levels"</span></li> <li className="flex items-start"><svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span className="text-gray-700">"Supports muscle growth and recovery"</span></li> <li className="flex items-start"><svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span className="text-gray-700">"Helps maintain a balanced diet"</span></li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="w-16 h-16 rounded-lg mb-6 flex items-center justify-center" style={{ backgroundColor: "#4CAF50" }}>
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 3.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM2 10a8 8 0 1116 0 8 8 0 01-16 0z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">"Progress Tracking"</h3>
            <p className="text-gray-600 mb-6">"Easily track your workouts, nutrition, and overall progress through an intuitive and user-friendly dashboard."</p>
            <ul className="space-y-2">
              <li className="flex items-start"><svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span className="text-gray-700">"Visualize your journey"</span></li> <li className="flex items-start"><svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span className="text-gray-700">"Stay accountable"</span></li> <li className="flex items-start"><svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span className="text-gray-700">"Identify trends and adjust plans accordingly"</span></li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="w-16 h-16 rounded-lg mb-6 flex items-center justify-center" style={{ backgroundColor: "#4CAF50" }}>
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 3.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM2 10a8 8 0 1116 0 8 8 0 01-16 0z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">"Community Support"</h3>
            <p className="text-gray-600 mb-6">"Connect with other fitness enthusiasts, share achievements, and gain motivation from a supportive community."</p>
            <ul className="space-y-2">
              <li className="flex items-start"><svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span className="text-gray-700">"Encourages consistency"</span></li> <li className="flex items-start"><svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span className="text-gray-700">"Fosters accountability"</span></li> <li className="flex items-start"><svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span className="text-gray-700">"Provides a sense of belonging"</span></li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="w-16 h-16 rounded-lg mb-6 flex items-center justify-center" style={{ backgroundColor: "#4CAF50" }}>
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 3.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM2 10a8 8 0 1116 0 8 8 0 01-16 0z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">"Integration with Wearables"</h3>
            <p className="text-gray-600 mb-6">"Sync FitTrack Pro with your favorite fitness devices to automatically track workouts and health metrics."</p>
            <ul className="space-y-2">
              <li className="flex items-start"><svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span className="text-gray-700">"Seamless data collection"</span></li> <li className="flex items-start"><svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span className="text-gray-700">"Enhanced accuracy"</span></li> <li className="flex items-start"><svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span className="text-gray-700">"Convenience of one-stop tracking"</span></li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="w-16 h-16 rounded-lg mb-6 flex items-center justify-center" style={{ backgroundColor: "#4CAF50" }}>
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 3.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM2 10a8 8 0 1116 0 8 8 0 01-16 0z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">"Video Tutorials"</h3>
            <p className="text-gray-600 mb-6">"Access a library of instructional videos to ensure correct form and technique for various exercises."</p>
            <ul className="space-y-2">
              <li className="flex items-start"><svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span className="text-gray-700">"Reduces the risk of injury"</span></li> <li className="flex items-start"><svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span className="text-gray-700">"Boosts confidence in workouts"</span></li> <li className="flex items-start"><svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span className="text-gray-700">"Enhances overall effectiveness of exercises"</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
