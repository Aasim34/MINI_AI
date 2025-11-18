import React from 'react';
import Link from 'next/link';

export default function Portfolio() {
  const primaryColor = "#4CAF50";
  
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link href="/" className="text-indigo-600 font-semibold">← Back to Home</Link>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">"Our Work"</h1>
        <p className="text-xl text-gray-600 mb-12">"Explore our innovative fitness tracking application, FitTrack, designed to enhance your fitness journey."</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="h-48" style={{ backgroundColor: "#4CAF50" }}></div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">"Mobile Application"</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"FitTrack Mobile App"</h3>
              <p className="text-gray-600 mb-4">"A user-friendly mobile app that tracks workouts, nutrition, and overall health."</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"Fitness"</span> <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"Health"</span> <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"Tracking"</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="h-48" style={{ backgroundColor: "#4CAF50" }}></div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">"Web Application"</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"FitTrack Web Dashboard"</h3>
              <p className="text-gray-600 mb-4">"A comprehensive web dashboard for users to analyze their fitness data and progress."</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"Web Development"</span> <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"Analytics"</span> <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"User Interface"</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="h-48" style={{ backgroundColor: "#4CAF50" }}></div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">"Hardware Integration"</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Wearable Device Integration"</h3>
              <p className="text-gray-600 mb-4">"Integration of various wearables to sync fitness data seamlessly with FitTrack."</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"Wearables"</span> <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"IoT"</span> <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"Data Sync"</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="h-48" style={{ backgroundColor: "#4CAF50" }}></div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">"Feature Development"</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Personalized Workout Plans"</h3>
              <p className="text-gray-600 mb-4">"Customizable workout plans based on user goals and fitness levels within the app."</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"Personalization"</span> <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"Fitness Plan"</span> <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"User Experience"</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="h-48" style={{ backgroundColor: "#4CAF50" }}></div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">"Feature Development"</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Nutrition Tracker"</h3>
              <p className="text-gray-600 mb-4">"Feature that allows users to log meals and track nutritional intake effectively."</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"Nutrition"</span> <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"Healthy Eating"</span> <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"Tracking"</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
