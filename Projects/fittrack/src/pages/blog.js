import React from 'react';
import Link from 'next/link';

export default function Blog() {
  const primaryColor = "#4CAF50";
  
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link href="/" className="text-indigo-600 font-semibold">← Back to Home</Link>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">"FitTrack Blog"</h1>
        <p className="text-xl text-gray-600 mb-12">Latest news and updates</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="h-48" style={{ backgroundColor: "#4CAF50" }}>  </div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">"2023-10-15" • "Fitness Tips"</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">"Maximize Your Workouts with FitTrack"</h3>
              <p className="text-gray-600 mb-4">"Discover how FitTrack can enhance your fitness routine and keep you motivated!"</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">By "Jane Doe"</span>
                <a href="#" className="text-indigo-600 font-semibold hover:text-indigo-700">Read More →</a>
              </div>
            </div>
          </article>
          <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="h-48" style={{ backgroundColor: "#4CAF50" }}>  </div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">"2023-10-10" • "Health & Wellness"</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">"Tracking Progress: Why It Matters"</h3>
              <p className="text-gray-600 mb-4">"Learn the importance of tracking your fitness journey and how FitTrack helps."</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">By "John Smith"</span>
                <a href="#" className="text-indigo-600 font-semibold hover:text-indigo-700">Read More →</a>
              </div>
            </div>
          </article>
          <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="h-48" style={{ backgroundColor: "#4CAF50" }}>  </div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">"2023-10-05" • "Nutrition"</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">"Nutrition and Fitness: The Perfect Pair"</h3>
              <p className="text-gray-600 mb-4">"Explore how FitTrack integrates nutrition tracking for a balanced fitness approach."</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">By "Emily Johnson"</span>
                <a href="#" className="text-indigo-600 font-semibold hover:text-indigo-700">Read More →</a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
