import React from 'react';
import Link from 'next/link';

export default function Portfolio() {
  const primaryColor = "#FFCC00";
  
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link href="/" className="text-indigo-600 font-semibold">← Back to Home</Link>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">"Our Work"</h1>
        <p className="text-xl text-gray-600 mb-12">"Explore our portfolio showcasing the Dog Walker Marketplace's unique features."</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="h-48" style={{ backgroundColor: "#FFCC00" }}></div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">"Technology"</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Real-Time GPS Tracking"</h3>
              <p className="text-gray-600 mb-4">"Integrated GPS tracking for live updates on dog walks and routes."</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">{json.dumps(tag)}</span> <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">{json.dumps(tag)}</span> <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">{json.dumps(tag)}</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="h-48" style={{ backgroundColor: "#FFCC00" }}></div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">"User Experience"</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"User Reviews System"</h3>
              <p className="text-gray-600 mb-4">"A robust system for users to leave reviews and ratings for walkers."</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">{json.dumps(tag)}</span> <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">{json.dumps(tag)}</span> <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">{json.dumps(tag)}</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="h-48" style={{ backgroundColor: "#FFCC00" }}></div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">"Functionality"</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Walk Scheduling Feature"</h3>
              <p className="text-gray-600 mb-4">"Easy scheduling of dog walks with calendar integration."</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">{json.dumps(tag)}</span> <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">{json.dumps(tag)}</span> <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">{json.dumps(tag)}</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="h-48" style={{ backgroundColor: "#FFCC00" }}></div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">"Design"</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Walker Profiles"</h3>
              <p className="text-gray-600 mb-4">"Detailed profiles for dog walkers showcasing their experience."</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">{json.dumps(tag)}</span> <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">{json.dumps(tag)}</span> <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">{json.dumps(tag)}</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="h-48" style={{ backgroundColor: "#FFCC00" }}></div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">"Financial"</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Payment Integration"</h3>
              <p className="text-gray-600 mb-4">"Secure payment processing for hassle-free transactions."</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">{json.dumps(tag)}</span> <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">{json.dumps(tag)}</span> <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">{json.dumps(tag)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
