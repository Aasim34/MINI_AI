import React from 'react';
import Link from 'next/link';

export default function Portfolio() {
  const primaryColor = "#3E4E50";
  
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link href="/" className="text-indigo-600 font-semibold">← Back to Home</Link>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">"Our Work"</h1>
        <p className="text-xl text-gray-600 mb-12">"A collection of our finest photography showcasing diverse styles and subjects."</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="h-48" style={{ backgroundColor: "#3E4E50" }}></div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">"Landscape"</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Wanderlust Landscapes"</h3>
              <p className="text-gray-600 mb-4">"Breathtaking views captured during my travels across the globe."</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"travel"</span> <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"nature"</span> <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"landscape"</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="h-48" style={{ backgroundColor: "#3E4E50" }}></div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">"Street"</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Urban Explorations"</h3>
              <p className="text-gray-600 mb-4">"Capturing the essence of city life through striking urban photography."</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"street"</span> <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"urban"</span> <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"photography"</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="h-48" style={{ backgroundColor: "#3E4E50" }}></div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">"Portrait"</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Portraits of Life"</h3>
              <p className="text-gray-600 mb-4">"A series of intimate portraits that tell the stories of diverse individuals."</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"portrait"</span> <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"people"</span> <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"emotions"</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="h-48" style={{ backgroundColor: "#3E4E50" }}></div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">"Wildlife"</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Wildlife Wonders"</h3>
              <p className="text-gray-600 mb-4">"Stunning shots of wildlife in their natural habitats, showcasing the beauty of nature."</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"wildlife"</span> <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"animals"</span> <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"nature"</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="h-48" style={{ backgroundColor: "#3E4E50" }}></div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">"Candid"</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Candid Moments"</h3>
              <p className="text-gray-600 mb-4">"Unposed, authentic moments that capture the essence of everyday life."</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"candid"</span> <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"life"</span> <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"moments"</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
