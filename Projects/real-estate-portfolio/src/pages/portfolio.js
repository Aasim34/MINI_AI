import React from 'react';
import Link from 'next/link';

export default function Portfolio() {
  const primaryColor = "#4A90E2";
  
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link href="/" className="text-indigo-600 font-semibold">← Back to Home</Link>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">"Our Work"</h1>
        <p className="text-xl text-gray-600 mb-12">"Explore our diverse real estate projects showcasing innovation and quality."</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="h-48" style={{ backgroundColor: "#4A90E2" }}></div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">"Residential"</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Lakeside Villas"</h3>
              <p className="text-gray-600 mb-4">"Luxury villas with stunning lake views and modern amenities."</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"luxury"</span> <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"villas"</span> <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"lakefront"</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="h-48" style={{ backgroundColor: "#4A90E2" }}></div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">"Commercial"</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Downtown Office Complex"</h3>
              <p className="text-gray-600 mb-4">"A state-of-the-art office space in the heart of the city."</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"office"</span> <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"commercial"</span> <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"downtown"</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="h-48" style={{ backgroundColor: "#4A90E2" }}></div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">"Residential"</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Greenfield Apartments"</h3>
              <p className="text-gray-600 mb-4">"Eco-friendly apartments designed for sustainable living."</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"sustainable"</span> <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"apartments"</span> <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"eco-friendly"</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="h-48" style={{ backgroundColor: "#4A90E2" }}></div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">"Commercial"</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Riverside Retail Center"</h3>
              <p className="text-gray-600 mb-4">"A vibrant retail space with a mix of local and national brands."</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"retail"</span> <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"shopping"</span> <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"riverside"</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="h-48" style={{ backgroundColor: "#4A90E2" }}></div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">"Residential"</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">"Mountain Retreat"</h3>
              <p className="text-gray-600 mb-4">"A serene retreat nestled in the mountains for relaxation."</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"retreat"</span> <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"mountain"</span> <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">"getaway"</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
