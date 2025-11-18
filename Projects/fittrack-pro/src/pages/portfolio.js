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
        <p className="text-xl text-gray-600 mb-12">"Explore our portfolio showcasing innovative fitness tracking solutions."</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="h-48" style={{ backgroundColor: "#4CAF50" }}></div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">"Mobile Application"</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"FitTrack Pro"</h3>
              <p className="text-gray-600 mb-4">"A comprehensive fitness tracking app offering personalized workout plans."</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"Fitness"</span> <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"Nutrition"</span> <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"Health"</span> <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"Tracking"</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="h-48" style={{ backgroundColor: "#4CAF50" }}></div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">"Web Application"</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Nutrition Planner"</h3>
              <p className="text-gray-600 mb-4">"An integrated nutrition guide tailored to individual dietary needs."</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"Nutrition"</span> <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"Diet"</span> <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"Health"</span> <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"Wellness"</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="h-48" style={{ backgroundColor: "#4CAF50" }}></div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">"Mobile Application"</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Workout Scheduler"</h3>
              <p className="text-gray-600 mb-4">"A dynamic scheduler for organizing daily workout routines effectively."</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"Scheduling"</span> <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"Fitness"</span> <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"Health"</span> <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"Productivity"</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="h-48" style={{ backgroundColor: "#4CAF50" }}></div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">"Web Application"</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Progress Tracker"</h3>
              <p className="text-gray-600 mb-4">"Visual tools to track fitness progress and set achievable goals."</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"Tracking"</span> <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"Goals"</span> <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"Fitness"</span> <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"Motivation"</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="h-48" style={{ backgroundColor: "#4CAF50" }}></div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">"Mobile Application"</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Community Challenges"</h3>
              <p className="text-gray-600 mb-4">"Engaging fitness challenges to motivate users through community support."</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"Community"</span> <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"Challenges"</span> <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"Engagement"</span> <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"Fitness"</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
