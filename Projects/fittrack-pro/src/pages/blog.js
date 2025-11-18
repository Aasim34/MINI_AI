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
        <h1 className="text-5xl font-bold text-gray-900 mb-4">"FitTrack Pro Blog"</h1>
        <p className="text-xl text-gray-600 mb-12">Latest news and updates</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="h-48" style={{ backgroundColor: "#4CAF50" }}>  </div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">"2023-10-01" • "Fitness Tips"</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">"Kickstart Your Fitness Journey with FitTrack Pro"</h3>
              <p className="text-gray-600 mb-4">"Discover how FitTrack Pro can transform your workouts and nutrition habits."</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">By "Jane Doe"</span>
                <a href="#" className="text-indigo-600 font-semibold hover:text-indigo-700">Read More →</a>
              </div>
            </div>
          </article>
          <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="h-48" style={{ backgroundColor: "#4CAF50" }}>  </div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">"2023-10-08" • "Nutrition"</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">"Top 5 Nutrition Tips for Effective Weight Loss"</h3>
              <p className="text-gray-600 mb-4">"Learn essential nutrition tips to complement your workout regimen for optimal weight loss."</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">By "John Smith"</span>
                <a href="#" className="text-indigo-600 font-semibold hover:text-indigo-700">Read More →</a>
              </div>
            </div>
          </article>
          <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="h-48" style={{ backgroundColor: "#4CAF50" }}>  </div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">"2023-10-15" • "Workout Plans"</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">"Custom Workout Plans: Find Your Perfect Fit"</h3>
              <p className="text-gray-600 mb-4">"Explore how personalized workout plans can help you achieve your fitness goals faster."</p>
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
